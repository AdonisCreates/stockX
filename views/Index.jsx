const React = require('react');

class Index extends React.Component {
    render() {
        const { shoes } = this.props
        return(
            <default>
            <div>
                <h1>StockX Index Page</h1>
                <nav>
                    <a href="/shoes/new">Create Some New Kicks</a>
                </nav>
                <ul>
                    {
                        shoes.map((shoe,)=>{
                            return (
                                <li>
                                    <a href={`/shoes/${shoe._id}`}>{shoe.name}</a>
                                    Description: {shoes.description}<br />
                                    Are Shoes In Stock?: {shoe.shoesAreInStock ? 'Shoes are in stock' : `Shoes are not in stock`}<br />
                                    <form action={`/shoes/${shoe._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    <a href={`/shoes/${shoes._id}/edit`}>Edit</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </default>
        )
    }
}

module.exports = Index;