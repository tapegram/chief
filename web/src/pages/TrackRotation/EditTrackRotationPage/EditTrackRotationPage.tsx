import EditTrackRotationCell from 'src/components/TrackRotation/EditTrackRotationCell'

type TrackRotationPageProps = {
  id: number
}

const EditTrackRotationPage = ({ id }: TrackRotationPageProps) => {
  return <EditTrackRotationCell id={id} />
}

export default EditTrackRotationPage
