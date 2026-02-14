import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

    const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();


    return (
        <>
            <CustomHeader title="Bucador de Gifs" description="Descubre y comparte el gif perfecto" />

            <SearchBar
                placeholder="Buscar gifs"
                onQuery={(query: string) => handleSearch(query)}
            />

            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            //onLabelClicked={(term: string) => handleTermClicked(term)}
            />

            <GifList gifs={gifs} />
        </>
    )
}
