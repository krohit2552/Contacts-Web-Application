import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { generateOTP, sendSMS } from '../utils';
import { ArrowLeft } from 'lucide-react';

const ComposeMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const contact = useStore((state) => state.contacts.find((c) => c.id === id));
  const addMessage = useStore((state) => state.addMessage);
  const otp = generateOTP();
  const message = `Hi. Your OTP is: ${otp}`;

  if (!contact) {
    return <div>Contact not found</div>;
  }

  const handleSend = async () => {
    try {
      setSending(true);
      setError(null);
      await sendSMS(contact.phoneNumber, message);
      
      addMessage({
        id: Date.now().toString(),
        contactId: contact.id,
        otp,
        timestamp: new Date().toISOString(),
      });

      navigate('/messages');
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center">
          <button
            onClick={() => navigate(`/contacts/${contact.id}`)}
            className="mr-4 text-gray-400 hover:text-gray-500"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-medium text-gray-900">New Message</h2>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">To</label>
          <div className="mt-1 text-sm text-gray-900">
            {contact.firstName} {contact.lastName} ({contact.phoneNumber})
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <div className="mt-1">
            <textarea
              readOnly
              value={message}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              rows={4}
            />
          </div>
        </div>
        {error && (
          <div className="mb-4 text-sm text-red-600">{error}</div>
        )}
        <button
          onClick={handleSend}
          disabled={sending}
          className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </div>
  );
};

export default ComposeMessage;