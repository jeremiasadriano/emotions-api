from repositories.connection import CONNECTION
from psycopg2.errors import UniqueViolation, NotNullViolation
from repositories.personRepository import CREATE_TABLE, INSERT_PERSON, SELECT_PERSON_BY_ID, SELECT_ALL_PEOPLE,  SELECT_PERSON_BY_EMAIL_AND_PASS,UPDATE_USER, DELETE_USER_BY_ID

def createAccount(firstName,lastName,email,password):
    try:
        with CONNECTION:
            with CONNECTION.cursor() as query:
                query.execute(CREATE_TABLE)
                query.execute(INSERT_PERSON,(firstName,lastName,email,password,))
                personId = query.fetchone()[0]
                query.close()
                return personId
    except UniqueViolation:
        raise Exception("User already exist!")
    except NotNullViolation:
        raise Exception("The data cannot be null!")
    
def loginUser(email,password):
    with CONNECTION:
        with CONNECTION.cursor() as query:
            query.execute(SELECT_PERSON_BY_EMAIL_AND_PASS,(email, password,))
            personId = query.fetchone()
            query.close()
            if personId:
                return personId[0]
            else:
                raise Exception("User Not Found!")
            
            
def userName(id):
    with CONNECTION:
        with CONNECTION.cursor() as query:
            query.execute(SELECT_PERSON_BY_ID,(id,))
            personId = query.fetchone()
            query.close()
            if personId:
                return personId[1]
            else:
                raise Exception("User Not Found!")
            
def updateUser(firstName,lastName,email,password,id):
    try:
        with CONNECTION:
            with CONNECTION.cursor() as query:
                query.execute(UPDATE_USER,(firstName,lastName,email,password,id,))
                personId = query.fetchone()
                query.close()
                if personId:
                    return personId[0]
                else:
                    raise Exception("User Not Updated")
    except UniqueViolation:
        raise Exception("Email already exist!")
    except NotNullViolation:
        raise Exception("The data cannot be null!")
    
def deleteUser(id):
    with CONNECTION:
        with CONNECTION.cursor() as query:
            query.execute(DELETE_USER_BY_ID,(id,))
            query.close()