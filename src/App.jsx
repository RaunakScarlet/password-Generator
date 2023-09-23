import { useState ,useEffect} from 'react'



function App() {
    const [Length, setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    
    const passwordGenerator = () => {
      
        let pass = "";
        let newChar;
         let possibleCombination = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
            if (numberAllowed) {
                possibleCombination += "1234567890";
            }
            if (charAllowed) {
                possibleCombination += "!@#$%^&*()_+=";
            }
        for (let i = 0; i < Length; i++){
           
            newChar = Math.floor(Math.random() * possibleCombination.length);
             pass += possibleCombination[newChar];
        }
        setPassword(pass);

    }

   useEffect(() => {
       passwordGenerator();
},[Length,numberAllowed,charAllowed]);



  return (
    <div className='items-center flex flex-col'>
          <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
              <h1 className='text-white text-center mt-2'>Password Generator</h1>
              <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-2'>
                  <input type="text"
                      value={password}
                      className='outline-none w-full py-1 px-3'
                      placeholder='password'
                      readOnly />
                  <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

              </div>
              <div className="flex text-sm gap-x-2">
                  <div className="flex items-center gap-x-1">
                      <input type="range"
                          min={6}
                          max={20}
                          value={Length}
                          onChange={(e) => setLength(e.target.value)}
                      />
                  </div>
                  <div className="flex items-center gap-x-1">
                       <h4>Length:{Length}</h4>
                  </div>
                 
                  <div className="flex items-center gap-x-1">
                      <input type="checkbox"
                         
                          id='numberAllowed' onChange={()=>setNumberAllowed(numberAllowed=>!numberAllowed)}/>
                       <label htmlFor="numberAllowed">Numbers</label>
                  </div>
                   <div className="flex items-center gap-x-1">
                      <input type="checkbox"
                         
                          id='charAllowed' onChange={() => setCharAllowed(charAllowed => !charAllowed)} />
                      <label htmlFor="charAllowed">Characters</label>
                  </div>
              </div>
          </div>
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 items-center' onClick={passwordGenerator}>New Password</button>
      </div>
    
  )
}

export default App
