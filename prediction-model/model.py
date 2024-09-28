import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score

def load_data(path):
    data = pd.read_csv(path)
    print('Data successfully read')
    print('Columns in dataset:', data.columns)
    return data

def preprocess(data):
    data['readmitted'] = data['readmitted'].map({'yes': 1, 'no': 0})

    categorical_cols = data.select_dtypes(include=['object']).columns

    data = pd.get_dummies(data, columns=categorical_cols, drop_first=True)
    print(data.columns)
    print('Data successfully preprocessed')

    return data

def prep_traintest(data):
    X = data.drop(columns=['readmitted'])
    y = data['readmitted']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)
    numerical_cols = X.select_dtypes(include=['int64', 'float64']).columns

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
    print(f"Accuracy: {accuracy * 100:.2f}%")

    print('\nClassification Report:')
    print(classification_report(y_test, y_pred))

if __name__ == "__main__":

    filepath = './input/hospital_readmissions.csv'

    data = load_data(filepath)

    data = preprocess(data)

    X_train, X_test, y_train, y_test, scaler = prep_traintest(data)

    ml_model = train_logistic_regression(X_train, y_train)



