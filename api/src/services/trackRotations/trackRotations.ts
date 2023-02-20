import type {
  QueryResolvers,
  MutationResolvers,
  TrackRotationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const trackRotations: QueryResolvers['trackRotations'] = () => {
  return db.trackRotation.findMany()
}

export const trackRotation: QueryResolvers['trackRotation'] = ({ id }) => {
  return db.trackRotation.findUnique({
    where: { id },
  })
}

export const createTrackRotation: MutationResolvers['createTrackRotation'] = ({
  input,
}) => {
  return db.trackRotation.create({
    data: input,
  })
}

export const updateTrackRotation: MutationResolvers['updateTrackRotation'] = ({
  id,
  input,
}) => {
  return db.trackRotation.update({
    data: input,
    where: { id },
  })
}

export const deleteTrackRotation: MutationResolvers['deleteTrackRotation'] = ({
  id,
}) => {
  return db.trackRotation.delete({
    where: { id },
  })
}

export const TrackRotation: TrackRotationRelationResolvers = {
  track: (_obj, { root }) => {
    return db.trackRotation.findUnique({ where: { id: root?.id } }).track()
  },
  rotation: (_obj, { root }) => {
    return db.trackRotation.findUnique({ where: { id: root?.id } }).rotation()
  },
}
