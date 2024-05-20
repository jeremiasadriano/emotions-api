from flask import Flask, request, jsonify
from services.personService import createAccount, loginUser,updateUser, deleteUser
from markupsafe import escape
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
        return jsonify({'status':401, 'message': str(e)}),401
    
@app.post("/login")
def login():
    try:
        personData = request.get_json()
        email = personData['email']
        password = personData['password']
        personId = loginUser(email,password)
        return jsonify({'id': personId}), 200
    except Exception  as e:
        return jsonify({'status':404, 'message': str(e)}),404

@app.put("/update/<int:id>")
def update(id):
    try:
        personData = request.get_json()
        firstName = personData['firstName']
        lastName = personData['lastName']
        email = personData['email']
        password = personData['password']
        personId = updateUser(firstName,lastName,email,password,escape(id),)
        return jsonify({'id': personId}), 200
    except Exception as e:
        return jsonify({'status':500, 'message': str(e)}),500

@app.delete("/delete/<int:id>")
def delete(id):
    deleteUser(escape(id))
    return jsonify(),204