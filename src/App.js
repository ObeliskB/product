import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Table } from "react-bootstrap";

function App() {
  const [product, setProduct] = useState([]);

  const getData = () => {
    fetch("http://localhost:8000/api/product/")
      .then((response) => response.json())
      .then((result) => {
        if (result.length > 0) {
          setProduct(result);
        } else {
          setProduct(<></>);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h2 className="text-success">Product</h2>
      <Table striped bordered hover>
        <thead>
          <tr className="table-primary text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        { product.map((item) => (
          <tr key={item.id}>
            <td className="text-center">{item.id}</td>
            <td>{item.name}</td>
            <td className="text-center">{item.price}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
