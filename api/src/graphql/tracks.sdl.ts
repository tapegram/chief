export const schema = gql`
  type Track {
    id: Int!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    TrackRotation: [TrackRotation]!
    TrackAssignment: [TrackAssignment]!
  }

  type Query {
    tracks: [Track!]! @requireAuth
    track(id: Int!): Track @requireAuth
  }

  input CreateTrackInput {
    name: String!
  }

  input UpdateTrackInput {
    name: String
  }

  type Mutation {
    createTrack(input: CreateTrackInput!): Track! @requireAuth
    updateTrack(id: Int!, input: UpdateTrackInput!): Track! @requireAuth
    deleteTrack(id: Int!): Track! @requireAuth
  }
`
