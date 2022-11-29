import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: sellerProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['sellerProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://usedbook-noyonahammadkhan.vercel.app/sellerProducts?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })
    const {productName,productCondition,productLocation,resalePrice,originalPrice,usedYear,status}=sellerProducts;
    console.log(sellerProducts)
    const handlePublish=(id)=>{
        fetch(`https://usedbook-noyonahammadkhan.vercel.app/advertise/${id}`,{
            method:'PUT',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Product advertise successful.')
                refetch();
            }    
        })
    }
    return (
        <div>
            <h1>{sellerProducts.length}</h1>
            <div className=''>

                <div className="sm:rounded-lg">
                    <table className="w-full overflow-scroll text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-1">
                                    Serial No 1
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Book Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Original Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Resale Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Location
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Year Of Used
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Condition
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Availability
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Advertise
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellerProducts.map((product,i)=>
                               
                                    <tr key={i} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="py-4 px-6">
                                        {i+1} {console.log(product)}
                                    </td>
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       <p>{product.productName}
  </p>                                  </th>
                                    <td className="py-4 px-6">
                                        {product.originalPrice}
                                    </td>
                                    <td className="py-4 px-6">
                                       {product.resalePrice}
                                    </td>
                                    <td className="py-4 px-6">
                                        {product.productLocation}
                                    </td>
                                    <td className="py-4 px-6">
                                       {product.usedYear}
                                    </td>
                                    <td className="py-4 px-6">
                                       {product.productCondition}
                                    </td>
                                    <td className="py-4 px-6">
                                       {product.status}
                                    </td>
                                    <td className="py-4 px-6">
                                    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Any Properties</button>
                                    </td>
                                    <td className="py-4 px-6">
                                        {product.status==='available' ? <button  onClick={()=>{handlePublish(product._id)}} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Publish Advertisement</button> : ''}
                                    </td>
                                   
                                </tr>
                                )
                            }
                           
                          
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyProducts;