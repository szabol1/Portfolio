'use client'

import { useState } from 'react';
export default function ContactPage() {
 /* const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch('/contact-action', {
        method: 'POST',
        body: JSON.stringify(formData), // Send form data as JSON
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Thanks for contacting me, I will get back to you soon!');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
    }
  }
*/
return (
    <div className = "bg-slate-100  py-10">
    <form className ="container mx-auto p-10 rounded-lg bg-white">
    <h1 className="text-center font-semibold text-3xl">Get in touch</h1>
    <div className="email block ">
        <label for="frm-email" className="font-semibold">Email</label>
        <input id="frm-email" type="email" name="email" autocomplete="email" required
            className="block w-full mt-1 p-2 border border-gray-300 rounded-lg bg-blue-100 focus:outline-none focus:bg-blue-200 focus:border-blue-400" />
    </div>
    <div className="phone block mt-4">
        <label for="frm-phone" className="font-semibold">Phone</label>
        <input id="frm-phone" type="text" name="phone" autocomplete="tel" required
            className="block w-full mt-1 p-2 border border-gray-300 rounded-lg bg-blue-100 focus:outline-none focus:bg-blue-200 focus:border-blue-400" />
    </div>
    <div className="name block mt-4 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
            <label for="frm-first" className="font-semibold">First Name</label>
            <input id="frm-first" type="text" name="first" autocomplete="given-name" required
                className="block w-full mt-1 p-2 border border-gray-300 rounded-lg bg-blue-100 focus:outline-none focus:bg-blue-200 focus:border-blue-400" />
        </div>
        <div className="w-full md:w-1/2 md:pl-2 mt-4 md:mt-0">
            <label for="frm-last" class="font-semibold">Last Name</label>
            <input id="frm-last" type="text" name="last" autocomplete="family-name" required
                className="block w-full mt-1 p-2 border border-gray-300 rounded-lg bg-blue-100 focus:outline-none focus:bg-blue-200 focus:border-blue-400" />
        </div>
    </div>
    <div className="message block mt-4">
        <label for="frm-message" class="font-semibold">Message</label>
        <textarea id="frm-message" rows="6" name="message"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-lg bg-blue-100 focus:outline-none focus:bg-blue-200 focus:border-blue-400"></textarea>
    </div>
    <div className="button block mt-6">
        <button type="submit" 
            className="w-full p-3 text-lg font-semibold bg-blue-400 text-white rounded-lg focus:outline-none focus:bg-blue-600">Submit</button>
    </div>
</form>
</div>
  );
}