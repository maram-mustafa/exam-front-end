import axios from "axios";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class Home extends Component {
  state = {
    allData: [],
    err: "",
  };

  componentDidMount = () => {
    let url = `http://localhost:3001/allData`;

    axios
      .get(url)
      .then((response) => {
        this.setState({ allData: response.data.drinks });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  addFav = (i) => {
    let targetData = this.state.allData[i];

    let dataBody = {
      strDrinkThumb: targetData.strDrinkThumb,
      strDrink: targetData.strDrink,
    };

    const url = `http://localhost:3001/addFav`;

    axios
      .post(url , dataBody)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  render() {
    console.log(this.state.allData)

    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <div className="card-container">
            {this.state.allData.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.strDrinkThumb} />
                  <Card.Body>
                    <Card.Title>{item.strDrink}</Card.Title>

                    <Button variant="primary" onClick={() => this.addFav(i)}>
                      Add to favorite list
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
