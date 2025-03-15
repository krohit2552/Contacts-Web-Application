import { create } from 'zustand';

// Mock data
const mockContacts = [
  {
    id: '1',
    firstName: 'Rohit',
    lastName: 'Kumar',
    phoneNumber: '+918651712231'
  },
  {
    id: '2',
    firstName: 'Divyansh',
    lastName: 'Singh Rathore',
    phoneNumber: '+919810153260'
  },
  {
    id: '3',
    firstName: 'Arpit',
    lastName: 'Kumar',
    phoneNumber: '+919810153260'
  }
];

export const useStore = create((set) => ({
  contacts: mockContacts,
  messages: [],
  addMessage: (message) => set((state) => ({
    messages: [message, ...state.messages]
  }))
}));