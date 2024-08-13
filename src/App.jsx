
import { useState } from 'react'
import './App.css'

function App() {
  let [values, setValues] = useState(" ")
  // let [count,setcount]=useState(2)
  function AllClearClicker() {
    setValues("")
  }
  function DeleteClicker() {
    let valuesUnDel = values.toString().slice(0, -1)
    setValues(valuesUnDel)
  }



  return (

    <>
      <div className='App'>
        <div className="calculator">
          <form>
            <div className="Input">
              <input type="text" value={values} />
            </div>
            <div className="flex-buttons">
              <input type="button" className='diffrent' onClick={AllClearClicker} value={'AC'} />
              <input type="button" className='diffrent' onClick={DeleteClicker} value={'DE'} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} className='diffrent' value={"."} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} className='diffrent' value={"/"} />
            </div>
            <div className="flex-buttons">
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={'7'} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={'8'} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={"9"} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} className='diffrent' value={"*"} />
            </div>
            <div className="flex-buttons">
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={'4'} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={'5'} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={"6"} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} className='diffrent' value={"-"} />
            </div>
            <div className="flex-buttons">
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={'1'} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={'2'} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={"3"} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} className='diffrent' value={"+"} />
            </div>
            <div className="flex-buttons">
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={'('} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={')'} />
              <input type="button" onClick={(e) => setValues(values + e.target.value)} value={"0"} />
              <input type="button" className='diffrent' value={"="} onClick={(e) => setValues(eval(values))} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
