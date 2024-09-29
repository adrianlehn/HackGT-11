import './About.css';
import image1 from 'vite-project/src/assets/—Pngtree—vector set of medical devices_5424732.png'; 
import image2 from 'vite-project/src/assets/health-clipart-transparent-1.png'; 
function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Our Project</h1>
        <p>
          This project is our submission to HackGT11 with a focus on the AI Funhouse track.
          We've developed a machine learning model trained on a kaggle dataset based on
          patient readmissions. This dataset included relevant patient data including age, number of 
          days visited, number of procedures done, etc. Our goal was to implement a logistic regression to predict
          whether or not a patient is at risk of being readmitted into the hospital within
          30 days. The model has a modest accuracy of 60.25% after following a 70/30 training
          and testing split.
        </p>
      </div>

      <div className="about-images">
        <img src={image1} alt="Image 1" className="about-image" />
        <img src={image2} alt="Image 2" className="about-image" />
      </div>

      <div className="about-creator">
        <p>Created by: Adrian Lehnhaeuser & Matthew Segura</p>
      </div>

      <div className="about-link">
        <p>LinkedIn: adrianlehn & matthewsegura</p>
      </div>
    </div>
  );
}

export default AboutPage;
