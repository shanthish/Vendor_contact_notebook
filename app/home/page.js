"use client"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="homepage">
        <div className="left">
          <h1>Organize Your Vendor Contacts Effortlessly</h1>
          <p>
            Keep track of vendor names, categories, emails, phone numbers, notes, and ratings — all in one place.
          </p>
          <p>
            View detailed profiles, filter by category, and manage contacts with full CRUD functionality.
          </p>
          <p>
            Built using Next.js and secured with NextAuth for seamless and protected access.
          </p>
          <button className="signhome" onClick={()=>{
            router.push("/login")
          }}>Try Now</button>
        </div>
        <div className="right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GZPWvhdR98XY7ooc7e_iU7YZ-AP9p7-h7A&s"
            alt="Contact Illustration"
          />
        </div>
      </div>
    </>
  );
}
