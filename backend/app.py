from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import datetime


DB_NAME = "flask.db"
db = SQLAlchemy()

app = Flask(__name__)
app.config['SECRET_KEY'] = 'myKey'
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
db.init_app(app)


class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, title, body):
        self.title = title
        self.body = body


with app.app_context():
    db.create_all()


@app.route('/', methods=['GET'])
def get_articles():
    return jsonify({"Hello": "World"})


if __name__ == "__main__":
    app.run(debug=True)
