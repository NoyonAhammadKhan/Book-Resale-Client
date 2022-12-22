import { useQuery } from '@tanstack/react-query';
import { Avatar, Button, Table } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const {user}=useContext(AuthContext);

    const { data: books= [], refetch, isLoading } = useQuery({
        queryKey: ['booking/', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://usedbook-noyonahammadkhan.vercel.app/booking?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })
    const handlePay=()=>{

    }
    return (
        <div>
         <Table>
      <Table.Head>
      <Table.HeadCell>
          Serial No.
        </Table.HeadCell>
        <Table.HeadCell>
        Image 
        </Table.HeadCell>
        <Table.HeadCell>
          Book Name
        </Table.HeadCell>
        <Table.HeadCell>
          Price
        </Table.HeadCell>
        
        <Table.HeadCell>
          Action
        </Table.HeadCell>
        
      </Table.Head>
      <Table.Body className="divide-y">
       {
        books.map((book,i)=> <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {i+1}
        </Table.Cell>
        <Table.Cell>
          {/* <img className={book?.imgUrl} alt="Rounded avatar"/> */}
          <Avatar
    img={book.imgUrl}
    rounded={true}
  />
        </Table.Cell>
        <Table.Cell>
        {book.productName}
        </Table.Cell>
        <Table.Cell>
         ${book.resalePrice}
        </Table.Cell>
        
        <Table.Cell>
        <Button onClick={()=>{handlePay(book._id)}} gradientMonochrome="info">
          PAY
        </Button>
        </Table.Cell>
      </Table.Row>)
       }
        
       
      </Table.Body>
    </Table>
        </div>
    );
};

export default MyOrders;