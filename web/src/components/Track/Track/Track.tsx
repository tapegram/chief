
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteTrackMutationVariables, FindTrackById } from 'types/graphql'

const DELETE_TRACK_MUTATION = gql`
  mutation DeleteTrackMutation($id: Int!) {
    deleteTrack(id: $id) {
      id
    }
  }
`

interface Props {
  track: NonNullable<FindTrackById['track']>
}

const Track = ({ track }: Props) => {
  const [deleteTrack] = useMutation(DELETE_TRACK_MUTATION, {
    onCompleted: () => {
      toast.success('Track deleted')
      navigate(routes.tracks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTrackMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete track ' + id + '?')) {
      deleteTrack({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Track {track.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{track.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{track.name}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(track.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(track.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTrack({ id: track.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(track.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Track
