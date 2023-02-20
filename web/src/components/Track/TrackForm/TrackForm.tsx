import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditTrackById, UpdateTrackInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormTrack = NonNullable<EditTrackById['track']>

interface TrackFormProps {
  track?: EditTrackById['track']
  onSave: (data: UpdateTrackInput, id?: FormTrack['id']) => void
  error: RWGqlError
  loading: boolean
}

const TrackForm = (props: TrackFormProps) => {
  const onSubmit = (data: FormTrack) => {
  
    
    
  
    props.onSave(data, props?.track?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTrack> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.track?.name}
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

export default TrackForm
