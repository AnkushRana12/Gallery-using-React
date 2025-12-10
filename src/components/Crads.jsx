import React from 'react'

const Crads = (props) => {
  return (
    <div>
       <a href={props.elem.url}>
      <div className='h-40 w-44 bg-white rounded-xl'>
      <img className='h-full w-full object-cover rounded-xl'src={props.elem.download_url} alt="" /></div>
      <h2 className='font-bold text-center'>{props.elem.author}</h2></a>
    </div>
  )
}

export default Crads
