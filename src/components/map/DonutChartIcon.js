import React from 'react';

//sum, red, yellow, green
export default function DonutChartIcon({ data }) {
    return (
        <svg
            width='128px' height='128px' viewBox='0 0 42 42'
            className='donut'
            role="img" xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className='donut-hole' cx='21' cy='21'
                r='15.91549430918954'
                fill='#fff'
            />

            <circle
                className='donut-segment' cx='21' cy='21'
                r='15.91549430918954'
                fill='transparent' stroke='#ff0000' strokeWidth='8'
                strokeDasharray={`${(data.red / data.sum) * 100} ${100 - ((data.red / data.sum) * 100)}`}
                strokeDashoffset='25'
            />
            <circle
                className='donut-segment' cx='21' cy='21'
                r='15.91549430918954'
                fill='transparent' stroke='#ddff00' strokeWidth='8'
                strokeDasharray={`${(data.yellow / data.sum) * 100} ${100 - ((data.yellow / data.sum) * 100)}`}
                strokeDashoffset={`${125 - (data.red / data.sum) * 100}`}
            />
            <circle
                className='donut-segment' cx='21' cy='21'
                r='15.91549430918954'
                fill='transparent' stroke='#00ff00' strokeWidth='8'
                strokeDasharray={`${(data.green / data.sum) * 100} ${100 - ((data.green / data.sum) * 100)}`}
                strokeDashoffset={`${125 - ((data.red + data.yellow) / data.sum) * 100}`}
            />
            <g textAnchor={'middle'} style={{ fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                <text x='50%' y='60%'>
                    {data.sum}
                </text>
            </g>
        </svg>
    );
}
