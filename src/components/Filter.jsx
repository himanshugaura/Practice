import React from 'react';

const Filter = ({ filterData, filterCourses }) => {
  return (
    <div className='flex w-full justify-center items-center mb-6'>
      <div className='flex gap-5 flex-wrap justify-center items-center'>
        {filterData.map((data) => (
          <button
            key={data.id} // Use unique id as key
            className='bg-black py-2 px-3 rounded-4xl cursor-pointer border-2 border-transparent hover:border-white active:border-white'
            onClick={() => filterCourses(data.title)}  // Trigger filtering by category title
          >
            {data.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
