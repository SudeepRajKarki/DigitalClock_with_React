import React,{useState,useEffect} from "react"

function Clock(){
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const intervalId =setInterval(() => {
            setTime(new Date());
        },1000);
        return()=>{
            clearInterval(intervalId);
        }
    },[]);

    function Formattime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? "pm" : "am";

        hours=hours%12 || 12;
        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${meridian}`;
     }
     function padzero(number){
        return (number < 10 ? "0" : "") + number;
     }
    return(
        <>
        <div className="container">
            <div className="clock">
                <span>{Formattime()}</span>
            </div>


        </div>
        </>
    )
    
}
export default Clock