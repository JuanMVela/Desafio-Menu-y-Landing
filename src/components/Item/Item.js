import React from 'react'

const item = ({data}) => {

  return (
    <div className="max-w-2xl m-auto my-2 ">
        <div className="max-w-2xl m-auto my-2 shadow-xl">
          <div class=" bg-gray-100 flex justify-center items-center">
  <div class="container flex justify-center">
    <div class="max-w-sm">
      <div class="bg-white relative  hover:shadow-xl transition duration-500 rounded-lg">
        <img class="rounded-t-lg h-96 w-auto"  src={data.image} alt="" />
        <div class="py-6 px-8 rounded-lg bg-white">
          <h1 class="text-gray-700 font-bold text-2xl mb-3 w-96 hover:text-gray-900 hover:cursor-pointer">{data.title}</h1>
          <p class="text-gray-700 tracking-wide">{data.category}</p>
          <button class="mt-6 py-2 px-4 bg-[#6e5cec] text-gray-800 font-bold rounded-lg  hover:shadow-lg transition duration-300">Buy Now</button>
        </div>
        <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span class="text-md">${data.price}</span>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
  )
}

export default item