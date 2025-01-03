"use client"
import { useState, FormEvent } from 'react';
import useLogin from '@/hooks/user/useLogin';
// import isAuthnticated from '@/hooks/user/isAuthnticated';

const Login: React.FC =  () => {
  // default email and password
  const [email, setEmail] = useState<string>(); // Default email
  const [password, setPassword] = useState<string>(); // Default password

  // const auth = await isAuthnticated();
  // if (!auth) {
  //   redirect("/login");
  // }

  const loginMutatuion = useLogin();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password || password.length < 6 || !email.includes("@gmail.com") || password.length > 15) {
      alert("Please enter Valid Email and Password");
      return;
    }
    let data = {
      email, password
    }
    loginMutatuion.mutate(data);

  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900" suppressHydrationWarning={true}>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-white">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-400">Email</label>
          <input
            disabled={loginMutatuion.isPending}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none focus:border-yellow-500 transition disabled:opacity-50"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400">Password</label>
          <input
            disabled={loginMutatuion.isPending}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none focus:border-yellow-500 disabled:opacity-50 transition"
            placeholder="Enter your password"
          />
        </div>

        <button
          disabled={loginMutatuion.isPending}
          type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-semibold disabled:opacity-50 py-3 rounded transition">
          {loginMutatuion.isPending ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
