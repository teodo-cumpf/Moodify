import { PropsWithChildren } from "react";
import { PlaylistContextProvider } from "./PlaylistContext";

const GlobalContextProvider = (props: PropsWithChildren) => {
    return (
        <PlaylistContextProvider>
            {props.children}
        </PlaylistContextProvider>
    );
}

export default GlobalContextProvider;
