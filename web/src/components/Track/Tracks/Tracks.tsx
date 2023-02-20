import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Track/TracksCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteTrackMutationVariables, FindTracks } from 'types/graphql'

const DELETE_TRACK_MUTATION = gql`
  mutation DeleteTrackMutation($id: Int!) {
    deleteTrack(id: $id) {
      id
    }
  }
`

const TracksList = ({ tracks }: FindTracks) => {
  const [deleteTrack] = useMutation(DELETE_TRACK_MUTATION, {
    onCompleted: () => {
      toast.success('Track deleted')
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

  const onDeleteClick = (id: DeleteTrackMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete track ' + id + '?')) {
      deleteTrack({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.id}>
              <td>{truncate(track.id)}</td>
              <td>{truncate(track.name)}</td>
              <td>{timeTag(track.createdAt)}</td>
              <td>{timeTag(track.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.track({ id: track.id })}
                    title={'Show track ' + track.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTrack({ id: track.id })}
                    title={'Edit track ' + track.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete track ' + track.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(track.id)}
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

export default TracksList
