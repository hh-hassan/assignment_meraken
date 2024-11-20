import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import Select from 'react-select';
import useData from "../utils/useData";
import { categories } from "../utils/constants";
import { AiOutlineSearch, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import ReactLoading from 'react-loading';

const Body = () => {
  
  const getData = useData();
  
  const items = useSelector(store => store.item.items);
  const [filteredItems, setFilteredItems] = useState(null);

  let sortedAscending = [];
  let sortedDescending = [];

  if (filteredItems) {
    sortedAscending = [...filteredItems].sort((a, b) => a.price - b.price);
    sortedDescending = [...filteredItems].sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    !items && getData();
  }, []);

  useEffect(() => {
    setFilteredItems(items);
  }, [items])
  
  const search = useRef(null);
  const handleSearch = () => {
      const newItems = items.filter(item => item.name.toLowerCase().includes(search.current.value.toLowerCase()));
      setFilteredItems(newItems);
  };

  const [sort, setSort] = useState(0);

  const handleSort = () => {
    
    if(sort === 1)
    {
      setSort(-1);
      setFilteredItems(sortedDescending);
    }

    else
    {
      setSort(1);
      setFilteredItems(sortedAscending);
    }

  };

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (selected) => {
    
    setSelectedCategories(selected);
    
    if(selected.length === 0)
    {
      setFilteredItems(items);
      return;
    }
    
    const categoriesArray = selected.map(item => item.value);
    const sortedItems = items.filter(item => categoriesArray.includes(item.category));
    setFilteredItems(sortedItems);
  };
  
  return (
    
    <div className="pt-[2%] md:mx-[10%] px-[5%] bg-white">
    
      {
        !items &&
        
          <div className="text-center p-12">
            <div className="flex justify-center items-center m-20"><ReactLoading type="spin" color="green" height={100} width={100} /></div>
            <p className="text-2xl text-orange-400 font-semibold">Loading, please wait...</p>
          </div>
      }

      {
        items &&

          <div>
            
            <div className="m-2 flex items-center border-2 border-slate-400 rounded-lg p-2">
                        
                <div><AiOutlineSearch size={24} /></div>

                <input
                    ref={search}
                    type="text"
                    className="outline-none px-2"
                    onChange={handleSearch}
                    placeholder="Search..."
                />

            </div>

            <div className="flex justify-center">
            
              <div className="m-2">
                
                <Select
                  isMulti
                  options={categories}
                  value={selectedCategories}
                  onChange={handleCategoryChange}
                  placeholder="Select Categories"
                  className="basic-multi-select"
                  classNamePrefix="select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderRadius: '1.5rem',
                      border: '1px solid #cbd5e0',
                      backgroundColor: '#f8fafc',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }),
                  }}
                />

              </div>

              <div className="flex m-2 items-center text-gray-500 font-semibold border bg-slate-50 border-slate-300 rounded-3xl p-2 cursor-pointer" onClick={handleSort}>
                <div>Sort by Price</div>
                {sort !== 1 && <AiOutlineArrowUp />}
                {sort === 1 && <AiOutlineArrowDown />}
              </div>

            </div>

          </div>
      }
        
      {filteredItems && filteredItems.map(item => <ItemCard key={item.id} props={item} />)}
    
    </div>
  )
}

export default Body;