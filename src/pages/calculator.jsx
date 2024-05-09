import Theme from '../components/Theme'
import Result from '../components/result'
import Keypad from '../components/keypad'
import { useEffect, useState } from 'react'
import { createContext } from 'react'
import { KeypadBackgroundContext, ResultBackgroundContext, KeyBackgroundContext, DelResetBackgroundContext, ThemeContext, screenContext, TextKeyContext, TextResultContext, EqualBackgroundContext, EqualShadowContext, KeyShadowContext, ResetShadowContext, num1Context, num2Context } from '../context/context'

const Calculator = () => {
  const [theme, settheme] = useState(0)
  const [screenBackground, setScreenBackground] = useState('bg-[#3a4764]');
  const [keypadBackground, setKeypadBackground] = useState('bg-[#232c43]');
  const [resultBackground, setResultBackground] = useState('bg-[#182034]');
  const [keyBackground, setKeyBackground] = useState('[#eae3dc]');
  const [delResetBackground, setDelResetBackground] = useState('[#637097]');
  const [TextKey, setTextKey] = useState('[#444b5a]')
  const [TextResult, setTextResult] = useState('white')
  const [equalBackground, setequalBackground] = useState('[#D13F30]')
  const [KeysShadow, setKeysShadow] = useState('');
  const [ResetShadow, setResetShadow] = useState('');
  const [EqualShadow, setEqualShadow] = useState('');
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  return (
    <>
      <num2Context.Provider value={{ num2, setnum2 }}>
        <num1Context.Provider value={{ num1, setnum1 }}>
          <KeyShadowContext.Provider value={{ KeysShadow, setKeysShadow }}>
            <ResetShadowContext.Provider value={{ ResetShadow, setResetShadow }}>
              <EqualShadowContext.Provider value={{ EqualShadow, setEqualShadow }}>
                <EqualBackgroundContext.Provider value={{ equalBackground, setequalBackground }}>
                  <TextResultContext.Provider value={{ TextResult, setTextResult }}>
                    <TextKeyContext.Provider value={{ TextKey, setTextKey }}>
                      <screenContext.Provider value={{ screenBackground, setScreenBackground }}>
                        <ThemeContext.Provider value={{ theme, settheme }}>
                          <KeypadBackgroundContext.Provider value={{ keypadBackground, setKeypadBackground }}>
                            <ResultBackgroundContext.Provider value={{ resultBackground, setResultBackground }}>
                              <KeyBackgroundContext.Provider value={{ keyBackground, setKeyBackground }}>
                                <DelResetBackgroundContext.Provider value={{ delResetBackground, setDelResetBackground }}>
                                  <section className={`min-h-screen pt-4 ${screenBackground}`}>
                                    <div className='w-[90%] mx-auto sm:w-[60%] sm:border-green-700 md:w-1/2  lg:w-1/3'>
                                      <div className='mt-6'><Theme /></div>
                                      <div className='mt-10'><Result /></div>
                                      <div><Keypad /></div>
                                    </div>
                                  </section>
                                </DelResetBackgroundContext.Provider>
                              </KeyBackgroundContext.Provider>
                            </ResultBackgroundContext.Provider>
                          </KeypadBackgroundContext.Provider>
                        </ThemeContext.Provider>
                      </screenContext.Provider>
                    </TextKeyContext.Provider>
                  </TextResultContext.Provider>
                </EqualBackgroundContext.Provider>
              </EqualShadowContext.Provider>
            </ResetShadowContext.Provider>
          </KeyShadowContext.Provider>
        </num1Context.Provider>
      </num2Context.Provider>
    </>
  )
}

export default Calculator;