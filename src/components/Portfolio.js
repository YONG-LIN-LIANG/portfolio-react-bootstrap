import React from 'react'
import work1 from '../imgs/mywork1.JPG'
import work2 from '../imgs/mywork2.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import 'react-popupbox/dist/react-popupbox.css'
//React popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
const Portfolio = () => {
  const openPopupboxRandomTest = () => {
    //content變數裡放光盒要顯示的內容
    const content = (
      <div className='portfolio-popupbox'>
        <img src={work1} alt='randomtestPic' />
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <b>GitHub: </b>
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/YONG-LIN-LIANG/eng-test-app')
          }
        >
          https://github.com/YONG-LIN-LIANG/eng-test-app
        </a>
      </div>
    )
    //用PopupboxManager打開這個內容
    PopupboxManager.open({ content })
  }

  //設定光盒其他設定值
  const popupboxConfigRandomTest = {
    //光盒的會出現title
    titleBar: {
      enable: true,
      text: 'Random Test Project.'
    },
    //漸入效果
    fadeIn: true,
    //等於transition效果
    fadeInSpeed: 500
  }

  const openPopupboxPersonalBlog = () => {
    //content變數裡放光盒要顯示的內容
    const content = (
      <div className='portfolio-popupbox'>
        <div className='personal-blog-img-container'>
          <img src={work2} alt='randomtestPic' />
        </div>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <b>GitHub: </b>
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/YONG-LIN-LIANG/my-blog')
          }
        >
          https://github.com/YONG-LIN-LIANG/my-blog
        </a>
      </div>
    )
    //用PopupboxManager打開這個內容
    PopupboxManager.open({ content })
  }

  //設定光盒其他設定值
  const popupboxConfigPersonalBlog = {
    //光盒的會出現title
    titleBar: {
      enable: true,
      text: 'Personal Blog Project.'
    },
    //漸入效果
    fadeIn: true,
    //等於transition效果
    fadeInSpeed: 500
  }
  return (
    <div id='portfolio' className='portfolio py-5'>
      <div className='container'>
        <h1 className='text-center pb-5'>Portfolio</h1>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 d-flex justify-content-center'>
          <div className='col outside mb-4' onClick={openPopupboxRandomTest}>
            <div className='p-2 space'>
              <FontAwesomeIcon icon={faSearchPlus} />
              <div className='img-container'>
                <img src={work1} />
              </div>
            </div>
          </div>
          <div className='col outside' onClick={openPopupboxPersonalBlog}>
            <div className='p-2 space'>
              <FontAwesomeIcon icon={faSearchPlus} />
              <div className='img-container'>
                <img src={work2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigRandomTest} />
      <PopupboxContainer {...popupboxConfigPersonalBlog} />
    </div>
  )
}

export default Portfolio
