import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/context";
import { screenContext } from "../context/context";
import { KeyBackgroundContext, KeypadBackgroundContext, DelResetBackgroundContext } from '../context/context'
import {ResultBackgroundContext} from '../context/context'
import { TextResultContext,TextKeyContext,KeyShadowContext,ResetShadowContext,EqualShadowContext ,EqualBackgroundContext} from "../context/context";
const Theme = () => {
  const { theme, settheme } = useContext(ThemeContext);
  const [translate, setTranslate] = useState(0);
  const { screenBackground, setScreenBackground } = useContext(screenContext)
  const { keypadBackground, setKeypadBackground } = useContext(KeypadBackgroundContext)
  const { keyBackground, setKeyBackground } = useContext(KeyBackgroundContext)
  const { delResetBackground, setDelResetBackground } = useContext(DelResetBackgroundContext);
  const {TextKey,setTextKey}= useContext(TextKeyContext)
  const {resultBackground, setResultBackground} = useContext(ResultBackgroundContext);
  const {TextResult,setTextResult} = useContext(TextResultContext);
  const {KeysShadow,setKeysShadow} = useContext(KeyShadowContext);
  const {ResetShadow,setResetShadow} = useContext(ResetShadowContext);
  const {EqualShadow,setEqualShadow} = useContext(EqualShadowContext);
  const {equalBackground,setequalBackground} = useContext(EqualBackgroundContext)
  const changeTheme = () => {

    settheme((prev) => {
      return prev + 1
    });
  };

  useEffect(() => {
    
    if (theme === 3) {
      settheme((prev) => { 0 });
    }
    if (theme === undefined) {
      settheme(0);
    }
    if (theme === 1) {
      setScreenBackground('bg-[#ededed]');
     setDelResetBackground('[#377f86]')
     setKeyBackground('[#e5e4e1]')
     setResultBackground('bg-[#d1cccc]')
     setKeypadBackground('bg-[#d1cccc]')
     setTextKey('[#35352c]')
     setTextResult('text-black')
     setKeysShadow('shadow-KeyShadow2')
     setequalBackground('[#ca5502]')
     setResetShadow('shadow-ResetShadow2')
     
    }
    if (theme === 2) {
      setScreenBackground('bg-[#160628]')
      setDelResetBackground('[#58077d]')
      setKeyBackground('[#341c4f]')
      setResultBackground('bg-[#1d0934]')
      setKeypadBackground('bg-[#1d0934]')
      setTextKey('[#ffe53d]')
      setTextResult('text-[#ffe53d]')
      setKeysShadow('shadow-custom')
      setequalBackground('[#00e0d1]');
      setKeysShadow('shadow-KeyShadow3');
      setResetShadow('shadow-ResetShadow3')
    }
    if (theme === 0) {
      setScreenBackground('bg-[#3a4764]')
      setDelResetBackground('[#637097]')
      setKeyBackground('[#eae3dc]')
      setResultBackground('bg-[#182034]')
      setKeypadBackground('bg-[#232c43]')
      setTextKey('[#444b5a]');
      setTextResult('text-white');
     setKeysShadow('shadow-KeyShadow1')
     setequalBackground('[white]')
     setResetShadow('shadow-ResetShadow1')
    }

  }, [theme])


  const ClassName = [
    'bg-[#160628]',
    'bg-[#ededed]',
    'bg-[#377f86]',
    'bg-[#d1cccc]',
    'bg-[#58077d]',
    'bg-[#d1cccc]',
    'bg-[#e5e4e1]',
    'bg-[#1d0934]',
    'bg-[#341c4f]',
    'bg-[#58077d]',
    'text-[#ffe53d]',
    'bg-[#ca5502]',
    'bg-[#00e0d1]',
    'bg-[[#d03f2f]]',
    'bg-[#bc15f4]'

  ]



  return (
    <>
      <div className={`font-custom flex justify-between ${TextResult}  `}>
        <div className={`text-[32px]  font-[600]  `}>
          <p>calc</p>
        </div>
        <div className="flex gap-4 ">
          <div className="text-white">
            <p className={`mt-5 font-[600] ${TextResult}`}>THEME</p>
          </div>
          <div className={`flex flex-col ${TextResult}`}>
            <div className="flex gap-4 w-[70px] rounded-full justify-center leading-tight ">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div className="w-[70px] rounded-full bg-[#232c43] p-1">
              <div
                className={`w-[15px] h-[15px] border-4 border-yellow-700 bg-${equalBackground} relative rounded-full transition duration-500 ease-in-out ${theme === 3 ? 'translate-x-0 ': theme === 1 ? 'translate-x-6 ' : theme === 2 ? 'translate-x-12' : ''}`}
                onClick={changeTheme}
              >

              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Theme;
