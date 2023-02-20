import ScheduleCell from 'src/components/Schedule/ScheduleCell'

type SchedulePageProps = {
  id: number
}

const SchedulePage = ({ id }: SchedulePageProps) => {
  return <ScheduleCell id={id} />
}

export default SchedulePage
