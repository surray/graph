import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import value from "./coinfantasy.json";
import "./linechart.css";


export default function Example() {
   
var data = value;

const ff=data.reduce((accumalator,object)=>{return accumalator +object.Rate;},0);
const mc=ff*50000;

var currentDate= new Date();
var currentTime= currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
let obj = data.find(o => o.Time ===currentTime);

      return (
        <div className='border'>
            <div className='header'>
                <div className='table1'>
                    
                        <div>
                            <p >Binance</p>
                        </div>
                        <div>
                        <p className='rate'>${obj.Rate}</p>
                        </div>
                        <div>
                        <p className='gain'>Gain/Loss 24hr:+7.12%</p>
                        </div>
                     
                </div>
                <div>
                    <table>
                        <tr>
                            <td className='table3'>15M</td>
                            <td className='table3'>1H</td>
                            <td className='table3'>4H</td>
                            <td className='table3'>24H</td>
                            <td className='table3'>1W</td>
                        </tr>
                    </table>
                </div>
            </div>
       <LineChart className='graph'
        width={700}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
       >
         <XAxis dataKey="Time" />
        
        <Tooltip />
          <Legend />
        <Line type="monotone" dataKey="Rate" stroke="#8884d8" activeDot={{ r: 4 }} />
        
      </LineChart>
      <table>
  
            <tr >
                <th className='table2'>Market Cap</th>
                <th className='table2'>Market Cap Rank</th>
                <th className='last table2'>24 hr Volume</th>
            </tr>
            <tr>
                <td>${mc}</td>
                <td>#8</td>
                <td>${ff}</td>
            </tr>
            
        </table>

      </div>
         
      );
    }

  
