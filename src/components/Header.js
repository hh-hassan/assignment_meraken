import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { CART_PATH } from "../utils/constants";

const Header = () => {

    const navigate = useNavigate();

    const cartItems = useSelector(store => store.cart.items);

    return (
        
        <div className="sticky top-0 z-[1000] flex justify-between items-center px-[5%] py-2 shadow-[0_25px_50px_-15px_rgba(40,44,63,0.25)] bg-white">

            <svg viewBox="0.073 0.079 576.502 57.921" className="fill-current text-[#FF9345] w-full h-auto max-w-full md:h-10 md:w-96">
                <Link to='/'>
                    <g>
                        <path
                            fill="#FF9345"
                            d="M.073.08h11.484l20.75 19.541v15.21L12.765 16.399V58H.073zm69.404 0H58.094L37.243 19.62v15.21l19.542-18.433V58h12.692zm20.113 0h32.234v11.886h-19.542v11.383h19.542v11.483h-19.542v11.785h19.139V58H89.59zm37.17 46.537V58h32.234V46.617zm32.234-34.651V.08h-32.637v11.886zm-16.319 22.866V23.349h-16.318v11.483zM172.123.08h32.234v11.886h-19.542v11.383h19.542v11.785h-19.542V58h-12.692zM241.526 58V34.026l-9.468-4.936 9.468-4.533V7.03L229.64.08h-20.751v11.886h19.945v11.383h-19.945v11.785h19.945V58z"
                        />

                        <path
                            fill="#0D0E0F"
                            d="M256.674 7.03V58h12.692V34.832h19.542V23.349h-19.542V11.462h19.542V.08h-20.751zm69.404 0V58h-12.693V34.832h-19.944V23.349h19.944V11.462h-19.944V.08h20.75zM344.172.08V58h12.692V34.832h5.641V23.349h-5.641V.079zm32.234 29.01 37.17 23.168L401.69 58l-35.458-23.168V23.349L401.69.079l11.886 5.742zM424.639.08h32.234v11.886h-19.542v11.383h19.542v11.483h-19.542v11.785h19.139V58h-31.831zm37.17 46.537V58h32.234V46.617zm32.234-34.651V.08h-32.637v11.886zm-16.319 22.866V23.349h-16.318v11.483zM507.172.08h11.483l20.751 19.541v15.21l-19.542-18.836V58h-12.692zm56.711 41.602V.08h12.692V58h-11.886l-20.751-19.945V23.35z"
                        />
                    </g>
                </Link>
            </svg>

            <div className="flex justify-between text-lg font-semibold">
                
                <div className="pl-10 pr-2 cursor-pointer py-[2px] hover:text-[#ff5200]" onClick={() => navigate('/')}>HOME</div>
                
                <div className="flex justify-between items-center pl-10 pr-2 cursor-pointer group"
                    
                    onClick={() => navigate('/checkout')}>

                        <svg className="w-8 h-8 fill-white stroke-black stroke-[2px] pr-2 group-hover:stroke-[#ff5200]" viewBox="-1 0 37 32">
                            <path d={CART_PATH} />
                            <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="text-[22px]">{cartItems.reduce((sum, item) => sum + item.count, 0)}</text>
                        </svg>

                        <div className="py-[2px] group-hover:text-[#ff5200]">Cart</div>
                </div>
                
            </div>

        </div>
    );
}

export default Header;