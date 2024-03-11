'use client';
import React from 'react';
import CountUp from 'react-countup'

const Counter = ({ end }: any) => {
    return (
        <CountUp end={end} duration={5} />
    );
};

export default Counter;