import { FcGoogle } from "react-icons/fc";

const SignInButton = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full">
      <form action="#" className="flex flex-col gap-2 w-full">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Full Name</span>
          </div>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Enter Password</span>
          </div>
          <input
            type="password"
            placeholder="Enter Password"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Confirm Password</span>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full "
          />
        </label>
        <button className="w-full btn btn-neutral">Submit</button>
      </form>
      <div className="flex items-center gap-x-3 btn w-full">
        <FcGoogle className="w-5 h-5 md:h-8 md:w-8" />
        <span className="">Sign In with Google</span>
      </div>
    </div>
  );
};

export default SignInButton;
