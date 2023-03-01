# POST method

1. Import modules
from flask import Flask, jsonify, request
from flask_marshmallow import Marshmallow

2. Call the Marshmallow function:
ma = Marshmallow(app)

3. Create the class for the articles format:
class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'body', 'date')

4. Call the function (class) <ArticleSchema> and set the config:
article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)

5. Add another route for the post:
@app.route('/add', methods=['POST'])
def add_article():
    title = request.json['title']
    body = request.json['body']

    articles = Articles(title, body)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)

# GET method

@app.route('/', methods=['GET'])
def get_articles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)

# GET single article

@app.route('/get/<id>/', methods=['GET'])
def post_details(id):
    article = Articles.query.get(id)
    results = article_schema.jsonify(article)
    return results

* This allow us to get the article by the id


# Update. PUT method

@app.route('/update/<id>/', methods=['PUT'])
def update_article(id):
    article = Articles.query.get(id)

    title = request.json['title']
    body = request.json['body']

    article.title = title
    article.body = body

    db.session.commit()
    results = article_schema.jsonify(article)
    return results


# DELETE Method

@app.route('/get/<id>/', methods=['GET'])
def post_details(id):
    article = Articles.query.get(id)
    results = article_schema.jsonify(article)
    return results


# optimize the get method:

from flask_cors import CORS
CORS(app)