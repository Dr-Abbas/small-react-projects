import React from 'react'

function Modal({show}) {
  return (
    <div className=' modal-container bg-white w-auto h-auto py-1 px-3 rounded-xl backdrop-blur-sm shadow-2xl absolute top-[-50px] left-40 text-white font-comic'>
     <div className="modal flex items-center">
       <h2 className={show === "Item Added" ? 'text-green-500' : 'text-red-500'} 
       >{show}</h2>
       <i className='fas fa-times text-red-500 flex justify-between px-2  ml-3 cursor-pointer hover:shadow-red-200 hover:shadow-md rounded-2xl'/>
     </div>
    </div>
  )
}

export default Modal