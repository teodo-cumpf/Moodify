import { Emoji } from "emoji-picker-react";

interface Props {
    selectedEmoji: string;
}
const EmojiIcon = (props: Props) => {
    const { selectedEmoji } = props;

    return (
        <Emoji
            unified={selectedEmoji}
            size={22}
        />
    );
}

export default EmojiIcon;
