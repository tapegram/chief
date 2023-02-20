
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {  } from 'src/lib/formatters'

import type { DeleteResidentMutationVariables, FindResidentById } from 'types/graphql'

const DELETE_RESIDENT_MUTATION = gql`
  mutation DeleteResidentMutation($id: Int!) {
    deleteResident(id: $id) {
      id
    }
  }
`

interface Props {
  resident: NonNullable<FindResidentById['resident']>
}

const Resident = ({ resident }: Props) => {
  const [deleteResident] = useMutation(DELETE_RESIDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Resident deleted')
      navigate(routes.residents())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteResidentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete resident ' + id + '?')) {
      deleteResident({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Resident {resident.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{resident.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{resident.name}</td>
            </tr><tr>
              <th>Email</th>
              <td>{resident.email}</td>
            </tr><tr>
              <th>Year</th>
              <td>{resident.year}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editResident({ id: resident.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(resident.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Resident
