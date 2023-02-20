
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteRotationMutationVariables, FindRotationById } from 'types/graphql'

const DELETE_ROTATION_MUTATION = gql`
  mutation DeleteRotationMutation($id: Int!) {
    deleteRotation(id: $id) {
      id
    }
  }
`

interface Props {
  rotation: NonNullable<FindRotationById['rotation']>
}

const Rotation = ({ rotation }: Props) => {
  const [deleteRotation] = useMutation(DELETE_ROTATION_MUTATION, {
    onCompleted: () => {
      toast.success('Rotation deleted')
      navigate(routes.rotations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteRotationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete rotation ' + id + '?')) {
      deleteRotation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Rotation {rotation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{rotation.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{rotation.name}</td>
            </tr><tr>
              <th>Length</th>
              <td>{rotation.length}</td>
            </tr><tr>
              <th>Location id</th>
              <td>{rotation.locationId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(rotation.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(rotation.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRotation({ id: rotation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(rotation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Rotation
