import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle, FiSend } from 'react-icons/fi';
import { services } from '../data.js';

const initialState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+\d][\d\s-]{7,}$/;

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (values.phone.trim() && !phoneRegex.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!values.service) errors.service = 'Please select a service.';
  if (!values.message.trim()) {
    errors.message = 'Please tell us about your requirement.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please provide a little more detail (min. 10 characters).';
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) setErrors(validate({ ...values, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ fullName: true, company: true, email: true, phone: true, service: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // NOTE: No backend is wired up yet. This simulates the request so the
    // UI states can be demonstrated. To go live, replace this block with a
    // real API/email-service call (e.g. fetch('/api/enquiry', { ... }))
    // using the `values` object as the payload.
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
      setValues(initialState);
      setTouched({});
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = (name) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/30 ${
      errors[name] && touched[name] ? 'border-red-500/60 focus:border-red-500/60' : 'border-white/10 focus:border-brand-500/60'
    }`;

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-surface p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-green-400">
          <FiCheckCircle className="text-3xl" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-white">Thank you for reaching out</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Your enquiry has been received. Our team will get back to you shortly to discuss
          your requirement.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-white/10 bg-surface/80 p-6 backdrop-blur-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" required error={errors.fullName} touched={touched.fullName}>
          <input id="fullName" name="fullName" type="text" autoComplete="name" value={values.fullName} onChange={handleChange} onBlur={handleBlur} placeholder="Your full name" className={fieldClass('fullName')} aria-invalid={Boolean(errors.fullName && touched.fullName)} />
        </Field>

        <Field label="Company Name" name="company" error={errors.company} touched={touched.company}>
          <input id="company" name="company" type="text" autoComplete="organization" value={values.company} onChange={handleChange} onBlur={handleBlur} placeholder="Your company (optional)" className={fieldClass('company')} />
        </Field>

        <Field label="Email Address" name="email" required error={errors.email} touched={touched.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@company.com" className={fieldClass('email')} aria-invalid={Boolean(errors.email && touched.email)} />
        </Field>

        <Field label="Phone Number" name="phone" error={errors.phone} touched={touched.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder="Your phone number" className={fieldClass('phone')} aria-invalid={Boolean(errors.phone && touched.phone)} />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Service Required" name="service" required error={errors.service} touched={touched.service}>
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${fieldClass('service')} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%239AA3B2' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
              }}
              aria-invalid={Boolean(errors.service && touched.service)}
            >
              <option value="" disabled className="bg-surface text-white">Select a service</option>
              {services.map((s) => (
                <option key={s.id} value={s.title} className="bg-surface text-white">{s.title}</option>
              ))}
              <option value="Other / General Enquiry" className="bg-surface text-white">Other / General Enquiry</option>
            </select>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Message" name="message" required error={errors.message} touched={touched.message}>
            <textarea id="message" name="message" rows="4" value={values.message} onChange={handleChange} onBlur={handleBlur} placeholder="Tell us about your requirement..." className={`${fieldClass('message')} resize-y`} aria-invalid={Boolean(errors.message && touched.message)} />
          </Field>
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-5 flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <FiAlertCircle className="shrink-0" aria-hidden="true" />
          Please correct the highlighted fields and try again.
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-6 w-full sm:w-auto">
        {status === 'submitting' ? 'Sending…' : (<>Send Enquiry <FiSend aria-hidden="true" /></>)}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted/70">
        We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}

function Field({ label, name, required, error, touched, children }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-white/90">
        {label}
        {required && <span className="ml-0.5 text-brand-400">*</span>}
      </label>
      {children}
      {error && touched && (
        <p className="mt-1.5 text-xs text-red-300" role="alert">{error}</p>
      )}
    </div>
  );
}
