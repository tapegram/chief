import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

import type { EditTrackAssignmentById, UpdateTrackAssignmentInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'



const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


type FormTrackAssignment = NonNullable<EditTrackAssignmentById['trackAssignment']>

interface TrackAssignmentFormProps {
  trackAssignment?: EditTrackAssignmentById['trackAssignment']
  onSave: (data: UpdateTrackAssignmentInput, id?: FormTrackAssignment['id']) => void
  error: RWGqlError
  loading: boolean
}

const TrackAssignmentForm = (props: TrackAssignmentFormProps) => {
  const onSubmit = (data: FormTrackAssignment) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.trackAssignment?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTrackAssignment> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="scheduleId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Schedule id
        </Label>
        
          <NumberField
            name="scheduleId"
            defaultValue={props.trackAssignment?.scheduleId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="scheduleId" className="rw-field-error" />

        <Label
          name="residentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Resident id
        </Label>
        
          <NumberField
            name="residentId"
            defaultValue={props.trackAssignment?.residentId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="residentId" className="rw-field-error" />

        <Label
          name="trackId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Track id
        </Label>
        
          <NumberField
            name="trackId"
            defaultValue={props.trackAssignment?.trackId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="trackId" className="rw-field-error" />

        <Label
          name="deletedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted at
        </Label>
        
          <DatetimeLocalField
            name="deletedAt"
            defaultValue={formatDatetime(props.trackAssignment?.deletedAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="deletedAt" className="rw-field-error" />

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

export default TrackAssignmentForm
