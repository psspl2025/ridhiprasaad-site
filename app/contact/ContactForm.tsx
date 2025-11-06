"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
        {/* Two Column Grid for Name & Company */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900 placeholder-gray-400"
              placeholder="Your name"
            />
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-sm font-bold text-gray-800 mb-3">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900 placeholder-gray-400"
              placeholder="Company name"
            />
          </div>
        </div>

        {/* Two Column Grid for Email & Phone */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900 placeholder-gray-400"
              placeholder="you@company.com"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-3">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900 placeholder-gray-400"
              placeholder="+91-XXXXXXXXXX"
            />
          </div>
        </div>

        {/* Full Width Subject Field */}
        <div className="mb-8">
          <label htmlFor="subject" className="block text-sm font-bold text-gray-800 mb-3">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900 placeholder-gray-400"
            placeholder="e.g., Bearing Procurement for 500 MW plant"
          />
        </div>

        {/* Full Width Message/BOQ Field */}
        <div className="mb-8">
          <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3">
            Project / BOQ Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={7}
            className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-900 placeholder-gray-400 resize-none"
            placeholder="Share your requirements, BOQ, timeline, and any specific technical details..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 duration-200"
          >
            {status === "sending" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Request →"
            )}
          </button>
          <p className="text-sm text-gray-500">
            <span className="text-red-500">*</span> All fields are required
          </p>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mt-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 text-green-800 rounded-lg flex items-start gap-3">
            <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-bold">Thank you for reaching out!</p>
              <p className="text-sm mt-1">We've received your request and will respond within 1 business day.</p>
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="mt-6 p-5 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 text-red-800 rounded-lg flex items-start gap-3">
            <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-bold">Something went wrong</p>
              <p className="text-sm mt-1">Please try again or email us directly at info@ridhiprasaad.com</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
