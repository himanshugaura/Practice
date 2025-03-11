import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { apiUrl, filterData } from './data';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

function App() {
  const [courses, setCourses] = useState(null);
  const [allCourses, setAllCourses] = useState(null); // To store all courses for reset functionality

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data); // Initially set all courses
        setAllCourses(output.data); // Save all courses for reset
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);

  const filterCourses = (categoryTitle) => {
    if (categoryTitle === "All") {
      // Reset to show all courses
      setCourses(allCourses);
    } else {
      // Filter courses by category title
      const filteredData = Object.keys(allCourses)
        .filter((category) => category === categoryTitle)  // Only show selected category
        .reduce((acc, category) => {
          acc[category] = allCourses[category];  // Rebuild the object with the selected category
          return acc;
        }, {});
      setCourses(filteredData); // Update the filtered courses state
    }
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <Toaster />
        <Navbar />
        <Filter filterData={filterData} filterCourses={filterCourses} />
        <Cards courses={courses} />
      </div>
    </>
  );
}

export default App;
