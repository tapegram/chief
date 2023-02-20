import EditLocationCell from 'src/components/Location/EditLocationCell'

type LocationPageProps = {
  id: number
}

const EditLocationPage = ({ id }: LocationPageProps) => {
  return <EditLocationCell id={id} />
}

export default EditLocationPage
