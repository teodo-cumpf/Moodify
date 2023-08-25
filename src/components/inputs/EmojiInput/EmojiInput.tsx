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
            onEmojiClick={(emojiData) => onClick(emojiData)}
            autoFocusSearch
            width={"100%"}
        />
    );
}

export default EmojiInput;
