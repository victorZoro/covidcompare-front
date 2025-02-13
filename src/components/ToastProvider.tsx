import { createContext, useContext, useRef } from "react";
import { Toast } from "primereact/toast";

interface ToastContextType {
    toast: React.RefObject<Toast | null>;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const toast = useRef<Toast | null>(null); // Ensure correct type

    return (
        <ToastContext.Provider value={{ toast }}>
            <Toast ref={toast} />
            {children}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context.toast;
}
