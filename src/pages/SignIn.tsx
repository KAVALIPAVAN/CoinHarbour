import { FcGoogle } from "react-icons/fc";

function SignIn() {
  return (
    <div className="min-h-screen bg-[#101010] flex items-center justify-center">
      <div className="bg-black rounded-md h-[250px] w-[300px] text-center p-6  flex flex-col justify-center items-center">
        <h1 className="text-white text-xl font-semibold mb-4">
          Sign in to Continue
        </h1>
        <div className="flex gap-4">
          {/* Metamask Button */}
          <button className="bg-white p-3 cursor-pointer  rounded-full flex items-center justify-center">
            <img
              src="/metamask.webp" 
              alt="Metamask"
              className="h-6 w-6"
            />
          </button>
          <p className="text-white">or</p>
          {/* Google Button */}
          <button className="bg-white p-3 h-12 w-12  cursor-pointer rounded-full flex items-center justify-center">
          <FcGoogle />
            {/* <img
              src="/google.png"
              alt="Google"
              className=""
            /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
