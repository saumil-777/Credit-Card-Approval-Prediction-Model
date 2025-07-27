from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to connect

# Load model and scaler
model = pickle.load(open("credit_model.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    # Extract values from JSON
    car_owner = int(data["Car_Owner"])
    property_owner = int(data["Propert_Owner"])
    annual_income = float(data["Annual_income"])
    education = int(data["EDUCATION"])

    # Combine into a feature array
    features = np.array([[car_owner, property_owner, annual_income, education]])
    scaled = scaler.transform(features)
    prediction = model.predict(scaled)[0]

    result = "Approved" if prediction == 1 else "Rejected"
    return jsonify({"approval": result})

if __name__ == '__main__':
    app.run(debug=True)
