MSG_TABLE="CREATE TABLE IF NOT EXISTS message(id SERIAL PRIMARY KEY,personId INT NOT NULL,msg TEXT NOT NULL, answer TEXT NOT NULL, CONSTRAINT personFK FOREIGN KEY(personId) REFERENCES person(id));"
INSERT_MSG="INSERT INTO message(personId, msg,answer) VALUES(%s,%s,%s);"
SELECT_MSG_BY_PERSON_ID="SELECT * FROM message WHERE personId=%s;"