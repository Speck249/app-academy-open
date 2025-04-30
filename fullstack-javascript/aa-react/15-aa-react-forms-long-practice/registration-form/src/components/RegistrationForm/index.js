import { useState, useEffect } from 'react';
import InputField from '../InputField';
import SelectField from '../SelectField';
import RadioGroup from '../RadioField';
import CheckboxGroup from '../Checkbox Field';
import TextareaField from '../TextareaField';
import './RegistrationForm.css';


const RegistrationForm = () => {
  // Create State Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const [bio, setBio] = useState("");
  const [subscriptions, setSubscriptions] = useState({yes: false, no: false});
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Implement Email and Phone Number Format Validation
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePhoneNumber = (phoneNumber) => /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/.test(phoneNumber);

  // Validate Form Inputs
  useEffect(() => {
    const errors = {};
    if (!name) errors.name = "Enter Your Name";
    if (!validateEmail(email)) errors.email = "Enter a Valid Email";
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) errors.phoneNumber = "Enter a Valid Phone Number";
    if (phoneNumber && !phoneType) errors.phoneType = "Please Select Phone Type";
    if (!phoneNumber) setPhoneType("")
    if (bio.length > 280) errors.bio = "Maximum Character Limit Reached";
    setValidationErrors(errors)
  }, [name, email, phoneNumber, phoneType, bio])

  // Checkbox Selection Event Handler
  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    setSubscriptions(prev => ({...prev, [name]: checked}))
  }

  // Handles Error Validation upon KeyStroke
  const clearErrorOnChange = (field) => {
    if (validationErrors[field]) setValidationErrors(prev => ({...prev, [field]: undefined}))
  };

 // Handles Form Submission Event
  const onSubmit = (e) => {
    e.preventDefault();
      setHasSubmitted(true);

      // Collect Valid Form Registration Input
      const registrationInformation = {
        name, 
        email,
        phoneNumber,
        phoneType,
        selectedStaff,
        bio,
        subscriptions,
        submittedOn: new Date()
      }

      // Handle Erroneous Submissions
      if (hasSubmitted && Object.keys(validationErrors).length > 0) return alert('Cannot submit');
      
      // Print to Console Collected Information
      console.log(registrationInformation)

      // Reset State Variables
      setName("");
      setEmail("");
      setPhoneNumber("");
      setPhoneType("");
      setSelectedStaff("");
      setBio("")
      setSubscriptions(({yes: false, no: false}));
      setHasSubmitted(false);
      setValidationErrors({});
    }

    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={onSubmit}>
          <InputField 
            id='name'
            label='Full Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              clearErrorOnChange('name'); 
            }}
            errors={validationErrors.name}
            required
          />

          <InputField 
            id='email'
            label='Email'
            type='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              clearErrorOnChange('email'); 
            }}
            errors={validationErrors.email}
            required
          />

          <InputField 
            id='phone-number'
            label='Phone Number'
            type='tel'
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value)
              clearErrorOnChange('phoneNumber'); 
            }}
            placeholder='(+251)-912-345-678'
            errors={validationErrors.phoneNumber}
          />

          <SelectField 
            id='phone-type'
            label='Phone Type'
            value={phoneType}
            onChange={(e) => {
              setPhoneType(e.target.value)
              clearErrorOnChange('phoneType'); 
            }}
            options={['Home', 'Work', 'Mobile']}
            error={validationErrors.phoneType}
          />

          <RadioGroup
            label='Staff'
            name='staff'
            options={['instructor', 'student']}
            selectedValue={selectedStaff}
            onChange={(e) => setSelectedStaff(e.target.value)}
          />

          <TextareaField
            name='bio'
            label='Bio'
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
              clearErrorOnChange('bio');
            }}
            error={validationErrors.bio}
            placeholder='Enter a short bio'
          />

          <CheckboxGroup
            label='Sign up for Email Notification?'
            options={['yes', 'no']}
            values={subscriptions}
            onChange={handleCheckBox}
          />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default RegistrationForm;
