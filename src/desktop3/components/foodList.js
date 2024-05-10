import { useEffect, useState } from "react";

function useFoodFetch() {
    const [foodF, setfoodF] = useState(null); // Initialize state as null
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState(null); // State to manage error

    useEffect(() => {
        fetch(' https://liment1.github.io/foodData/source.json')
            .then(res => {
                if (!res.ok) {
                    throw Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setfoodF(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });

    }, []); // Empty dependency array to run once on mount
    return { foodF, loading, error };
}

export default useFoodFetch;