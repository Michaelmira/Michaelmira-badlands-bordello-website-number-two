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

@api.route('/questionnaires', methods=['GET'])
def all_questionnaires():
    questionnaires = Questionnaire.query.all()
    return jsonify([questionnaire.serialize() for questionnaire in questionnaires]), 200

@api.route('/questionnaire', methods=['POST'])
def add_questionnaire():
    full_name = request.json.get("full_name", None)
    phone_number = request.json.get("phone_number", None)
    burner_email = request.json.get("burner_email", None)
    campers = request.json.get("campers", None)
    space_required = request.json.get("space_required", None)
    leader_question = request.json.get("leader_question", None) 
    camp_donation = request.json.get("camp_donation", None) 
    early_arrival  = request.json.get("early_arrival", None) 
    why_go  = request.json.get("why_go", None) 
    if full_name is None or phone_number is None or burner_email is None or campers is None or space_required is None or leader_question is None or camp_donation is None or early_arrival is None or why_go is None:
        return jsonify({"msg": "Some required fields are missing"}), 400
    questionnaire = Questionnaire (full_name=full_name, phone_number=phone_number, burner_email=burner_email, campers=campers, space_required=space_required, leader_question=leader_question, camp_donation=camp_donation, early_arrival=early_arrival, why_go=why_go)
    db.session.add(questionnaire)
    db.session.commit()
    db.session.refresh(questionnaire)
    response_body = {"msg": "Questionnaire succesfully submitted!", "questionnaire":questionnaire.serialize()}
    return jsonify(response_body), 201
        
@api.route('/questionnaire/edit/<int:questionnaire_id>', methods=['PUT'])
# @jwt_required()
def edit_questionnaire(questionnaire_id):
    full_name = request.json.get("full_name")
    phone_number = request.json.get("phone_number")
    burner_email = request.json.get("burner_email")
    campers = request.json.get("campers")
    space_required = request.json.get("space_required")
    leader_question = request.json.get("leader_question") 
    camp_donation = request.json.get("camp_donation") 
    early_arrival  = request.json.get("early_arrival") 
    why_go  = request.json.get("why_go") 

    if None in (full_name, phone_number, burner_email, campers, space_required, leader_question, camp_donation, early_arrival, why_go):
        return jsonify({"msg": "Some required fields are missing"}), 400 
    
    questionnaire = Questionnaire.query.get(questionnaire_id)
    if questionnaire is None:
        return jsonify({"msg": "Questionnaire not found"}), 404
    questionnaire.full_name = full_name
    questionnaire.phone_number = phone_number
    questionnaire.burner_email = burner_email
    questionnaire.campers = campers
    questionnaire.space_required = space_required
    questionnaire.leader_question = leader_question
    questionnaire.camp_donation = camp_donation
    questionnaire.early_arrival = early_arrival
    questionnaire.why_go = why_go
    db.session.commit()
    db.session.refresh(questionnaire)
    return jsonify({"questionnaire": questionnaire.serialize()}), 200

@api.route('/questionnaire/delete/<int:questionnaire_id>', methods=['DELETE'])
@jwt_required()
def delete_questionnaire(questionnaire_id):
    questionnaire = Questionnaire.query.get(questionnaire_id)

    if questionnaire is None:
        return jsonify ({"msg": "questionnaire not found"}), 404
    
    db.session.delete(questionnaire)
    db.session.commit()

    return jsonify({"msg": "questionnaire successfully deleted"}), 200


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
