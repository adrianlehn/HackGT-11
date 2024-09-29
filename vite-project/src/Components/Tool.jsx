import { useState } from 'react';
import './Tool.css';

function Tool() {
  const [formData, setFormData] = useState({
    age: '',
    time_in_hospital: '',
    n_procedures: '',
    n_lab_procedures: '',
    n_medications: '',
    n_outpatient: '',
    n_inpatient: '',
    n_emergency: '',
    medical_specialty: '',
    diag_1: '',
    diag_2: '',
    diag_3: '',
    glucose_test: '',
    A1Ctest: '',
    change: '',
    diabetes_med: '',
    readmitted: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [predictionColor, setPredictionColor] = useState('');
  const [message, setMessage] = useState('');
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  
      });
      console.log(response);
      
      const result = await response.json();
      const probability = result.prediction;
      setPrediction(probability);

      if (probability <= 0.4) {
        setPredictionColor('green');
        setMessage('Low risk of readmission.');
      } else if (probability <= 0.7) {
        setPredictionColor('yellow');
        setMessage('Moderate risk of readmission.');
      } else {
        setPredictionColor('red');
        setMessage('High risk of readmission.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  

  return (
    <div className="tool-container">
      <form className="survey-form" onSubmit={handleSubmit}>
        <h1>Patient Readmission Risk Survey</h1>

        {/* Age Bracket */}
        <div className="form-group">
          <label htmlFor="age">Age Bracket
            <span className="fa-solid fa-circle-info" title="Age bracket of the patient"></span>
          </label>
          <select name="age" id="age" onChange={handleChange} required>
            <option value="">Select Age Bracket</option>
            <option value="[40-50)">[40-50)</option>
            <option value="[50-60)">[50-60)</option>
            <option value="[60-70)">[60-70)</option>
            <option value="[70-80)">[70-80)</option>
            <option value="[80-90)">[80-90)</option>
            <option value="[90-100)">[90-100)</option>
          </select>
        </div>

        {/* Days in Hospital */}
        <div className="form-group">
          <label htmlFor="time_in_hospital">Days in Hospital
            <span className="fa-solid fa-circle-info" title="Number of days in the hospital (from 1 to 14)"></span>
          </label>
          <input 
            type="number" 
            name="time_in_hospital" 
            id="time_in_hospital" 
            min="0" 
            max="14" 
            onChange={handleChange} 
            required 
          />
        </div>

        

        {/* Number of Lab Procedures */}
        <div className="form-group">
          <label htmlFor="n_lab_procedures">Number of Lab Procedures
            <span className="fa-solid fa-circle-info" title="Number of lab procedures performed during the hospital stay"></span>
          </label>
          <input 
            type="number" 
            name="n_lab_procedures" 
            id="n_lab_procedures" 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Number of Medications */}
        <div className="form-group">
          <label htmlFor="n_medications">Number of Medications
            <span className="fa-solid fa-circle-info" title="Number of medications administered during the hospital stay"></span>
          </label>
          <input 
            type="number" 
            name="n_medications" 
            id="n_medications" 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Number of Outpatient Visits */}
        <div className="form-group">
          <label htmlFor="n_outpatient">Number of Outpatient Visits
            <span className="fa-solid fa-circle-info" title="Number of outpatient visits in the year before a hospital stay"></span>
          </label>
          <input 
            type="number" 
            name="n_outpatient" 
            id="n_outpatient" 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Number of Inpatient Visits */}
        <div className="form-group">
          <label htmlFor="n_inpatient">Number of Inpatient Visits
            <span className="fa-solid fa-circle-info" title="Number of inpatient visits in the year before a hospital stay"></span>
          </label>
          <input 
            type="number" 
            name="n_inpatient" 
            id="n_inpatient" 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Number of Emergency Room Visits */}
        <div className="form-group">
          <label htmlFor="n_emergency">Number of Emergency Room Visits
            <span className="fa-solid fa-circle-info" title="Number of emergency room visits in the year before a hospital stay"></span>
          </label>
          <input 
            type="number" 
            name="n_emergency" 
            id="n_emergency" 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Medical Specialty */}
        <div className="form-group">
          <label htmlFor="medical_specialty">Medical Specialty
            <span className="fa-solid fa-circle-info" title="The specialty of the admitting physician"></span>
          </label>
          <select name="medical_specialty" id="medical_specialty" onChange={handleChange} required>
            <option value="">Select Specialty</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Emergency/Trauma">Emergency/Trauma</option>
            <option value="GeneralPractice">General Practice</option>
            <option value="InternalMedicine">Internal Medicine</option>
            <option value="Surgery">Surgery</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Primary Diagnosis */}
        <div className="form-group">
          <label htmlFor="diag_1">Primary Diagnosis
            <span className="fa-solid fa-circle-info" title="Primary diagnosis (Circulatory, Respiratory, Digestive, etc.)"></span>
          </label>
          <select name="diag_1" id="diag_1" onChange={handleChange} required>
            <option value="">Select Diagnosis</option>
            <option value="Circulatory">Circulatory</option>
            <option value="Respiratory">Respiratory</option>
            <option value="Digestive">Digestive</option>
            <option value="Injury">Injury</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Secondary Diagnosis */}
        <div className="form-group">
          <label htmlFor="diag_2">Secondary Diagnosis
            <span className="fa-solid fa-circle-info" title="Secondary diagnosis (if applicable)"></span>
          </label>
          <select name="diag_2" id="diag_2" onChange={handleChange} required>
            <option value="">Select Diagnosis</option>
            <option value="Circulatory">Circulatory</option>
            <option value="Respiratory">Respiratory</option>
            <option value="Digestive">Digestive</option>
            <option value="Injury">Injury</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Additional Secondary Diagnosis */}
        <div className="form-group">
          <label htmlFor="diag_3">Additional Diagnosis
            <span className="fa-solid fa-circle-info" title="Any additional diagnosis"></span>
          </label>
          <select name="diag_3" id="diag_3" onChange={handleChange} required>
            <option value="">Select Diagnosis</option>
            <option value="Circulatory">Circulatory</option>
            <option value="Respiratory">Respiratory</option>
            <option value="Digestive">Digestive</option>
            <option value="Injury">Injury</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Glucose Test */}
        <div className="form-group">
          <label htmlFor="glucose_test">Glucose Test
            <span className="fa-solid fa-circle-info" title="Whether the glucose serum test was high (> 200), normal, or not performed"></span>
          </label>
          <select name="glucose_test" id="glucose_test" onChange={handleChange} required>
            <option value="">Select Glucose Test Result</option>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="no">Not Performed</option>
          </select>
        </div>

        {/* A1C Test */}
        <div className="form-group">
          <label htmlFor="A1Ctest">A1C Test
            <span className="fa-solid fa-circle-info" title="Whether the A1C level of the patient was high (> 7%), normal, or not performed"></span>
          </label>
          <select name="A1Ctest" id="A1Ctest" onChange={handleChange} required>
            <option value="">Select A1C Test Result</option>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="no">Not Performed</option>
          </select>
        </div>

        {/* Diabetes Medication Change */}
        <div className="form-group">
          <label htmlFor="change">Diabetes Medication Change
            <span className="fa-solid fa-circle-info" title="Whether there was a change in the diabetes medication ('yes' or 'no')"></span>
          </label>
          <select name="change" id="change" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Diabetes Medication Prescribed */}
        <div className="form-group">
          <label htmlFor="diabetes_med">Diabetes Medication Prescribed
            <span className="fa-solid fa-circle-info" title="Whether a diabetes medication was prescribed ('yes' or 'no')"></span>
          </label>
          <select name="diabetes_med" id="diabetes_med" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

       

        <button type="submit">Submit</button>
      </form>
      {prediction !== null && (
      <div className="prediction-result">
        <div 
          className="prediction-block" 
          style={{ backgroundColor: predictionColor, width: '100px', height: '100px', margin: '20px auto' }}
        ></div>
        <p>{message}</p>
      </div>
    )}
  
    </div>
  );
}

export default Tool;
