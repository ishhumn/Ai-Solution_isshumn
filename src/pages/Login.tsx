import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 bg-white/5 border-neutral-800">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-800 border-neutral-700 text-white"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-neutral-800 border-neutral-700 text-white"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;