import React from 'react'

function Contact() {
  return (
    <div>
        <div className="contact container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">We would love to hear from you! Please fill out the form below.</p>
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
