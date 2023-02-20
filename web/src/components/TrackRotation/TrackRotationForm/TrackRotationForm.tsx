import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditTrackRotationById, UpdateTrackRotationInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormTrackRotation = NonNullable<EditTrackRotationById['trackRotation']>

interface TrackRotationFormProps {
  trackRotation?: EditTrackRotationById['trackRotation']
  onSave: (data: UpdateTrackRotationInput, id?: FormTrackRotation['id']) => void
  error: RWGqlError
  loading: boolean
}

const TrackRotationForm = (props: TrackRotationFormProps) => {
  const onSubmit = (data: FormTrackRotation) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.trackRotation?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTrackRotation> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.trackRotation?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="block"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Block
        </Label>
        
          <NumberField
            name="block"
            defaultValue={props.trackRotation?.block}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="block" className="rw-field-error" />

        <Label
          name="trackId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Track id
        </Label>
        
          <NumberField
            name="trackId"
            defaultValue={props.trackRotation?.trackId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="trackId" className="rw-field-error" />

        <Label
          name="rotationId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rotation id
        </Label>
        
          <NumberField
            name="rotationId"
            defaultValue={props.trackRotation?.rotationId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="rotationId" className="rw-field-error" />

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

export default TrackRotationForm
