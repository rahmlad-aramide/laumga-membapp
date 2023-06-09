import Navbar from "../layouts/main/navbar";
import LoginForm from "../layouts/auth-forms/login-form";

export default function Login() {
  return (
    <>
      <div className="bg-hero-image  bg-no-repeat bg-cover bg-center bg-blend-overlay h-[100vh]">
        {/* NAVIGATION BAR */}
        <Navbar />
        {/* LOGIN FORM COMPONENT */}
        <LoginForm />
      </div>
    </>
  );
}