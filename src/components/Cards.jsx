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
    <div className='flex flex-col px-10 gap-10 bg-gray-900 md:flex-row md:flex-wrap w-full md:items-center md:justify-center'>
        {
       getCourses().map( (course) => {
           return <Card key={course.id} course = {course}/>
       })
    }
    </div>
  )
}

export default Cards