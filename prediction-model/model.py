import numpy as np
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score

def load_data(path):
    data = pd.read_csv(path)
    print('\nData successfully read\n')
    print('Columns in dataset:', data.columns,'\n')
    return data

def preprocess(data):
    data['readmitted'] = data['readmitted'].map({'yes': 1, 'no': 0})

    categorical_cols = data.select_dtypes(include=['object']).columns
    # turn categorical data into separate columns based on criteria, turns it binary 0/1
    data = pd.get_dummies(data, columns=categorical_cols, drop_first=False)
    print('Data successfully preprocessed\n')
    print(data.columns)

    return data

def prep_traintest(data):
    X = data.drop(columns=['readmitted'])
    y = data['readmitted']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)
    numerical_cols = X.select_dtypes(include=['int64']).columns

    scaler = StandardScaler()
    X_train[numerical_cols] = scaler.fit_transform(X_train[numerical_cols])
    X_test[numerical_cols] = scaler.transform(X_test[numerical_cols])

    return X_train, X_test, y_train, y_test, scaler

def train_logistic_regression(X_train, y_train):
    logistic_reg = LogisticRegression(max_iter=1000)
    logistic_reg.fit(X_train,y_train)
    
    return logistic_reg

def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)
    print(f"\nAccuracy: {accuracy * 100:.2f}%")
    print('\nClassification Report:')
    print(classification_report(y_test, y_pred))

def save_model(model, scaler, mod_path, sca_path):
    joblib.dump(model,mod_path)
    joblib.dump(scaler,sca_path)
    print("Model and scaler saved.")

if __name__ == "__main__":

    filepath = './input/hospital_readmissions.csv'

    data = load_data(filepath)

    data = preprocess(data)

    X_train, X_test, y_train, y_test, scaler = prep_traintest(data)

    ml_model = train_logistic_regression(X_train, y_train)

    evaluate_model(ml_model,X_test,y_test)

    save_model(ml_model, scaler,'prediction-model/logistic_regression_model.pkl', 'prediction-model/scaler.pkl')



