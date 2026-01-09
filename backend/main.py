from PIL import Image
import sys

from accident_check import accident_score
from distortion_check import distortion_score
from quality_check import quality_score
from ai_gen_check import ai_generation_score
from edit_check import edit_score
from score_logic import final_result

def main(image_path: str):
    try:
        image = Image.open(image_path).convert("RGB")
    except Exception as e:
        print("Error loading image:", e)
        return

    acc_score = accident_score(image)

    if acc_score < 40:
        print("Scores:", {"accident": acc_score})
        print("Final Score:", acc_score)
        print("Decision: REJECT – NOT A CAR ACCIDENT")
        return

    scores = {
        "accident": acc_score,
        "distortion": distortion_score(image),
        "quality": quality_score(image),
        "ai_generated": ai_generation_score(image),
        "editing": edit_score(image)
    }

    final_score, decision = final_result(scores)

    print("Scores:", scores)
    print("Final Score:", final_score)
    print("Decision:", decision)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python main.py <image_path>")
    else:
        main(sys.argv[1])
