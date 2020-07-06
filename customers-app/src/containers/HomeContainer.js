import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomerActions from "../components/CustomersActions";

const handleClick = () => {
  console.log("Click!");
};

class HomeContainer extends Component {
  render() {
    return (
      <>
        <AppFrame
          title="Home"
          body={
            <>
              Esta es la pantalla inicial
              <CustomerActions>
                <button onClick={handleClick}>Listado de clientes</button>
              </CustomerActions>
            </>
          }
        />
      </>
    );
  }
}

HomeContainer.propTypes = {};

export default HomeContainer;
