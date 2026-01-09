from fastapi import FastAPI, File, UploadFile
from fastapi.concurrency import run_in_threadpool
from PIL import Image
import io

from accident_check import accident_score
from distortion_check import distortion_score
from quality_check import quality_score
from ai_gen_check import ai_generation_score
from edit_check import edit_score
from score_logic import final_result

app = FastAPI()

@app.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

        acc_score = await run_in_threadpool(accident_score, image)

        if acc_score < 40:
            return {
                "scores": {"accident": acc_score},
                "final_score": acc_score,
                "decision": "REJECT – NOT A CAR ACCIDENT"
            }

        scores = {
            "accident": acc_score,
            "distortion": await run_in_threadpool(distortion_score, image),
            "quality": await run_in_threadpool(quality_score, image),
            "ai_generated": await run_in_threadpool(ai_generation_score, image),
            "editing": await run_in_threadpool(edit_score, image)
        }

        final_score, decision = final_result(scores)

        return {
            "scores": scores,
            "final_score": final_score,
            "decision": decision
        }

    except Exception as e:
        return {"error": str(e)}
