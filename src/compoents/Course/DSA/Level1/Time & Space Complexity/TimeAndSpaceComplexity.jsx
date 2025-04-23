import React from 'react';
import TimeAndSpaceComplexityIntro from './TimeAndSpaceComplexityIntro';
import ConstantTimeExplanation from './TimeCom/ConstantTimeExplanation';
import LogarithmicTimeExplanation from './TimeCom/LogarithmicTimeExplanation';
import LinearTimeExplanation from './TimeCom/LinearTimeExplanation';
import LinearithmicTimeExplanation from './TimeCom/LinearithmicTimeExplanation';
import QuadraticTimeExplanation from './TimeCom/QuadraticTimeExplanation';
import ExponentialTimeExplanation from './TimeCom/ExponentialTimeExplanation';
import FactorialTimeExplanation from './TimeCom/FactorialTimeExplanation';
import ConstantSpaceTimeExplanation from './SpaceCom/ConstantSpaceTimeExplanatio';
import LinearSpaceTimeExplanation from './SpaceCom/LinearSpaceTimeExplanation';
import QuadraticSpaceExplanation from './SpaceCom/QuadraticSpaceExplanation';
import LogarithmicSpaceExplanation from './SpaceCom/LogarithmicSpaceExplanation';

const TimeAndSpaceComplexity = () => {
    return (
        <div>
            <h1 className='text-5xl font-extrabold text-center m-10 text-red-700 '>Time and Space Complexity</h1>
            <TimeAndSpaceComplexityIntro/> 
            {/* Time complexity   */}
             <h1 className='text-5xl font-bold text-center m-10 text-red-700 '>Time Complexity</h1>
             <ConstantTimeExplanation/>
            <LogarithmicTimeExplanation/>
            <LinearTimeExplanation/> 
            <LinearithmicTimeExplanation/>
            <QuadraticTimeExplanation/>
             <ExponentialTimeExplanation/>
            <FactorialTimeExplanation/>

            {/* Space complexity */}
            <h1 className='text-5xl font-bold text-center m-10 text-red-700 '>Space Complexity</h1>
            <ConstantSpaceTimeExplanation/>
            <LinearSpaceTimeExplanation/>
            <QuadraticSpaceExplanation/>
            <LogarithmicSpaceExplanation/>
        </div>
    );
};

export default TimeAndSpaceComplexity;