import EditRotationCell from 'src/components/Rotation/EditRotationCell'

type RotationPageProps = {
  id: number
}

const EditRotationPage = ({ id }: RotationPageProps) => {
  return <EditRotationCell id={id} />
}

export default EditRotationPage
