const React = require('react');

class Edit extends React.Component {
    render() {
        const {_id, name, description, areShoesInStock} = this.props.shoe;
        return (
            <div>
                <h1>Stock X's Edit Page</h1>
                <form action={`/shoes/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name}/><br />
                    Description: <input type="text" name="description" defaultValue={description}/><br />
                    areShoesInStock: <input type="checkbox" name="areShoesInStock" checked={areShoesInStock}/>
                    <input type="submit" name="" value="Submit Changes"/>
                    
                </form>
            </div>
        )
    }
}

module.exports = Edit;