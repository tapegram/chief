import type {
  QueryResolvers,
  MutationResolvers,
  ScheduleRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const schedules: QueryResolvers['schedules'] = () => {
  return db.schedule.findMany()
}

export const schedule: QueryResolvers['schedule'] = ({ id }) => {
  return db.schedule.findUnique({
    where: { id },
  })
}

export const createSchedule: MutationResolvers['createSchedule'] = ({
  input,
}) => {
  return db.schedule.create({
    data: input,
  })
}

export const updateSchedule: MutationResolvers['updateSchedule'] = ({
  id,
  input,
}) => {
  return db.schedule.update({
    data: input,
    where: { id },
  })
}

export const deleteSchedule: MutationResolvers['deleteSchedule'] = ({ id }) => {
  return db.schedule.delete({
    where: { id },
  })
}

export const Schedule: ScheduleRelationResolvers = {
  trackAssignments: (_obj, { root }) => {
    return db.schedule
      .findUnique({ where: { id: root?.id } })
      .trackAssignments()
  },
}
