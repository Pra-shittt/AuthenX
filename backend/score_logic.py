def final_result(scores):
    weights = {
        "ai_generated": 0.4,
        "quality": 0.3,
        "distortion": 0.2,
        "editing": 0.1
    }

    total = sum(scores[k] * weights[k] for k in weights)
    decision = "VALID IMAGE" if total >= 60 else "REJECT / MANUAL REVIEW"

    return int(total), decision
