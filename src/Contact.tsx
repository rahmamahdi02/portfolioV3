import React, { useState, useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const email = "contact@ayooub.me";
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center gap-6 py-24 px-6 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-center max-w-xl text-zinc-700 dark:text-zinc-300">
        Have an opportunity, a question, or just want to say hi? Reach out via
        any of the platforms below.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <Button
          variant="outline"
          className={`gap-2 relative ${
            copied ? "text-green-600 dark:text-green-400 border-green-400" : ""
          }`}
          onClick={handleCopy}
          aria-live="polite"
        >
          <Mail className="w-4 h-4" />
          {copied ? "Copied!" : "Copy Email"}
        </Button>
        <Button asChild className="gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200">
          <a
            href="https://github.com/jounaidayoub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <a
            href="https://www.linkedin.com/in/jounaidayoub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
