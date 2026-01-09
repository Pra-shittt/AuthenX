import cv2
import numpy as np

def distortion_score(image):
    img = np.array(image.convert("RGB"))
    gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
    variance = cv2.Laplacian(gray, cv2.CV_64F).var()
    score = min(int((variance / 300) * 100), 100)
    return score
