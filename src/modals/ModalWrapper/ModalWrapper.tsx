import { ReactNode } from "react";

import { ModalPortal } from "../../components/buttons";
import { close_icon } from "../../utility/imageExporter";

interface ModalWrapperProps {
    header: string;
    title?: string;
    isOpen: boolean;
    children: ReactNode;

    onClose: () => void;
}

const ModalWrapper = (props: ModalWrapperProps) => {
    const { header, title, isOpen, children, onClose } = props;

    return (
        <ModalPortal>
            {isOpen &&
                <div className="modal_overlay">
                    <div className="modal_container">
                        <div onClick={onClose} className="close">
                            <img src={close_icon} alt="" />
                        </div>
                        <div className="modal_header">
                            <h1 className="modal_text">{header}</h1>
                            {title &&
                                <h2 className="modal_text">{title}</h2>
                            }
                        </div>

                        <div className="modal_container--wrapper">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </ModalPortal>
    );
}

export default ModalWrapper;