import Navbar from "../layouts/main/navbar";
import LoginForm from "../layouts/auth-forms/login-form";

export default function Login() {
  return (
    <>
      {/* NAVIGATION BAR */}
      <Navbar />
      {/* LOGIN FORM COMPONENT */}
      <LoginForm />
    </>
  );
}