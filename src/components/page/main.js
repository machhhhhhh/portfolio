import '../../App.css';

import background from '../picture/background.jpg'

import spot from '../mp3/Spot.mp3'
import spotify from '../mp3/Spotify.mp3'

import TVC from '../mp4/TVC.mp4'

import kfc from '../picture/kfc.png'
import profile from '../picture/profile.jpg'
import foodpanda from '../picture/panda.png'
import second from '../picture/second-year.png'
import uecof from '../picture/uecof.png'

import k1 from '../picture/kfc/k1.png'
import k2 from '../picture/kfc/k2.png'
import k3 from '../picture/kfc/k3.png'
import k4 from '../picture/kfc/k4.png'

import mp3 from '../picture/uecof/mp3.png'
import mp4 from '../picture/uecof/mp4.png'
import u1 from '../picture/uecof/1.jpg'
import u2 from '../picture/uecof/2.jpg'
import u3 from '../picture/uecof/3.jpg'
import u4 from '../picture/uecof/4.jpg'
import u5 from '../picture/uecof/งานอัลบั้มเซ็ต.jpg'
import footer from '../picture/uecof/footer.jpg'
import footer_information from '../picture/uecof/footer-information.png'

import certificate from '../picture/workshop/certificate.jpg'
import discussion from '../picture/workshop/discussion.jpg'
import w1 from '../picture/workshop/w1.jpg'
import w2 from '../picture/workshop/w2.jpg'
import w3 from '../picture/workshop/w3.jpg'
import w4 from '../picture/workshop/w4.jpg'
import w5 from '../picture/workshop/w5.jpg'
import zero from '../picture/workshop/zero.png'

import interview from '../picture/uecof/interview.png'

const panda = 'https://drive.google.com/file/d/1UXCm5Qm5lZpQI7eNEXwHU4IW_DE2F3zo/view?usp=sharing';
const k = 'https://drive.google.com/file/d/1H5cs2cTb4FtVlDseDyjUV5pTbyjW03mi/view?usp=sharing'
const u = 'https://drive.google.com/file/d/1YjETBlM-lKsHVEKwc4SRzawUshsA_RVB/view?usp=sharing'
const i = 'https://drive.google.com/file/d/1vUVllFUIpIKagoXSY_artWTnbjk8ABhR/view?usp=sharing'

