export const schema = gql`
  type TrackRotation {
    id: Int!
    name: String!
    block: Int!
    trackId: Int!
    track: Track!
    rotationId: Int!
    rotation: Rotation!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    trackRotations: [TrackRotation!]! @requireAuth
    trackRotation(id: Int!): TrackRotation @requireAuth
  }

  input CreateTrackRotationInput {
    name: String!
    block: Int!
    trackId: Int!
    rotationId: Int!
  }

  input UpdateTrackRotationInput {
    name: String
    block: Int
    trackId: Int
    rotationId: Int
  }

  type Mutation {
    createTrackRotation(input: CreateTrackRotationInput!): TrackRotation!
      @requireAuth
    updateTrackRotation(
      id: Int!
      input: UpdateTrackRotationInput!
    ): TrackRotation! @requireAuth
    deleteTrackRotation(id: Int!): TrackRotation! @requireAuth
  }
`
