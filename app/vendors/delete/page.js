'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteVendor() {
  const [vendorId, setVendorId] = useState("");
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this vendor?")) return;

    try {
      const res = await fetch(`/api/vendor/${vendorId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Vendor deleted successfully!");
        router.push("/home");
      } else {
        alert("Failed to delete vendor.");
      }
    } catch (err) {
      alert("Error deleting vendor.");
    }
  };

  return (
    <div className="form_wrapper">
      <h1>Delete Vendor</h1>
      <div className="vendor_form">
        <label>Vendor ID:</label>
        <input
          type="text"
          placeholder="Enter Vendor ID to delete"
          value={vendorId}
          onChange={(e) => setVendorId(e.target.value)}
        />
        <button onClick={handleDelete}>Delete Vendor</button>
      </div>
    </div>
  );
}
