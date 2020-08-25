const React = require('react');
const Default = require('./components/Default')

class Show extends React.Component {
    render() {
        const { name, description, img, shoesAreInStock } = this.props.shoe;
        return (
            <div>
                <h1>History of these Kicks</h1>
                <p>{name}</p>
                <p>{description}</p>
                <p>{shoesAreInStock}</p>
                <p><img src= {img}></img></p>
                <a href="/shoes">Return to the Index Page</a>
            </div>
        )
    }
}

// Always Export
module.exports = Show;