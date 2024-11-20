import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import AppLayout from "./AppLayout";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Error from "./components/Error";

// import appStore from "./utils/appStore";

function App() {

  const appRouter = createBrowserRouter([
    
    {
        path: "/",

        element:<AppLayout/>,

        children: [
            
            {
                path: "/", 
                element: <Body/>
            },

            {
                path: "/checkout", 
                element: <Cart/>
            },
        ],

        errorElement: <Error/>
    },
]);
  
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;