const Terms = ({setPolicy}) => {

  const handleSetPolicy = () => {
    setPolicy(true);
  }
  return (
    <div className="font-mont">
      <div className="font-semibold mb-4">
        Terms of Service
      </div>
      <div>
        Please read these terms of service carefully and click on the &quot;I Accept&quot; button at the bottom of the page before using the Laumga MembApp by our technical team.
      </div>
      <div className="font-semibold mb-4 mt-6">
        Conditions of Use
      </div>
      <div>
        We will provide to you, services to allow you register as a user and be able to search other users on the platform.
      </div>
      <div className="font-semibold mb-4 mt-6">
        User Account
      </div>
      <div>
        If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.
      </div>
      <div className="flex justify-end mb-4 mt-6">
        <button className="bg-main text-white py-2 px-6 rounded-lg hover:scale-90 active:scale-100 transition duration-200" onClick={handleSetPolicy}>
          I accept
        </button>
      </div>
    </div>
  )
}

export default Terms;