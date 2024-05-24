from flask import Flask
from controllers.personController import person_blueprint
from controllers.messageController import message_blueprint

app = Flask(__name__)
app.register_blueprint(person_blueprint)
app.register_blueprint(message_blueprint)