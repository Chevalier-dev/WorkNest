import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const AppLayout = () => {
    return (
        <>
            <Topbar />
            <main><Sidebar /></main>
        </>
    )
}

export default AppLayout