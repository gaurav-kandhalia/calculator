import { useContext, useEffect } from "react";
import { ResultBackgroundContext } from "../context/context";
import { TextResultContext ,num1Context} from "../context/context";

const Result = ()=>{
    const {resultBackground}=useContext(ResultBackgroundContext)
    const {TextResult,setTextResult} = useContext(TextResultContext)
   const {num1,setnum1} = useContext(num1Context)
    const ClassName = [
        'text-[#ffe53d]'
    ]
    return (
        <>
        <div className={`min-h-[100px]  rounded-lg flex justify-end items-center p-4 font-[700] font-custom text-[32px] ${resultBackground} `}>
      
           <div className=""> <p className={`${TextResult} `}>{num1}</p></div>
          
        </div>
        </>
    )
}

export default Result;