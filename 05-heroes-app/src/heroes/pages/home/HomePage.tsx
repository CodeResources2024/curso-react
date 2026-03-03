import {
  Heart,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagintation } from "@/components/custom/CustomPagintation"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"

export const HomePage = () => {

  const [activetab, setActivetab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Super Heroes" description="Descubre, explora y administra tus superheroes y villanos." />

        <CustomBreadCrumbs currentPage="Superheroes" />
        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activetab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => { setActivetab('all') }}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" onClick={() => { setActivetab('favorites') }} className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => { setActivetab('heroes') }}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => { setActivetab('villains') }}>Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h1>All Characters</h1>

            {/* Character Grid */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favorites</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villains</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>


        {/* Pagination */}
        <CustomPagintation
          totalPages={8}
        />
      </>
    </>
  )
}
