from flask import Flask,request,jsonify,send_from_directory
from pyswip import Prolog,Functor
from flask.ext.cors import CORS, cross_origin
import os
import json
app = Flask(__name__,static_url_path='')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
APP_ROOT = os.path.dirname(os.path.abspath(__file__)) 

@app.route('/', methods=['GET'])
@cross_origin()
def get_schema():
    prolog = Prolog()
    assertz = Functor("assertz", 2)
    prolog.consult('engine.pl')
    prolog.assertz('raining("Bangkok")')
    rule = "can_growing(P1, 'GROW1')."
    re_list = list(prolog.query(rule))
    # return "hello"
    return jsonify(re_list)

@app.route('/engine/', methods=['GET'])
@cross_origin()
def get_engine():
    return send_from_directory(APP_ROOT,"engine.pl")
    # return "hello"


@app.route('/ricefact/', methods=['POST'])
@cross_origin()
def create_rice_rule():

    rule = 'rice(%s).'%(request.json['rice'])
    target = open('src/rice_fact.pl','r')
    reader = target.read().splitlines()
    target.close()
    print(reader)
    output = open('src/rice_fact.pl','a')
    if rule in reader :
        print('alredy')
        print(rule)
        return "not_success"
    else :
        output.write(rule+"\n")
    return "success"

if __name__ == "__main__":
    app.run("0.0.0.0",port=5555)	 