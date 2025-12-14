import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600">
            Have a suggestion for a new site? Found a broken link? Let us know.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 sm:p-12">
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 mb-8">Thank you for contacting us. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className={`block w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300 ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'} focus:ring-4 focus:outline-none transition-all`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`block w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300 ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'} focus:ring-4 focus:outline-none transition-all`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                    className={`block w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-300 ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'} focus:ring-4 focus:outline-none transition-all`}
                    placeholder="How can we help?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.01]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-500 text-sm">
             <Mail size={16} /> or email us directly at <a href="mailto:support@webgo.com" className="text-blue-600 hover:underline">support@webgo.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};
