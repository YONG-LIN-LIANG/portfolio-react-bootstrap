import React from 'react'
import {FacebookShareButton,
        FacebookIcon,
        LineShareButton,
        LineIcon,
        LinkedinShareButton,
        LinkedinIcon,
        TwitterShareButton,
        TwitterIcon
    } from 'react-share';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container d-flex align-items-center h-100 justify-content-center'>
                <div className='row row-cols-1 row-cols-lg-4 w-100 pt-5 pb-3 py-lg-5'>
                    <ul className='col'>
                        <li>No. 86, Fayuan St., Yuanlin City, Changhua County 510009, Taiwan (R.O.C.)</li>
                        <li>(+886)902332951</li>
                        <li>steven841221@gmail.com</li>
                    </ul>
                    <ul className='col'>
                        <li>Home</li>
                        <li>About me</li>
                        <li>Services</li>
                    </ul>
                    <ul className='col'>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Contacts</li>
                    </ul>
                    <ul className='col text-center d-flex flex-column align-items-center social-media-container'>
                        <li className='d-flex'>
                            <FacebookShareButton
                            url={"https://www.youtube.com/channel/UC-todZ8Bzmb0yIzLJXHPgZQ"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript"
                            ><FacebookIcon className='mx-3 social-media' size={36}/></FacebookShareButton>
                            <LineShareButton
                            url={"https://www.youtube.com/channel/UC-todZ8Bzmb0yIzLJXHPgZQ"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript"
                            ><LineIcon className='mx-3 social-media' size={36}/></LineShareButton>
                            <LinkedinShareButton
                            url={"https://www.youtube.com/channel/UC-todZ8Bzmb0yIzLJXHPgZQ"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript"
                            ><LinkedinIcon className='mx-3 social-media' size={36}/></LinkedinShareButton>
                            <TwitterShareButton
                            url={"https://www.youtube.com/channel/UC-todZ8Bzmb0yIzLJXHPgZQ"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript"
                            ><TwitterIcon className='mx-3 social-media' size={36}/></TwitterShareButton>
                        </li>
                        <li className='copy-right mt-3'>Copyright&copy;2021 Steven | All Rights Reserved</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
