import { Link } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"

interface Breadcrumb {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumb[];
}


export const CustomBreadCrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {


    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to={'/'}>Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {
                        breadcrumbs.map(breadcrumb => (
                            <>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </>

                        ))
                    }
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-black">{currentPage}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </>
    )
}
