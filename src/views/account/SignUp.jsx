import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

class SignUpView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  onSubmit = async (values) => {
    console.log("login")
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link to="/">
              <img
                src="../../images/banner/Dell.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
            <Link to="/">
              <img
                src="../../images/banner/Laptops.webp"
                alt="..."
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Sign Up</h4>
            <SingUpForm onSubmit={this.onSubmit} />
            {/* <button className="btn btn-primary" onClick={this.onSubmit}>Hello</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpView;
