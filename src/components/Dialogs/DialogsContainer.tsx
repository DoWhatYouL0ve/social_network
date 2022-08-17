import React from 'react'
import {
    DialogsPageType,
    newMessageTextAC,
    sendMessageAC,
} from '../../redux/dialogsPageReducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import { compose, Dispatch } from 'redux'
import { withAuthRedirect } from '../../Hoc/withAuthRedirect'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    onMessageTextChanged: (text: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onMessageTextChanged: (text: string) => {
            dispatch(newMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

/*export const DialogsContainer = withAuthRedirect(
    connect(mapStateToProps, mapDispatchToProps)(Dialogs)
)*/
