import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Table from './Component/Table/Table';
import Navbar from './Component/Navbar/Navbar'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from './Component/Pagination/Pagination';
import { useFetch } from './Helper/CustomHooks/FetchDataHook';

function App() {       // component
  const [data, setData] = useState([])
  const [noOfPages, setNoOfPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageData, setCurrentPageData] = useState([])
  // const [data] = useFetch('https://randomuser.me/api/?results=50')
  const fetchData = async()=>{
      const res = await fetch('https://randomuser.me/api/?results=100')
      const data1 = await res.json()
      setNoOfPages(data1.results.length/5)
      setData(data1.results)
  }
  
  const pageChange = (n)=>{
    setCurrentPage(n)
  }

  useEffect(()=>{
      setTimeout(fetchData,500)
  },[])// componentDidMount

  useEffect(()=>{
    const startIndex = (currentPage*5)-5
    const endIndex = currentPage*5
    const dataSet = data.slice(startIndex,endIndex)
    setCurrentPageData(dataSet)
  },[data,currentPage])//setData,setCurrentPage
  //ComponentDidUpdate run when value data is changes

  useEffect(()=>{}) // setData,setNoOfPages,setCurrentPage,setCurrentPageData
  return (
    <div className="App">
        <Table data={currentPageData}/>
        <Pagination pageCount={noOfPages} defaultPage={currentPage} pageChange={pageChange}/>
        {/* <Login/> */}
    </div>
  );
}

export default App;

// react is a library of fools :- beacause it will never understand chnage of normal variable
// we use state vaiable to tell react something is changing
/** lifeCycleMethod was used inside class component
 * useEffect hook is used to implement life cycle method insde functional component 
 * componentDidMount:- methods     useEffect(()=>{},[])
 * componentDidUpdated:-           useEffect(()=>{}) it will run for all updates 
 *                                 useEffect(()=>{},[state]) it will run for particular state udpate
 * componentWillUnmount:-          useEffect(()=>{
 *                                                return ()=>{}   // componentWillUnmount
 *                                                },[])
 */