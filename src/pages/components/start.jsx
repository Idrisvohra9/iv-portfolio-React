import React, { useState, useEffect } from "react";

export default function Start() {
  const [greet, setGreet] = useState("");

  useEffect(() => {
    const d = new Date();
    const t = d.getHours();

    let greeting = "";
    if (t >= 5 && t < 12) {
      greeting = "Rise and shine, sleepyhead! 🌞☕";
    } else if (t >= 12 && t < 18) {
      greeting = "Lunch time! Hope you're not hangry 🍔🍟";
    } else if (t >= 18 && t < 20) {
      greeting = "Evening, party animal! 🕺💃";
    } else {
      greeting = "Still awake? Night owls unite! 🦉🌙";
    }

    setGreet(greeting);
  }, []);

  return <h1>{greet}</h1>;
}
