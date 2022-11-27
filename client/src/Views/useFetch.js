import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        axios.get(url, {
            signal: abortCont.signal,
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then(res => {
                return res.data;
            })
            .then(data => {

                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {

                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;