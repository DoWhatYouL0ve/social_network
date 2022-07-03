import React from 'react'
import {
    DialogsPageType,
    newMessageTextAC,
    sendMessageAC,
} from '../../redux/dialogsPageReducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import { Dispatch } from 'redux'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    onMessageTextChanged: (text: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
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

export const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs)
