import { useSearchParams } from "react-router"
import { use, useMemo } from "react"

import { Heart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagintation } from "@/components/custom/CustomPagintation"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePagintatedHero } from "@/heroes/hooks/usePagintatedHero"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"

export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all'
  }, [activeTab])


  // hook para query
  const { data: heroesResponse } = usePagintatedHero(+page, +limit, category);
  const { data: summary } = useHeroSummary();
   const {favoriteCount, favorites} = use(FavoriteHeroContext);

  console.log({ heroesResponse })

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Super Heroes" description="Descubre, explora y administra tus superheroes y villanos." />

        <CustomBreadCrumbs currentPage="Superheroes" />
        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => {
              setSearchParams((prev) => {
                prev.set('tab', 'all');
                prev.set('category', 'all');
                prev.set('page', '1');
                return prev;
              })
            }}>All Characters ({summary?.totalHeroes})</TabsTrigger>
            <TabsTrigger value="favorites" onClick={() => {
              setSearchParams((prev) => {
                prev.set('tab', 'favorites');
                return prev;
              })
            }} className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => {
              setSearchParams((prev) => {
                prev.set('tab', 'heroes');
                prev.set('category', 'hero');
                prev.set('page', '1');
                return prev;
              })
            }}>Heroes ({summary?.heroCount})</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => {
              setSearchParams((prev) => {
                prev.set('tab', 'villains');
                prev.set('category', 'villain');
                prev.set('page', '1');
                return prev;
              })
            }}>Villains ({summary?.villainCount})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h1>All Characters</h1>

            {/* Character Grid */}

            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            
            <HeroGrid heroes={favorites} />
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villains</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>


        {/* Pagination */}
        {
          selectedTab != 'favorites' && (

            <CustomPagintation
            totalPages={heroesResponse?.pages ?? 0}
            />
          )
        }
      </>
    </>
  )
}
