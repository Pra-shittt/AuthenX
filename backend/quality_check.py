def quality_score(image):
    width, height = image.size
    pixels = width * height
    max_pixels = 1920 * 1080
    score = min(int((pixels / max_pixels) * 100), 100)
    return score
