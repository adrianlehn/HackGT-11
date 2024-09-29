# AI Funhouse - HackGT-11

This project involves using a machine learning model to analyze hospital patient data and identify trends in to predict readmissions.

## Setup Instructions

### Step 1: Create a Virtual Environment
Use the following command to create a virtual environment, and then download the dependencies:

```bash
# For Python 2.x
python -m venv venv

# For Python 3.x
python3 -m venv venv

# On macOS/Linux
source venv/bin/activate

# On Windows
venv\Scripts\activate

pip install -r requirements.txt
```
## CSV File Format (dataset found on kaggle)
Link: https://www.kaggle.com/datasets/dubradave/hospital-readmissions

- **"age"**: age bracket of the patient
- **"time_in_hospital"**: number of days in the hospital (from 1 to 14)
- **"n_procedures"**: number of procedures performed during the hospital stay
- **"n_lab_procedures"**: number of laboratory procedures performed during the hospital stay
- **"n_medications"**: number of medications administered during the hospital stay
- **"n_outpatient"**: number of outpatient visits in the year before a hospital stay
- **"n_inpatient"**: number of inpatient visits in the year before the hospital stay
- **"n_emergency"**: number of visits to the emergency room in the year before the hospital stay
- **"medical_specialty"**: the specialty of the admitting physician
- **"diag_1"**: primary diagnosis (Circulatory, Respiratory, Digestive, etc.)
- **"diag_2"**: secondary diagnosis
- **"diag_3"**: additional secondary diagnosis
- **"glucose_test"**: whether the glucose serum was high (> 200), normal, or not performed
- **"A1Ctest"**: whether the A1C level of the patient was high (> 7%), normal, or not performed
- **"change"**: whether there was a change in the diabetes medication ('yes' or 'no')
- **"diabetes_med"**: whether a diabetes medication was prescribed ('yes' or 'no')
- **"readmitted"**: if the patient was readmitted to the hospital ('yes' or 'no')

### Patient Data Attributes and Types:

- **age**: [40-50), [50-60), [60-70), [70-80), [80-90)
- **time_in_hospital**: integer
- **n_procedures**: integer
- **n_lab_procedures**: integer
- **n_medications**: integer
- **n_outpatient**: integer
- **n_inpatient**: integer
- **n_emergency**: integer
- **medical_specialty**: Cardiology, Emergency/Trauma, GeneralPractice, InternalMedicine, Missing, Surgery, Other
- **diag_1, diag_2, diag_3**: Respiratory, Circulatory, Diabetes, Digestive, Injury, Missing, Musculoskeletal, Other
- **glucose_test**: high, normal, no
- **A1Ctest**: high, normal, no
- **change**: yes, no
- **diabetes_med**: yes, no
