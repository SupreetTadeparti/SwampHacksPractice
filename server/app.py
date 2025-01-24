from flask import Flask, request
import requests

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello, Flask!"


@app.route("/llm")
def llm():
    prompt = request.args.get("prompt", "")
    response = requests.get(f"https://calm-glade-e7c9.julianubico.workers.dev/?prompt={prompt}")
    return response.json()

if __name__ == "__main__":
    app.run(debug=True)
