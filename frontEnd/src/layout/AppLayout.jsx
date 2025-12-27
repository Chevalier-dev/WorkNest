import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const AppLayout = () => {
    return (
        <>
            <div className='bg-gray-100'>
                <Topbar />
                <main><Sidebar /></main>
            </div>
        </>
    )
}

export default AppLayout