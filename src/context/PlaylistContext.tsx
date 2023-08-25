import {
    useState,
    useEffect,
    createContext,
    PropsWithChildren,
    useCallback,
} from "react";

import jsonData from "../utility/data/SongsWithCathegories.json";

import { Category } from "../types/SelectedCategory";

interface PlaylistContextState {
    categories: Category[];
    playlists: { title: string, author: string }[];
    onSelectCategory: (categoryName: string) => void;
    onUpdateCategory: (category: Category) => void;
    getSelectedCategories: () => Category[];
}

const PlaylistContext = createContext<PlaylistContextState>({} as PlaylistContextState);

const PlaylistContextProvider = (props: PropsWithChildren) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [playlists, setPlaylists] = useState<{ title: string, author: string }[]>([]);

    const getPlayerData = useCallback(() => {
        const extractedCategories = Object.keys(jsonData).map(categoryName => {
            return {
                name: categoryName,
                isSelected: false
            }
        });

        setCategories(extractedCategories);
    },[]);

    const findPlaylistByCategory = (category: string) => {
        return jsonData[category as keyof typeof jsonData];
    }

    const getSelectedCategories = useCallback(() => {
        return categories.filter(category => category.isSelected === true);
    }, [categories]);

    const setPlaylistsForCategory = useCallback(() => {
        const selectedCategories = getSelectedCategories();

        const newPlaylist = selectedCategories.map(selectedCategory => {
            const playlist = findPlaylistByCategory(selectedCategory.name);

            return playlist;
        }).flat();

        console.log(newPlaylist)

        setPlaylists(newPlaylist);
    },[getSelectedCategories]);

    const onSelectCategory = useCallback((categoryName: string) => {
        setCategories(prevState => {
            const categoryIndex = prevState.findIndex(selectedCategory => 
                selectedCategory.name === categoryName
            );

            if(categoryIndex > -1){
                const arrayToUpdate = [...prevState];

                arrayToUpdate[categoryIndex] = {
                    ...prevState[categoryIndex],
                    isSelected: !arrayToUpdate[categoryIndex].isSelected
                }
                
                return arrayToUpdate; 
            }

            return prevState
        });
    }, []);

    const onUpdateCategory = useCallback((category: Category) => {
        setCategories(prevState => {
            const categoryIndex = prevState.findIndex(selectedCategory => 
                selectedCategory.name === category.name
            );

            if(categoryIndex > -1){
                const arrayToUpdate = [...prevState];
                arrayToUpdate[categoryIndex] = category;

                return arrayToUpdate; 
            }

            return prevState
        });
    }, []);

    useEffect(()=> {
        setPlaylistsForCategory();
    },[categories, setPlaylistsForCategory]);

    useEffect(() => {
        if(!categories.length)
            getPlayerData()
    }, [categories, getPlayerData]);

    const providerValue = {
        categories,
        playlists,
        onSelectCategory,
        onUpdateCategory,
        getSelectedCategories
    }

    return (
        <PlaylistContext.Provider value={providerValue}>
            {props.children}
        </PlaylistContext.Provider>
    );
}

export { PlaylistContext, PlaylistContextProvider };
