import { getHero } from '../actions/get-hero.action'
import { useQuery } from '@tanstack/react-query'

export const useHeroData = (idSlug: string) => {

    return useQuery({
        queryKey: ['heros', idSlug],
        queryFn: () => getHero(idSlug),
        retry: false,
        staleTime: 1000 * 60 * 5 //5 min
    })

}
