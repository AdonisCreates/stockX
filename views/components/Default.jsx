const React = require("react");

class Default extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="./css/main.css" />
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>StockX Mock Store</title>
        </head>
        <body>
          <div>
            {/* // HEADER THAT WILL REPLICATE STOCKX'S HEADER MUST PUT IN DIV ALWAYS//  */}
            <header
              style={{ backgroundColor: "green", justifyContent: "center" }}
            >
              <h1 style={{ textAlign: "center", color: "whitesmoke" }}>
                StockX
              </h1>
              {/* THE H1 GOT FORMATTED WEIRLDLY... VS CODE AND I GOT BEEF */}
              <h1
                style={{
                  textAlign: "center",
                  color: "whitesmoke",
                  backgroundColor: "olive",
                }}
              >
                Buy & Sell
              </h1>
              <h1
                style={{
                  textAlign: "center",
                  color: "whitesmoke",
                  backgroundColor: "black",
                }}
              >
                Authentic Sneakers
              </h1>
            </header>
            {/* // NAV BAR WILL BE RIGHT HERE //  */}
            <div class="topnav">
              <a class="active" href="#home">
                Home
              </a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
            {/* NAV BAR ENDS HERE */}

            {/* <ol style={{ display: "flex", flexWrap: "wrap-reverse" }}>
          {this.props.fruits.map((fruit, i) => {
            return (
              <ul key={fruit._id}>
                The <a href={`/fruits/${fruit.id}`}> {fruit.name}</a> is
                {" " + fruit.color}
                {fruit.readyToEat
                  ? ` - It is ready to eat`
                  : ` - It is not ready to eat`}
                <a href={`/fruits/${fruits.id}`}>
                  <img src={fruit.img}></img>
                </a>
              </ul>
            );
          })}
        </ol> */}
            <nav>
              {/* Create link to make a new shoe */}
              <a href="/fruits/new">Create New Shoes</a>
            </nav>
            <div>{this.props.children}</div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Default;
