from flask import Blueprint, jsonify, request

api = Blueprint("api", __name__)

@api.route("/jobs", methods=["GET"])
def get_jobs():
    # Placeholder
    return jsonify({"jobs": ["Job A", "Job B"]})

@api.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    # Placeholder
    return jsonify({"message": f"User {data.get('username')} registered!"})
