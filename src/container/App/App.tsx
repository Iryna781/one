import { Button } from '@mui/material'
import { useState } from 'react'
import './App.css'
type Props = {}
const App = (props: Props) => {
    const [count, setCount] = useState<number>(0)
    const [count1, setCount1] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)

    return (
        <>
            <div className="button">
                <Button variant="outlined" onClick={() => setCount(count + 1)}>
                    change count ({count})
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setCount1(count1 + 1)}
                >
                    change count ({count1})
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setCount2(count2 + 1)}
                >
                    change count ({count2})
                </Button>
            </div>
        </>
    )
}
export default App
