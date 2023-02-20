import TrackAssignmentCell from 'src/components/TrackAssignment/TrackAssignmentCell'

type TrackAssignmentPageProps = {
  id: number
}

const TrackAssignmentPage = ({ id }: TrackAssignmentPageProps) => {
  return <TrackAssignmentCell id={id} />
}

export default TrackAssignmentPage
