import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useContext(AuthContext);
    const imageHostKey=process.env.REACT_APP_IMAGE_BB_KEY;
    const handleAddProduct=(data)=>{
        const image = data.productImg[0];
        const date = new Date();
        const day= date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const publishedDate = `${day}-${month}-${year}`
        const formData = new FormData();
        formData.append('image',image);
        const url =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            console.log(imgData)
            if(imgData.success){
                const imgUrl=imgData.data.url;
                const bookInfo={
                    productName:data.productName,
                    imgUrl:imgUrl,
                    description:data.description,
                    productLocation:data.sellLocation,
                    resalePrice:data.resalePrice,
                    originalPrice:data.originalPrice,
                    usedYear:data.usedYear,
                    sellerName:user.displayName,
                    postedTime:publishedDate,
                    sellerEmail:user.email,
                    sellerVerification:'',
                    status:'available',
                    productCondition:data.productCondition,
                    sellerPhone:data.sellerPhone,
                }
            

                fetch('https://usedbook.vercel.app/books',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization:`bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(bookInfo)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log('after posting book info',data)
                })
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <h1 className='text-5xl font-bold text-indigo-600 mb-5'>Please Added Your Product Here</h1>
            <div className='grid grid-cols-2 gap-x-9'>
           
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
                <input type="text"
                {...register("productName",{
                    required:"product name is required"
                })}
                id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Image</label>
                <input type="file"
                {...register("productImg",{
                    required:"product image is required"
                })}
                id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input type="text"
                {...register("description",{
                    required:"Description is required"
                })}
                id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Book Category</span></label>
                    <select {...register("category")} className="input input-bordered w-full max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Horror">Horror</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Science">Science</option>
                    </select>
             </div>
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                <input type="text"
                {...register("sellLocation",{
                    required:"Location is required"
                })}
                id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resale Price</label>
                <input type="text"
                {...register("resalePrice",{
                    required:"Resale price is required"
                })}
                id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Original Price</label>
                <input type="text"
                {...register("originalPrice",{
                    required:"product name is required"
                })}
                id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Years Of Used</label>
                <input type="text"
                {...register("usedYear",{
                    required:"used year is required"
                })}
                id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Email</label>
                <input type="text" defaultValue={user?.email}
                id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly/>
            </div>
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Name</label>
                <input type="text" defaultValue={user?.displayName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly/>
            </div>
            <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Book Condition:</span></label>
                    <select {...register("productCondition")} className="input input-bordered w-full max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                     </div>
            <div className="mb-6 form-control w-full max-w-xs">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input type="text"
                {...register("sellerPhone",{
                    required:"phone number is required"
                })}
                id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            
            </div>
            <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md             group-hover:bg-opacity-0">
             Add Product
        </span>
        </button>
            </form>

        </div>
    );
};

export default AddProducts;