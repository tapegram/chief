import RotationCell from 'src/components/Rotation/RotationCell'

type RotationPageProps = {
  id: number
}

const RotationPage = ({ id }: RotationPageProps) => {
  return <RotationCell id={id} />
}

export default RotationPage
