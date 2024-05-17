import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
const DashGraph = () => {
    const data = [
        {
          "month": "Jan 2024",
          "receipt": 4000,
          "revenue": 2400,
          "amt": 2400
        },
        {
          "month": "Feb 2024",
          "receipt": 3000,
          "revenue": 1398,
          "amt": 2210
        },
        {
          "month": "Mar 2024",
          "receipt": 2000,
          "revenue": 9800,
          "amt": 2290
        },
        {
          "month": "Apr 2024",
          "receipt": 2780,
          "revenue": 3908,
          "amt": 2000
        },
        {
          "month": "May 2024",
          "receipt": 1890,
          "revenue": 4800,
          "amt": 2181
        },
        {
          "month": "Jun 2024",
          "receipt": 2390,
          "revenue": 3800,
          "amt": 2500
        },
        {
          "month": "Jul 2024",
          "receipt": 3490,
          "revenue": 4300,
          "amt": 2100
        }
      ]
      
      

    
    return (
        <div className="flex w-[60%]">
            <LineChart width={950} height={400} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <Legend layout="horizontal" verticalAlign="top" />

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <Line type="monotone" dataKey="receipt" stroke="#82ca9d" />
            </LineChart>

        </div>
    )
}

export default DashGraph
