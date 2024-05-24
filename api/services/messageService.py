from repositories.connection import CONNECTION
from repositories.messageRepository import MSG_TABLE, INSERT_MSG, SELECT_MSG_BY_PERSON_ID
from psycopg2.errors import ForeignKeyViolation

def createMessage(personId,msg,answer):
    try:
        with CONNECTION:
            with CONNECTION.cursor() as query:
                query.execute(MSG_TABLE)
                query.execute(INSERT_MSG,(personId,msg,answer,))
                query.close()
                return True
    except ForeignKeyViolation:
        raise Exception("Person not found")
    
def getMessagesByPersonId(personId):
    with CONNECTION:
        with CONNECTION.cursor() as query:
            query.execute(SELECT_MSG_BY_PERSON_ID,(personId,))
            messages = query.fetchall()
            query.close()
            return messages