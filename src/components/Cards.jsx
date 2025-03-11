import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {


    const getCourses = () => {
        if (!courses || Object.keys(courses).length === 0) return []; // ✅ Prevents error
      
        let allCourses = [];
      
        allCourses = Object.values(courses).flat();
      
        return allCourses;
      };

  return (
    <div className='flex flex-col px-10 gap-10 justify-center items-center md:flex-row md:flex-wrap w-full lg:gap-15 lg:flex-wrap'>
        {
       getCourses().map( (course) => {
           return <Card key={course.id} course = {course}/>
       })
    }
    </div>
  )
}

export default Cards