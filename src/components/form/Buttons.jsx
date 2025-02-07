import { Loader } from 'lucide-react';

function Buttons({ isSubmitting, label }) {
   return (
      <div>
         <button className="bg-teal-500 px-2 py-1 rounded-md hover:cursor-pointer">{
            isSubmitting
               ? <div className='flex gap-2'><Loader className='animate-spin'/><p>Loading...</p></div>
               : <p>{label}</p>
         }</button>
      </div>
   )
}

export default Buttons
