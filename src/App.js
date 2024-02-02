import './App.css';
import React, { useState } from 'react';

function App() {
  let [sx, setsx] = useState("");
  let [temp, settemp] = useState("");
  let [fval, setfval] = useState("");
  // let [res, setres] = useState("");

  const getdata = (x) => {
    settemp(temp + x);
  }

  const cal = (s) => {
    setsx(s);
    setfval(temp);
    settemp('')
  }

  const eqal = () => {
    try {
      if (sx == "+") {
        settemp(String(parseFloat(fval) + parseFloat(temp)));
      }
      if (sx == "-") {
        settemp(String(parseFloat(fval) - parseFloat(temp)));
      }
      if (sx == "*") {
        settemp(String(parseFloat(fval) * parseFloat(temp)));
      }
      if (sx == "/") {
        let temp5 = (String(parseFloat(fval) / parseFloat(temp)));
        if(temp5 == Infinity){
          throw('canot divide by zero');
        }else{
          settemp(temp5);
        }
      }
      if (sx == "%") {
        settemp(String(parseFloat(fval) % parseFloat(temp)));
      }
    }
    catch(z){
      settemp(z)
    }
  }



  return (
    <>


      <div className='calc'>
        <div className='disp'>
          <input type='text' value={temp} readOnly></input>
        </div>
        <br></br>
        <input type='button' className='c-btn' value={"CLR"} onClick={() => { settemp(temp.substring(0, temp.length - 1)) }}></input>
        <input type='button' className='c-btn' value={"%"} onClick={() => eqal('%')}></input>
        <input type='button' className='c-btn' value={"C"} onClick={() => settemp("")}></input>
        <input type='button' className='c-btn' value="/" onClick={(e) => cal(e.target.value)}></input>

        <br></br>
        <input type='button' className='c-btn' value={"7"} onClick={(e) => { settemp(temp + e.target.value) }}></input>
        <input type='button' className='c-btn' value={"8"} onClick={() => getdata(8)}></input>
        <input type='button' className='c-btn' value={"9"} onClick={() => getdata(9)}></input>
        <input type='button' className='c-btn' value={"*"} onClick={() => cal("*")}></input>
        <br></br>
        <input type='button' className='c-btn' value={"4"} onClick={() => getdata(4)}></input>
        <input type='button' className='c-btn' value={"5"} onClick={() => getdata(5)}></input>
        <input type='button' className='c-btn' value={"6"} onClick={() => getdata(6)}></input>
        <input type='button' className='c-btn' value={"-"} onClick={() => cal("-")}></input>
        <br></br>
        <input type='button' className='c-btn' value={"1"} onClick={() => getdata(1)}></input>
        <input type='button' className='c-btn' value={"2"} onClick={() => getdata(2)}></input>
        <input type='button' className='c-btn' value={"3"} onClick={() => getdata(3)}></input>
        <input type='button' className='c-btn' value={"+"} onClick={() => cal("+")}></input>
        <br></br>
        <input type='button' className='c-btn' value={"0"} onClick={() => getdata(0)}></input>
        <input type='button' className='c-btn' value={"."} onClick={() => getdata(".")}></input>
        <input type='button' className='c-btn' value={"="} onClick={() => eqal()}></input>
      </div>



    </>
  )
}

export default App;