// import { LineChart, Line, XAxis, YAxis } from 'recharts';

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const LineCharts = () => {

    const subjectMarkData = [
        { id: 1, student: "Alice", math: 85, physics: 78, chemistry: 90 },
        { id: 2, student: "Bob", math: 70, physics: 85, chemistry: 75 },
        { id: 3, student: "Charlie", math: 92, physics: 88, chemistry: 85 },
        { id: 4, student: "David", math: 65, physics: 70, chemistry: 80 },
        { id: 5, student: "Emma", math: 88, physics: 95, chemistry: 92 },
        { id: 6, student: "Frank", math: 78, physics: 82, chemistry: 88 },
        { id: 7, student: "Grace", math: 73, physics: 68, chemistry: 70 },
        { id: 8, student: "Hannah", math: 90, physics: 87, chemistry: 84 },
        { id: 9, student: "Ian", math: 82, physics: 75, chemistry: 78 },
        { id: 10, student: "Jack", math: 75, physics: 80, chemistry: 85 }
    ]


    return (
        <div>
            <BarChart width={800} height={300} data={subjectMarkData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="student" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="math" fill="blue" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="chemistry" fill="green" activeBar={<Rectangle fill="red" stroke="red" />} />
                <Bar dataKey="physics" fill="red" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>



        </div>
    );
};

export default LineCharts;