import EditResidentCell from 'src/components/Resident/EditResidentCell'

type ResidentPageProps = {
  id: number
}

const EditResidentPage = ({ id }: ResidentPageProps) => {
  return <EditResidentCell id={id} />
}

export default EditResidentPage
