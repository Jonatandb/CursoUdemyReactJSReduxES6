import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomerActions from "../components/CustomersActions";

class HomeContainer extends Component {
  handleClick = () => {
    this.props.history.push("/customers");
  };

  render() {
    return (
      <>
        <AppFrame
          title="Home"
          body={
            <>
              Esta es la pantalla inicial
              <CustomerActions>
                <button onClick={this.handleClick}>Listado de clientes</button>
              </CustomerActions>
            </>
          }
        />
      </>
    );
  }
}

HomeContainer.propTypes = {};

export default withRouter(HomeContainer);
