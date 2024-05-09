import Card from '../components/card'
import { useState,useContext, useEffect } from 'react'
import { KeyBackgroundContext, KeypadBackgroundContext,DelResetBackgroundContext,TextKeyContext,TextResultContext, EqualBackgroundContext,EqualShadowContext,ResetShadowContext,KeyShadowContext } from '../context/context'
const Keypad = () => {
    const {keypadBackground}=useContext(KeypadBackgroundContext)
    const {keyBackground} = useContext(KeyBackgroundContext) 
    const {delResetBackground} = useContext(DelResetBackgroundContext)
    const {TextKey,setTextKey}= useContext(TextKeyContext)
    const {equalBackground,setequalBackground} = useContext(EqualBackgroundContext)
    const {EqualShadow,setEqualShadow} = useContext(EqualShadowContext);
    const {ResetShadow,setResetShadow} = useContext(ResetShadowContext);
    const {KeysShadow,setKeysShadow} = useContext(KeyShadowContext)
    const [hover,sethover] = useState('')
    const button = [
        {
            "val": '7',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": '8',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": '9',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": "Del",
            "bg": delResetBackground,
            "text": "white",
            "shadow":ResetShadow,
            "hover":hover
        },
        {
            "val": '4',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": '5',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val":'6',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": '+',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": '1',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": '2',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": '3',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": '-',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
     
        {
            "val": ".",
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": '0',
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": "/",
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },
        {
            "val": "*",
            "bg": keyBackground,
            "text": TextKey,
            "shadow":KeysShadow,
            "hover":hover
        },

    ]
    const className =[
        "bg-[#eae3dc]",
     "bg-[#647299]",
        "text-[#444b5a]",
        "bg-[#D13F30]",
        "bg-[#637097]",
        'bg-[#b4a597]'
    ]

    const button2 = [
      {
        "val": "RESET",
        "bg": delResetBackground,
        "text": "white",
        "shadow":ResetShadow
      },
      {
        "val": "=",
        "bg": equalBackground,
        "text": "white",
        "shadow":""
      },
    ]

    return (<>
        <div className={`flex w-full  mt-10  flex-wrap pb-4 rounded-lg ${keypadBackground}`}>

            {

                button.map((val, index) => {
                    return <div className='basis-1/4 mt-4 cursor-pointer'><Card val={val.val} bg={val.bg} key={index} text={val.text} shadow={val.shadow}/></div>
                })
            }
       <div className=' w-[92%] flex mx-auto gap-4'>
       {
           button2.map((val,index)=>{
            return <div className={`bg-${val.bg} w-[48%]  mt-4 rounded-lg cursor-pointer ${val.shadow}`}><Card val={val.val} bg={val.bg} key={index} text={val.text} /></div>
           }) 
        }
       </div>
        </div>
    </>)
}

export default Keypad;