from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)

CORS(app)
app.config['MONGO_URI'] = 'mongodb+srv://winminthaw2018:winminthaw@cluster7.nujlrcs.mongodb.net/streamflix'
mongo = PyMongo(app)


@app.route('/api/data', methods=['GET'])
def get_data():
    data = mongo.db.collection.find()
    result = []
    for d in data:
        result.append({'key': d['value']})
    return jsonify(result)

@app.route('/api/data', methods=['POST'])
def add_data():
    key = request.json['key']
    mongo.db.collection.insert_one({'value': key})
    return jsonify({'message': 'Data added successfully'})

@app.route('/api/insert', methods=['GET', 'POST'])
def insert_json():
    try:
        data = {"message": "hello"}
        if not data:
            return jsonify({'error': 'No data provided'}), 400

        mongo.db.collection.insert_one(data)
        return jsonify({'message': 'Data inserted successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/getMovies', methods=['GET'])
def get_movies():
    data = mongo.db.movies.find()
    movies = [{'title': movie['title']} for movie in data]
    return jsonify(movies)


    
@app.route('/api/getTrending', methods=['GET'])
def get_trendings():
    data = mongo.db.trending.find()
    movies = [{'title': movie['title']} for movie in data]
    return jsonify(movies)

    
@app.route('/api/getTvshows', methods=['GET'])
def get_tvshows():
    data = mongo.db.tvshows.find()
    movies = [{'title': movie['title']} for movie in data]
    return jsonify(movies)



if __name__ == '__main__':
    app.run(debug=True, port=5002)
