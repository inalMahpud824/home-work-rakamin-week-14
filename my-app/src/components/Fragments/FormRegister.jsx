import { useState } from "react";
import axios from "axios";
import Button from "../Elements/Button/index.jsx";
import InputForm from "../Elements/Input/index.jsx";

const FormRegister = () => {
  const [registrationMessage, setRegistrationMessage] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();

     // Menghentikan perilaku bawaan formulir untuk mencegah refresh halaman
    try {
      const response = await axios.post("http://localhost:8000/register", {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });

      // Proses respons dari backend di sini
      console.log(response)
      console.log(response.data);
      // Menampilkan pesan sukses
      setRegistrationMessage("Registration successful!");
    } catch (error) {
      console.error("Error during registration:", error);
            // Menampilkan pesan error
            setRegistrationMessage("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleRegister} className="">
      <div className="p-7">
        <InputForm
          name="name"
          type="text"
          placeholder="Insert your name here.."
          title="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <InputForm
          name="email"
          type="email"
          placeholder="email@example.com"
          title="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputForm
          name="password"
          type="password"
          placeholder="***"
          title="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputForm
          name="confirmPassword"
          type="password"
          placeholder="***"
          title="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="text-center mb-4 -mt-5">
        <Button classname="bg-blue-700 text-white" type="submit">
          Register
        </Button>
      {registrationMessage && (
        <div className="text-center text-green-600">
          {registrationMessage}
        </div>
      )}

      </div>
    </form>
  );
};

export default FormRegister;
