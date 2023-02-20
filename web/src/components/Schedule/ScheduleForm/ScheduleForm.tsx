import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditScheduleById, UpdateScheduleInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormSchedule = NonNullable<EditScheduleById['schedule']>

interface ScheduleFormProps {
  schedule?: EditScheduleById['schedule']
  onSave: (data: UpdateScheduleInput, id?: FormSchedule['id']) => void
  error: RWGqlError
  loading: boolean
}

const ScheduleForm = (props: ScheduleFormProps) => {
  const onSubmit = (data: FormSchedule) => {
  
    
    
  
    props.onSave(data, props?.schedule?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormSchedule> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.schedule?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ScheduleForm
