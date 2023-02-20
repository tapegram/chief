import EditScheduleCell from 'src/components/Schedule/EditScheduleCell'

type SchedulePageProps = {
  id: number
}

const EditSchedulePage = ({ id }: SchedulePageProps) => {
  return <EditScheduleCell id={id} />
}

export default EditSchedulePage
