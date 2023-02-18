import React, {useState, useEffect} from 'react'

export default function Start() {
    const d = new Date();
    const t = d.getHours();
    const [greet, setGreet] = useState("");
    useEffect(()=> {
        setTimeout(()=> {
            if (t >= 5 && t < 12) {
                setGreet("Good Morning 🌅.")
            }
            else if (t >= 12 && t < 18) {
                setGreet("Good Afternoon 🌤️.")
            }
            else if (t >= 18 && t < 20) {
                setGreet("Good Evening 🌃.")
            }
            else{
                setGreet("Good Night 🌉.")
            }
        },100)
    },[t])
    return (
        <h1>{greet}</h1>
    )
}
