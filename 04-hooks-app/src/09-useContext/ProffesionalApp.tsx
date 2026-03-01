import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"
import { UserContexProvider } from "./context/UserContext"

export const ProffesionalApp = () => {

    return (
        <UserContexProvider>

            <div className='bg-gradient flex flex-col gap-4'>
                <RouterProvider router={appRouter} />

            </div>

        </UserContexProvider>
    )
}
