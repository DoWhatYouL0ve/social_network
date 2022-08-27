import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import {
    maxLengthCreator,
    required,
} from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls'

export type AddMyPostsFormPropsType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddMyPostsForm: React.FC<InjectedFormProps<AddMyPostsFormPropsType>> = (
    props
) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    placeholder={'Enter your message'}
                    cols={40}
                    rows={5}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddMyPostsFormReduxForm = reduxForm<AddMyPostsFormPropsType>({
    form: 'addMyPostForm',
})(AddMyPostsForm)
