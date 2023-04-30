import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
         <footer className="main-footer">
        <div className="main-container_footer">
          <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-2">
              <h2 className="heading heading-sm text-lt">AFTAB AHMED</h2>
              <p className="main-footer__short-desc">
                A Frontend focused Web Developer building the Frontend of Websites
                and Web Applications that leads to the success of the overall
                product
              </p>
            </div>
            
            <div className="main-footer__row main-footer__row-1">
            
              <div className="main-footer__social-cont">
              <div>
              <h2 className="social_head">SOCIAL</h2>
            </div>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aftabahmed1311/">
                  <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="linkedin" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Aftab1311">
                  <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="github"/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/MysticalAftab">
                  <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png" alt="twitter" />
                </a>
                <a target="_blank" rel="noreferrer" href="">
                  <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/c7b1e51b8c75a239d68af3d42866666580f390ec/dcc7c/assets/png/blog-ico.png" alt="blog" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCKlNOKs148Wh1vpMk5NcMtQ">
                  <img className="main-footer__icon main-footer__icon--mr-none" src="https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png" alt="youtube" />
                </a>
              </div>
            </div>
            
          </div>
          <div class="main-footer__line"></div>
          <div className="main-footer__lower">
            © Copyright
            2023. Made by &nbsp;
            <a  target="_blank" href=""> Aftab Ahmed</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer