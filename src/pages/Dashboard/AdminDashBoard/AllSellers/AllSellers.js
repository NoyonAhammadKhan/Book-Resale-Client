import { useQuery } from '@tanstack/react-query';
import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    
        // const [sellers,setSellers]=useState([]);
        // useEffect(()=>{
        //     fetch(`https://usedbook-noyonahammadkhan.vercel.app/users?role=seller`)
        //     .then(res=>res.json())
        //     .then(data=>setSellers(data))
        // },[]);

        const { data: sellers= [], refetch, isLoading } = useQuery({
          queryKey: ['books/', 'seller'],
          queryFn: async () => {
              const res = await fetch(`https://usedbook-noyonahammadkhan.vercel.app/users?role=seller`);
              const data = await res.json();
              return data
          }
      })
      const handleDelete=(id)=>{
        console.log(id);
        fetch(`https://usedbook-noyonahammadkhan.vercel.app/users?id=${id}`,{
          method:'DELETE',
          headers:{
            authorization:`Bearer ${localStorage.getItem('accessItem')}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        if(data.deletedCount > 0){
          toast.success('You have successfully deleted the seller')
          refetch();
        }
        })
      }
      const handleVarify=()=>{

      }
        return (
            <div>
                <h1>All Sellers</h1>
                <Table>
      <Table.Head>
      <Table.HeadCell>
          Serial No.
        </Table.HeadCell>
        <Table.HeadCell>
          User Name
        </Table.HeadCell>
        <Table.HeadCell>
          User Email
        </Table.HeadCell>
        <Table.HeadCell>
          Verification
        </Table.HeadCell>
        <Table.HeadCell>
          Action
        </Table.HeadCell>
        
      </Table.Head>
      <Table.Body className="divide-y">
       {
        sellers.map((seller,i)=> <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {i+1}
        </Table.Cell>
        <Table.Cell>
          {seller.name}
        </Table.Cell>
        <Table.Cell>
          {seller.email}
        </Table.Cell>
        <Table.Cell>
        <Button onClick={()=>{handleVarify(seller._id)}} gradientMonochrome="purple">
          Verify
        </Button>
        </Table.Cell>
        <Table.Cell>
        <Button onClick={()=>{handleDelete(seller._id)}} gradientMonochrome="failure">
          Delete
        </Button>
        </Table.Cell>
      </Table.Row>)
       }
        
       
      </Table.Body>
    </Table>
            </div>
        );

};

export default AllSellers;