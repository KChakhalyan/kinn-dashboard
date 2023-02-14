import { PureComponent } from "react";
import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
} from "recharts";
import "./chart.scss";

const Chart = ({ aspect, title }) => {
   const data = [
      { name: "January", Total: 1200, avarage: 350 },
      { name: "February", Total: 1100, avarage: 1350 },
      { name: "March", Total: 800, avarage: 1550 },
      { name: "April", Total: 950, avarage: 750 },
      { name: "May", Total: 3200, avarage: 350 },
      { name: "June", Total: 400, avarage: 500 },
   ];
   return (
      <div className="chart">
         <div className="chart-title">{title}</div>
         <ResponsiveContainer width="100%" aspect={aspect}>
            <AreaChart
               width={730}
               height={250}
               data={data}
               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
               <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                     <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                     <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
               </defs>
               <XAxis dataKey="name" stroke="gray" />
               <YAxis />
               <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
               <Tooltip />
               <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
               />
               <Area
                  type="monotone"
                  dataKey="avarage"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Chart;
