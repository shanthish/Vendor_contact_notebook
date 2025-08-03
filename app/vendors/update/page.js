'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateVendor() {
  const [vendorId, setVendorId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    email: "",
    phone: "",
    address: "",
    tags: "",
    notes: "",
    rating: "",
    createdBy: "",
  });

  const router = useRouter();

  const handleFetch = async () => {
    try {
      const res = await fetch(`/api/vendor/${vendorId}`);
      const { data } = await res.json();
      setFormData({ ...data, tags: data.tags?.join(", ") || "" });
    } catch (err) {
      alert("Vendor not found.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await fetch(`/api/vendor/${vendorId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      if (res.ok) {
        alert("Vendor updated successfully!");
        router.push("/home");
      } else {
        alert("Failed to update vendor.");
      }
    } catch (err) {
      alert("Update failed.");
    }
  };

  return (
    <div className="form_wrapper">
      <h1>Update Vendor</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Vendor ID"
          value={vendorId}
          onChange={(e) => setVendorId(e.target.value)}
        />
        <button type="button" className="fetchbtn" onClick={handleFetch}>
          Fetch Vendor
        </button>
      </div>
      <form onSubmit={handleSubmit} className="vendor_form">
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <label>{field}:</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={field !== "notes"}
            />
          </div>
        ))}
        <button type="submit">Update Vendor</button>
      </form>
    </div>
  );
}
