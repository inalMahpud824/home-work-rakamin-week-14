/* eslint-disable react/no-unescaped-entities */
import FormLogin from "../components/Fragments/FormLogin.jsx";
import AuthLayout from "../components/layouts/AuthLayout.jsx";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type='login'>
      <FormLogin />
    </AuthLayout>
  );
};
export default LoginPage;
