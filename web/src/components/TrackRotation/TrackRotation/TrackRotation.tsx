
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteTrackRotationMutationVariables, FindTrackRotationById } from 'types/graphql'

const DELETE_TRACK_ROTATION_MUTATION = gql`
  mutation DeleteTrackRotationMutation($id: Int!) {
    deleteTrackRotation(id: $id) {
      id
    }
  }
`

interface Props {
  trackRotation: NonNullable<FindTrackRotationById['trackRotation']>
}

const TrackRotation = ({ trackRotation }: Props) => {
  const [deleteTrackRotation] = useMutation(DELETE_TRACK_ROTATION_MUTATION, {
    onCompleted: () => {
      toast.success('TrackRotation deleted')
      navigate(routes.trackRotations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTrackRotationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete trackRotation ' + id + '?')) {
      deleteTrackRotation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TrackRotation {trackRotation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{trackRotation.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{trackRotation.name}</td>
            </tr><tr>
              <th>Block</th>
              <td>{trackRotation.block}</td>
            </tr><tr>
              <th>Track id</th>
              <td>{trackRotation.trackId}</td>
            </tr><tr>
              <th>Rotation id</th>
              <td>{trackRotation.rotationId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(trackRotation.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(trackRotation.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTrackRotation({ id: trackRotation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(trackRotation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TrackRotation
