export const schema = gql`
  type Schedule {
    id: Int!
    name: String!
    trackAssignments: [TrackAssignment]!
  }

  type Query {
    schedules: [Schedule!]! @requireAuth
    schedule(id: Int!): Schedule @requireAuth
  }

  input CreateScheduleInput {
    name: String!
  }

  input UpdateScheduleInput {
    name: String
  }

  type Mutation {
    createSchedule(input: CreateScheduleInput!): Schedule! @requireAuth
    updateSchedule(id: Int!, input: UpdateScheduleInput!): Schedule!
      @requireAuth
    deleteSchedule(id: Int!): Schedule! @requireAuth
  }
`
