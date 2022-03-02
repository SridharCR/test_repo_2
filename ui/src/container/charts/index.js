import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DatePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/field-base';
import './index.css';
import Button from '@atlaskit/button';

const data1 = [
    {
        time: 'Jan 2021',
        count: 4000,
    },
    {
        time: 'Feb 2021',
        count: 2000,
    },
    {
        time: 'Mar 2021',
        count: 4000,
    }
];

const generateDataPoints = () => {

}

export const InsuranceLineChart = (props) => {
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    var chartData = {}
    var [chartDataPoints, setChartDataPoints] = useState([]);

    const [data, setData] = useState(null)
    useEffect(() => {
      let url = "http://192.168.0.12:5000/api/v1/bcg/insurance"
      axios.get(url).then(res => setData(res.data))
    }, [])
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    const generateDataPoints = () => {
        if(data){
            for( var index = 0; index < data.length; index++){
                var date = data[index]['Date of Purchase']
                if (chartData[date]){
                    chartData[date] += 1
                }else{
                    chartData[date] = 1
                }
            }
        }
        Object.keys(chartData).map((key) => {
            date = new Date(key)
            var dateKey = date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
            chartDataPoints.push({time: dateKey, count: chartData[key], date: key}) 
        })
        chartDataPoints.sort((a,b) => (new Date(a.date) > new Date(b.date)) ? 1 : ((new Date(b.date) > new Date(a.date) ? -1 : 0)))
    }
    const updateChart = (start, end) => {
        var updatedData = []
        if (new Date(end) - new Date(start) > 0) {
            for( var index = 0; index < chartDataPoints.length; index++){
                console.log('test')
                if ((new Date(chartDataPoints[index].date) > new Date(start)) && new Date(chartDataPoints[index].date) < new Date(end))
                    updatedData.push(chartDataPoints[index])
            }
        }
        setChartDataPoints(updatedData)
        console.log("update", chartDataPoints)
    }
    generateDataPoints()
    return (
        <div className='line-chart-container'>
            <LineChart width={500} height={300} data={chartDataPoints}>
                <XAxis dataKey="time" />
                <YAxis dataKey="count" />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="time" stroke="#8884d8" />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
            <div className='flexbox'>
                <div className='flexitem'>
                    <Label label="Start period" />
                    <DatePicker
                        dateFormat="DD/MMM/YY"
                        selectProps={{
                            placeholder: 'e.g. 31/Dec/18',
                        }}
                        onChange={(e) => {console.log("start", e); setStart(e); updateChart(start, end)}}
                    />
                </div>
                <div className='flexitem'>
                    <Label label="End period" />
                    <DatePicker
                        dateFormat="DD/MMM/YY"
                        selectProps={{
                            placeholder: 'e.g. 31/Dec/18',
                        }}
                        onChange={(e) => {console.log("end", e); setEnd(e); updateChart(start, end)}}
                    />
                </div>
            </div>
        </div>
    );
}

