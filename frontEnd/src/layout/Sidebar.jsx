import React from 'react'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {

    function generateHeadings(headings) {
        const header = <h1 className='text-xl border-b-2 border-r-2 rounded-br-xl border-gray-500 shadow-xl/30'>{headings}</h1>
        return header;
    }
    const projList = ['Overview', 'Tasks', 'Activity'];
    const viewList = ['My Tasks', 'Due Today', 'Completed'];
    function generateLists(taskLists) {
        let count = 0;
        const tasks = taskLists.map((task) => <li className='p-3 border-none border-b-2 rounded-br-xl hover:bg-gray-300' key={count++}>{task}</li>)
        return <ol className='text-xl ml-5 mt-3 flex flex-col'>{tasks}</ol>;
    }

    return (<>
        <div className='flex flex-row'>
            <div className='h-dvh w-50 bg-gray-400 pt-2'>
                <section className='flex flex-col h-dvh font-sans'>
                    <div className='h-1/3 ml-2.5'>
                        {generateHeadings('Project')}
                        {generateLists(projList)}
                    </div>
                    <div className='h-1/3 ml-2.5'>
                        {generateHeadings('Views')}
                        {generateLists(viewList)}
                    </div>
                </section>
            </div>
            <div><Outlet /></div>
        </div></>
    )
}

export default Sidebar