import EmojiPicker, {
    EmojiClickData,
    Theme
} from "emoji-picker-react";

interface Props {
    onClick: (emojiData: EmojiClickData) => void;
}
const EmojiInput = (props: Props) => {
    const { onClick } = props;

    return (
        <EmojiPicker
            theme={Theme.DARK}
            // onEmojiClick={onClick}
            onEmojiClick={(emojiData) => onClick(emojiData)}
            autoFocusSearch
        />
    );
}

export default EmojiInput;
