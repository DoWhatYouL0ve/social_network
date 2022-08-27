import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength10 = maxLengthCreator(10)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    name={'login'}
                    placeholder={'Login'}
                    component={Input}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field
                    type="text"
                    placeholder={'Password'}
                    component={Input}
                    name={'password'}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field type="checkbox" component={Input} name={'rememberMe'} />{' '}
                - remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login',
})(LoginForm)
