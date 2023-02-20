export const schema = gql`
  type Rotation {
    id: Int!
    name: String!
    length: Int!
    locationId: Int!
    location: Location!
    createdAt: DateTime!
    updatedAt: DateTime!
    TrackRotation: [TrackRotation]!
  }

  type Query {
    rotations: [Rotation!]! @requireAuth
    rotation(id: Int!): Rotation @requireAuth
  }

  input CreateRotationInput {
    name: String!
    length: Int!
    locationId: Int!
  }

  input UpdateRotationInput {
    name: String
    length: Int
    locationId: Int
  }

  type Mutation {
    createRotation(input: CreateRotationInput!): Rotation! @requireAuth
    updateRotation(id: Int!, input: UpdateRotationInput!): Rotation!
      @requireAuth
    deleteRotation(id: Int!): Rotation! @requireAuth
  }
`
