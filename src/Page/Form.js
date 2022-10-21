import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Form() {
    const [url, setUrl] = useState()
    const [drodown, setDrodown] = useState()

    const handleSubmit = () => {
        console.log("Form Data is", url, drodown)

        if (drodown === 'get') {
            axios.get(url)
                .then((res) => {
                    console.log("Response ", res)
                })
                .catch((err) => {
                    console.log("Error", err)
                })
        }
        if (drodown === 'post') {
            axios.post(url)
                .then((res) => {
                    console.log("Response ", res)
                })
                .catch((err) => {
                    console.log("Error", err)
                })
        }

    }

    const arrowFun = (e) => {
        console.log("Arrow", e)
    }


    function basicFun(e) {
        console.log("Basic", e)
    }


    return (
        <>
            <button onClick={(e) => arrowFun(10)}>Arrow</button>
            <button onClick={basicFun}>Basic</button>


            <h1>This is form</h1>
            <div>
                URL <input onChange={(e) => setUrl(e.target.value)} type="text" name="url" id="" />
            </div>
            <div>
                <select onChange={(e) => setDrodown(e.target.value)} name="" id="">
                    <option value="">Select</option>
                    <option value="get">GET</option>
                    <option value="post">POST</option>
                </select>
                <div>
                    <button onClick={handleSubmit}>Save</button>

                </div>
            </div>
        </>
    )
}

export default Form