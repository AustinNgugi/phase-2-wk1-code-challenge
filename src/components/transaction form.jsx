import React ,{useState}from 'react'
// here  I am creating the form 
const Transactionform=({onsubmit})=>{
    const [date,setDate]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const [amount,setAmount]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        onsubmit({date,description,category,amount});
        setDescription('');
        setAmount('');
        setDate('');
        setCategory('');
    }
    return (
<form onSubmit={handleSubmit}>
    <input type ='date'value={date}onChange={(e)=>{setDate(e.target.value)}}/>
    <input type="text"placeholder='Description'value={description}onChange={(e)=>setDescription(e.target.value)}/>
    <input type="text"placeholder='category'value={category}onChange={(e)=>setCategory(e.target.value)} />
<input type ="number"placeholder='Amount'value={amount }onChange={(e)=>setAmount(e.target.value)}/>
<button type='submit'>Add Transaction</button>
</form> 
 );

}



export default Transactionform;