import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';

function PaginationComponent(props) {
  const {pageCount,defaultPage,pageChange} = props
  
  const handlePageChange = (e,n)=>{
    pageChange(n)
  }
    // component did mount
  return (
    <>
      <Pagination count={pageCount} variant="outlined" color="primary" defaultPage={defaultPage} onChange={handlePageChange}/>
    </>
  )
}

export default PaginationComponent

// functional component :-
/**
 * return always load jsx:- jsx(javascript xml)/recreated html tags in js
 * if we want to load any js expression we load inside a {} and at the end we return a jsx
 * we use hooks to implement different things inside component
 * useState:- is used to create a state variable / where react can only capture change in stste of state variable
 * useEffect:- is used to implement life cycle method /
 */

/**
 * Array.map:-  
 */