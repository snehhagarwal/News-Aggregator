import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, TextField, FormControl, InputLabel, InputAdornment, IconButton, Select, MenuItem, Checkbox } from "@mui/material";
import { AddUser } from "../../API/UserData";

function UserSignup() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
        const res=await AddUser({id,name,password,country});
        if(res.status===200) navigate("/");
        else setError("Error");
    } catch (err) {
      setError("Error during sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-white">User Signup</h2>
          <p className="mt-2 text-gray-400">Create a new account.</p>
        </div>
        <div className="mt-8 space-y-6">
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div className="space-y-4">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white" },
              }}
            />
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white" },
              }}
            />
<FormControl variant="outlined" fullWidth required>
          <TextField
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityOff style={{ color: "white" }} /> : <Visibility style={{ color: "white" }} />}
                  </IconButton>
                </InputAdornment>
              ),
              style: { color: "white" },  // Set text color to white
            }}
            InputLabelProps={{
              style: { color: "white" },  // Set label color to white
            }}
            variant="outlined"
          />
        </FormControl>

        {/* Confirm Password Field */}
        <FormControl variant="outlined" fullWidth required>
          <TextField
            label="Confirm Password"
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? <VisibilityOff style={{ color: "white" }} /> : <Visibility style={{ color: "white" }} />}
                  </IconButton>
                </InputAdornment>
              ),
              style: { color: "white" }, 
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            variant="outlined"
          />
        </FormControl>  

            <TextField
              label="Country"
              variant="outlined"
              fullWidth
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white" },
              }}
            />

          </div>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            onClick={handleSignup}
            style={{ marginTop: "16px", padding: "14px", fontWeight: "bold" }}
          >
            {loading ? "Signing up..." : "Sign up"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
