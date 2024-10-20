import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";

export default function FirstClass () {
  return (
    
    <div className="bg-slate-400 p-4 m-4 rounded-lg">
       <h1 className="text-lg font-semibold">This is home page!</h1>
       <Header/>
       <About/>
    </div>
  )
}