import React from 'react'
import styles from './FormsControle.module.css'

const FormControl = ({ input, meta, child, ...props }: any) => {
    const showError = meta.touched && meta.error
    return (
        <div
            className={`${styles.formControl} ${showError ? styles.error : ''}`}
        >
            <div>{props.children}</div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

/*export const Textarea = ({ input, meta, ...props }: any) => {
    const showError = meta.touched && meta.error
    return (
        <div
            className={`${styles.formControl} ${showError ? styles.error : ''}`}
        >
            <div>
                <textarea {...input} {...props} />
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}*/

export const Textarea = (props: any) => {
    const { input, meta, child, ...restProps }: any = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props: any) => {
    const { input, meta, child, ...restProps }: any = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

/*export const Input = ({ input, meta, ...props }: any) => {
    const showError = meta.touched && meta.error
    return (
        <div
            className={`${styles.formControl} ${showError ? styles.error : ''}`}
        >
            <div>
                <input {...input} {...props} />
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}*/
