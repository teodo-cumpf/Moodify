import { EmojiIcon } from "../../materials";

interface Props {
    isSelected?: boolean;
    icon?: string;
    onSelect: () => void;
    value: string;
    color?: string;
    selectedColorBorder?: string;
}

const defaultColor = "#979797";

const MoodButton = (props: Props) => {
    const {
        icon = null,
        value,
        color,
        onSelect,
        isSelected,
    } = props;

    const formatButtonStyle = () => {
        const baseClass = "mood_button";
        if (isSelected)
            return baseClass.concat(" mood_button-selected");
        return baseClass.concat(" mood_button");
    }

    const formatBorderStyle = () => {
        const baseBorder = "1px solid ";

        if (color)
            return baseBorder.concat(color);

        if (isSelected)
            return baseBorder.concat("#FFFFFF");

        return baseBorder.concat(defaultColor)
    }

    return (
        <div onClick={onSelect} className={formatButtonStyle()} style={{ border: formatBorderStyle() }}>
            <span className="mood_button-text" style={{ color: color ? color : defaultColor }}>{value}</span>
            {icon && <EmojiIcon selectedEmoji={icon} />}
        </div>
    );
}

export default MoodButton;
