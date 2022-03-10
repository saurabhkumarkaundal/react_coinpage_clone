import { useState } from 'react';
import './App.css';
import {Table} from 'react-bootstrap'


function App() {

const dummyData=[
  {
    MARKET:"BTC/USDT", MINIMUM_ORDER_SIZE: "0.00005", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"BTC/INR", MINIMUM_ORDER_SIZE: "0.00005", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"ETH/USDT", MINIMUM_ORDER_SIZE: "0.001", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"ETH/INR", MINIMUM_ORDER_SIZE: "0.001", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"ETH/BTC", MINIMUM_ORDER_SIZE: "0.001", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"LTC/USDT", MINIMUM_ORDER_SIZE: "0.01", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"USDT/INR", MINIMUM_ORDER_SIZE: "1.5", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"LTC/INR", MINIMUM_ORDER_SIZE: "0.01", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"SHIB/INR", MINIMUM_ORDER_SIZE: "50000", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"SHIB/USDT", MINIMUM_ORDER_SIZE: "50000 ", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"DOGE/INR", MINIMUM_ORDER_SIZE: "10", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"DOGE/USDT", MINIMUM_ORDER_SIZE: "10", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"BTC/USDT", MINIMUM_ORDER_SIZE: "0.00005", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"BTC/INR", MINIMUM_ORDER_SIZE: "0.00005", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"ETH/USDT", MINIMUM_ORDER_SIZE: "0.001", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"ETH/INR", MINIMUM_ORDER_SIZE: "0.001", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"ETH/BTC", MINIMUM_ORDER_SIZE: "0.001", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"LTC/USDT", MINIMUM_ORDER_SIZE: "0.01", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"USDT/INR", MINIMUM_ORDER_SIZE: "1.5", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"LTC/INR", MINIMUM_ORDER_SIZE: "0.01", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"SHIB/INR", MINIMUM_ORDER_SIZE: "50000", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"SHIB/USDT", MINIMUM_ORDER_SIZE: "50000 ", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"DOGE/INR", MINIMUM_ORDER_SIZE: "10", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  },
  {
    MARKET:"DOGE/USDT", MINIMUM_ORDER_SIZE: "10", MAKER_FEE:"0.125%", TAKER_FEE:"0.125%", STATUS:"Enabled"
  }
];


  const[value,setValue]=useState('');
  const[dataSource,setDataSource]=useState(dummyData);
  const[tableFilter,setTableFilter]=useState([]);

const filterData=(e)=>{
  if(e.target.value !=""){
    setValue(e.target.value);
    const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>
      String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
      ));
      setTableFilter([...filterTable])
  }else{
    setValue(e.target.value);
    setDataSource([...dataSource])
  }
}

  return (
    <div className="App">
      <h1>COINDHAN</h1>
      <label>Search:-</label>
      <input id='search' placeholder='Enter name...'  value={value} onChange={filterData}></input>
        <Table className="table table-striped table-bordered">
          <thead>
          <tr id='main_heading'><th>TRADING FEES</th>
            <th>DEPOSITE & WITHDRAWAL FEES</th>
            </tr>
          <tr id='table_heading'>
          <th>MARKET</th>
          <th>MINIMUM ORDER SIZE</th>
          <th>MAKER FEE</th>
          <th>TAKER FEE</th>
          <th>STATUS</th>
          </tr>
          </thead>
          <tbody>
            {value.length > 0 ?tableFilter.map((items,i)=>{
              return(
                <tr key={i}>
                <td>{items.MARKET}</td>
                <td>{items.MINIMUM_ORDER_SIZE}</td>
                <td>{items.MAKER_FEE}</td>
                <td>{items.TAKER_FEE}</td>
                <td id='status'>{items.STATUS}</td>
                </tr>
              )
            })
            :
            dataSource.map((items,k)=>{
              return(
                <tr key={k}>
                <td>{items.MARKET}</td>
                <td>{items.MINIMUM_ORDER_SIZE}</td>
                <td>{items.MAKER_FEE}</td>
                <td>{items.TAKER_FEE}</td>
                <td id='status'>{items.STATUS}</td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
    </div>
  );
}

export default App;
