import type {
  QueryResolvers,
  MutationResolvers,
  TrackAssignmentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const trackAssignments: QueryResolvers['trackAssignments'] = () => {
  return db.trackAssignment.findMany()
}

export const trackAssignment: QueryResolvers['trackAssignment'] = ({ id }) => {
  return db.trackAssignment.findUnique({
    where: { id },
  })
}

export const createTrackAssignment: MutationResolvers['createTrackAssignment'] =
  ({ input }) => {
    return db.trackAssignment.create({
      data: input,
    })
  }

export const updateTrackAssignment: MutationResolvers['updateTrackAssignment'] =
  ({ id, input }) => {
    return db.trackAssignment.update({
      data: input,
      where: { id },
    })
  }

export const deleteTrackAssignment: MutationResolvers['deleteTrackAssignment'] =
  ({ id }) => {
    return db.trackAssignment.delete({
      where: { id },
    })
  }

export const TrackAssignment: TrackAssignmentRelationResolvers = {
  schedule: (_obj, { root }) => {
    return db.trackAssignment.findUnique({ where: { id: root?.id } }).schedule()
  },
  resident: (_obj, { root }) => {
    return db.trackAssignment.findUnique({ where: { id: root?.id } }).resident()
  },
  track: (_obj, { root }) => {
    return db.trackAssignment.findUnique({ where: { id: root?.id } }).track()
  },
}
