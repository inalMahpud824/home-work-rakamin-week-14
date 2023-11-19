import Link from "next/link";


const AuthLayout = (props) => {
  const { title, children, type } = props;
  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="shadow-sm w-[40%] rounded-md border-[1px] ">
        <h1 className="text-blue-600 font-bold text-xl mb-2 text-center mt-10">
          {title}
        </h1>
        <p className="font-medium text-slate-700 text-center">
          Welcome, Please your detail
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center mb-6 text-sm">
        don't have an account?{" "}
        <Link href="/register" className="font-bold mt-5 text-blue-600">
          Register
        </Link>
      </p>
    );
  }
  if (type === "register") {
    return (
      <p className="text-center mb-6 text-sm">
        have an account?{" "}
        <Link href="/login" className="font-bold mt-5 text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayout;
