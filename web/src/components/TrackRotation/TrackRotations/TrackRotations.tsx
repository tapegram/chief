import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/TrackRotation/TrackRotationsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteTrackRotationMutationVariables, FindTrackRotations } from 'types/graphql'

const DELETE_TRACK_ROTATION_MUTATION = gql`
  mutation DeleteTrackRotationMutation($id: Int!) {
    deleteTrackRotation(id: $id) {
      id
    }
  }
`

const TrackRotationsList = ({ trackRotations }: FindTrackRotations) => {
  const [deleteTrackRotation] = useMutation(DELETE_TRACK_ROTATION_MUTATION, {
    onCompleted: () => {
      toast.success('TrackRotation deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteTrackRotationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete trackRotation ' + id + '?')) {
      deleteTrackRotation({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Block</th>
            <th>Track id</th>
            <th>Rotation id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {trackRotations.map((trackRotation) => (
            <tr key={trackRotation.id}>
              <td>{truncate(trackRotation.id)}</td>
              <td>{truncate(trackRotation.name)}</td>
              <td>{truncate(trackRotation.block)}</td>
              <td>{truncate(trackRotation.trackId)}</td>
              <td>{truncate(trackRotation.rotationId)}</td>
              <td>{timeTag(trackRotation.createdAt)}</td>
              <td>{timeTag(trackRotation.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.trackRotation({ id: trackRotation.id })}
                    title={'Show trackRotation ' + trackRotation.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTrackRotation({ id: trackRotation.id })}
                    title={'Edit trackRotation ' + trackRotation.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete trackRotation ' + trackRotation.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(trackRotation.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TrackRotationsList
