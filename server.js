const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Customer = require("./models/customerModel");
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from your frontend URL
    optionsSuccessStatus: 200 // Some legacy browsers (e.g., IE11) choke on 204
  };
  
  app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
// GET ALL CUSTOMER
app.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// GET SINGLE CUSTOMER
app.get("/customer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// UPDATE CUSTOMER WITH ID
app.put("/customer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndUpdate(id, req.body);
    // CONDITION CHECK IF THE CUSTOMER IS AVAILABLE WITH ID
    if (!customer) {
      return res
        .status(404)
        .json({ message: `can not find any customer with id ${id}` });
    }
    const updatedCustomer = await Customer.findById(id);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// POST CUSTOMER DETAILS
app.post("/customers", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//DELETE CUSTOMER OPTIONAL CAN BE CONTROLLED BY BACKEND
app.delete("/customer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      return res
        .status(404)
        .json({ message: `can not find any customer with id ${id}` });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json(message.error);
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@yousufapi.zfbrsao.mongodb.net/CRM-API?retryWrites=true&w=majority&appName=yousufApi"
  )
  .then(() => {
    console.log("database connected successfully");
    app.listen(5000, () => {
      console.log(`App is running on port 5000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
