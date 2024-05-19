from flask import Flask, request, jsonify
from services.personService import createAccount

app = Flask(__name__)

@app.post("/register")
def register():
    try:
        personData = request.get_json()
        firstName = personData['firstName']
        lastName = personData['lastName']
        email = personData['email']
        password = personData['password']
        personId = createAccount(firstName,lastName,email,password)
        return jsonify({'id': personId}), 201
    except Exception as e:
        return jsonify({'status':500, 'message': e}),500