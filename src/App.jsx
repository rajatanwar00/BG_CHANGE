import { useState } from "react";

function App() {
  let [color,setColor]=useState("grey")

  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <h1 className="text-center text-4xl text-white">Choose your background color</h1>
      <div className="p-2">
        <div className="flex flex-col gap-4 w-20 bg-white p-2 rounded-xl border">
          <button className="border p-1 w-16 rounded-xl bg-red-600 text-white" onClick={()=>setColor("Red")}>Red</button>
          <button className="border p-1 w-16 rounded-xl bg-green-600 text-white" onClick={()=>setColor("Green")}>Green</button>
          <button className="border p-1 w-16 rounded-xl bg-blue-600 text-white" onClick={()=>setColor("Blue")}>Blue</button>
          <button className="border p-1 w-16 rounded-xl bg-black text-white" onClick={()=>setColor("Black")}>Black</button>
          <button className="border p-1 w-16 rounded-xl bg-yellow-600 text-white" onClick={()=>setColor("#ffc107")}>Yellow</button>
          <button className="border p-1 w-16 rounded-xl bg-violet-600 text-white" onClick={()=>setColor("#7b1fa2")}>Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
