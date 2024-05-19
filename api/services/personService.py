from repositories.connection import CONNECTION
from repositories.personRepository import CREATE_TABLE, INSERT_PERSON, SELECT_PERSON_BY_ID, SELECT_ALL_PEOPLE

def createAccount(firstName,lastName,email,password):
    with CONNECTION:
        with CONNECTION.cursor() as query:
            query.execute(CREATE_TABLE)
            query.execute(INSERT_PERSON,(firstName,lastName,email,password,))
            personId = query.fetchone()[0]
            return personId
