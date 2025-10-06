from fastapi import FastAPI

# Create FastAPI app isntance
app = FastAPI()

# Define a simple GET endpoint
@app.get("/")
def read_root():
    return {"message": "Hello WOrld"}

## To run this app we need a ASGI (Asynchronous Server Gateway Interface) to run.
## uvicorn is recommended one. uvicorn main:app --reload
# main is filename
# app is fastapi instance
# --reload is whenever there is a change in the files it will reload the server automatically