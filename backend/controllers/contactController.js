// controllers/contactController.js
import Contact from '../models/Contact.js';

// Handle contact form submission
export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact form to the database
    await newContact.save();

    // Send success response
    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
};
