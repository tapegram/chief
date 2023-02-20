import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Resident/ResidentsCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteResidentMutationVariables, FindResidents } from 'types/graphql'

const DELETE_RESIDENT_MUTATION = gql`
  mutation DeleteResidentMutation($id: Int!) {
    deleteResident(id: $id) {
      id
    }
  }
`

const ResidentsList = ({ residents }: FindResidents) => {
  const [deleteResident] = useMutation(DELETE_RESIDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Resident deleted')
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

  const onDeleteClick = (id: DeleteResidentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete resident ' + id + '?')) {
      deleteResident({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Year</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident) => (
            <tr key={resident.id}>
              <td>{truncate(resident.id)}</td>
              <td>{truncate(resident.name)}</td>
              <td>{truncate(resident.email)}</td>
              <td>{truncate(resident.year)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.resident({ id: resident.id })}
                    title={'Show resident ' + resident.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editResident({ id: resident.id })}
                    title={'Edit resident ' + resident.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete resident ' + resident.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(resident.id)}
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

export default ResidentsList
