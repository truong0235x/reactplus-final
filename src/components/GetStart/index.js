import images from '../../assets/images/index';
import { useNavigate } from 'react-router-dom';
import "./GetStart.scss";

function GetStart() {
  const navigate = useNavigate()

  return(
    <div className='get-start'>
      <img className='banner' src={images.done} alt='banner' />
      <div className='title'>
        <p>Welcome to <br /> <span>OUR REMINDER</span></p>
      </div>
      <div className='text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
        </p>
      </div>
      <div className='button' onClick={()=> navigate('/register')}>
        Get Start
        <img src={images.vector} alt='vecter'></img>
      </div>
    </div>
  )
}

export default GetStart;