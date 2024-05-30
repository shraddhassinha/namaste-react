import React, { useEffect } from "react";

function Contact(props) {
  console.log("in contact");
  useEffect(() => {
    console.log("contact component did mount");
  }, []);
  return (
    <div>
      <h1>Contact Us</h1>
      <form className="">
        <label>Name</label>
        <input className="border border-black m-4" type="text" />
        <label>Query</label>
        <input className="border border-black m-4" type="text" />
        <button className="border border-black bg-gray-200 p-1">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
