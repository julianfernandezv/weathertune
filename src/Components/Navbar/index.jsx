import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Weathertune App
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    jfernandez@beerealit.com
                </li>
            </ul>
        </nav>
    )
}

export default Navbar