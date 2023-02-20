import TrackRotationCell from 'src/components/TrackRotation/TrackRotationCell'

type TrackRotationPageProps = {
  id: number
}

const TrackRotationPage = ({ id }: TrackRotationPageProps) => {
  return <TrackRotationCell id={id} />
}

export default TrackRotationPage
