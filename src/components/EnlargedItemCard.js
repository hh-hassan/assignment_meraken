import {useContext} from 'react'
import UserContext from '../utils/UserContext';
import { AiOutlineClose } from 'react-icons/ai';
import { CDN_URL } from '../utils/constants';

const EnlargedItemCard = ({props}) => {
    
    const { setEnlarged } = useContext(UserContext);
    
    const {
        name,
        price,
        description,
        imageId

    } = props;
    
    return (
    
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[2000]" onClick={() => setEnlarged(null)}>
        
        <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] md:w-[70%] text-center max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            
            <div className="flex justify-end mb-2">
                <button className="" onClick={() => setEnlarged(null)}>
                    <AiOutlineClose size={24} />
                </button>
            </div>
            
            <div className="flex-row md:flex md:justify-between items-center p-2">

                <div className="w-full md:w-1/2">
                    <div className="py-[5px] text-[17px] font-bold">{name}</div>
                    <div className="py-[5px] text-[17px] font-bold">₹{price/100}</div>
                    <div className="hidden md:block">{description}</div>
                </div>

                <div className="flex justify-center">
                    <img className="border border-gray-200 h-auto w-full md:h-56 md:w-64 m-1.5 rounded-[10px] cursor-pointer" src={CDN_URL + imageId} alt=""></img>
                </div>

            </div>

            <div className="block md:hidden">{description}</div>
  
        </div>

      </div>
    );
}

export default EnlargedItemCard