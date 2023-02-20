import TrackCell from 'src/components/Track/TrackCell'

type TrackPageProps = {
  id: number
}

const TrackPage = ({ id }: TrackPageProps) => {
  return <TrackCell id={id} />
}

export default TrackPage
