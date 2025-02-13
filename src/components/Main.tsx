import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";
import {MainProps} from "../types/MainProps.ts";

export function Main({ children, className }: MainProps) {
    return (
        <div className={className}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
