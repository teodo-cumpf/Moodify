import { ColorPicker, IColor } from "react-color-palette";
import "react-color-palette/css";

interface Props {
  color: IColor;
  onChange: (color: IColor) => void
}

const ColorInput = (props: Props) => {
  const { color, onChange } = props;

  return (
    <ColorPicker color={color} onChange={onChange} />
  );
}

export default ColorInput;
