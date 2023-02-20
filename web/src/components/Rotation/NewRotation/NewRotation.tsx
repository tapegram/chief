import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RotationForm from 'src/components/Rotation/RotationForm'

import type { CreateRotationInput } from 'types/graphql'

const CREATE_ROTATION_MUTATION = gql`
  mutation CreateRotationMutation($input: CreateRotationInput!) {
    createRotation(input: $input) {
      id
    }
  }
`

const NewRotation = () => {
  const [createRotation, { loading, error }] = useMutation(
    CREATE_ROTATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Rotation created')
        navigate(routes.rotations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateRotationInput) => {
    createRotation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Rotation</h2>
      </header>
      <div className="rw-segment-main">
        <RotationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRotation
