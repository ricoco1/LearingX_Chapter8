from flask import Flask, render_template, jsonify, request, redirect, url_for
import requests

app = Flask(__name__)

# Fungsi untuk mendapatkan data dari API
def get_people_data_from_API():
    url = 'https://my-json-server.typicode.com/jjjosephhh/test-db-002/people'
    response = requests.get(url)
    return response.json()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/jobs')
def jobs():
    people_jobs = get_people_data_from_API()
    return render_template('jobs.html', people=people_jobs)

@app.route('/update', methods=['POST'])
def update():
    data = request.get_json()
    people = get_people_data_from_API()
    for person in people:
        if person["fname"] == data["fname"] and person["lname"] == data["lname"]:
            person["job"] = data["job"]
            person["pay"] = data["pay"]
    return jsonify(success=True)

if __name__ == '__main__':
    app.run(debug=True)
