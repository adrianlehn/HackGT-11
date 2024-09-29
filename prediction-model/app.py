from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

log_reg_model, scaler, feature_names = joblib.load('logistic_regression_model.pkl'), \
                                       joblib.load('scaler.pkl'), \
                                       joblib.load('feature_names.pkl')

def preprocess_user(user_data, scaler, feature_names):
    df = pd.DataFrame([user_data])

    categorical_cols = df.select_dtypes(include=['object']).columns
    df = pd.get_dummies(df, columns=categorical_cols, drop_first=False)
    
    for col in feature_names:
        if col not in df.columns:
            df[col] = 0
    df = df[feature_names]
        
    # numerical_cols = df.select_dtypes(include=['int64']).columns
    # df[numerical_cols] = scaler.transform(df[numerical_cols])
    return df

@app.route('/predict', methods=['POST'])
def predict():
    user_data = request.json
    print(user_data)
    preprocessed_input = preprocess_user(user_data, scaler, feature_names)
    probability = log_reg_model.predict_proba(preprocessed_input)[:,1][0]

    return jsonify({'prediction': probability})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
