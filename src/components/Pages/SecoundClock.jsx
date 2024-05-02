import { useEffect } from "react";

const SecoundClock = ({ date, color }) => {

    useEffect(() => {
        console.log('SecoundClock.....useEffect')
        return () => {
            console.log('SecoundClock..... Unmount useEffect')
        }
    }, [])

    useEffect(() => {
        console.log('SecoundClock..... UpdateuseEffect')
    }, [color])

    const style = { color: color ? "tomato" : "black" }
    return (
        <div className="text-center py-5 ">
            <p className="h3" style={style}>ساعت در حال حاضر برابر است با : {date.toLocaleTimeString()}</p>
        </div>
    )

}


export default SecoundClock