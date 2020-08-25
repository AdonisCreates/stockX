const React = require('react');

const Default = require('./components/Default')

class Edit extends React.Component {
    render() {
        const { _id, name, description, img, areShoesInStock } = this.props.shoe;
        console.log(this.props)
        return (
            <div>
                <h1>Stock X's Edit Page</h1>
                <form action={`/shoes/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name}/><br />

                    Description: <input type="text" name="description" defaultValue={description}/><br />
                    
                    areShoesInStock: <input type="checkbox" name="areShoesInStock" checked={areShoesInStock}/><br />

                    <img src={img}></img><br />
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
             </div>
        )
    }
}
module.exports = Edit;