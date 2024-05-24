from flask import Blueprint, request, jsonify
from services.messageService import createMessage,getMessagesByPersonId

message_blueprint = Blueprint('message',__name__)

@message_blueprint.post("/send")
def send():
    try:
        messageData = request.get_json()
        personId = messageData['senderId']
        message = messageData['message']
        answer = messageData['answer']
        createMessage(personId, message, answer)
        return jsonify({'status':200, 'message': 'Message sent'}), 200
    except Exception as e:
        return jsonify({'status':401, 'message': str(e)}),401
    
@message_blueprint.get("/messages")
def get():
    personId = request.get_json()
    id = personId['senderId']
    messages = getMessagesByPersonId(id)
    response = [{'id': message[0], 'personId': message[1], 'message': message[2], 'answer': message[3]} for message in messages]
    return jsonify({'messages': response}), 200