import './About.css';
import image1 from 'vite-project/src/assets/—Pngtree—vector set of medical devices_5424732.png'; 
import image2 from 'vite-project/src/assets/health-clipart-transparent-1.png'; 
function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Our Project</h1>
        <p>
          This project is designed to be interactive and visually appealing. We 
          focus on modern web technologies and creative design solutions.
        </p>
      </div>

      <div className="about-images">
        <img src={image1} alt="Image 1" className="about-image" />
        <img src={image2} alt="Image 2" className="about-image" />
      </div>

      <div className="about-creator">
        <p>Created by: Adrian L & Matthew S</p>
      </div>
    </div>
  );
}

export default AboutPage;
