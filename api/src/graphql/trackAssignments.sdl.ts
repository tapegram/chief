export const schema = gql`
  type TrackAssignment {
    id: Int!
    scheduleId: Int!
    schedule: Schedule!
    residentId: Int!
    resident: Resident!
    trackId: Int!
    track: Track!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    trackAssignments: [TrackAssignment!]! @requireAuth
    trackAssignment(id: Int!): TrackAssignment @requireAuth
  }

  input CreateTrackAssignmentInput {
    scheduleId: Int!
    residentId: Int!
    trackId: Int!
    deletedAt: DateTime
  }

  input UpdateTrackAssignmentInput {
    scheduleId: Int
    residentId: Int
    trackId: Int
    deletedAt: DateTime
  }

  type Mutation {
    createTrackAssignment(input: CreateTrackAssignmentInput!): TrackAssignment!
      @requireAuth
    updateTrackAssignment(
      id: Int!
      input: UpdateTrackAssignmentInput!
    ): TrackAssignment! @requireAuth
    deleteTrackAssignment(id: Int!): TrackAssignment! @requireAuth
  }
`
