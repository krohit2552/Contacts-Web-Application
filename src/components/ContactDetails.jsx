import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { ArrowLeft, Send, User } from 'lucide-react';

const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = useStore((state) => 
    state.contacts.find((c) => c.id === id)
  );

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/contacts')}
            className="mr-4 text-gray-400 hover:text-gray-500"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-medium text-gray-900">Contact Details</h2>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flex items-center justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
            <User className="h-10 w-10 text-indigo-600" />
          </div>
        </div>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">First Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{contact.firstName}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Last Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{contact.lastName}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900">{contact.phoneNumber}</dd>
          </div>
        </dl>
        <div className="mt-6">
          <button
            onClick={() => navigate(`/contacts/${contact.id}/message`)}
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;