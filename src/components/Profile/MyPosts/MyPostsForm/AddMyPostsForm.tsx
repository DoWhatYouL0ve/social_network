import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export type AddMyPostsFormPropsType = {
    newPostText: string
}

const AddMyPostsForm: React.FC<InjectedFormProps<AddMyPostsFormPropsType>> = (
    props
) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newPostText'}
                    placeholder={'Enter your message'}
                    cols={40}
                    rows={5}
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
