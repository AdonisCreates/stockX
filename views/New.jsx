const React = require('react');

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>Stock-X New Page</h1>
                <form action="/shoes"
                method="POST">
                    Name: <input type="text" name="name" /><br />
                    Description: <input type="textarea" name="description" /><br />
                    Shoes Are In Stock: <input type="checkbox" name="shoesAreInStock" /><br />
                </form>
            </div>

        )
    }
}

// ALWAYS EXPORT 
module.exports = New;