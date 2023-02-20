export const schema = gql`
  type Resident {
    id: Int!
    name: String!
    email: String!
    year: String!
    trackAssignments: [TrackAssignment]!
  }

  type Query {
    residents: [Resident!]! @requireAuth
    resident(id: Int!): Resident @requireAuth
  }

  input CreateResidentInput {
    name: String!
    email: String!
    year: String!
  }

  input UpdateResidentInput {
    name: String
    email: String
    year: String
  }

  type Mutation {
    createResident(input: CreateResidentInput!): Resident! @requireAuth
    updateResident(id: Int!, input: UpdateResidentInput!): Resident!
      @requireAuth
    deleteResident(id: Int!): Resident! @requireAuth
  }
`
