import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import styles from './../common/FormsControls/FormsControle.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    capture: string
}

const maxLength30 = maxLengthCreator(30)

type AdditionalPropsType = {
    capture: string
}

type PropsType = AdditionalPropsType & InjectedFormProps<FormDataType>

const LoginForm: React.FC<PropsType> = ({ handleSubmit, error, capture }) => {
    return (
        <form action="" onSubmit={handleSubmit}>
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
            {capture && <img src={capture} alt="" />}
            {error && <div className={styles.formDataError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login',
    //@ts-ignore
})(LoginForm)
