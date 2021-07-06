import axios from "axios";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UpdateModal from "./UpdateModal";

export class Favorite extends Component {
  state = {
    favData: [],
    err: "",
    show: false,
    modalData: {},
  };

  componentDidMount = () => {
    const url = `http://localhost:3001/getFavData`;

    axios
      .get(url)
      .then((response) => {
        this.setState({ favData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  deleteFav = (item) => {
    let strDrink = item.strDrink;

    const url = `http://localhost:3001/deleteFavData/${strDrink}`;

    axios
      .delete(url)
      .then((response) => {
        this.setState({ favData: response.data.drinks });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  showModal = (item) => {
    this.setState({ show: true, modalData: item });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  updateData = (e) => {
    e.preventDefault();

    let dataBody = {
      strDrinkThumb: e.target.strDrinkThumb.value,
      strDrink: e.target.strDrink.value,
      target: this.state.showModal.strDrink,
    };
    const url = `http://localhost:3001/updateFavData`;

    axios
      .put(url, dataBody)
      .then((response) => {
        this.setState({ favData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  render() {
    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <div>
            {this.state.favData.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.strDrinkThumb} />
                  <Card.Body>
                    <Card.Title>{item.strDrink}</Card.Title>

                    <Button
                      variant="primary"
                      onClick={() => this.deleteFav(item)}
                    >
                      Delete
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => this.showModal(item)}
                    >
                      Updata
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}

        <UpdateModal
          show={this.state.show}
          modalData={this.state.modalData}
          closeModal={this.closeModal}
          updateData={this.updateData}
        />
      </div>
    );
  }
}

export default Favorite;
