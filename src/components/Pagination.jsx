import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'
import product11 from '../assets/product11.png'
import product12 from '../assets/product12.png'

// Example items, to simulate fetching from another resources.
const items = [
    {
        name:"Product1",
        src:product1,
        price:"22.00",
        badge:"New"
    },
    {
        name:"Product2",
        src:product2,
        price:"79.00",
        badge:"10%"
    },
    {
        name:"Product3",
        src:product3,
        price:"66.00",
        badge:"10%"
    },
    {
        name:"Product4",
        src:product4,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product5",
        src:product5,
        price:"10.00",
        badge:"New"
    },
    {
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product12",
        src:product12,
        price:"54.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product4",
        src:product4,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product5",
        src:product5,
        price:"10.00",
        badge:"New"
    },
    {
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },{
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },{
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },{
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },{
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },{
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product6",
        src:product6,
        price:"50.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product10",
        src:product10,
        price:"20.00",
        badge:"New"
    },
    {
        name:"Product11",
        src:product11,
        price:"34.00",
        badge:"10%"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product9",
        src:product9,
        price:"55.00",
        badge:"New"
    },
    {
        name:"Product7",
        src:product7,
        price:"49.00",
        badge:"10%"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    {
        name:"Product8",
        src:product8,
        price:"44.00",
        badge:"New"
    },
    
    
];



function Items({ currentItems }) {
  return (
    <div className='flex flex-wrap '>
      {currentItems &&
        currentItems.map((item) => (
          <div className='w-1/3 pb-16'>
            <Product  heading={item.name} src={item.src} price={item.price} badge={item.badge}/>
          </div>
        ))}
    </div>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
   <div className='flex justify-between'>
   <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-x-4"
        pageClassName="py-2 px-4 border border-solid border-black hover:bg-black hover:text-white"
      />
      <h3 className='text-sm text-third font-dm font-normal'>
      {`Products from ${itemOffset+1} to ${endOffset>items.length?items.length:endOffset} of ${items.length}`}
      </h3>
   </div>
    </>
  );
} 
export default Pagination