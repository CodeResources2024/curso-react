import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadCrumbs } from '@/components/custom/CustomBreadCrumbs';

export const SearchPage = () => {
    return (
        <>
            <CustomJumbotron title="Búsqueda de Super Heroes" description="Descubre, explora y administra tus superheroes y villanos." />
            <CustomBreadCrumbs currentPage='Search'
            // breadcrumbs={
            //     [
            //         { label: 'Home1', to: '/' },
            //         { label: 'Home2', to: '/' },
            //         { label: 'Home3', to: '/' },
            //         { label: 'Home4', to: '/' },
            //     ]
            // }
            />
            <HeroStats />
            {/* Controls */}
            <SearchControls />
        </>
    )
}

export default SearchPage;