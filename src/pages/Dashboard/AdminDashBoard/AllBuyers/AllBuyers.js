import { useQuery } from '@tanstack/react-query';
import { Button, Table } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    // const [buyers,setBuyers]=useState([])
    // useEffect(()=>{
    //     fetch(`https://usedbook-noyonahammadkhan.vercel.app/users?role=user`)
    //     .then(res=>res.json())
    //     .then(data=>setBuyers(data))
    // },[])
    const { data: buyers= [], refetch, isLoading } = useQuery({
      queryKey: ['users/', 'user'],
      queryFn: async () => {
          const res = await fetch(`https://usedbook-noyonahammadkhan.vercel.app/users?role=user`);
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
        toast.success('You have successfully deleted the user')
        refetch();
      }
      })
    }
    return (
        <div>
            <h1>All Buyers</h1>
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
      Action
    </Table.HeadCell>
    
  </Table.Head>
  <Table.Body className="divide-y">
   {
    buyers.map((buyer,i)=> <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {i+1}
    </Table.Cell>
    <Table.Cell>
      {buyer.name}
    </Table.Cell>
    <Table.Cell>
      {buyer.email}
    </Table.Cell>
   
    <Table.Cell>
    <Button onClick={()=>{handleDelete(buyer._id)}} gradientMonochrome="failure">
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

export default AllBuyers;