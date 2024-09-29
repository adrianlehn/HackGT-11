
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import image1 from 'vite-project/src/assets/damn-removebg-preview.png'; 
import image2 from 'vite-project/src/assets/bruh-removebg-preview.png'; 
import image3 from 'vite-project/src/assets/bruh2-removebg-preview.png'; 

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>REMA : The Future of Healthcare</h1>
      <p>Machine Learning tool that predicts hospital re-admission</p>
      <p>What are you waiting for? </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
      </div>
      <div className="hero-images">
        <img src={image3} alt="Image 1" className="about-image" />
        <img src={image1} alt="Image 1" className="about-image" />
        <img src={image2} alt="Image 1" className="about-image" />
        
      </div>
    </div>
  );
}

export default HeroSection;