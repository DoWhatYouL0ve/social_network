import React, { ChangeEvent } from 'react'
import style from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ClassProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        temporaryStatus: this.props.status,
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            temporaryStatus: e.currentTarget.value,
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.temporaryStatus)
    }

    componentDidUpdate(
        prevProps: Readonly<ProfileStatusPropsType>,
        prevState: Readonly<{}>
    ) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                temporaryStatus: this.props.status,
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || 'no status'}
                        </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            type="text"
                            value={this.state.temporaryStatus}
                            onBlur={this.deactivateEditMode}
                            autoFocus={true}
                            onChange={this.onStatusChange}
                        />
                    </div>
                )}
            </div>
        )
    }
}
