import { useDispatch } from "react-redux";
import { addData } from "../utils/itemSlice";
import { API_URL } from '../utils/constants';

const useData = () => {
    
    const dispatch = useDispatch();
  
    const getData = async () => {

        const data = await fetch(API_URL);
        const json = await data.json();

        dispatch(addData(json));
    }

    return getData;
}

export default useData;