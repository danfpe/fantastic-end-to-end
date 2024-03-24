import React, { useState } from 'react';  
  
interface DutyFormProps {  
  onSubmit: (name: string) => void;  
}  
  
const DutyForm: React.FC<DutyFormProps> = ({ onSubmit }) => {  
  const [name, setName] = useState('');  
  
  const handleSubmit = (event: React.FormEvent) => {  
    event.preventDefault();  
    if (name.trim()) {  
      onSubmit(name);  
      setName(''); // Reset the input after submission  
    }  
  };  
  
  return (  
    <form onSubmit={handleSubmit}>  
      <input  
        type="text"  
        value={name}  
        onChange={(e) => setName(e.target.value)}  
        required  
        placeholder="Enter duty name"  
      />  
      <button type="submit">Add Duty</button>  
    </form>  
  );  
};  
  
export default DutyForm;  
