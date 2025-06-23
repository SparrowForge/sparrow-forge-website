import * as React from 'react';

const EmailTemplate = ({ fullName, email, subject, message }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
      <h2 style={{ color: '#FF6600' }}>New Contact Form Submission</h2>
      <p><strong>Full Name:</strong> {fullName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Message:</strong></p>
      <p style={{ background: '#f9f9f9', padding: '10px', borderRadius: '8px' }}>{message}</p>

      <hr style={{ marginTop: '20px' }} />
      <p style={{ fontSize: '12px', color: '#888' }}>
        This email was generated from your contact form.
      </p>
    </div>
  );
};

export default EmailTemplate;
