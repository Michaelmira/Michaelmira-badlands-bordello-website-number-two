"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Questionnaire
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/questionnaire', methods=['GET'])
def all_questionnaires():
    questionnaire = Questionnaire.query.all()
    serialized_questionnaire = [qa.serialize() for qa in questionnaire]
    return jsonify({"questionnaire": serialized_questionnaire}), 200

@api.route('/questionnaire', methods=['POST'])
def add_questionnaire():
    

# @api.route('/work-order/all', methods=['GET'])
# def get_all_work_orders():
#     work_orders = WorkOrder.query.all()
#     serialized_work_orders = [wo.serialize() for wo in work_orders]
#     return jsonify({"work_orders": serialized_work_orders}), 200


@api.route('/log-ins', methods=['POST'])
def handle_logins():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email is None or password is None:
        return jsonify({"msg": "No email or password"}), 400
    user = User.query.filter_by(email=email).one_or_none()
    if user is None:
        return jsonify({"msg": "no such user"}), 404
    print(">>> password vs incoming password", user.password, password )
    if user.password != password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 201

@api.route('/private', methods=['GET'])
@jwt_required()
def handle_private_data():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    message = f"of these are all my recent secrets, I use {user.email} and have a {user.id}"
    return jsonify(message), 200

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! WE ARE WORKING! GET TO WORK!!!"
    }

    return jsonify(response_body), 200
