import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const ChartTwo = () => {
  const servicesData = [
    {
      "services": "Blood Test",
      "Booked": 150,
      "Pending": 30,
      "Complete": 120
    },
    {
      "services": "MRI Scan",
      "Booked": 75,
      "Pending": 15,
      "Complete": 60
    },
    {
      "services": "X-Ray",
      "Booked": 100,
      "Pending": 20,
      "Complete": 80
    },
    {
      "services": "CT Scan",
      "Booked": 85,
      "Pending": 10,
      "Complete": 75
    },
    {
      "services": "Ultrasound",
      "Booked": 90,
      "Pending": 5,
      "Complete": 85
    },
    {
      "services": "ECG",
      "Booked": 65,
      "Pending": 12,
      "Complete": 53
    },
    {
      "services": "Mammogram",
      "Booked": 40,
      "Pending": 4,
      "Complete": 36
    },
    {
      "services": "Liver Test",
      "Booked": 55,
      "Pending": 8,
      "Complete": 47
    },
    {
      "services": "Kidney Test",
      "Booked": 60,
      "Pending": 6,
      "Complete": 54
    },
    {
      "services": "Thyroid Test",
      "Booked": 70,
      "Pending": 10,
      "Complete": 60
    }
  ]
  

  return (
    <div style={{ width: "100%" }}>
      <p>Maybe some other content</p>

      <BarChart
        width={1024}
        height={300}
        data={servicesData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="services" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Booked"
          fill="blue"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="Complete"
          fill="green"
          activeBar={<Rectangle fill="red" stroke="red" />}
        />
        <Bar
          dataKey="Pending"
          fill="red"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </div>
  );
};

export default ChartTwo;
