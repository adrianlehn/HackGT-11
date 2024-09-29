import pandas as pd
import joblib

def load_model(mod_path, sca_path, feat_path):
    model = joblib.load(mod_path)
    scaler = joblib.load(sca_path)
    feature_names = joblib.load(feat_path)
    return model, scaler, feature_names

def preprocess_user(user_data, scaler, feature_names):
    df = pd.DataFrame([user_data])

    categorical_cols = df.select_dtypes(include=['object']).columns
    df = pd.get_dummies(df, columns=categorical_cols, drop_first=False)
    
    for col in feature_names:
        if col not in df.columns:
            df[col] = 0
    df = df[feature_names]

    for col in df.columns:
        print('Feature is: ',col, ", attribute: ", df[col])
    
    # numerical_cols = df.select_dtypes(include=['int64']).columns
    # df[numerical_cols] = scaler.transform(df[numerical_cols])
    return df

def predict_readmission(model, user_input):
    prediction_prob = model.predict_proba(user_input)[:,1]
    return prediction_prob



if __name__ == "__main__":
    log_reg_model, scaler, feature_names = load_model('prediction-model/logistic_regression_model.pkl', 'prediction-model/scaler.pkl', 'prediction-model/feature_names.pkl')
    user_input_data = {
        'age': '[70-80)',
        'time_in_hospital': 30,
        'n_lab_procedures': 50,
        'n_procedures': 0,
        'n_medications': 0,
        'n_outpatient': 0,
        'n_inpatient': 0,
        'n_emergency': 0,
        'medical_specialty': 'Missing',
        'diag_1': 'Circulatory',
        'diag_2': 'Respiratory',
        'diag_3': 'Respiratory',
        'glucose_test': 'high',
        'A1Ctest': 'high',
        'change': 'yes',
        'diabetes_med': 'yes',
    }
    preprocessed_input = preprocess_user(user_input_data, scaler, feature_names)
    probability = predict_readmission(log_reg_model, preprocessed_input)
    print('Predicted readmission within 30 days:')
    print(probability)
    
    