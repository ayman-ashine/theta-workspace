import { useEffect, useState } from "react"

export default function Test() {
    
    const [data, setData] = useState(0)
    let worker = null

    useEffect(() => {

        worker = new Worker('/worker_test.js')

    }, [])

    const start = () => {

        worker.postMessage('52036')
        worker.onmessage = (data) => {
            console.log(data.data)
        }

    }

    return (
        <>
            {data}
            <button onClick={start}>START</button>
        </>
    )

}