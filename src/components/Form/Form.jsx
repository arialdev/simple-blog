import './Form.css'

const Form = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    alert('Message submited');
  }
  return (
    <>
      <h2>Contact me!</h2>
      <form id="contact-form" name="contact" method="POST" data-netlify="true" action='/hello'>
        <label htmlFor="email-input">Your email:</label>
        <input id="email-input" type='email' />
        <br />
        <label htmlFor="body-input">Your message:</label>
        <textarea id="body-input" />
        <input className='submit' type='submit' value='Send' onClick={onSubmit} />
      </form>
    </>
  )

};

export default Form;