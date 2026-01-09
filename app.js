const express=require("express");
const app=express();
const orderRoutes=require("./routes/orders");
const userRoutes=require("./routes/users");
app.use("/orders",orderRoutes);
app.use("/users",userRoutes);
// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
