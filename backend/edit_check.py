def edit_score(image):
    exif = image.getexif()
    score = 90 if len(exif) > 0 else 75
    return score
