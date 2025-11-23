import { useForm } from "react-hook-form";
import axiosClient from "../api/axiosClient";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { ApiUrls } from "../utils/constants";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axiosClient.post(ApiUrls.AUTH_REGISTER, data);
      toast.success("Rgistration successfull");
      navigate("/");
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
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

        <input
          {...register("name")}
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded"
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded">
          Register
        </button>

        <p className="text-center mt-4 text-sm">
          Already registered?{" "}
          <Link className="text-blue-600 underline" to="/">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
