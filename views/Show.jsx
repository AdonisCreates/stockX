const React = require('react');

class Show extends React.Component {
    render() {
        const { name, description, img, shoesAreInStock } = this.props.shoe;
        return (
            <div>
                <h1>StockX Show Page</h1>
                <p>{name}</p>
                <p>{description}</p>
                <p>{shoesAreInStock}</p>
                <img src= {img}></img>
                <a href="/shoes">Return to the Index Page</a>
            </div>
        )
    }
}

// Always Export
module.exports = Show;