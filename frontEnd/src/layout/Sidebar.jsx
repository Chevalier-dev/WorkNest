import React from 'react'
import { Outlet } from 'react-router-dom'




const Sidebar = () => {

    const projList = ['Overview', 'Tasks', 'Activity'];
    const viewList = ['My Tasks', 'Due Today', 'Completed'];
    function generateLists(taskLists) {

        const tasks = taskLists.map((task) => { <li className='p-3 border-none border-b-2 rounded-br-xl hover:bg-gray-300'>{task}</li> })
        return <ol>{tasks}</ol>;
    }

    return (<>
        <div className='flex flex-row'>
            <div className='h-dvh w-50 bg-gray-400 pt-2'>
                <section className='flex flex-col h-dvh font-sans'>
                    <div className='h-1/3 ml-2.5'>
                        <h1 className='text-2xl border-b-2 border-r-2 rounded-br-xl border-gray-500 shadow-xl/30'
                            onClick={() => generateLists(projList)}>Project</h1>
                        <ol className='text-xl ml-5 mt-3 flex flex-col'>
                            {/* <li className='p-3 border-none border-b-2 rounded-br-xl hover:bg-gray-300'>Overview</li>
                            <li className='p-3 border-none border-b-2 rounded-br-xl hover:bg-gray-300'>Tasks</li>
                            <li className='p-3 border-none border-b-2 rounded-br-xl hover:bg-gray-300'>Activity</li> */}
                            {generateLists(projList)}
                        </ol>
                    </div>
                    <div className='h-1/3 ml-2.5'>
                        <h1 className='text-xl border-b-2 border-r-2 rounded-br-xl border-gray-500 shadow-xl/30'>Views</h1>
                        <ol className='text-xl ml-5 mt-3 flex flex-col'>
                            <li className='p-3 border-none border-b-2 rounded-br-xl hover:bg-gray-300'>My Tasks</li>
                            <li className='p-3 border-none border-b-2 rounded-br-xl hover:bg-gray-300'>Due Today</li>
                            <li className='p-3 border-none border-b-2 rounded-br-xl hover:bg-gray-300'>Completed</li>
                        </ol>
                    </div>
                </section>
            </div>
            <div><Outlet /></div>
        </div></>
    )
}

export default Sidebar