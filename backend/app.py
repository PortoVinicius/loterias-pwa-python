from flask import Flask, render_template

app = Flask(
    __name__,
    template_folder="../frontend/templates",
    static_folder="../frontend/static"
)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/lotofacil")
def lotofacil():
    return render_template("lotofacil.html")

@app.route("/megasena")
def megasena():
    return render_template("megasena.html")

@app.route("/quina")
def quina():
    return render_template("quina.html")

@app.route("/lotomania")
def lotomania():
    return render_template("lotomania.html")

@app.route("/dupla_sena")
def dupla_sena():
    return render_template("dupla_sena.html")

@app.route("/timemania")
def timemania():
    return render_template("timemania.html")

@app.route("/federal")
def federal():
    return render_template("federal.html")



if __name__ == "__main__":
    app.run(debug=True)
