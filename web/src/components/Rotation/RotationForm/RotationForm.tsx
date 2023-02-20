import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditRotationById, UpdateRotationInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormRotation = NonNullable<EditRotationById['rotation']>

interface RotationFormProps {
  rotation?: EditRotationById['rotation']
  onSave: (data: UpdateRotationInput, id?: FormRotation['id']) => void
  error: RWGqlError
  loading: boolean
}

const RotationForm = (props: RotationFormProps) => {
  const onSubmit = (data: FormRotation) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.rotation?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormRotation> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.rotation?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="length"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Length
        </Label>
        
          <NumberField
            name="length"
            defaultValue={props.rotation?.length}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="length" className="rw-field-error" />

        <Label
          name="locationId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location id
        </Label>
        
          <NumberField
            name="locationId"
            defaultValue={props.rotation?.locationId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="locationId" className="rw-field-error" />

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

export default RotationForm
