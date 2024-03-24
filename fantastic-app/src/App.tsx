import React, { useState, useEffect } from 'react';  
import DutyForm from './components/DutyForm'; 
import './App.css';  
  
interface Duty {  
  id: string;  
  name: string;  
}  
  
function App() {  
  const [duties, setDuties] = useState<Duty[]>([]);  
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://app:3000';  

  useEffect(() => {  
    fetchDuties();  
  }, []);  
  
  const fetchDuties = async () => {  
    try {  
      const response = await fetch(`${backendUrl}/duties`);  
      const duties = await response.json();  
      setDuties(duties);  
    } catch (error) {  
      console.error('Error fetching duties:', error);  
    }  
  };  
  
  const handleAddDuty = async (name: string) => {  
    try {  
      const response = await fetch(`${backendUrl}/duties`, {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({ name }),  
      });  
      if (!response.ok) {  
        throw new Error(`Error: ${response.status}`);  
      }  
      const newDuty = await response.json();  
      setDuties([...duties, newDuty]); // Update the local state with the new duty  
    } catch (error) {  
      console.error('Error adding new duty:', error);  
    }  
  };  
  
  return (  
    <div className="App">  
      <h1>To-Do List</h1>  
      <DutyForm onSubmit={handleAddDuty} /> 
      {duties.map((duty) => (  
        <div key={duty.id}>{duty.name}</div>  
      ))}  
    </div>  
  );  
}  
  
export default App;  
