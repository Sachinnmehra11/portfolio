"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

type Errors = { name?: string; email?: string; message?: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function validate(): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!emailRe.test(values.email)) e.email = "Please enter a valid email address.";
    if (!values.message.trim()) e.message = "Please enter a message.";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = document.getElementById(`cf-${Object.keys(e)[0]}`);
      first?.focus();
      return;
    }

    const endpoint = profile.config.contactEndpoint;
    if (endpoint) {
      try {
        setStatus("sending");
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        setStatus(res.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      // Default: compose a mailto link (no backend dependency).
      const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }
  }

  function field(name: keyof typeof values) {
    return {
      id: `cf-${name}`,
      value: values[name],
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": errors[name] ? `cf-${name}-err` : undefined,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setValues((v) => ({ ...v, [name]: e.target.value })),
    };
  }

  // text-base (16px) on inputs prevents iOS Safari from auto-zooming on focus.
  const inputCls =
    "min-h-11 w-full rounded-md border border-hairline bg-canvas px-3 py-2.5 text-base text-ink " +
    "placeholder:text-stone transition-colors focus-visible:outline-none focus-visible:border-brand-green";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="t-body-sm font-medium text-charcoal">
          Name <span className="text-brand-error">*</span>
        </label>
        <input {...field("name")} type="text" autoComplete="name" required className={inputCls} placeholder="Your name" />
        {errors.name && (
          <p id="cf-name-err" role="alert" className="t-caption text-brand-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="t-body-sm font-medium text-charcoal">
          Email <span className="text-brand-error">*</span>
        </label>
        <input {...field("email")} type="email" autoComplete="email" required className={inputCls} placeholder="you@example.com" />
        {errors.email && (
          <p id="cf-email-err" role="alert" className="t-caption text-brand-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="t-body-sm font-medium text-charcoal">
          Message <span className="text-brand-error">*</span>
        </label>
        <textarea
          {...field("message")}
          rows={4}
          required
          className={cn(inputCls, "min-h-28 resize-y")}
          placeholder="What would you like to build?"
        />
        {errors.message && (
          <p id="cf-message-err" role="alert" className="t-caption text-brand-error">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending" || undefined}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-canvas transition-colors hover:bg-charcoal disabled:opacity-50 focus-visible:outline-none"
      >
        <Send aria-hidden className="size-4" />
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <p aria-live="polite" className="t-caption text-slate">
        {status === "sent" && "Thanks — your email client should open, or your message was sent."}
        {status === "error" && "Something went wrong. Please email me directly instead."}
      </p>
    </form>
  );
}

export default ContactForm;
