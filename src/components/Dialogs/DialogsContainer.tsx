import React from 'react'
import { DialogsPageType, sendMessageAC } from '../../redux/dialogsPageReducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import { compose, Dispatch } from 'redux'
import { withAuthRedirect } from '../../Hoc/withAuthRedirect'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText: string) => {
            dispatch(sendMessageAC(newMessageText))
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
