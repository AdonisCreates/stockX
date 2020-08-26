const React = require('react');

const Default = require('./components/Default')

class Index extends React.Component {
    render() {
        const { shoes } = this.props
        console.log(shoes)
        return(
            <Default>
            <div>
                <h1>Create and Read about your favorite kicks.</h1>
                <h2>You can also Update, Delete and Edit them!</h2>
                <h3>Add To Your Collection</h3>
                <nav>
                    <a href="/shoes/new">Create Some New Kicks</a>
                    
                </nav>
                <ul>
                    {
                        shoes.map((shoe)=>{
                            return (
                                <li>
                                    <a href={`/shoes/${shoe._id}`}>{shoe.name}</a>
                                    Description: {shoe.description}<br />
                                    Are Shoes In Stock?: {shoe.areShoesInStock ? 'Shoes are in stock' : `Shoes are not in stock`}<br />
                                    <a href={`/shoes/${shoe._id}/edit`}>Edit Kicks</a><br />
                                    <img src={shoe.img}></img>
                                    <form action={`/shoes/${shoe._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Default>
        )
    }
}

module.exports = Index;