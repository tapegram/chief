
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteTrackAssignmentMutationVariables, FindTrackAssignmentById } from 'types/graphql'

const DELETE_TRACK_ASSIGNMENT_MUTATION = gql`
  mutation DeleteTrackAssignmentMutation($id: Int!) {
    deleteTrackAssignment(id: $id) {
      id
    }
  }
`

interface Props {
  trackAssignment: NonNullable<FindTrackAssignmentById['trackAssignment']>
}

const TrackAssignment = ({ trackAssignment }: Props) => {
  const [deleteTrackAssignment] = useMutation(DELETE_TRACK_ASSIGNMENT_MUTATION, {
    onCompleted: () => {
      toast.success('TrackAssignment deleted')
      navigate(routes.trackAssignments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTrackAssignmentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete trackAssignment ' + id + '?')) {
      deleteTrackAssignment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TrackAssignment {trackAssignment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{trackAssignment.id}</td>
            </tr><tr>
              <th>Schedule id</th>
              <td>{trackAssignment.scheduleId}</td>
            </tr><tr>
              <th>Resident id</th>
              <td>{trackAssignment.residentId}</td>
            </tr><tr>
              <th>Track id</th>
              <td>{trackAssignment.trackId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(trackAssignment.createdAt)}</td>
            </tr><tr>
              <th>Deleted at</th>
              <td>{timeTag(trackAssignment.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTrackAssignment({ id: trackAssignment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(trackAssignment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TrackAssignment
