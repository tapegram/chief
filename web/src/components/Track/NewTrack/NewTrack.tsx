import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TrackForm from 'src/components/Track/TrackForm'

import type { CreateTrackInput } from 'types/graphql'

const CREATE_TRACK_MUTATION = gql`
  mutation CreateTrackMutation($input: CreateTrackInput!) {
    createTrack(input: $input) {
      id
    }
  }
`

const NewTrack = () => {
  const [createTrack, { loading, error }] = useMutation(
    CREATE_TRACK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Track created')
        navigate(routes.tracks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTrackInput) => {
    createTrack({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Track</h2>
      </header>
      <div className="rw-segment-main">
        <TrackForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTrack
