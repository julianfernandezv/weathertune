// ContactForm.js
import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can add your form submission logic here
    };

    return (
        <form
            className="max-w-lg mx-auto p-4 mt-24 shadow-md rounded-md bg-white"
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    rows="4"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
                Send Message
            </button>
        </form>
    );
}

export default Contact;
