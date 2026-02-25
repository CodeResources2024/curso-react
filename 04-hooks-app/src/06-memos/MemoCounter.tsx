import { useCounter } from '@/hooks/useCounter'
import { useMemo } from 'react'


const heavyStuff = (iterationNumber: number) => {
    console.time('Heavy_stuff_started')
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahi vamos...')

    }

    console.timeEnd('Heavy_stuff_started')


    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {


    const { counter, increment, decrement } = useCounter(40000);

    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1>MEMO USE MEMO - {myHeavyValue}</h1>
            <hr />
            <h4>Counter: {counter}</h4>
            <button className='bg-blue-500 text-white rounded-md cursor-pointer text-2xl px-2 py-1' onClick={increment}>+1</button>
            <button className='bg-blue-500 text-white rounded-md cursor-pointer text-2xl px-2 py-1' onClick={decrement}>-1</button>

        </div>
    )
}
