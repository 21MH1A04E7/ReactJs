import { createContext, useContext } from "react";
import { User } from "../hooks/UseContextHook";

// Define the context
export const DashboardContext=createContext<User|undefined>(undefined);

//custome hook
export function useDashboardContext(){
    const user=useContext(DashboardContext)
    if(user===undefined){
        throw new Error('user is undefine')
    }
    return user;
}