import React from "react";
import './coin.css';

class Coin extends React.Component {

    constructor()
    {
        super();
        this.state = {
            currencies: []
        }
    }

    componentWillMount()
    {
        fetch('https://api.coinmarketcap.com/v1/ticker/')
            .then((Response) => Response.json())
            .then((response) => {
                console.log(response)
                this.setState({
                    currencies:response
                })
            });
    }

    render() {

        return  <div>
            {this.state.currencies.map(currency =>
                <div class="row-coin" key={currency.id}>
                    <h2 class="name-coin">{currency.name}</h2>
                    <div class="value-usd-coin">{currency.price_usd}</div>
                </div>
            )}
        </div>
    }
}

export default Coin;