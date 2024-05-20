from repositories.connection import CONNECTION
from psycopg2.errors import UniqueViolation, NotNullViolation
from repositories.personRepository import CREATE_TABLE, INSERT_PERSON, SELECT_PERSON_BY_ID, SELECT_ALL_PEOPLE,  SELECT_PERSON_BY_EMAIL_AND_PASS

def createAccount(firstName,lastName,email,password):
    try:
        with CONNECTION:
            with CONNECTION.cursor() as query:
                query.execute(CREATE_TABLE)
                query.execute(INSERT_PERSON,(firstName,lastName,email,password,))
                return query.fetchone()[0]
            
    except UniqueViolation:
        raise Exception("User already exist!")
    except NotNullViolation:
        raise Exception("The data cannot be null!")
    
def loginUser(email,password):
    with CONNECTION:
        with CONNECTION.cursor() as query:
            query.execute(SELECT_PERSON_BY_EMAIL_AND_PASS,(email, password,))
            personId = query.fetchone()
            if personId:
                return personId[0]
            else:
                raise Exception("User Not Found!")