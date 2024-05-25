import { AlertColor } from "@mui/material";
import React from "react";
import { Notification } from "../components";

type ContextProps = {
    getSuccess: (msg: string) => void;
}

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{children: JSX.Element}> = ({
    children,
}) => {

    const [msg, setMsg] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);

    const handleClose = () => {
        setOpen(false);
    }


    const getSuccess = (msg: string) => {
        setSeverity("success");
        setOpen(true);
        setMsg(msg);
    }

    const value = {
        getSuccess,
    }

    return (
        <NotificationContext.Provider value={value}>
            <Notification handleClose={handleClose} open={open} severity={severity} msg={msg}/>
            {children}
        </NotificationContext.Provider>
    );

}

export const useNotification = () =>{
    const context = React.useContext(NotificationContext)
    if (!context) throw new Error("No existe contexto");
    return context;
}