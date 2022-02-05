import { useEffect, useMemo, useState } from "react";


const slowFunction = (number) => {
    for(let i = 0; i < 1000000000; i++) {}

    return number * 2
}

const UseMemo = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number])

    const themeStyle = useMemo(() => {
        return {
            color: dark ? "white" : "black",
            backgroundColor: dark ? "black" : "white"
        }
    }, [dark])

    // useEffect(() => {
    //     console.log("Number changed")
    // }, [number])

    useEffect(() => {
        console.log("Theme changed")
    }, [themeStyle])

    return(
        <div className="usememo" style={themeStyle}>
            <div>
                <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
                <button type="button" onClick={() => setDark((prev) => !prev)}>Change Theme</button>
                <span>{doubleNumber}</span>
            </div>

        </div>
    )
}

export default UseMemo;