export default function Main() {

  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>

      <div className='header'>

        <div className='profile'>
          <img className='profile-image' 
            src={profile}
            alt='profile' 
            />
        </div>

        <div className='title'>
          <h1 className='title-info'>Portfolio</h1>
        </div>

      </div>

      <div className='details'>

          <div className='second-year'>
              <h1 className='second-year-tag'>Media Planning </h1>

              <div className='second-year-header'>
                <div className='second-year-header-info second-main'>
                      <p className='p-tag'>Click for more information</p><br/>
                        <a href={panda}>
                          <img 
                            className='second-year-header-info-image'
                            src={foodpanda}
                            alt='panda'
                          />
                        </a>
                    </div>             

                  <div className='second-year-header-info'>
                    <img
                      className='second-vice'
                      src={second}
                      alt='information'
                     />
                  </div>

                  <div className='second-year-header-info second-main'>
                    <p className='p-tag'>Click for more information</p><br/>
                    <a href={k} >
                        <img 
                          className='second-year-header-info-image'
                          src={kfc}
                          alt='kfc'
                        />
                    </a>
                  </div>

              </div>

              <div className='media-planning-kfc'>
                  <img
                    className='kfc'
                    src={k1}
                    alt='kfc'
                  />
                  <img
                    className='kfc'
                    src={k2}
                    alt='kfc'
                  />
                  <img
                    className='kfc'
                    src={k3}
                    alt='kfc'
                  />
                  <img
                    className='kfc'
                    src={k4}
                    alt='kfc'
                  />
              </div>
          </div>

          <div className='third-year'>
              <h1 className='third-year-tag'>Media Design and Production Strategies</h1>

              <div className='third-year-header logo'>
                  <div className='third-year-header-title'>
                    <p className='p-tag'>Click for more information</p><br/>
                      <a href={u}>
                        <img 
                          className='uecof'
                          src={uecof}
                          alt='uecof'
                        />
                      </a>
                  </div>
                  <div className='third-year-header-mp3'>
                      <div className='third-year-mp3'>
                        <div className='third-year-header-mp3-info'>
                          <audio controls src={spot} controlsList="nodownload"/>
                        </div>
                        <div className='third-year-header-mp3-info'>
                          <audio controls src={spotify} controlsList="nodownload" />
                        </div>
                      </div>
                  </div>
                  <div className='third-year-mp3-detail'>
                        <img
                          src={mp3}
                          className ='mp3-detail'
                          alt='mp3 information'
                        />
                      </div>
              </div>

              <div className='third-year-mp4'>
                <div className='mp4-tag'>
                    <img 
                      className='mp4-detail'
                      src={mp4}
                      alt='mp4 information'
                    />
                </div>
                <div className='third-year-header-mp4'>
                            <video className='ss' src={TVC} width="350" height="210" controls controlsList="nodownload"/> 
                            
                            <div className='interview-tag'>
                              <p className='p-tag'>Click for more information</p>
                              <a href={i}>
                                <img
                                  className='interview'
                                  src={interview}
                                  alt='interview'
                                />
                              </a>
                            </div>
                </div>
              </div>

              <div className='third-year-uecof'>
                  <div className='third-year-uecof-header'>
                   <div className='third-year-uecof-header-tag'>
                    <img
                        className='uecof-main'
                        src={u5}
                        alt='uecof'
                      />
                      <img
                        className='uecof-main uecof-main-tag'
                        src={u1}
                        alt='uecof'
                      />
                   </div>
                    <div className='third-year-uecof-header-tag'>
                      <img
                        className='uecof-main '
                        src={u2}
                        alt='uecof'
                      />
                      <img
                        className='uecof-main uecof-main-tag'
                        src={u3}
                        alt='uecof'
                      />
                    </div>
                    <img
                      className='uecof-main uecof-main-final'
                      src={u4}
                      alt='uecof'
                    />
                  </div>
              </div>

              <div className='uecof-footer'>
                <img
                  className='uecof-footer-snapshot'
                  src={footer}
                  alt='uecof-footer'
                />
                <img
                    className='uecof-footer-information'
                    src={footer_information}
                    alt='uecof-footer'
                  />
              </div>
          </div>

          <div className='workshop'>
                <h1 className='workshop-tag'>Work Shop</h1>

                <div className='workshop-info'>
                    <div className='workshop-info-tag'>
                      <img
                        className='workshop-info-zero'
                        src={zero}
                        alt='certificate'
                      />
                    </div>
                    <div className='workshop-info-certificate'>
                      <div className='workshop-info-tag-zero'>
                          <img
                            className='workshop-info-image'
                            src={certificate}
                            alt='zero'
                          />
                      </div>
                      <div className='workshop-info-tag'>
                        <img
                          className='workshop-info-image'
                          src={discussion}
                          alt='discussion'
                        />
                      </div>
                    </div>
                </div>

                <div className='workshop-picture-up'>
                    <img 
                      className='workshop-image-up'
                      src={w4}
                      alt='workshop'
                    />
                    <img 
                      className='workshop-image-up workshop-footer'
                      src={w1}
                      alt='workshop'
                    />
                </div>
                <div className='workshop-picture-down'>
                    <img 
                      className='workshop-image-down'
                      src={w3}
                      alt='workshop'
                    />
                    <img 
                      className='workshop-image-down workshop-footer'
                      src={w2}
                      alt='workshop'
                    />
                    <img 
                      className='workshop-image-down workshop-footer'
                      src={w5}
                      alt='workshop'
                    />
                </div>
          </div>
      </div>
    </div>
  )
}