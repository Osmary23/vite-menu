
import Card from "react-bootstrap/Card";
// eslint-disable-next-line react/prop-types
const Menu = ({ items }) => {
  
  return (
    <main className="product-space">
      <div className="container">
        <div className="row">
          {
            // eslint-disable-next-line react/prop-types
            items.map((menuItems) => {
              const { id, price, title, imagenes, desc } = menuItems;
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="col-md-6">
                  <article key={id} className="main-div">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={imagenes}/>
                      <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                        <h6> Price S/.{price}</h6>
                      </Card.Body>
                    </Card>
                  </article>
                </div>
              );
            })
          }
        </div>
      </div>
    </main>
  );
};
export default Menu;
