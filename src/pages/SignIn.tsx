import { GoogleLogin } from "@react-oauth/google";


function SignIn() {


  // Function to handle MetaMask sign-in (define it properly)
  const handleMetamaskSignIn = () => {
    console.log("MetaMask sign-in triggered");
    // Add actual MetaMask logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-neutral-900 p-12 rounded-xl shadow-lg w-96">
        {/* Logo */}
        <img
          src="/minilogo.svg"
          alt="ChLogo"
          className="h-16 w-16 mb-4 mx-auto"
        />
        {/* Heading */}
        <h2 className="text-xl font-bold text-white text-center mb-4">
          Sign in to Continue
        </h2>
        {/* Login Options */}
        <div className="flex items-center gap-4 justify-center">
          {/* MetaMask Login */}
          <img
            onClick={handleMetamaskSignIn}
            src="/metamask.webp"
            alt="MetaMask"
            className="h-8 w-8 cursor-pointer hover:opacity-80 transition"
          />
          <span className="text-muted-foreground text-white">or</span>
          {/* Google Login */}
          <GoogleLogin
           onSuccess={()=>{}}
            type="icon"
            theme="filled_black"
            size="large"
            text="continue_with"
            shape="circle"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
