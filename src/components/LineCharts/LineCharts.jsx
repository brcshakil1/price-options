import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const studentData = [
        { student_id: 1, name: "Alice", math_mark: 92, physics_mark: 88, chemistry_mark: 78, biology_mark: 90 },
        { student_id: 2, name: "Bob", math_mark: 85, physics_mark: 77, chemistry_mark: 82, biology_mark: 88 },
        { student_id: 3, name: "Charlie", math_mark: 78, physics_mark: 68, chemistry_mark: 74, biology_mark: 79 },
        { student_id: 4, name: "David", math_mark: 94, physics_mark: 91, chemistry_mark: 87, biology_mark: 95 },
        { student_id: 5, name: "Eve", math_mark: 89, physics_mark: 85, chemistry_mark: 80, biology_mark: 92 },
        { student_id: 6, name: "Frank", math_mark: 76, physics_mark: 72, chemistry_mark: 71, biology_mark: 75 },
        { student_id: 7, name: "Grace", math_mark: 88, physics_mark: 82, chemistry_mark: 85, biology_mark: 89 },
        { student_id: 8, name: "Hannah", math_mark: 91, physics_mark: 89, chemistry_mark: 90, biology_mark: 93 },
        { student_id: 9, name: "Ian", math_mark: 82, physics_mark: 75, chemistry_mark: 79, biology_mark: 83 },
        { student_id: 10, name: "Jack", math_mark: 87, physics_mark: 80, chemistry_mark: 84, biology_mark: 88 }
      ];
      
    return (
        <div>
            <LineChart width={600} height={600} data={studentData}>
                <XAxis allowDataOverflow name='name'/>
                <YAxis />
                <Line type="monotone" dataKey="math_mark" stroke="red" />
                <Line type="monotone" dataKey={"physics_mark"} stroke="green" />
                <Line type="monotone" dataKey={"chemistry_mark"} stroke="yellow" />
                <Line type="monotone" dataKey={"biology_mark"} stroke="blue" />
            </LineChart>
        </div>
    );
};

export default LineCharts;