import React, { useState } from 'react'
import './ContactForm.scss'

const ContactForm = () => {
  const [contact, setContact] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact, question);

    setContact(contact);
    setQuestion(question);
  }



  return (

    <main className='form-container'>
      <form className='form'>
        <h1 className='form__title'> If you are searching in Bitcoin, Music, Development, Mathematics, or quite literally anything else, please ask me questions or put me onto cool things.</h1>
        <div className='form__group'>
          <label className='form__label' htmlFor='contact'>How to contact you?</label>
          <input className='form__input' type='text' name='contact' placeholder='NOSTR pubkey, Twitter, Email, LinkedIn, or whatever you prefer' id='contact' />
        </div>
        <div className='form__group'>
          <label className='form__label' htmlFor='question'>Whats your question or critique?</label>
          <input className='form__input' type='text' name='question' placeholder='Your music makes me sad' id='contact' value={question} onChange={handleSubmit} />
        </div>
        <submit className='form__submit' type='submit'>A man's bitcoin is his own, but Bitcoin belongs to the tribe</submit>
      </form>
    </main >
  )
}

export default ContactForm