import axios from "axios";
import Button from "../Elements/Button/index.jsx";
import InputForm from "../Elements/Input/index.jsx";
import { useState } from "react";

const FormLogin = () => {
  const [registrationMessage, setRegistrationMessage] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      // Proses respons dari backend di sini
      console.log(response);
      console.log(response.data);
      // Menampilkan pesan sukses
      setRegistrationMessage("Login successful!");
    } catch (error) {
      console.error("Error during registration:", error);
      // Menampilkan pesan error
      setRegistrationMessage("Login failed. Please try again.");
    }
  };
  
  return (
    <form onSubmit={handleLogin} action="" className="">
      <div className="p-7">
        <InputForm
          name="email"
          title="Email"
          type="email"
          placeholder="email@example.com"
        />
        <InputForm
          name="password"
          type="password"
          placeholder="***"
          title="password"
        />
      </div>
      <div className="text-center mb-4 -mt-5">
        <Button classname="bg-blue-700 text-white" type="submit">
          Login
        </Button>
      {registrationMessage && (
        <div className="text-center text-green-600">{registrationMessage}</div>
      )}
      </div>
    </form>
  );
};

export default FormLogin;
