import * as React from "react";
import SnackBarComponent from "../components/SnackBar";

export const ToastContext = React.createContext({});
export const ToastProvider = ({children}) => {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState();

    function showToastMessage(message) {
        setOpen(true);
        setMessage(message);
        setTimeout(() => {
            // هذا يعني اخر تنفيذ هذا الفنكشن لبعد ثانيتين يعني ما تنفذو الى بعد ثانيتين
            setOpen(false);
        }, 3000);
    }

    return (
        <ToastContext.Provider value={{ showToastMessage }}>
            <SnackBarComponent open={open} message={message}/>
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => React.useContext(ToastContext);
