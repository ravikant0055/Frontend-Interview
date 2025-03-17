import React, { useState } from 'react'

const Accordian = ({title, content }) => {
  const[isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <button onClick={()=>setIsOpen(!isOpen)}>
           <span>{title}</span>
           <span>{isOpen ? "▲" : "▼"}</span>
       </button> 
       { isOpen && (
         <div>
            {content}
         </div>
       )}
    </div>
  )
}

export default Accordian;