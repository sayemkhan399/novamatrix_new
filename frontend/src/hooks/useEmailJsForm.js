import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function useEmailJsForm(onSuccess) {
  const [isSending, setIsSending] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const {
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY,
    } = import.meta.env;

    if (
      !VITE_EMAILJS_SERVICE_ID ||
      !VITE_EMAILJS_TEMPLATE_ID ||
      !VITE_EMAILJS_PUBLIC_KEY
    ) {
      setSubmissionError(true);
      setSubmissionMessage(
        "The contact form is not configured. Please email us directly at novamatrixtech@gmail.com.",
      );
      return;
    }

    setIsSending(true);
    setSubmissionMessage("");

    try {
      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        form,
        VITE_EMAILJS_PUBLIC_KEY,
      );
      form.reset();
      onSuccess?.();
      setSubmissionError(false);
      setSubmissionMessage("Your message was sent. We’ll get back to you soon.");
    } catch (error) {
      console.error("EmailJS contact form submission failed:", error);
      setSubmissionError(true);
      setSubmissionMessage(
        "We couldn’t send your message. Please try again or email novamatrixtech@gmail.com.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return {
    handleSubmit,
    isSending,
    submissionMessage,
    submissionError,
  };
}
