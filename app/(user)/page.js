import { connectdb } from "@/lib/db";
import { VendorModel } from "@/model/contact";
import "../globals.css";


export default async function VendorsPage() {
    await connectdb();

    const vendors = await VendorModel.find();

    return (
        <div className="vendors_wrapper">
            <h1 className="vendors_heading">Vendors List</h1>
            {vendors.map((vendor) => (
                <div key={vendor._id.toString()} className="vendor_card">
                    <h2>{vendor.name}</h2>
                    <p><b>Category:</b> {vendor.category}</p>
                    <p><b>Email:</b> {vendor.email}</p>
                    <p>
                        <b>Phone:</b> {vendor.phone}
                        <a
                            href={`https://wa.me/${vendor.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Chat on WhatsApp"
                        >
                            <img
                                src="/whatapp_icon.jpg"
                                alt="WhatsApp"
                                className="whatsapp-icon"
                            />
                        </a>
                    </p>
                    <p><b>Address:</b> {vendor.address}</p>
                    <p><b>Tags:</b> {vendor.tags?.join(", ")}</p>
                    <p><b>Notes:</b> {vendor.notes}</p>
                    <p><b>Rating:</b> {vendor.rating}/5</p>
                    <p><b>Created By:</b> {vendor.createdBy}</p>
                    <p><b>Created At:</b> {new Date(vendor.createdAt).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}

