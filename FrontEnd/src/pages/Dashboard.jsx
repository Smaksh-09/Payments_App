import React, { useEffect, useState } from 'react';
import { Search, User } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
 const [users,setUsers]=useState([]);
const [balance,setBalance]=useState("");
const token=localStorage.getItem("token");
useEffect(()=>{
  axios.get("http://localhost:3002/api/v1/account/balance",
     {
      headers:{
          Authorization: `Bearer ${token}`
      }
  })
  .then(response=>{
      setBalance(response.data.balance);
  })
},[token])
 const navigate=useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:3002/api/v1/user/bulk?filter=" + searchQuery)
    .then(response=>{
        console.log(response.data)
        setUsers(response.data.user)
    })
  },[searchQuery])
 
  return (
    <div className="min-h-screen bg-gray-400">
     
      <header className="flex justify-between items-center px-4 py-3 bg-white shadow-sm">
        <h1 className="text-xl font-semibold">PayTM App</h1>
        <div className="flex items-center gap-2">
          <span>Hello</span>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">U</span>
          </div>
        </div>
      </header>

    
      <main className="max-w-3xl mx-auto p-4">
      
        <div className="mb-8">
          <h2 className="text-lg font-medium">Your balance</h2>
          <p className="text-2xl font-semibold">{ Math.floor(balance)}</p>
        </div>


        <div>
          <h2 className="text-lg font-medium mb-4">Users</h2>
          
         
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            {users.map(user => (
              <div key={user._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600">{user.firstName[0]}</span>
                  </div>
                  <span className="font-medium">{user.firstName}</span>
                </div>
                <button onClick={(e)=>{
                  navigate(`/send?id=${user._id}&name=${user.firstName}`)
                }} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Send Money
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

