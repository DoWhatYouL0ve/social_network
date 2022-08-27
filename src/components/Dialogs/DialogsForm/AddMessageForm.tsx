import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import {
    maxLengthCreator,
    required,
} from '../../../utils/validators/validators'

export type DialogsMessageFormDataType = {
    newMessageText: string
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<
    InjectedFormProps<DialogsMessageFormDataType>
> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newMessageText'}
                    placeholder={'Enter your message'}
                    cols={30}
                    rows={5}
                    validate={[required, maxLength100]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormReduxForm = reduxForm<DialogsMessageFormDataType>({
    form: 'dialogAddMessageForm',
})(AddMessageForm)
