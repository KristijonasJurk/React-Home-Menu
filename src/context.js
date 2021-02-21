import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isSidebarOpen, useIsSidebarOpen] = useState(true)
    const [isModalOpen, useIsModalOpen] = useState(true)

    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}