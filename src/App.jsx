import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import "./App.css";
import { product } from "./data/data";
import { Cart } from "./components/cart";
import { AddItem } from "./components/additems"; 


  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cart ,setCart]= useState([])
  const [filterData,setFilterData] = useState(product)
  const [values,setValues] = useState()

  const [addItemModal,setAddItemModal]= useState({isOpen:false,items:null})
  const [isOppen,setIsOppen] = useState(false)

  const serchitems = (searchInput)=>{

    // const regex = text.s//i
    console.log(searchInput)

    const data =  product.filter((data)=>{
      return   data.name?.toLowerCase().includes(searchInput.toLowerCase())
    })
    setFilterData(data)
      

  }

  const addToCart = (data)=>{

    setAddItemModal({isOpen:true,items:data})
    // setCart([...cart,data])
  }




  return (
    <>
      <div className="bg-orange-500 w-screen h-screen overflow-hidden ">
     {addItemModal.isOpen && <AddItem items={addItemModal.items} setOpen={setAddItemModal} setCart={setCart}  />}
        <nav className=" w-full h-20 flex justify-between px-5 py-2 items-center">
          <div className="w-72 h-full flex items-center text-white font-extrabold text-3xl">
            <img
              src="/good-food-logo-template_79169-17-removebg-preview (2).png"
              width={120}
              height={450}
              alt=""
            />
            <p>Good Food</p>
          </div>
            {/* serchBar */}

          <div className="rounded-2xl h-full flex  items-center px-3">
            <FaSearch size={35} className="text-white absolute  z-30 ml-3" />
            <input
            onChange={e=>serchitems(e.target.value.trim())}
              type="text"
              placeholder="What you want eat to day"
              className=" placeholder:text-white pl-16 text-xl text-white backdrop-blur-sm bg-white/15 w-[600px] rounded-2xl  h-full "
            />
          </div>

          {/* User Profile */}
          <div className="backdrop-blur-sm bg-white/15 w-56 rounded-xl h-full flex justify-around items-center ">
            <div className="flex items-center   ">
              <img
                className="rounded-full w-16 h-full "
                src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
                alt=""
              />
              <p className="text-white font-extrabold text-2xl">Shobin</p>
            </div>
            {/* cart */}
            <div className={`relative *:hover:text-black rounded-full ${isOppen?"bg-white *:text-black ":""}  hover:bg-white transition-colors`}>
            <FaOpencart onClick={()=>setIsOppen(!isOppen)}
              className="text-white   p-1  hover:text-white/80 transition-colors"
              size={40}
            />
              {!!cart&&<div className="w-5 h-5 h text-white bg-slate-500 flex justify-center items-center absolute -top-1 -right-1 rounded-full ">
                    {cart.length}
              </div>}
            </div>
          </div>
        </nav>
    <ToastContainer/>

        {/* main page */}

        <div className="bg-white w-full h-full rounded-3xl px-6 p-7 grid  relative  md:grid-cols-4 grid-cols-2  gap-4 overflow-scroll  pb-28">
          {/* Cart page */}

          <Cart items={cart} isOppen={isOppen} setIsOppen={setIsOppen} setCart={setCart}/>
          {/* Product Card  */}
          {filterData.map((data) => {
            return (
              <div className="border-2  w-[300px]   rounded-3xl  relative  ">
                <p className="text-xl font-bold text-center my-4">{data.name}</p>

                <div className="flex items-center absolute bg-red-600  rounded-ee-3xl p-2">
                  <FaStar size={30} className="text-yellow-400" />
                  <FaStar size={30} className="text-yellow-400" />
                  <CiStar size={33} className="text-white" />
                  <CiStar size={33} className="text-white" />
                  <CiStar size={33} className="text-white" />
                </div>
                <div className="w-full   h-72 bg-cover bg-center " style={{backgroundImage:`url(${data.image})`}} />         

                <button onClick={()=>addToCart(data)} className={` w-full hover:bg-orange-700 transition-colors  bg-orange-500 text-white font-semibold text-xl h-12 rounded-ee-3xl rounded-es-3xl `}>
                  Add to cart
                  {/* <TiTick /> */}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
