import type { EditResidentById, UpdateResidentInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResidentForm from 'src/components/Resident/ResidentForm'

export const QUERY = gql`
  query EditResidentById($id: Int!) {
    resident: resident(id: $id) {
      id
      name
      email
      year
    }
  }
`
const UPDATE_RESIDENT_MUTATION = gql`
  mutation UpdateResidentMutation($id: Int!, $input: UpdateResidentInput!) {
    updateResident(id: $id, input: $input) {
      id
      name
      email
      year
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ resident }: CellSuccessProps<EditResidentById>) => {
  const [updateResident, { loading, error }] = useMutation(
    UPDATE_RESIDENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Resident updated')
        navigate(routes.residents())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateResidentInput,
    id: EditResidentById['resident']['id']
  ) => {
    updateResident({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Resident {resident?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ResidentForm resident={resident} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
