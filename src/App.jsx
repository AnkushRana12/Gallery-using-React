import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Crads from './components/Crads';
const App = () => {

const[userdata,setuserdata]=useState([])

const[index,setindex]=useState(1)

const nextdata=()=>{
  console.log("next data")
  setindex(index+1);
  setuserdata([])
}

const previewdata=()=>{
  if(index>1){
 console.log("preview data")
  setindex(index-1);
  setuserdata([])
}
  }
 

  const getdata=async ()=>{
    
    console.log("data a gaya")
    const response= await fetch(`https://picsum.photos/v2/list?page=${index}&limit=30`);

   let data=await response.json();
     setuserdata(data);
    console.log(userdata)
  }

  useEffect(function(){
    getdata();
  },[index])

  let printuserdata=<h3 className='absolute top-1/2 left-1/2 '>Loading...</h3>



if(userdata.length>0){
  printuserdata=userdata.map(function(elem,idx){


    return <div  key={idx} > 
   <Crads elem={elem}/>
</div>
  })
}


  return (
    <div className='bg-black h-screen text-white p-10 overflow-auto'>
    
     <div className='flex flex-wrap gap-5 mt-10 ml-7'>
{printuserdata}
     </div>

     <div className='flex justify-center gap-6 items-center p-4'>

      <button
      style={{opacity: index==1 ?  0.5: 1}}
       className='bg-amber-300 px-5  py-4 rounded text-black font-bold cursor-pointer'onClick={()=>{
       previewdata();
      }}>Preview</button>

<h2 className='font-bold'>Page{index}</h2>
      <button className='bg-amber-300 px-4  py-4 rounded text-black font-bold cursor-pointer 'onClick={nextdata}>Next</button>
     </div>

    </div>
  )
}

export default App

