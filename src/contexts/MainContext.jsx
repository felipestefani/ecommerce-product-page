import { createContext, useState } from "react";

export const  MainContext = createContext({});

const MainProvider = ({children}) => {

    const [quantity, setQuantity] = useState(0)

    return (
        <MainContext.Provider
            value={{
                quantity, setQuantity
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider
