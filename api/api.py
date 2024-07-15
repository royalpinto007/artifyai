from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import torch
from diffusers import StableDiffusionPipeline

load_dotenv()

auth_token = os.getenv("AUTH_TOKEN")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TextToImageRequest(BaseModel):
    prompt: str


model_id = "CompVis/stable-diffusion-v1-4"
device = "cpu"
pipe = StableDiffusionPipeline.from_pretrained(model_id, use_auth_token=auth_token)
pipe = pipe.to(device)


@app.post("/generate")
async def generate_image(request: TextToImageRequest):
    # Generate image from prompt
    prompt = request.prompt
    image = pipe(prompt).images[0]

    # Save image
    image_path = "testimage.png"
    image.save(image_path)

    return {"message": "Image generated successfully", "image_path": image_path}
