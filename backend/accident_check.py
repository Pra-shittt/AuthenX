from transformers import pipeline

classifier = pipeline(
    "zero-shot-image-classification",
    model="openai/clip-vit-base-patch32"
)

ACCIDENT_LABELS = [
    "car accident",
    "vehicle collision",
    "damaged car",
    "road accident",
    "traffic accident"
]

def accident_score(image):
    result = classifier(image, ACCIDENT_LABELS)
    score = int(max(r["score"] for r in result) * 100)
    return score
