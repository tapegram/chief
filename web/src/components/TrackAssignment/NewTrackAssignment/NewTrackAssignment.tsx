import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TrackAssignmentForm from 'src/components/TrackAssignment/TrackAssignmentForm'

import type { CreateTrackAssignmentInput } from 'types/graphql'

const CREATE_TRACK_ASSIGNMENT_MUTATION = gql`
  mutation CreateTrackAssignmentMutation($input: CreateTrackAssignmentInput!) {
    createTrackAssignment(input: $input) {
      id
    }
  }
`

const NewTrackAssignment = () => {
  const [createTrackAssignment, { loading, error }] = useMutation(
    CREATE_TRACK_ASSIGNMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('TrackAssignment created')
        navigate(routes.trackAssignments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTrackAssignmentInput) => {
    createTrackAssignment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TrackAssignment</h2>
      </header>
      <div className="rw-segment-main">
        <TrackAssignmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTrackAssignment
