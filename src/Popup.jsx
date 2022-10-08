import {React,useState} from 'react'
import './popup.css'

function Popup (Props) {
  const { closePopUp, total } = Props
    const [showModal, setShowModal] = useState(false)
  return (
  
    <div>
    <div onClick={() => setShowModal(true)}>
    </div>
      <h1 className='value-total'>

      <button className='closeButton'
          onClick={() => closePopUp(false)}>
          Close
      </button>
          <img src="https://cdn.discordapp.com/attachments/1015206753857720341/1016231095479582780/5305244.png" alt="" className='popup-img'/>
            NET WORTH: {total} Baht
        </h1>
    </div>
  )
}

export default Popup