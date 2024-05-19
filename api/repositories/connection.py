from dotenv import load_dotenv
import os, psycopg2

load_dotenv()
URL = os.getenv("DATABASE_URL")

CONNECTION = psycopg2.connect(URL)