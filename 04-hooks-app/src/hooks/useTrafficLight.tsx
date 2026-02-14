
import { useEffect, useState } from "react";

const colors =
{
    red: 'bg-red-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
};

// type TrafficLightColor = 'red' | 'yellow' | 'green';
type TrafficLightColor = keyof typeof colors;


export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countDown, setCountDown] = useState(5)

    useEffect(() => {
        if (countDown === 0) return;

        console.log(countDown)
        const intervalId = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [countDown])

    useEffect(() => {
        if (countDown > 0) return;


        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCountDown(5);

        if (light === 'red') {
            setLight('green');
            return;
        }
        if (light === 'green') {
            setLight('yellow');
            return;
        }
        if (light === 'yellow') {
            setLight('red');
            return;
        }

    }, [countDown, light]);

    return {
        //Props
        colors,
        light,
        countDown,

        //Computed
        percentage: (countDown / 5) * 100,
        greenLigth: light === 'green' ? colors.green : 'bg-gray-500',
        redLigth: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLigth: light === 'yellow' ? colors.yellow : 'bg-gray-500',

    }

}
