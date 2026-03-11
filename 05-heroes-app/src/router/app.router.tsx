import { HeroPage } from '@/heroes/pages/hero/HeroPage';
import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from '../heroes/pages/home/HomePage';
// import { SearchPage } from '@/heroes/pages/search/SearchPage';
import { AdminPage } from '@/admin/pages/AdminPage';
import { HerosLayout } from '@/heroes/layouts/HerosLayout';
import { AdminLayout } from '@/admin/layouts/AdminLayout';
import { lazy } from 'react';


// const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage').then(module => ({default: module.SearchPage})))
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

export const appRouter = createBrowserRouter([

    {
        path: '/',
        element: <HerosLayout />,
        children: [

            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'heroes/:idSlug',
                element: <HeroPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path: '*',
                element: <Navigate to='/'/>

            }
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />
            },
        ]
    },

])