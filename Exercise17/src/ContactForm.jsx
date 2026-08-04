import useForm from "./useForm";

const ContactForm = () => {
  const { values, handleChange } = useForm({
    Name: "",
    Email: "",
    Message: "",
    phone: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        value={values.Name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        value={values.Email}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="phone"
        name="phone"
        id="phone"
        placeholder="Your Phone"
        value={values.phone}
        onChange={handleChange}
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city" 
        id="city"
        placeholder="Your City"
        value={values.city}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        id="message"
        placeholder="Your Message"
        value={values.Message}
        onChange={handleChange}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;