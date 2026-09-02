import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "welcome to authentication app",
  });
});

app.post("/api/auth/register", (req, res) => {
  const { email, name, password } = req.body;

    const token = jwt.sign(
        {
        email, name
    },
    "0b79c974b00e9130b915564f0a2bfeb56bc06d46846abe796b6695db813fac5ae977f2a544d6b90c1188fccd7b6c8719cc738be89757168cec48da60c3d6128a"
)

    res.status(201).json({
        message:"User created successfully",
        data:{
            user:{
                email, name
            },
            token
        }
    })

});

export default app;
