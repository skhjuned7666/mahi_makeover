import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Status {
  ok: boolean;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const [status, setStatus] = useState<Status | null>(null);

  const onSubmit = async (data: FormData) => {
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus({ ok: true, message: "Thanks! We'll reach out shortly." });
        reset();
      } else {
        setStatus({
          ok: false,
          message: json.error || "Something went wrong.",
        });
      }
    } catch (e) {
      setStatus({ ok: false, message: "Network error." });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='soft-card space-y-4'>
      <div>
        <label className='text-sm'>Name</label>
        <input
          {...register("name", { required: true })}
          className='mt-1 w-full rounded-2xl border border-pink3 bg-white px-4 py-3 outline-none focus:border-pink1'
          placeholder='Your name'
          aria-invalid={!!errors.name}
        />
        {errors.name ? (
          <p className='text-xs text-pink1 mt-1'>Required</p>
        ) : null}
      </div>
      <div>
        <label className='text-sm'>Email</label>
        <input
          type='email'
          {...register("email", { required: true, pattern: /.+@.+\..+/ })}
          className='mt-1 w-full rounded-2xl border border-pink3 bg-white px-4 py-3 outline-none focus:border-pink1'
          placeholder='you@example.com'
          aria-invalid={!!errors.email}
        />
        {errors.email ? (
          <p className='text-xs text-pink1 mt-1'>Valid email required</p>
        ) : null}
      </div>
      <div>
        <label className='text-sm'>Message</label>
        <textarea
          rows={5}
          {...register("message", { required: true, minLength: 10 })}
          className='mt-1 w-full rounded-2xl border border-pink3 bg-white px-4 py-3 outline-none focus:border-pink1'
          placeholder='Tell us about your event...'
          aria-invalid={!!errors.message}
        />
        {errors.message ? (
          <p className='text-xs text-pink1 mt-1'>Please add more details</p>
        ) : null}
      </div>
      <button
        disabled={isSubmitting}
        className='btn btn-primary w-full'
        type='submit'>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {status ? (
        <div
          role='status'
          className={`text-sm ${status.ok ? "text-green-700" : "text-pink1"}`}>
          {status.message}
        </div>
      ) : null}
    </form>
  );
}
