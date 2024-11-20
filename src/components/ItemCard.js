import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserContext from "../utils/UserContext";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import EnlargedItemCard from "./EnlargedItemCard";

const ItemCard = ({props}) => {
    
    const [enlarged, setEnlarged] = useState(null);
    
    const {
        name,
        price,
        imageId
    } = props;

    const count = useSelector(store => {
        const foundItem = store.cart.items.find(item => item.id === props.id);
        return foundItem ? foundItem.count : 0;
    });

    const dispatch = useDispatch();
    
    return (

        <UserContext.Provider value={{ enlarged, setEnlarged }}>

            <div className="flex justify-between items-center p-2 border-b-2 border-[#f5f5f5]">

                <div className="flex-row md:flex">
                    
                    <div className="w-60 md:w-96">
                        <div className="py-[5px] text-[17px] font-bold">{name}</div>
                        <div className="py-[5px] text-[17px] font-bold">₹{price/100}</div>
                    </div>
                    
                    <div className="my-2 flex items-center justify-center h-8 md:h-10 bg-purple-300 hover:bg-purple-400 w-28 rounded-md cursor-pointer" onClick={() => setEnlarged(props)}>View Details</div>
                </div>

                <div>

                    <div className="relative my-2">
                        
                        <img className="border border-gray-200 h-28 w-32 md:h-36 md:w-40 m-1.5 rounded-[10px] cursor-pointer" src={CDN_URL + imageId} alt=""></img>

                        {
                            count===0?
                                <div className="absolute flex justify-center items-center h-10 w-[90px] text-[#1ba672] bg-white text-[18px] font-bold px-4 rounded-[10px] border border-[#d0cfcf] cursor-pointer -bottom-2 left-1/2 transform -translate-x-1/2 hover:bg-[#d8d7d7]" onClick={() => dispatch(addItem(props))}>ADD</div>
                                    :
                                        <div className="absolute flex justify-between items-center h-10 w-[90px] text-[#1ba672] bg-white text-[18px] font-bold px-4 rounded-[10px] border border-[#d0cfcf] cursor-pointer -bottom-2 left-1/2 transform -translate-x-1/2">
                                            <div onClick={() => dispatch(removeItem(props))}>-</div>
                                            <div>{count}</div>
                                            <div onClick={() => dispatch(addItem(props))}>+</div>
                                        </div>
                        }

                    </div>

                </div>

                {enlarged && <EnlargedItemCard props={enlarged}/>}

            </div>

        </UserContext.Provider>
    )
};

export default ItemCard;