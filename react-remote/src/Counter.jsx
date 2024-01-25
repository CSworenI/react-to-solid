import React, { useEffect, useState } from "react";

const Counter = ({ counter }) => {
    const [count, setCount] = useState(0),
        increment = () => setCount(count + 1),
        decrement = () => setCount(count - 1);

    useEffect(() => { setCount(counter); }, []);

    return (
        <div>
            <button className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 cursor-pointer" onClick={decrement}>-</button>
            <span> {count} </span>
            <button className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 cursor-pointer" onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
