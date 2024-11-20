import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
    
    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const itemAmount = cartItems.reduce((total, item) => {
        return total + (item.count * item.price/100);
    }, 0);

    const GST = Number((0.05 * itemAmount).toFixed(2));

    return (
        
        <div className="flex justify-center bg-[#f0efef]">
            
            <div className="w-3/4 m-8 p-2 bg-white">
                
                <div className="border-b-2 border-black mt-2 mb-5">
                    
                    <div className="text-center font-bold pb-2 text-lg">Cart Details</div>
                
                    {cartItems.map(item => 
                        
                        <div className="flex justify-between items-center text-sm md:text-base m-2 md:mx-5 text-[#545454]">

                            <div className="flex justify-between items-center h-[30px] w-[60%]">{item.name.length > 25 
                                ? item.name.substring(0, 20) + "..."
                                : item.name}
                            </div>
                        
                            <div className="flex justify-between items-center h-[20px] w-[20%] md:w-[10%] text-[#1ba672] font-bold bg-white mx-[20px] p-[5px] border border-[#d0cfcf] cursor-pointer">
                                    <div className="flex flex-1 justify-center items-center" onClick={() => dispatch(removeItem(item))}>-</div>
                                    <div className="flex flex-1 justify-center items-center">{item.count}</div>
                                    <div className="flex flex-1 justify-center items-center" onClick={() => dispatch(addItem(item))}>+</div>
                            </div>

                            <div className="flex justify-end w-[20%]">₹{item.count * item.price}</div> 
                            
                        </div>)}
                </div>
                
                <div className="border-b-2 border-black my-5">

                    <div className="font-semibold">Bill Details</div>

                    <div className="m-2 text-gray-500">

                        <div className="m-2 flex justify-between">
                            <div>Item total</div>
                            <div>₹{Number(itemAmount).toFixed(2)}</div>
                        </div>

                        <div className="m-2 flex justify-between">
                            <div>Platform fee</div>
                            <div>₹6</div>
                        </div>

                        <div className="m-2 flex justify-between">
                            <div>GST</div>
                            <div>₹{GST}</div>
                        </div>

                    </div>

                </div>
                
                <div className="m-2 flex justify-between font-bold">
                    <div>TO PAY</div>
                    <div>₹{itemAmount + 6 + GST}</div>
                </div>

                <div className="flex justify-center items-center m-5 mx-auto w-full h-10 font-bold text-white bg-[#ff5200] cursor-pointer">
                    Proceed to Pay
                </div>

            </div>

        </div>
    )
}

export default Cart;