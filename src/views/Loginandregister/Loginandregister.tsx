import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./Login.css";
import CreateLottie from "../../utils/CreateLottie";
import { useNavigate } from "react-router";
export default function Login() {
  
  
  return (
    <div className="content">
      <div className="image">
        <CreateLottie
          src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
          style={{ width: "300px" }}
          speed="1.5"
        />
      </div>
      <div className="form">
        
      </div>
    </div>
  );
}
