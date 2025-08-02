import { useState } from 'react'

function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'  style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap  justify-center bottom-12  inset-x-0 px-2 '>
        <div className='flex  flex-wrap  justify-center  gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' style={{backgroundColor: "red",border: "2px solid black"}}>RED</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' style={{backgroundColor: "green",border: "2px solid black"}}>GREEN</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' style={{backgroundColor: "blue",border: "2px solid black"}}>BLUE</button>
          <button onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' style={{backgroundColor: "olive",border: "2px solid black"}}>OLIVE</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' style={{backgroundColor: "yellow",border: "2px solid black"}}>YELLOW</button>
          <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm ' style={{backgroundColor: "white",border: "2px solid black"}}>WHITE</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' style={{backgroundColor: "black",border: "2px solid black"}}>BLACK</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' style={{backgroundColor: "pink",border: "2px solid black"}}>PINK</button>
          <button onClick={() => setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' style={{backgroundColor: "grey",border: "2px solid black"}}>GREY</button>
        </div>
      </div>
      </div>      
    </>
  )
}

export default App
