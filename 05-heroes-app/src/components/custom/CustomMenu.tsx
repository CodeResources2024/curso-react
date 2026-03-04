import { Link, useLocation } from 'react-router'
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu';


interface MenuItem {
    title: string,
    routeName: string,
}

export const CustomMenu = () => {

    const menuItems: MenuItem[] = [
        { title: 'Home', routeName: '/' },
        { title: 'Search', routeName: '/search' },
        { title: 'Heroes', routeName: '/heroes/1' },
    ]


    const { pathname } = useLocation();
    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList className='flex gap-2 items-center'>
                    {
                        menuItems.map((item) => (
                            <NavigationMenuItem key={item.routeName}>
                                <NavigationMenuLink asChild className={cn(isActive(item.routeName) && 'bg-slate-200', 'p-2 rounded-md')}>
                                    <Link to={item.routeName}>{item.title}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))
                    }
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}
