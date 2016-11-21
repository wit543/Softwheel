<<<<<<< HEAD
import sys
=======
# coding=utf-8
>>>>>>> 271715e129b1e4ea8675edd02ed8197254850ca2
from flask import Flask,request,jsonify,send_from_directory
from pyswip import Prolog,Functor
from flask.ext.cors import CORS, cross_origin
from markupsafe import Markup, escape
import regex
import sys
import os
import json

def trace(frame, event, arg):
    print "%s, %s:%d" % (event, frame.f_code.co_filename, frame.f_lineno)
    return trace

app = Flask(__name__,static_url_path='')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
APP_ROOT = os.path.dirname(os.path.abspath(__file__))

def trace(frame, event, arg):
    print "%s, %s:%d" % (event, frame.f_code.co_filename, frame.f_lineno)
    return trace

@app.route('/', methods=['GET'])
@cross_origin()
def get_schema():
    prolog = Prolog()
    prolog.consult('engine.pl')
    prolog.assertz('raining("Bangkok")')
    rule = "can_growing(P1, 'GROW1')."
    re_list = list(prolog.query(rule))
    # return "hello"
    return jsonify(re_list)

@app.route('/api/', methods=['GET'])
@cross_origin()
def get_api():
    query = request.args.get('query')
    prolog = Prolog()
    prolog.consult('engine.pl')
    prolog.assertz('raining("Bangkok")')
    rule = "can_growing(P1, 'GROW1')."
    query = 'trace, recommend("Bangkok","RD1","GROW1",10,4,DAY,MONTH,YEAR).'
    print query
    re_list = list(prolog.query(query,catcherrors=False))
    # re_list = list(prolog.query(query))
    # return "hello"
    print re_list
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
<<<<<<< HEAD
    sys.settrace(trace)
    app.run("0.0.0.0",port=5555)	 
=======
    #sys.settrace(trace)
    reload(sys)
    sys.setdefaultencoding('utf-8')
    app.run("0.0.0.0",port=5555)
>>>>>>> 271715e129b1e4ea8675edd02ed8197254850ca2
