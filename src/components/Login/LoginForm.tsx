import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    name={'email'}
                    placeholder={'Email'}
                    component={Input}
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Field
                    type="password"
                    placeholder={'Password'}
                    component={Input}
                    name={'password'}
                    validate={[required, maxLength30]}
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
