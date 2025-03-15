import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { ChevronRight } from 'lucide-react';

const ContactList = () => {
  const contacts = useStore((state) => state.contacts);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">Contacts</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer"
            onClick={() => navigate(`/contacts/${contact.id}`)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">
                      {contact.firstName[0]}
                      {contact.lastName[0]}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {contact.firstName} {contact.lastName}
                  </div>
                  <div className="text-sm text-gray-500">{contact.phoneNumber}</div>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;