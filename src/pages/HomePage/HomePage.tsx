import { useState, useContext } from "react";

import { PlaylistContext } from "../../context/PlaylistContext";
import { MoodButton } from "../../components/buttons";
import SongPreview from "./components/SongPreview";
import EditMoodModal from "./components/EditMoodModal";
import { edit, moodify_logo } from "../../utility/imageExporter";

const HomePage = () => {
    const { categories, playlists, onSelectCategory } = useContext(PlaylistContext);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <>
            <EditMoodModal
                onClose={() => setIsModalOpen(!isModalOpen)}
                isOpen={isModalOpen}
            />
            <img alt="" src={moodify_logo} />
            <span className="home_header">Pick your vibe, skip the playlist hassle with Moodify!</span>

            <div className="featured_moods">

                <h1>Featured moods</h1>
                <div className="featured_moods-subtitle">
                    <h2>Spice up that mood and make it unmistakably you!</h2>
                    {!!playlists.length &&
                        <img
                            onClick={() => setIsModalOpen(true)}
                            alt=""
                            src={edit}
                            className="edit_icon"
                        />
                    }
                </div>

                <div className="featured_moods-container">
                    {categories.map((category, index) => (
                        <MoodButton
                            key={index}
                            value={category.name}
                            onSelect={() => onSelectCategory(category.name)}
                            isSelected={category.isSelected}
                            color={category.color}
                            icon={category.icon}
                        />
                    ))}
                </div>

                <div className="song_list">
                    {!!playlists.length &&
                        <>
                            <h1 className="song_list-title">Moodify's Selection for Your Vibe:</h1>
                            {playlists.map((playlist, index) => (
                                <SongPreview
                                    key={index}
                                    song={`${playlist.title} by ${playlist.author}`}
                                    // textColor={selectedCategory.color}
                                />

                            ))}
                        </>
                    }
                </div>
            </div>

        </>
    );
}

export default HomePage;
