import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    //useEffect -->to handleEffect
    //()=>{}
    //[] --> Depedenacy array..
    const [count, setcount] = useState(0)
    useEffect(() => {
        console.log("useEffect called....")
    }, [count])
    return (
        <div>UseEffectDemo
            <h1>Count = {count}</h1>
            <button onClick={() => { setcount(count + 1) }}>INCRESE</button>
        </div>
    )
}

export default UseEffectDemo
