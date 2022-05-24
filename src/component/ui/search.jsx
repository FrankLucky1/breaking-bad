import React, {useState} from 'react'

const SearchBox = ({getQuery}) => {
    const [search, setSearch]= useState('')

    const changeHandler = (q) => {
        setSearch(q)
        getQuery(q)
        console.log(q)
    }

  return (
    <div className='search'>
        <form action="">
        <input type="text" 
        value={search}
        className='form-control'
        onChange={(e)=>changeHandler(e.target.value)} 
        placeholder='Search Character'
        autoFocus/>
        </form>
    </div>
  )
}

export default SearchBox