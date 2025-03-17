import React, { useState } from 'react'

const ToDoList = () => {
  const [inputs, setInputs] = useState({
    fname: ""
  })
  const [data, setData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
     setInputs((prev)=>({
       ...prev,
       [e.target.name] : e.target.value
     }))
  }

  const handleForm = (e) =>{
      e.preventDefault();
      if(editClick){
        const updatedData = data.map((item,id)=>
          id==editIndex ? {item, ...inputs} : item
        )

        setData(updatedData);
        setEditClick(false);
      }
      else{
        setData([...data,inputs]);
      }
 
      setInputs({
        fname: ""
      })
  }

  const handleDelete = (index) => {
      const filterdata = data.filter((_,id)=>id!==index);
      setData(filterdata);
  }

  const handleEdit = (id) =>{
      setInputs({...data[id]});
      setEditClick(true);
      setEditIndex(id);
  }

  return (
    <div>
       <form onSubmit={handleForm}>
           <input type="text" value={inputs.fname} name='fname' onChange={handleChange}/>
           <button type='submit'>{editClick ? "edit" : "add"}</button>
       </form>
       
       {data.map((item,id)=>(
        <div>
            <h1>{item.fname}</h1>
            <button onClick={()=>handleDelete(id)}>delete</button>
            <button onClick={()=>handleEdit(id)}>edit</button>
        </div>
       ))}

    </div>
  )
}

export default ToDoList;