from flask import Flask, render_template, request
import random

app = Flask(__name__)

PRAGMATIC_GAMES = [
    "Sweet Bonanza", "Gates of Olympus", "Starlight Princess", "Sugar Rush", "Wild West Gold"
]

PGSOFT_GAMES = [
    "Mahjong Ways", "Lucky Neko", "Fortune Tiger", "Wild Bandito", "Treasures of Aztec"
]

@app.route('/', methods=['GET', 'POST'])
def index():
    id_user = None
    rtp_result = None
    if request.method == 'POST':
        id_user = request.form.get('user_id')
        # Simulated fake RTP results
        random.shuffle(PRAGMATIC_GAMES)
        random.shuffle(PGSOFT_GAMES)
        rtp_result = {
            "gacor": PRAGMATIC_GAMES[:2] + PGSOFT_GAMES[:2],
            "hindari": PRAGMATIC_GAMES[-1:] + PGSOFT_GAMES[-1:]
        }
    return render_template('index.html', id_user=id_user, rtp=rtp_result)
