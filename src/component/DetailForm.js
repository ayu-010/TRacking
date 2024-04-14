import React, { useState } from 'react';
import { createEntry,deleteEntry } from '../services/operation/formapi';
import toast from 'react-hot-toast';


const DetailForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState("");
  const[transaction,settransaction]=useState([]);


  
  const deleteTransaction = async (id) => {
    try { 


      console.log("id h ",id);
      const response = await deleteEntry(id);
      
      if (response) {
        const updateTransaction = transaction.filter((Element) => Element._id !== id);
        settransaction(updateTransaction);
        toast.success("Transaction deleted successfully");
      } else {
        toast.error("Failed to delete transaction");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the transaction");
      console.error("Error occurred:", error);
    }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      console.log("value after submitting is ",name,price,description,datetime);
    
     console.log("yeha tak shai chal rha yeha se createEntry ko call kar raHE H ");
      const response = await createEntry(name,price,description,datetime);
      
      console.log("Response from createEntry:", response);
      const finalresponse=response.data.data; 
      console.log(finalresponse);
      settransaction([...transaction,finalresponse]);

      if (response) {
        console.log("Response from the function call:", response);
        toast.success("Transcation added sucessfully")
        // Reset the form fields after successful submission
        setName("");
        setPrice("");
        setDescription("");
        setDatetime("");
      }
    } catch (error) {
      toast.error("Transcation can not be  added sucessfully")
      console.error("Error occurred:", error);
    }
  };
 
  const resetForm = () => {
    setName("");
    setPrice("");
    setDescription("");
    setDatetime("");
  };
    let balance=0;
   for( let sum of transaction)
   {
    const price=parseFloat(sum.price);
    balance=balance+price;
   }
      
   balance = balance.toFixed(2);

  return (

<div className=' w-screen h-screen flex flex-col items-center mt-20'>

<div className=" w-7/12  p-4       h-screen    flex-col items-center ">

      <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-4   text-center ">TOTAL BALANCE: {balance} ₹</h2>

      


      <form onSubmit={handleSubmit} className= "max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 " >
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter product"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-600"

            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Enter price"
          

            className='  border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-600  '

            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Enter description"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-600"

            required
          />
        </div>
        <div className="mb-4">
          <input
            type="datetime-local"
            value={datetime}
            onChange={(event) => setDatetime(event.target.value)}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-600"

            required
          />
        </div>


        <div className="mb-4">
          <button type="submit"   className="bg-blue-500 hover:bg-gradient-to-r from-purple-500 to-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105"
>
            Add new transaction
          </button>
        </div>


        <div>
        <p className="text-lg font-bold text-black">
  TOTAL TRANSACTION: {transaction.length}
</p>

        </div>
        
      </form>
      
      <div className="mt-6 h-full w-full  mx-auto">
        {transaction.map((transaction) => (
          <div key={transaction._id} className="transaction-item">
            {/* <div className=' border-t border-black'></div> */}
            <p className="text-lg font-bold text-blue-700"><span className="text-black font-semibold ">Name-:</span>{transaction.name}</p>
            <p className={`text-lg font-bold text-blue-700 ${transaction.price < 0 ? "text-red-500" : "text-green-500"}`}>
  <span className="text-black font-semibold">Price-:</span> ₹{transaction.price}
</p>


            <p className="text-lg font-bold text-blue-700"><span className="text-black font-semibold ">Description-:</span>{transaction.description}</p>
            <p className="text-lg font-bold text-blue-700"><span className="text-black font-semibold ">DateTime-:</span>{transaction.datetime}</p>

         
         
         <button onClick={()=> deleteTransaction(transaction._id)}   className="bg-blue-500 hover:bg-gradient-to-r from-purple-500 to-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105 mb-2"
>
            DELETE 
          </button>
        <div className=' border-b border-black mb-2'></div>
          </div>
        ))}
      </div>
     
    
   </div>
</div>

   
    
 
  
   
  );
};

export default DetailForm;
