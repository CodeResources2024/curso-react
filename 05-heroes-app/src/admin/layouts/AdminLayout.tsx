import { Outlet } from 'react-router'

export const AdminLayout = () => {
    return (
        <div className='bg-green-800'>
            <Outlet />
        </div>
    )
}
