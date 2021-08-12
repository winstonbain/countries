import React from 'react'

const Filter = ({textFilter, handleFilterChange}) => (
    <div> Filter: <input value={textFilter} onChange={handleFilterChange}/></div>
  )

export default Filter