import React from 'react'
import { Store } from 'redux'

export const StoreContext = React.createContext({} as Store)
type ProviderPropsType = {
    store: Store
    children: React.ReactNode
}
export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
