import { useMemo, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

interface ModalPortalProps {
    children: ReactNode;
}

const ModalPortal = (props: ModalPortalProps) => {
    const { children } = props;

    const modal: HTMLDivElement = useMemo(() => {
        return document.createElement("div")
    }, []);

    useEffect(() => {
        modalRoot.appendChild(modal);

        return () => {
            modalRoot.removeChild(modal)
        }
    }, [modal]);

    return ReactDOM.createPortal(children, modal)
}

export default ModalPortal;
