const React = require('react');
const Default = require("./Default.jsx");


class New extends React.Component {
    render() {
        return(
            <div>
                <h1>Stock-X New Page</h1>
                <form action="/shoes"
                method="POST">
                    Name: <input type="text" name="name" /><br />
                    Description: <input type="textarea" name="description" /><br />
                    Shoes Are In Stock: <input type="checkbox" name="areShoesInStock" /><br />
                    IMG: <input type="text" name = "img"/><br />

                    <input type="submit" name="" value="Create Shoes" />
    
                </form>
            </div>

        )
    }
}

// ALWAYS EXPORT 
module.exports = New;