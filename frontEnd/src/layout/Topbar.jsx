import React from 'react'
import { NavLink } from 'react-router-dom'
const links = [
    { to: "/", label: "Dashboard" },
    { to: "/projects", label: "Projects" },
    { to: "/tasks", label: "Tasks" },
];


const Topbar = () => {
    return (
        <header className='h-15 flex flex-row bg-[#eea444] justify-between items-center px-4 font-sans mt-5 font-medium text-2xl text-gray-600'>
            <h3>WorkNest</h3>
            <nav className='text-base flex gap-0.5'>
                {links.map(({ to, label }) => (
                    <NavLink key={to} to={to} className='hover:bg-[#F18902] rounded-xs p-4 active:underline'>{label}</NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Topbar