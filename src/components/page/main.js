import { useState } from 'react';
import '../../App.css';
import file from '../test.mp3'
import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function Main() {

    let subtitle
    const [modalOne, setOne] = useState(false);
    const [modalTwo, setTwo] = useState(false);
    const [modalThree, setThree] = useState(false);


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }


  return (
    <div className="main">

      <div className='header'>

        <div className='profile'>
          <img className='profile-image' 
            src='https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/294669135_2328563367281799_1760092195895746730_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF5COp8Yj1-TfaIZ52B4v83azCdN42eVG1rMJ03jZ5UbfqyClz4nOkoX3dCshN2UBqVMk3llFkSdgVagOGj8NTB&_nc_ohc=3jfBut3ayUwAX8SNdFb&_nc_zt=23&_nc_ht=scontent.fbkk2-8.fna&oh=00_AT9j8lKjY04ppZCZLLx2QmTiLIGNRKZeQu0eYm08Igiopw&oe=63021365' 
            alt='profile' 
            />
        </div>

        <div className='title'>
          <h1 className='title-info'>Portfolio</h1>
        </div>

      </div>

      <div className='details'>

          <div className='first-year'>
              <h1 className='first-year-tag'>The First Year (2562) </h1>
              
              <div className='first-year-header'>
                  <div className='first-year-header-info'>
                    <img 
                      className='first-year-header-info-image'
                      src='https://pbs.twimg.com/media/EY9YPOEUcAEY_2R?format=jpg&name=large'
                      alt='mookata' 
                      />
                  </div>
                  <div className='first-year-header-info'>
                    <img 
                      className='first-year-header-info-image'
                      src='https://www.catdumb.tv/wp-content/uploads/2020/09/1-9.png'
                      alt='shabu' 
                      />
                  </div>
                  <div className='first-year-header-info'>
                    <img 
                      className='first-year-header-info-image'
                      src='https://rodentcare.biz/wp-content/uploads/2021/04/20210311_225050-scaled.jpg'
                      alt='yakiniku' 
                      />
                  </div>
              </div>
          </div>

          <div className='second-year'>
              <h1 className='second-year-tag'>The Second Year (2563) </h1>

              <div className='second-year-header'>
                  <div className='second-year-header-info'>
                      <img 
                        className='second-year-header-info-image'
                        src='data:image/png;base64,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'
                        alt='kfc'
                      />
                  </div>
                  <div className='second-year-header-info'>
                      <img 
                        className='second-year-header-info-image'
                        src='data:image/png;base64,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'
                        alt='panda'
                      />
                  </div>
                  {/* <div className='second-year-header-info'>
                      <img 
                        src=''
                        alt='other'
                      />
                  </div> */}
              </div>
          </div>

          <div className='third-year'>
              <h1 className='third-year-tag'>The Third Year (2564) </h1>

              <div className='third-year-header'>

                  <div className='third-year-header-mp3'>
                      <div className='third-year-header-mp3-info'>
                        <audio controls src={file} />
                      </div>
                      <div className='third-year-header-mp3-info'>
                        <audio controls src={file} />
                      </div>
                      <div className='third-year-header-mp3-info'>
                        <audio controls src={file} />
                      </div>
                  </div>
                  
                  <div className='third-year-header-title'>
                    <div className='third-year-header-title-info'>
                        <img 
                          className='third-year-header-title-info-image'
                          onClick={()=>setOne(true)}
                          src='https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
                          alt=''
                        />
                        <Modal
                            isOpen={modalOne}
                            onAfterOpen={afterOpenModal}
                            style={customStyles}
                            >
                            <div className='modal-tag'>
                                <h1></h1>
                                <button className='modal-button' onClick={()=>setOne(false)}><CloseIcon/></button>
                            </div>
                            <h1>I am a modal 1</h1>
                        </Modal>

                    </div>

                    <div className='third-year-header-title-info'>
                        <img
                          className='third-year-header-title-info-image' 
                          onClick={()=>setTwo(true)}
                          src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
                          alt=''
                        />
                        <Modal
                            isOpen={modalTwo}
                            onAfterOpen={afterOpenModal}
                            style={customStyles}
                            >
                            <div className='modal-tag'>
                                <h1></h1>
                                <button className='modal-button' onClick={()=>setTwo(false)}><CloseIcon/></button>
                            </div>
                            <h1>I am a modal 2</h1>
                        </Modal>
                    </div>

                    <div className='third-year-header-title-info'>
                        <img 
                          className='third-year-header-title-info-image'
                          onClick={()=>setThree(true)}
                          src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                          alt=''
                        />
                        <Modal
                            isOpen={modalThree}
                            onAfterOpen={afterOpenModal}
                            style={customStyles}
                            >
                            <div className='modal-tag'>
                                <h1></h1>
                                <button className='modal-button' onClick={()=>setThree(false)}><CloseIcon/></button>
                            </div>
                            <h1>I am a modal 3</h1>
                        </Modal>
                    </div>
                  </div>
              </div>
          </div>

          <div className='workshop'>
                <h1 className='workshop-tag'>Work Shop</h1>

                <div className='workshop-info'>
                    <div className='workshop-info-tag'>
                      <img
                        className='workshop-info-image'
                        src='https://icons-for-free.com/iconfiles/png/512/gear+machine+office+radio+settings+setting+settings+icon-1320183166217702456.png'
                        alt='workshop'
                      />
                    </div>
                    <div className='workshop-info-tag'>
                      <img
                        className='workshop-info-image'
                        src='https://img.freepik.com/free-vector/startup-development_1284-22687.jpg?w=2000'
                        alt='startup'
                      />
                    </div>
                </div>
          </div>

      </div>


    </div>
  )
}

export default Main