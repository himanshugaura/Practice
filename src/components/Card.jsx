import React, { useState , useEffect     } from 'react'
import toast from 'react-hot-toast';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'

const Card = ({course}) => {

   const description = course.description.substring(0, 100) + '...';


    const [like , setLike] = useState(false);
    
          const likeHandler = () => {
        setLike((prevLike) => {
            if (!prevLike) {
              toast.success("Liked Succesfully")
            } else {
                toast.error("Like Removed")
            }
            return !prevLike;
        });
    }
    
  return (
    <div className='flex flex-col justify-center items-center bg-[rgba(0,0,0,0.71)] shadow-[1px_1px_10px] shadow-gray-500 rounded-2xl md:w-[30%]'>
        <div className='relative'>
            <img src={course.image.url} alt="" className='rounded-t-2xl '/>
            
            <div>
                <button className='absolute right-2 bottom-[-20px] rounded-[50%] bg-white p-1'
                
                onClick={likeHandler}>
                    {
                        like ? <FcLike size={35}/> : <FcLikePlaceholder size={35}/>
                    }
                    
                </button>
            </div>
        </div>

        <div className='p-5'>
            <p className='text-[1.2rem] text-cyan-300 font-bold mb-5 mt-2'>{course.title}</p>
            <p className='text-justify'>{description}</p>
        </div>
    </div>
  )
}

export default Card