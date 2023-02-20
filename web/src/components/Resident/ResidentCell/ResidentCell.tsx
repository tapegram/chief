import type { FindResidentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Resident from 'src/components/Resident/Resident'

export const QUERY = gql`
  query FindResidentById($id: Int!) {
    resident: resident(id: $id) {
      id
      name
      email
      year
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Resident not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ resident }: CellSuccessProps<FindResidentById>) => {
  return <Resident resident={resident} />
}
