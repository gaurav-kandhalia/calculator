import { useContext, useEffect, useState } from "react";
import { KeyShadowContext, num1Context,num2Context } from "../context/context";

const Card = ({ val, bg, text, shadow }) => {
  const { num1, setnum1, num2, setnum2 } = useContext(num1Context);
  const { KeysShadow } = useContext(KeyShadowContext);


  const handleNumberClick = () => {
    switch (val) {
      case "RESET":
        setnum1('');
        break;
   case "Del":
        handleDelete();
        break;
      case "=":
        handleEquals();
       
        break;
      default:
        setnum1(prev => prev + val);
        break;
    }
  };



  const handleDelete = () => {
    if (num1) {
      setnum1(prev => {
        return prev.slice(0, -1);
      });
    }
  };

  const handleEquals = () => {
  try{
    if(num1){
      setnum1((prev)=>{
        const expression = prev.replace(/\b0+(\d+)/g, '$1');
        console.log("exp",expression)
        
        return eval(expression).toString();
      })
     }
  }catch(error){
console.error('error evaluating expression',error)
  }
  };

useEffect(()=>{
  console.log(typeof num1)
},[num1])

  return (
    <div className={` w-[70px] h-[70px] flex justify-center items-center font-[700] text-[32px] mx-auto bg-${bg} text-${text} rounded-lg ${KeysShadow} md:w-[90px] md:h-[60px] hover:`} onClick={handleNumberClick} >
      <p>{val}</p>
    </div>
  );
};

export default Card;


 
