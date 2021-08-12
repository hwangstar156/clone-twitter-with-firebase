import React from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = () => {};
  return (
    <div>
      <form>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          value={password}
        />
        <input type="submit" value="Login" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
