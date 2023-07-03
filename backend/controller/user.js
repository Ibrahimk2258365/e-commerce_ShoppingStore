import { CheckoutModel } from '../model/Checkout.js';
import LoginModel from '../model/login.js';
import { userModel } from '../model/user.js';

const User = userModel; // Assign the userModel instance to a constant

export const postuser = async (req, res) => {
  console.log("Controller's postuser is called");
  try {
    const { FirstName, LastName, email, password } = req.body;
    const user = {
      FirstName: FirstName,
      LastName: LastName,
      email: email,
      password: password,
    };

    const newuser = new User(user); // Use the User constant instead of userModel

    const savedUser = await newuser.save(); // user saved
    console.log('New user saved: ', savedUser);
  } catch (e) {
    console.log('Error during saving the item: ', e);
  }
};

export const getuser = async (req, res) => {
  try {
    const data = await User.find(); // Use the User constant instead of userModel
    res.json(data);
    console.log(data);
  } catch (e) {
    console.log('Error in getUser: ', e);
  }
};
// import CheckoutModel from '../models/Checkout';

export const checkoutController = async (req, res) => {
  try {
    const { fullName, email, address, paymentMethod } = req.body;

    // Create a new instance of the Checkout model with the received data
    const newCheckout = new CheckoutModel({

      fullName:fullName,
      email:email,
      address:address,
      paymentMethod:paymentMethod,
    
    });

    // Save the new checkout data to the database
    const savedCheckout = await newCheckout.save();

    // You can also call the `addUser` function from the API service to add the checkout data to the user's profile

    res.status(200).json(savedCheckout); // Send a response with the saved checkout data if needed
  }catch (error) {
    console.log('Error during checkout:', error);
    res.status(500).json({ message: 'Checkout failed. Please try again.' }); // Send an error response if an error occurs
 
  }
};

// loginController.js
// import LoginModel from '../models/LoginModel';

 export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Perform any necessary validation or authentication checks

    // Find the user in the database
    const user = await LoginModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // If the username and password are correct, return a success response
    return res.status(200).json({ message: 'Login successful', user });

  } catch (error) {
    console.log('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

