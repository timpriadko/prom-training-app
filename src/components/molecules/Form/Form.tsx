import { useState } from 'react';

const UserRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email: string): boolean => {
    // Simple email validation using regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateName = (name: string): boolean => {
    // Simple name validation (letters only) using regex
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input values
    if (!validateName(formData.firstName)) {
      alert('Invalid first name. Please use letters only.');
      return;
    }

    if (!validateName(formData.lastName)) {
      alert('Invalid last name. Please use letters only.');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Invalid email address.');
      return;
    }

    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          className='border-solid border-2 border-indigo-600 rounded-md'
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          className='border-solid border-2 border-indigo-600 rounded-md'
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className='border-solid border-2 border-indigo-600 rounded-md'
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserRegistrationForm;
