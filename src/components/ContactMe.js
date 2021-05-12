import React,{useState} from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ContactMe = () => {
  const [successMessage, setSuccessMessage] = useState('');
  //register用來對該input設定validation，handleSubmit是送出的function，reset是把欄位資料復歸
  const { register, handleSubmit, formState:{errors}, reset } = useForm();
  //watch有onChange效果，監聽我們打的內容
  //console.log(watch())
  const serviceID = 'service_ID'
  const templateID = 'template_ID'
  const userID = 'user_5PI6sBfYY7Lf8D7oMnnIy'
  const onSubmit = (data) => {
    console.log(data)
    sendEmail(
         serviceID,
         templateID,
         {
             name:data.name,
             phone:data.phone,
             email:data.email,
             subject:data.subject,
             description:data.description
         },
         userID
         )
  }

  const sendEmail = (serviceID, templateID, variables, userID, e) => {


    emailjs.send(serviceID, templateID, variables, userID).then(
      () => {
        setSuccessMessage('Form sent successfully! I will contact you ASAP.');
        reset();
        setTimeout(()=>{
            setSuccessMessage('')
        },10000)
      } 
    ).catch(err=>{
        console.error(`Something went wrong ${err}`)
    }
    )
  }
  return (
    <div id='contacts' className='contact-me text-center px-2'>
      <h1>contact me</h1>
      <p>
        Please fill out the form and describe your project needs and I'll
        contact you as soon as possible.
      </p>
      <span style={{color:successMessage?('#198754'):('transparent')}}>{successMessage?(<><FontAwesomeIcon icon={faCheckCircle} style={{color:'#198754'}}/> {successMessage}</>):('Dummy')}</span>
      <div className='container py-5'>
        <form onSubmit={handleSubmit((data)=>onSubmit(data))}>
          <div className='row row-cols-1 row-cols-md-2'>
            <div className='col'>
              <div className='text-center input-area'>
                <input
                  {...register("name", {required: "This is required"})}
                  type='text'
                  placeholder='Name'
                  className='form-control'
                />
                <div className='line'></div>
              </div>
              <span className='error-message' style={{color:errors.name?('var(--primary-red)'):('transparent')}}>{errors.name?(errors.name.message):('Dummy')}</span>
              <div className='text-center input-area'>
                <input
                  {...register('phone', {required:'This is required', maxLength:{value:12, message:'Phone Number required less than 12 characters.'}})}
                  type='text'
                  placeholder='Phone Number'
                  className='form-control'
                />
                <div className='line'></div>
              </div>
              <span className='error-message' style={{color:errors.phone?('var(--primary-red)'):('transparent')}}>{errors.phone?(errors.phone.message):('Dummy')}</span>
              <div className='text-center input-area'>
                <input
                  {...register('email', {required:'This is required', pattern:{value:/^[A-Z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,}(\.[a-z0-9]+)*$/i, message:'Invalid email'}})}
                  type='email'
                  placeholder='Email'
                  className='form-control'
                />
                <div className='line'></div>
              </div>
              <span className='error-message' style={{color:errors.email?('var(--primary-red)'):('transparent')}}>{errors.email?(errors.email.message):('Dummy')}</span>
              <div className='text-center input-area'>
                <input
                  {...register('subject', {required:'This is required'})}
                  type='text'
                  placeholder='Subject'
                  className='form-control'
                />
                <div className='line'></div>
              </div>
              <span className='error-message' style={{color:errors.subject?('var(--primary-red)'):('transparent')}}>{errors.subject?(errors.subject.message):('Dummy')}</span>
            </div>
            <div className='col d-flex flex-column align-items-start'>
              <div className='text-center w-100 textarea-area'>
                <textarea
                  className='form-control'
                  placeholder='Please type the description...'
                  {...register('description', {required:'This is required', minLength:{value:20, message:'Content is required to exceed more than 20 characters'}})}
                ></textarea>
                <div className='line'></div>
              </div>
              <span className='error-message' style={{color:errors.description?('var(--primary-red)'):('transparent')}}>{errors.description?(errors.description.message):('Dummy')}</span>
              <button className='btn-main-offer contact-btn' type='submit'>
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
