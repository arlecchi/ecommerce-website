import { useState } from "react";

const AddressList = ({ onSelectAddress }) => {
  const [selectedAddress, setSelectedAddress] = useState(1);

  const addresses = [
    {
      id: 1,
      name: "Rumah Aza",
      type: "HOME",
      address: "Jalan Palagan Nomor 32 DI Yogyakarta",
      contact: "(936) 361-0310",
    },
    {
      id: 2,
      name: "MechVerse",
      type: "OFFICE",
      address: "1219 Harvest Path, Jacksonville, TX 40326",
      contact: "(936) 361-0310",
    },
  ];

  const handleSelect = (address) => {
    setSelectedAddress(address.id);
    onSelectAddress(address); // Update parent component's state
  };

  return (
    <div className="address-container">
      {addresses.map((addr) => (
        <div key={addr.id} className={`address-card ${selectedAddress === addr.id ? "selected" : ""}`}>
          <div className="address-header">
            <input
              type="radio"
              id={`address-${addr.id}`}
              name="address"
              className="radio"
              checked={selectedAddress === addr.id}
              onChange={() => handleSelect(addr)}
            />
            <label htmlFor={`address-${addr.id}`} className="name">{addr.name}</label>
            <span className={`tag ${addr.type.toLowerCase()}`}>{addr.type}</span>
          </div>
          <p className="address">{addr.address}</p>
          <p className="contact"><strong>Contact -</strong> {addr.contact}</p>
        </div>
      ))}
      <div className="add-address d-flex align-items-center mt-3">
        <span className="add-icon me-2">+</span>
        <span>Add Address</span>
      </div>
    </div>
  );  
};

export default AddressList;
