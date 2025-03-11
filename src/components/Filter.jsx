import React from 'react';

const Filter = ({ filterData }) => {
  return (
    <div className='flex w-full justify-center items-center mb-6'>
    <div className='flex gap-5 flex-wrap justify-center items-center'>
      {filterData.map((data) => (
        <button key={data.id}
        className='bg-black py-2 px-3 rounded-4xl cursor-pointer hover:shadow-[2px_2px_2px_2px] hover:shadow-pink-900'>
            
            
            {data.title}</button> 
      ))}
    </div>
    </div>
  );
};

export default Filter;
