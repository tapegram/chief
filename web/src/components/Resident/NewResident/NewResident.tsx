import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResidentForm from 'src/components/Resident/ResidentForm'

import type { CreateResidentInput } from 'types/graphql'

const CREATE_RESIDENT_MUTATION = gql`
  mutation CreateResidentMutation($input: CreateResidentInput!) {
    createResident(input: $input) {
      id
    }
  }
`

const NewResident = () => {
  const [createResident, { loading, error }] = useMutation(
    CREATE_RESIDENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Resident created')
        navigate(routes.residents())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateResidentInput) => {
    createResident({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Resident</h2>
      </header>
      <div className="rw-segment-main">
        <ResidentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewResident
