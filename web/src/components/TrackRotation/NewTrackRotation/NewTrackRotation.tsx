import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TrackRotationForm from 'src/components/TrackRotation/TrackRotationForm'

import type { CreateTrackRotationInput } from 'types/graphql'

const CREATE_TRACK_ROTATION_MUTATION = gql`
  mutation CreateTrackRotationMutation($input: CreateTrackRotationInput!) {
    createTrackRotation(input: $input) {
      id
    }
  }
`

const NewTrackRotation = () => {
  const [createTrackRotation, { loading, error }] = useMutation(
    CREATE_TRACK_ROTATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('TrackRotation created')
        navigate(routes.trackRotations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTrackRotationInput) => {
    createTrackRotation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TrackRotation</h2>
      </header>
      <div className="rw-segment-main">
        <TrackRotationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTrackRotation
