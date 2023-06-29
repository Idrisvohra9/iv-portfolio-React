import React, { useEffect, useState } from 'react'

export default function useFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    async function fetchData() {
        await fetch(process.env.REACT_APP_BACKEND + "projects")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
    }
    function reFetch() {
        fetchData();
    }
    useEffect(() => {
        fetchData();
    }, []);
    return { data, loading, error, reFetch };
}
