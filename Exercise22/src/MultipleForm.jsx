import { useState } from "react";

const MultipleForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    option: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, isChecked });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        Accept terms
      </label>

      <select name="option" value={formData.option} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MultipleForm;
