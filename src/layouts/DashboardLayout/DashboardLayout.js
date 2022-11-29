import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import { Navbar } from 'flowbite-react';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
      <div>
       
       
          <div className='w-8/12 mx-5 mt-32'>
           

           <div className='grid grid-cols-2'>
              <div className="">
              <div>
             
             <div className="z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-body-scrolling-label">
                 <h5 id="drawer-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
  
                 <div className="py-4 overflow-y-auto border border-fuchsia-600">
                     <ul className="space-y-2">
                         {
                             isAdmin && <>
                                 <li className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'><Link className='font-bold' to="/dashboard/all-sellers">All Sellers</Link></li>
                                 <li className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'><Link className='font-bold' to="/dashboard/all-buyers">All Buyers</Link></li>
                                 
  
                             </>
                         }
                         {
                             isSeller && <>
                                 <li className='mb-5'><Link className='font-bold text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'  to="/dashboard/add-products">Add Product</Link></li>
                                 
                                 <li className='mb-5'><Link className='font-bold text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' to="/dashboard/my-products">My Products</Link></li>
                                
                                
                                
  
                             </>
                           
                         }
                         {
                             (!isSeller && !isAdmin) && user &&<>
                                 <li className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'><Link className='font-bold' to="/dashboard/my-orders">My Orders</Link></li>
                                 
  
                             </>
                         }
                         {
                        user &&<>
                        <li className='mt-5 w-2/4 mx-16 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'><Link className='font-bold mt-5' to="/">Go to home</Link></li>
                        </> 
                         }
                        
  
                     </ul>
                     
                 </div>
             </div>
             </div>
             <div>
              
             </div>
    
              </div>
             
              <div>
                  <Outlet></Outlet>
              </div>
              </div>    
          </div>
      </div>
           


            

        
    );
};

export default DashboardLayout;