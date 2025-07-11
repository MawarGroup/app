from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    id_user = request.args.get('id', 'guest')
    rtp_result = [
        {"name": "Gates of Olympus", "rtp": 94.3},
        {"name": "Starlight Princess", "rtp": 91.7},
        {"name": "Mahjong Ways", "rtp": 96.2},
    ]
    return render_template('index.html', id_user=id_user, rtp=rtp_result)

if __name__ == '__main__':
    app.run(debug=True)