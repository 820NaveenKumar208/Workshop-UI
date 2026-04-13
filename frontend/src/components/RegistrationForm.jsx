import { useMemo, useState } from 'react';

export default function RegistrationForm({ workshops }) {
  const [formValues, setFormValues] = useState({ name: '', email: '', workshopId: workshops[0]?.id || '' });
  const [status, setStatus] = useState('');

  const selectedWorkshop = useMemo(
    () => workshops.find((item) => item.id === formValues.workshopId),
    [formValues.workshopId, workshops]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Sending your registration...');
    window.setTimeout(() => {
      setStatus(`Registered for ${selectedWorkshop?.title || 'workshop'} successfully!`);
      setFormValues({ name: '', email: '', workshopId: workshops[0]?.id || '' });
    }, 600);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formValues.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formValues.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </label>

        <label htmlFor="workshopId">
          Select Workshop
          <select id="workshopId" name="workshopId" value={formValues.workshopId} onChange={handleChange}>
            {workshops.map((workshop) => (
              <option key={workshop.id} value={workshop.id}>
                {workshop.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="button button--primary button--wide">
          Register now
        </button>
        {status && <p className="form-status">{status}</p>}
      </div>
    </form>
  );
}
