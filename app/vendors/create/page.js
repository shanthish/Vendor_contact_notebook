'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateVendor() {
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

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      let res = await fetch("/api/vendor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Vendor added successfully!");
        router.push("/home");
      } else {
        let data = await res.json();
        alert("Failed: " + data.message);
      }
    } catch (err) {
      console.error("Error submitting vendor:", err);
      alert("An error occurred.");
    }
  };

  return (
    <div className="form_wrapper">
      <h1>Add a New Vendor</h1>
      <form onSubmit={handleSubmit} className="vendor_form">
        {["name", "category", "email", "phone", "address", "tags", "notes", "rating", "createdBy"].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={field !== "notes"}
            />
          </div>
        ))}
        <button type="submit" onClick={()=>router.push("/")}>Add Vendor</button>
      </form>
    </div>
  );
}
