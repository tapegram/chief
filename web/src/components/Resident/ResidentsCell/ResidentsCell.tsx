import type { FindResidents } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Residents from 'src/components/Resident/Residents'

export const QUERY = gql`
  query FindResidents {
    residents {
      id
      name
      email
      year
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No residents yet. '}
      <Link
        to={routes.newResident()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ residents }: CellSuccessProps<FindResidents>) => {
  return <Residents residents={residents} />
}
