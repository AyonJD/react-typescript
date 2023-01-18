// import React from 'react';

// interface MainProductObj { product: object, setOpenDetailsModal: any, }
// interface ProductData {
//   _id: any;
//   name: string;
//   image: string;
//   category: string;
//   brand: string;
//   price: number;
//   year: number;
// }

// const DetailsModal: React.FC<MainProductObj> = ({ product, setOpenDetailsModal }) => {
//     const { _id, name, image, category, brand, price, year } = product as ProductData;
//     console.log(_id)

//     return (
//         <div>
           


//             {/* Put this part before </body> tag */}
//             <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            // <label htmlFor='my-modal-5' className="modal modal-bottom sm:modal-middle">
            //     <label htmlFor='' className="modal-box relative">
            //         <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            //         <h3 className="text-lg font-bold py-10">Product Details Modal !</h3>
            //         <h1>{ _id}</h1>
            //     </label>
            // </label>
//         </div>
//     );
// };

// export default DetailsModal;


import React, { useEffect, useMemo, useState } from 'react';
import { ImCross } from 'react-icons/im';

interface MainProductObj { product: object, setOpenDetailsModal: any, }
interface ProductData {
  _id: any;
  name: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  year: number;
}

const DetailsModal: React.FC<MainProductObj> = ({ product, setOpenDetailsModal }) => {
    const { _id, name, image, category, brand, price, year } = product as ProductData;
    return (
        <div className='popup_wrapper'>
            <div className="popup_content relative">
                <ImCross onClick={() => setOpenDetailsModal(false)} className='absolute right-0 top-0 mr-4 mt-4 h-4 w-4 cursor-pointer' />
                <div>
                    {_id}
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;