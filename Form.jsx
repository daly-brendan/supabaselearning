import supabase from "../config/supabaseClient"
import { useState } from "react"

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  //const [heardAbout, setHeardAbout] = useState('')
  const [formError, setFormError] =useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!firstName || !lastName || !email) {
      setFormError('Please fill in all the fields correctly')
      return
    }

    const formData = { firstName, lastName, email };

    // Log the data being sent to Supabase
    console.log('Submitting the following data:', formData);


    const {data, error} = await supabase
      .from('surveyresponses')
      .insert([{firstName, lastName, email}])

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly!')
    }
    if (data) {
      console.log('Data sucessfully inserted:', data)
      setFormError(null)
    }
  }
    return (
      <div className="page form">
        
        <div>
          
          <form id="surveyresponses" onSubmit={handleSubmit}>
          <h2>Form</h2>
              <label htmlFor ='firstName'>First Name</label>
              <input 
              type="text" 
              id="firstName" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              /><br/>
              
              <label htmlFor="lastName">Last Name:</label>
              <input 
              type="text" 
              id="lName" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              /><br/>

              <label htmlFor="email">Email Address:</label>
              <input 
              type="text" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              /><br/>


              <button>Submit</button>
              {formError && <p className="error">{formError}</p>}
          
          </form>
        </div>
      </div>
    )
  }
  
  export default Form

/*
  <label htmlfor="heardAbout">Where did you hear about us?</label>
              <select 
              id="heardAbout" 
              value={heardAbout}
              onChange={(e) => setHeardAbout(e.target.value)}  // Handle the change at the select level
              >
                <option value="" disabled>Select an option!</option>
                <option value="Friend">Friend</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
              </select><br/><br/>
*/
