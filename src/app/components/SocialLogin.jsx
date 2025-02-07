import { doSocialLogin } from "@/app/actions";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <form action={doSocialLogin}>
      <button
        type="submit"
        name="action"
        value="google"
        className="flex items-center justify-center bg-slate-300 text-black p-2 rounded-md m-1 text-lg hover:bg-slate-400 transition-colors w-full"
      >
        <FcGoogle className="mr-2" size={24} />
        Sign In With Google
      </button>

      {/* <button
        className="bg-black text-white p-1 rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="github"
      >
        Sign In With GitHub
      </button> */}
    </form>
  );
};

export default SocialLogin;
