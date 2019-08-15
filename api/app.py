from flask import Flask, jsonify
import sqlite3 as sql

app = Flask(__name__, instance_relative_config=False)
# app.config.from_object('config')
app.config["APPLICATION_ROOT"] = "/api"


@app.route('/')
def main_view():
    return 'nothing'

@app.route('/brackets', methods=['GET'])
def get_all_brackets():
    return 'get all'

@app.route('/brackets/', methods=['POST'])
def create_bracket():
    return 'create'

@app.route('/brackets/<string:bracket_id>', methods=['GET'])
def get_bracket():
    return 'get'

@app.route('/brackets/<string:bracket_id>', methods=['PUT'])
def update_bracket():
    return 'update'

@app.route('/brackets/<string:bracket_id>', methods=['DELETE'])
def delete_bracket():
    return 'delete'  # Needs authenticaton




if __name__ == '__main__':
    app.run(debug=True)
