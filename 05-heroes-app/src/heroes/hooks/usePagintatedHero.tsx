import { useQuery } from '@tanstack/react-query';
import { getHeroesByPageAction } from '../actions/get-heros-by-page.action';

export const usePagintatedHero = (page: number, limit: number, category = 'all') => {
    return useQuery({
        queryKey: ['heroes', { page: page, limit: limit, category: category }],
        queryFn: () => getHeroesByPageAction(+page, +limit, category),
        staleTime: 1000 * 60 * 5, //5min
    });

}
