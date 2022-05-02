import { useEffect, useState } from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            <h1>The Coins!</h1>
            {loading ? ( // () 는 구분하기위한 용도
                <strong>Loading...</strong>
            ) : ( 
                <select>
                    {coins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
                </select>
            )
            }
        </div>
    )
}

export default CoinTracker;