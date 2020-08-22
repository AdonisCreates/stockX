const React = require('react');
class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1>Stock X's Edit Page</h1>
                <form action={`/shoes/${this.props.shoe}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.name}/><br />
                    Description: <input type="text" name="description" defaultValue={this.props.description}/><br />
                    areShoesInStock: <input type="checkbox" name="areShoesInStock" checked={this.props.areShoesInStock}/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}
module.exports = Edit;