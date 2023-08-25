import { EmojiClickData } from "emoji-picker-react";
import { IColor, useColor } from "react-color-palette";
import { useContext, useEffect, useState } from "react";

import { PlaylistContext } from "../../../context/PlaylistContext";

import { ModalWrapper } from "../../../modals"
import { MoodButton } from "../../../components/buttons";
import { ColorInput, EmojiInput } from "../../../components/inputs";

import { Category } from "../../../types/SelectedCategory";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const EditMoodModal = (props: Props) => {
    const { isOpen, onClose } = props;

    const { getSelectedCategories, onUpdateCategory } = useContext(PlaylistContext);

    const [categoryToEdit, setCategoryToEdit] = useState<Category | undefined>();

    const [color, setColor] = useColor("#979797");

    const handleColorChange = (color: IColor) => {
        setColor(color);
        setCategoryToEdit(prevState => {
            return {
                ...prevState!,
                color: color.hex
            }
        });
    }

    const handleEmojiChange = (emojiData: EmojiClickData) => {
        setCategoryToEdit(prevState => {
            return {
                ...prevState!,
                icon: emojiData.unified
            }
        });
    }

    const handleSelectCategory = (category: Category) => {
        setCategoryToEdit(category);
    }

    useEffect(() => {
        if(categoryToEdit?.color || categoryToEdit?.icon){
            onUpdateCategory(categoryToEdit)
        }
    }, [categoryToEdit, onUpdateCategory]);

    useEffect(() => {
        if(!isOpen) 
            setCategoryToEdit(undefined)
    }, [isOpen]);

    return (
        <ModalWrapper
            header="Select the mood you want to customize"
            title="List is based of previously selected moods"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="edit_modal">
                <div className="categories_wrapper">
                    {getSelectedCategories().map((selectedCategory, index) => (
                        <MoodButton
                            key={index}
                            value={selectedCategory.name}
                            onSelect={() => handleSelectCategory(selectedCategory)}
                            isSelected={selectedCategory.name === categoryToEdit?.name}
                            color={selectedCategory.color}
                            icon={selectedCategory.icon}
                        />
                    ))}
                </div>
                <div className="customized_mood">
                    {categoryToEdit &&
                        <>
                            <div className="palete_container">
                                <ColorInput color={color} onChange={handleColorChange} />
                            </div>
                            <div className="emoji_container">
                                <EmojiInput
                                    onClick={handleEmojiChange}
                                />
                            </div>
                        </>
                    }

                </div>

            </div>
        </ModalWrapper>
    )
}

export default EditMoodModal;
