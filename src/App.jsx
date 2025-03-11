import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { apiUrl , filterData } from './data'
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import { Toaster } from 'react-hot-toast'




function App() {

const [courses , setCourses] = useState(null);
  
  useEffect( () =>
  {
    const fetchData = async () =>
    {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        setCourses(output.data);

      } catch (error) {
        toast.error("Something went wrong");
      }
    }

    fetchData();
  },[])

  return (
    <>
      <div className='flex flex-col w-full bg-gray-900'>
      <div><Toaster/></div>
        <Navbar />
        <Filter key = {filterData.id} filterData = {filterData} />
        <Cards courses = {courses}/>
      </div>
    </>
  )
}

export default App
