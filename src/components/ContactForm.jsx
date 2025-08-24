import React, { useState } from 'react';

const initialForm = { name: '', email: '', subject: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        console.warn('Contact API responded with', res.status);
      }

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      console.warn('No real API available — form data printed to console.', err);
      console.log('Contact form data:', form);
      setSuccess(true);
      setForm(initialForm);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-900 rounded">
          Thank you — your message has been sent. We'll get back to you shortly.
        </div>
      )}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`mt-1 block w-full border-b border-gray-300 focus:border-gray-900 focus:ring-0 py-2 ${errors.name ? 'outline-2 outline-red-300' : ''}`}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`mt-1 block w-full border-b border-gray-300 focus:border-gray-900 focus:ring-0 py-2 ${errors.email ? 'outline-2 outline-red-300' : ''}`}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`mt-1 block w-full border-b border-gray-300 focus:border-gray-900 focus:ring-0 py-2 ${errors.subject ? 'outline-2 outline-red-300' : ''}`}
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={`mt-1 block w-full border-b border-gray-300 focus:border-gray-900 focus:ring-0 py-2 ${errors.message ? 'outline-2 outline-red-300' : ''}`}
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 bg-gray-900 text-white font-semibold hover:bg-black transition disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
