import EditTrackCell from 'src/components/Track/EditTrackCell'

type TrackPageProps = {
  id: number
}

const EditTrackPage = ({ id }: TrackPageProps) => {
  return <EditTrackCell id={id} />
}

export default EditTrackPage
