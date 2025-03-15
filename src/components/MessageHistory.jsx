import React from 'react';
import { useStore } from '../store';
import { formatDistanceToNow } from 'date-fns';

const MessageHistory = () => {
  const { messages, contacts } = useStore();

  const getContactName = (contactId) => {
    const contact = contacts.find((c) => c.id === contactId);
    return contact ? `${contact.firstName} ${contact.lastName}` : 'Unknown Contact';
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">Message History</h2>
      </div>
      <div className="border-t border-gray-200">
        {messages.length === 0 ? (
          <div className="px-4 py-5 sm:px-6 text-gray-500 text-center">
            No messages sent yet
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {messages.map((message) => (
              <li key={message.id} className="px-4 py-4 sm:px-6">
                <div className="flex justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {getContactName(message.contactId)}
                    </div>
                    <div className="text-sm text-gray-500">
                      OTP: {message.otp}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MessageHistory;