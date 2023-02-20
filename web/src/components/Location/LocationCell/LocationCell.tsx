import type { FindLocationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Location from 'src/components/Location/Location'

export const QUERY = gql`
  query FindLocationById($id: Int!) {
    location: location(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Location not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ location }: CellSuccessProps<FindLocationById>) => {
  return <Location location={location} />
}
