import React, { useCallback, useEffect, useState } from "react";


const debounce = (func, delay) =>{
     let timer;
     return (...args) =>{
         clearTimeout(timer);
         timer = setTimeout(()=>func(...args),delay);
     }
}


const DebounceSearch = () => {
  const [query, setQuery] = useState("");

//using useCallback and custom debounce function

   const handleSearch = useCallback(
        debounce((value)=>{
            console.log("search value is : ",value);
        },500)  
    ,[]);

   const handleChange = (e) => {
      setQuery(e.target.value);
      handleSearch(e.target.value);
   }

  
// basic method

//   const [debounceQuery, setDebounceQuery] = useState("");
//   useEffect(()=>{
//       const handler = setTimeout(()=>{
//         setDebounceQuery(query);
//       },500);

//       return () => {
//         clearTimeout(handler)
//       };
//   },[query]);

//   useEffect(()=>{
//       if(debounceQuery){
//         console.log("search data is ", debounceQuery);
//       }
//   },[debounceQuery])

  return (
    <div >
      <input type="text" value={query} placeholder="Search..." onChange={handleChange} />
      {/* <h1>Searched for : {debounceQuery}</h1> */}
    </div>
  );
};

export default DebounceSearch;
