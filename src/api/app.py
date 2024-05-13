from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId

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
    movie = [{
        '_id': str(movie['_id']), 
                'title': movie['title'],
                'description': movie['description'],
                'duration': movie['duration'],
                'rating': movie['rating'],
                'cast': movie['cast'],
                'genre': movie['genre'],
                'release_date': movie['release_date']
            }  for movie in data]
    return jsonify(movie)
    
@app.route('/api/getTrending', methods=['GET'])
def get_trendings():
    data = mongo.db.trending.find()
    movie = [{
        '_id': str(movie['_id']), 
            'title': movie['title'],
            'description': movie['description'],
            'duration': movie['duration'],
            'rating': movie['rating'],
            'cast': movie['cast'],
            'genre': movie['genre'],
            'release_date': movie['release_date']
        }  for movie in data]
  
    return jsonify(movie)

    
@app.route('/api/getTvshows', methods=['GET'])
def get_tvshows():
    data = mongo.db.tvshows.find()
    movie = [{
        '_id': str(movie['_id']), 
            'title': movie['title'],
            'description': movie['description'],
            'duration': movie['duration'],
            'rating': movie['rating'],
            'cast': movie['cast'],
            'genre': movie['genre'],
            'release_date': movie['release_date']
        }  for movie in data]
    return jsonify(movie)

@app.route('/api/getMovie/<movie_id>', methods=['GET'])
def get_movie(movie_id):
    movie = mongo.db.movies.find_one({'_id': ObjectId(movie_id)})
    if movie:
        movie['_id'] = str(movie['_id'])  
        return jsonify(movie), 200  
    else:
        return jsonify({"error": "Movie not found"}), 404
    
    
@app.route('/api/movieUpload', methods=['POST'])
def upload_movie():
    data = request.json
    

    title = data.get('title')
    cast = data.get('cast')
    description = data.get('description')
    duration = data.get('duration')
    genre = data.get('genre')
    rating = data.get('rating')
    release_date = data.get('releaseDate')
    image_url = data.get('imageUrl')


    movies_collection = mongo.db.movies
    movie_data = {
        'title': title,
        'cast': cast,
        'description': description,
        'duration': duration,
        'genre': genre,
        'rating': rating,
        'releaseDate': release_date,
        'imageUrl': image_url
    }
    movies_collection.insert_one(movie_data)

    return jsonify({'message': 'Movie data added successfully'})

if __name__ == '__main__':
    app.run(debug=True, port=5002)
