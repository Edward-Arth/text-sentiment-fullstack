from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/")
def hello():
    return "<p>Hello!</p>"

loaded_model = joblib.load('movie_review_text_sentiment.joblib')

@app.route("/predict", methods=["POST"])
def predict():
    user_data = request.get_json(force=True)
    string_to_predict = user_data['text']
    prediction = loaded_model.predict([string_to_predict])
    return jsonify({'prediction': int(prediction[0])})