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
            <span className="radio" onClick={() => handleSelect(addr)}>
              {selectedAddress === addr.id ? "🔴" : "⚪"}
            </span>
            <span className="name">{addr.name}</span>
            <span className={`tag ${addr.type.toLowerCase()}`}>{addr.type}</span>
          </div>
          <p className="address">{addr.address}</p>
          <p className="contact"><strong>Contact -</strong> {addr.contact}</p>
        </div>
      ))}
      <div className="add-address">➕ Add New Address</div>
    </div>
  );
};

export default AddressList;
