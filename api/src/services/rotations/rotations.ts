import type {
  QueryResolvers,
  MutationResolvers,
  RotationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const rotations: QueryResolvers['rotations'] = () => {
  return db.rotation.findMany()
}

export const rotation: QueryResolvers['rotation'] = ({ id }) => {
  return db.rotation.findUnique({
    where: { id },
  })
}

export const createRotation: MutationResolvers['createRotation'] = ({
  input,
}) => {
  return db.rotation.create({
    data: input,
  })
}

export const updateRotation: MutationResolvers['updateRotation'] = ({
  id,
  input,
}) => {
  return db.rotation.update({
    data: input,
    where: { id },
  })
}

export const deleteRotation: MutationResolvers['deleteRotation'] = ({ id }) => {
  return db.rotation.delete({
    where: { id },
  })
}

export const Rotation: RotationRelationResolvers = {
  location: (_obj, { root }) => {
    return db.rotation.findUnique({ where: { id: root?.id } }).location()
  },
  TrackRotation: (_obj, { root }) => {
    return db.rotation.findUnique({ where: { id: root?.id } }).TrackRotation()
  },
}
