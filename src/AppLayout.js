import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";

import appStore from "./utils/appStore";

const AppLayout = () => {
    
    return (

        <Provider store={appStore}>

            <div className="bg-gray-100">
                
                <div className="transition-filter duration-300 ease-in-out">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>

            </div>

        </Provider>
    );
};

export default AppLayout;