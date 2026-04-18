import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadCrumbs } from '@/components/custom/CustomBreadCrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useQuery } from '@tanstack/react-query';
import { searchHeroAction } from '@/heroes/actions/search-hero-action';
import { useSearchParams } from 'react-router';

export const SearchPage = () => {
    const [searchParams] = useSearchParams();

    const name = searchParams.get('name') ?? undefined;
    
    const { data: heroes = [] } = useQuery({
        queryKey: ['search', { name }],
        queryFn: () => searchHeroAction({ name }),
        staleTime: 1000 * 60 * 5 //5 min
        })
    
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

            <HeroGrid heroes={heroes} />
        </>
    )
}

export default SearchPage;