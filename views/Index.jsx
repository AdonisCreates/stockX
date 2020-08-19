const React = require('react');

class Index extends React.Component {
    render() {
        const { shoes } = this.props
        return(
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
                                    <a href={`/shoes/${shoe._id}`}>{log.name}</a>
                                    Description: {shoes.description}<br />
                                    Shoes Are In Stock?: {shoe.shoesAreInStock ? 'Shoes are in stock' : `Shoes are not in stock`}<br />
                                    <form action={`/shoes/${shoe._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;