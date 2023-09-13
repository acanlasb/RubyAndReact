import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
class ErrorBoundary extends React.Component {
  state = {
    error: "",
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const handleRegister = async (user, navigate) => {
      try {
        let res = await axios.post("api/auth", user);
        console.log("res:", user);
        setUser(res.data.data);
        navigate("/protected");
      } catch (err) {
        console.log(err.response);
        alert("error occured");
      }
    };
    return { error: error.toString() };
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div>
          <p>error occured</p>
          {error}
        </div>
      );
    }
    return <div>{this.props.childrens}</div>;
  }
}

export default ErrorBoundary;
