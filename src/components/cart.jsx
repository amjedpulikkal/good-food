import { motion } from "framer-motion";
import { toast } from "react-toastify";

export function Cart({ isOppen, items,setCart,setIsOppen }) {
  console.log(items);
  
  const PlaceOrder=()=>{
    setCart([])
    setIsOppen(false)
    toast.success("Order placed successfully!");
  }


  return (
    <>
      {isOppen && (
        <motion.div className="w-[700px]  z-20  min-h-[80%] absolute p-4 bg-white border right-0 rounded-es-3xl">
          <p className="text-center text-4xl font-extrabold">Your Basket</p>

          <div className="border rounded-2xl   mt-10 px-4  ">
            <div className="flex mt-4 justify-between">
              <p>image</p>
              <p>name</p>
              <p>selected size</p>
              <p>price</p>

            </div>
            {!!!items.length && (
              <p className="text-center mt-6 text-3xl mb-4">No items</p>
            )}
            {items.map((data) => {
              return (
                <div className="flex mt-4 justify-between">
                  <img
                    src={data.image}
                    width={80}
                    className="rounded-2xl"
                    alt=""
                  />
                  <p>{data.name}</p>
                  <p>{data.size.itemName}</p>
                  <p>${data.size?.price}</p>
                  
                </div>
              );
            })}
          </div>
          <div className="left-0 absolute bottom-0 w-full">
            <div className="flex justify-between px-10 pb-7 text-xl ">
              <p>Total</p>
              <p>${items.reduce((acc, v) => acc + v.size.price, 0)}</p>
            </div>
            <button onClick={()=>PlaceOrder()}
              className={` w-full hover:bg-orange-700 transition-colors  bg-orange-500 text-white font-semibold text-xl h-12 rounded-ee-3xl rounded-es-3xl `}
            >
              Place order
              {/* <TiTick /> */}
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
