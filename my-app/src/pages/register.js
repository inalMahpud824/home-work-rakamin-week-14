import FormRegister from "../components/Fragments/FormRegister.jsx"
import AuthLayout from "../components/layouts/AuthLayout.jsx"

const RegisterPage = () => {
  return (
    <AuthLayout title='Register' type='register'>
      <FormRegister />
      </AuthLayout>
  )
}
export default RegisterPage