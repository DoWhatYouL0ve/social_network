import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export type DialogsMessageFormDataType = {
    newMessageText: string
}

const AddMessageForm: React.FC<
    InjectedFormProps<DialogsMessageFormDataType>
> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newMessageText'}
                    placeholder={'Enter your message'}
                    cols={30}
                    rows={5}
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
