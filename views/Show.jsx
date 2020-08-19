const React = require('react');

class Show extends React.Component {
    render() {
        const { name, description, shoesAreInStock } = this.props.shoe;
        return (
            <div>
                <h1>StockX Show Page</h1>
                <p>{name}</p>
                <p>{description}</p>
                <p>{shoesAreInStock}</p>
                <a href="/shoes">Return to the Index Page</a>
            </div>
        )
    }
}

// Always Export
module.exports = Show;