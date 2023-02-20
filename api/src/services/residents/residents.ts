import type {
  QueryResolvers,
  MutationResolvers,
  ResidentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const residents: QueryResolvers['residents'] = () => {
  return db.resident.findMany()
}

export const resident: QueryResolvers['resident'] = ({ id }) => {
  return db.resident.findUnique({
    where: { id },
  })
}

export const createResident: MutationResolvers['createResident'] = ({
  input,
}) => {
  return db.resident.create({
    data: input,
  })
}

export const updateResident: MutationResolvers['updateResident'] = ({
  id,
  input,
}) => {
  return db.resident.update({
    data: input,
    where: { id },
  })
}

export const deleteResident: MutationResolvers['deleteResident'] = ({ id }) => {
  return db.resident.delete({
    where: { id },
  })
}

export const Resident: ResidentRelationResolvers = {
  trackAssignments: (_obj, { root }) => {
    return db.resident
      .findUnique({ where: { id: root?.id } })
      .trackAssignments()
  },
}
