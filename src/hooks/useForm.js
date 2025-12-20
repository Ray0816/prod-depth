import { useState, useEffect } from "react";

export default function useForm(initial = {}) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 6000);
    return () => clearTimeout(t);
  }, [sent]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate(values = form) {
    const e = {};
    if (!values.name?.trim()) e.name = "Please enter your name";
    if (!values.company?.trim()) e.company = "Please enter a company";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email || ""))
      e.email = "Please enter a valid email";
    return e;
  }

  async function submit(ev) {
    if (ev && ev.preventDefault) ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return { ok: false };
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
    return { ok: true };
  }

  return {
    form,
    setForm,
    errors,
    setErrors,
    loading,
    sent,
    onChange,
    validate,
    submit,
  };
}
