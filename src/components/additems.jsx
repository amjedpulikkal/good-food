import { motion } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { toast } from "react-toastify";

export function AddItem({ items, setOpen, setCart }) {
  const [size, setSize] = useState("");

  const chageSize = (data) => {
    setSize(data);
  };

  const addToCart = () => {
    if (size !== "") {
      setCart((pr) => [...pr, { ...items, size }]);
      setOpen({ isOpen: false, items: null });
      toast("successfully added");
    } else {
      toast("Please select size");
    }
  };
  console.log(items);
  return (
    <>
      <motion.div className="w-full z-30  h-full absolute overflow-hidden p-16 backdrop-blur-sm bg-white/15  border  right-0 rounded-es-3xl">
        <div className="flex border   items-center relative overflow-hidden bg-white rounded-3xl w-full h-full ">
          <div className="flex justify-end absolute top-4 right-4">
            <IoClose
              size={40}
              onClick={() => setOpen({ isOpen: false, items: null })}
            />
          </div>

          <div
            className="h-full w-[50%]  bg-black"
            style={{ backgroundImage: `url(${items.image})` }}
          />
          <div className="h-full w-full px-4 pt-3">
            <p className="text-5xl font-bold">{items.name}</p>

            <div className="mt-20 w-full border rounded-ss-2xl rounded-se-2xl py-3 pl-3 ">
              <p className="  font-bold">Select your size & crust</p>

              {items.subCatogary.map((data) => {
                return (
                  <>
                    <div className=" mt-5 flex gap-10 ">
                      <div className="flex">
                        <input
                          type="radio"
                          onChange={() => chageSize(data)}
                          className="w-20 accent-green-600"
                          name="item"
                          id=""
                        />
                        <div className="text-center">
                          <p>{data.itemName}</p>
                          <p>${data.price}</p>
                        </div>
                      </div>
                      <div className="">
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="">
              <button
                onClick={addToCart}
                className={`  w-full hover:bg-orange-700 transition-colors  bg-orange-500 text-white font-semibold text-xl h-12 rounded-ee-3xl rounded-es-3xl `}
              >
                Add to cart
                {/* <TiTick /> */}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
