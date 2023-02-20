import ResidentCell from 'src/components/Resident/ResidentCell'

type ResidentPageProps = {
  id: number
}

const ResidentPage = ({ id }: ResidentPageProps) => {
  return <ResidentCell id={id} />
}

export default ResidentPage
