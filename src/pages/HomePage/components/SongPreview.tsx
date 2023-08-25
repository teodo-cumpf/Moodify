import { note_icon } from "../../../utility/imageExporter";

interface SongPreviewProps {
    song: string;
    textColor?: string;
}

const SongPreview = (props: SongPreviewProps) => {
    const { song, textColor = "#FFFFFF" } = props;


    return (
        <div className="song_preview">
            <img alt="" src={note_icon}/>
            <span className="song_preview-text" style={{color: textColor}}>{song}</span>
        </div>
    );
}

export default SongPreview;