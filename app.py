from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = "Chave#"

# Usuário temporário
USUARIO = "%"
SENHA = "%"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/admin")
def admin():
    # Verifica se o usuário está logado
    if not session.get("logado"):
        return redirect(url_for("login"))
    return render_template("admin.html")

@app.route("/login", methods=["GET", "POST"])   
def login():
    if request.method == "POST":
        user = request.form["usuario"]
        password = request.form["senha"]

        # Autenticação
        if user == USUARIO and password == SENHA:
            session["logado"] = True
            return redirect(url_for("admin"))
        else:
            return render_template("login.html", erro="Usuário ou senha incorretos!")

    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))

if __name__ == "__main__":
    app.run(debug=True)
