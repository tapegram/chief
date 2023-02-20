import type {
  QueryResolvers,
  MutationResolvers,
  TrackRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tracks: QueryResolvers['tracks'] = () => {
  return db.track.findMany()
}

export const track: QueryResolvers['track'] = ({ id }) => {
  return db.track.findUnique({
    where: { id },
  })
}

export const createTrack: MutationResolvers['createTrack'] = ({ input }) => {
  return db.track.create({
    data: input,
  })
}

export const updateTrack: MutationResolvers['updateTrack'] = ({
  id,
  input,
}) => {
  return db.track.update({
    data: input,
    where: { id },
  })
}

export const deleteTrack: MutationResolvers['deleteTrack'] = ({ id }) => {
  return db.track.delete({
    where: { id },
  })
}

export const Track: TrackRelationResolvers = {
  TrackRotation: (_obj, { root }) => {
    return db.track.findUnique({ where: { id: root?.id } }).TrackRotation()
  },
  TrackAssignment: (_obj, { root }) => {
    return db.track.findUnique({ where: { id: root?.id } }).TrackAssignment()
  },
}
