import React from 'react'

const Cards = ({item}) => {
    
  return (
    <> 
    <div>
    <div className=" hover:scale-95 card bg-base-100 w-55  shadow-xl ">
  <figure>
    <img
      src= {item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p> {item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 p-3 hover:text-white duration-300">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
