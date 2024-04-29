import React,{useState}from 'react';
import logo from './logo.svg';
import Transactionform from './components/transaction form';
import Tabletransaction from './components/table';
import FilterTransaction from './components/searchbar';
import './App.css';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
 const [transactions,setTransactions]=useState([]);
  const handleTransactions= (newTransaction) =>
    {
      setTransactions([...transactions,newTransaction])
      };
      return(
        <div className="App">
          <div className="App-header">
          <h1 >The Royal Bank of Flatiron</h1>
          </div>
          <div class="filter-transaction">
            <FilterTransaction/>
            </div>
          <div className='transaction-form'>
            <Transactionform onsubmit={handleTransactions}/>
            </div>
            <div className='table'>
              <Tabletransaction Transactions={transactions}/>
            </div>
        </div>
      )
    };  
export default App;
