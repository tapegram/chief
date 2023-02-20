import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditResidentById, UpdateResidentInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormResident = NonNullable<EditResidentById['resident']>

interface ResidentFormProps {
  resident?: EditResidentById['resident']
  onSave: (data: UpdateResidentInput, id?: FormResident['id']) => void
  error: RWGqlError
  loading: boolean
}

const ResidentForm = (props: ResidentFormProps) => {
  const onSubmit = (data: FormResident) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.resident?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormResident> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.resident?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        
          <TextField
            name="email"
            defaultValue={props.resident?.email}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="year"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Year
        </Label>
        
          <TextField
            name="year"
            defaultValue={props.resident?.year}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="year" className="rw-field-error" />

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

export default ResidentForm
