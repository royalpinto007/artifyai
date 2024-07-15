from dotenv import load_dotenv
import os

load_dotenv()

auth_token = os.getenv("AUTH_TOKEN")

print(auth_token)  