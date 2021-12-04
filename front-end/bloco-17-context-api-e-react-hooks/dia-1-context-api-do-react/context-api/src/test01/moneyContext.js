import React from 'react'

const MoneyContext = React.createContext()

export const MoneyProvider = MoneyContext.Provider
export const MoneyConsumer = MoneyContext.Consumer

export default MoneyContext;