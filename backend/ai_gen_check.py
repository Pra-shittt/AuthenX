from transformers import pipeline
import traceback

detector = None

def load_detector():
    global detector
    if detector is None:
        try:
            print("Loading Hugging Face model...")
            detector = pipeline(
                "image-classification",
                model="umm-maybe/AI-image-detector"
            )
            print("Model loaded successfully")
        except Exception:
            traceback.print_exc()
            detector = None

def ai_generation_score(image):
    load_detector()
    if detector is None:
        return 50  # fallback

    try:
        result = detector(image)

        ai_prob = max(
            [
                r["score"]
                for r in result
                if any(x in r["label"].lower() for x in ["ai", "synthetic", "generated"])
            ] or [0]
        )

        score = int((1 - ai_prob) * 100)
        return score

    except Exception:
        traceback.print_exc()
        return 50
