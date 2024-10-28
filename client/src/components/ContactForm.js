import React, { useState } from "react";
import { addContact } from "../api/api";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    timezone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(contactData);
    // Optionally clear the form or fetch contacts again
    setContactData({
      name: "",
      email: "",
      phone: "",
      address: "",
      timezone: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={contactData.name}
        onChange={(e) =>
          setContactData({ ...contactData, name: e.target.value })
        }
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={contactData.email}
        onChange={(e) =>
          setContactData({ ...contactData, email: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={contactData.phone}
        onChange={(e) =>
          setContactData({ ...contactData, phone: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Address"
        value={contactData.address}
        onChange={(e) =>
          setContactData({ ...contactData, address: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Timezone"
        value={contactData.timezone}
        onChange={(e) =>
          setContactData({ ...contactData, timezone: e.target.value })
        }
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
