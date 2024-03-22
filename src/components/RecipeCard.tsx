import React, { useEffect, useState } from "react"

const RecipeCard = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Step 2: Make the Fetch Request
    useEffect(() => {
        fetch('http://127.0.0.1:5000/goodfood') // Replace with your API endpoint
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                setData(data); // Step 3: Set the State
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []); // Empty dependency array means this effect runs once on mount


    if (isLoading) {
        return <div>Loading...</div>;
    }



    return (
        <div className='recipe'>
            <div className='ui segment' id='recipe-image'>
                <img src='https://eu-central-1.storage.xata.sh/88o3nhj59d4vv5lurpctq9fam0' className='ui centered medium image' alt="recipe picture"/>
            </div>
            <div className='content'>
                <div className='ui center aligned' id='name'>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
                <div className='ingredients'>
                    <span className='ui center aligned' id='ingredients'>
                        Kip\nKruiden\nUI\nKnoflook\n
                    </span>
                </div>
                <div className='ui center aligned' id='price'>
                    4.50
                </div>
            </div>
        </div>
    )
}

export default RecipeCard