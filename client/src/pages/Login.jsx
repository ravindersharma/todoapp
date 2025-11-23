import { useForm } from "react-hook-form";
import axiosClient from "../api/axiosClient";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ApiUrls } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axiosClient.post(ApiUrls.AUTH_LOGIN, data);
      dispatch(setCredentials(res.data));
      toast.success("Login Successful");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
        >
          Login
        </button>
        <p className="text-center mt-4 text-m">
          Don't have an account?{" "}
          <Link className="text-blue-600 underline" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
