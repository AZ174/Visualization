from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/powerGrid')
def powerGrid():
    return render_template("powerGrid.html")

@app.route('/universe')
def universe():
    return render_template("universe.html")

@app.route('/superpowerAbilities')
def superpowerAbilities():
    return render_template("superpowerAbilities.html")


if __name__ == '__main__':
    app.run()
