import EditTrackAssignmentCell from 'src/components/TrackAssignment/EditTrackAssignmentCell'

type TrackAssignmentPageProps = {
  id: number
}

const EditTrackAssignmentPage = ({ id }: TrackAssignmentPageProps) => {
  return <EditTrackAssignmentCell id={id} />
}

export default EditTrackAssignmentPage
