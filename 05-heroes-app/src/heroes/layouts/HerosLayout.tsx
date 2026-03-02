import { Link, Outlet } from "react-router"

export const HerosLayout = () => {
    return (
        <div className="bg-black text-white">

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/heroes/1">Heroes</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>

            <section className="mt-10">

                <Outlet />
            </section>
        </div>
    )
}
