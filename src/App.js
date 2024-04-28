import React,{useState}from 'react';
import logo from './logo.svg';
import Transactionform from './components/transaction form';
import Table from './components/table';
import FilterTransaction from './components/searchbar';
import './App.css';
import './Header.css';

const App=()=>{
 const [transactions,setTransactions]=useState([]);
  const handleTransactions= (newTransaction) =>
    {
      setTransactions([...transactions,newTransaction])
      };
      return(
        <div className="App">
          <h1 >The Royal Bank of Flatiron</h1>
          <div className="filter-transaction">
            <FilterTransaction/>
            </div>
          <div className='header'>
          </div>
          <div className='transaction-form'>
            <Transactionform onsubmit={handleTransactions}/>
            
            </div>
            <div className='table'>
              <Table Transactions={transactions}/>
            </div>
        </div>
      )
    };  
export default App;
