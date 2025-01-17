
import Contact from '../models/Contact.js';


export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
 
    const newContact = new Contact({
      name,
      email,
      message,
    });


    await newContact.save();


    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
};
