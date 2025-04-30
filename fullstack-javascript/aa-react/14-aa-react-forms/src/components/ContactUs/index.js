import { useState, useEffect } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [comments, setComments] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);


  useEffect(() => {
    const errors = [];
    if (!(name.length > 0)) errors.push("Please Enter your Name");
    if (!(email.includes("@"))) errors.push("Please Enter Valid Email Address");
    setValidationErrors(errors);
  }, [name, email])

  
  const onSubmit = (e) => {
    // Prevent Default Page Behavior - Form Doesn't Reload.
    e.preventDefault();
    
    setHasSubmitted(true);
    if (validationErrors.length > 0) return alert("Cannot Submit");

    // Store User Provided Information, ideally in a RESTful API.
    const contactInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };

    console.log(contactInformation);

    // Reset Input Values
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setComments("");
    hasSubmitted(false);
    setValidationErrors([]);
  };


  return (
    <div>
      <h2>Contact Us</h2>
      {(hasSubmitted && validationErrors.length > 0) && (
        <div>
          Resolve Errors:
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <br />
          <select 
            name="phone=type"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}>
            <optgroup>
              <option value="" disabled>Select a Phone Type</option>
              <option>Work</option>
              <option>Home</option>
              <option>Mobile</option>
            </optgroup>
          </select>

          <br />
          <label htmlFor="comments">Comments:</label>
          <br />
          <textarea 
            id="comments" 
            type="comments" 
            value={comments} 
            onChange={(e) => setComments(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContactUs;
