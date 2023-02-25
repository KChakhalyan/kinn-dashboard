import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';   
import './lineCharts.scss'

const LineCharts = () => {
    const data = [
        {
          name: '1',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '2',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '3',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '4',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '5',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '6',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '7',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      
        return (
          <div className='line-charts-container'>
            <LineChart width={200} height={100} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval="preserveEnd" />
              <YAxis interval="preserveEnd" />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
    
            <LineChart width={200} height={100} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval="preserveStart" />
              <YAxis interval="preserveStart" />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
    
            <LineChart width={200} height={100} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval="preserveStartEnd" />
              <YAxis interval="preserveStartEnd" />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
    
            <LineChart width={200} height={100} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} angle={25} dx={20}  />
              <YAxis />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        );
      }
export default LineCharts;