import React, { useState } from 'react';
import emailjs from 'emailjs-com';

type FormData = {
  name: string;
  email: string;
  description: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'your_service_id',
        'your_template_id',
        formData,
        'your_user_id'
      );
      console.log('Email sent successfully!', result.text);
      setMessage('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send email. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', description: '' });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Email'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ContactForm;
