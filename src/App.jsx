import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import ComposeMessage from './components/ComposeMessage';
import MessageHistory from './components/MessageHistory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/contacts" replace />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="contacts/:id" element={<ContactDetails />} />
          <Route path="contacts/:id/message" element={<ComposeMessage />} />
          <Route path="messages" element={<MessageHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;