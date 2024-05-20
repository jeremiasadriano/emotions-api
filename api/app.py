from flask import Flask
from controllers.personController import person_blueprint

app = Flask(__name__)
app.register_blueprint(person_blueprint)