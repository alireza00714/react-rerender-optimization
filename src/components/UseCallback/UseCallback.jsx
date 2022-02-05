import { useCallback, useState } from "react";
import List from "./List";

const UseCallback = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        //some api that get some result and then returns the result!
        return [number, number + 1, number + 2]
    }, [number]);

    const theme = {
        color: dark ? "white" : "black",
        backgroundColor: dark ? "black" : "white"
    }

    return(
        <div className="usecallback" style={theme}>
            <input type="number" value={number} onChange={(e)=> setNumber(+e.target.value)}/>
            <button type="button" onClick={() => setDark((prev) => !prev)}>Change Theme</button>
            <List getItems={getItems}/>
        </div>
    )
}

export default UseCallback;