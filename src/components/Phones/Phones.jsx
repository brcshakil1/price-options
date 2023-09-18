import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            }) 
            setPhones(phoneWithFakeData)
        })
    },[])

    console.log(phones)
    return (
        <div>
            <h1 className="text-4xl text-white">Phones: {phones.length}</h1>
                <BarChart width={1200} height={450} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey={'name'} />
                    <YAxis />
                    <Tooltip />
                </BarChart>
        </div>
    );
};

export default Phones;