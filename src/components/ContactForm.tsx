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
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID || ''
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
    <div className="contact__form">
      <h2 className="contactData__title">Send me an email! <br></br>Let’s keep the inbox party going!</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          className="form__input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          className="form__input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="text__container">
          <textarea
            name="description"
            className="form__input"
            placeholder="Message"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* <div className="send__button">
          <a href="mailto:abc@example.com" className="form__button"
          >Send Message</a
          >
        </div> */}
        <button type="submit" disabled={isSubmitting} className="form__button">
          {isSubmitting ? 'Sending...' : 'Send Email'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
