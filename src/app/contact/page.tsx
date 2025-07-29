
import React from "react";
import { Mail, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact:</h1>

      <div className="space-y-4 text-lg">
        <p>
          <strong>Andrej Stevanoski</strong> 
        </p>
        <p className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-600" />
            andrejstevanoskiiv@gmail.com
        </p>

        <p className="flex items-center gap-2">
          <Github className="w-5 h-5 text-gray-800 dark:text-white" />
          <a
            href="https://github.com/stevanoskia?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub Profile
          </a>
        </p>
      </div>
    </div>
  );
}
