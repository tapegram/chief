import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Rotation/RotationsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteRotationMutationVariables, FindRotations } from 'types/graphql'

const DELETE_ROTATION_MUTATION = gql`
  mutation DeleteRotationMutation($id: Int!) {
    deleteRotation(id: $id) {
      id
    }
  }
`

const RotationsList = ({ rotations }: FindRotations) => {
  const [deleteRotation] = useMutation(DELETE_ROTATION_MUTATION, {
    onCompleted: () => {
      toast.success('Rotation deleted')
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

  const onDeleteClick = (id: DeleteRotationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete rotation ' + id + '?')) {
      deleteRotation({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Length</th>
            <th>Location id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rotations.map((rotation) => (
            <tr key={rotation.id}>
              <td>{truncate(rotation.id)}</td>
              <td>{truncate(rotation.name)}</td>
              <td>{truncate(rotation.length)}</td>
              <td>{truncate(rotation.locationId)}</td>
              <td>{timeTag(rotation.createdAt)}</td>
              <td>{timeTag(rotation.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.rotation({ id: rotation.id })}
                    title={'Show rotation ' + rotation.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRotation({ id: rotation.id })}
                    title={'Edit rotation ' + rotation.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete rotation ' + rotation.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(rotation.id)}
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

export default RotationsList
