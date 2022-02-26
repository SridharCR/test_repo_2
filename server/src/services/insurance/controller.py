from flask import Blueprint
from flask import request, jsonify
from flask_restful import Resource, Api

insurance_blueprint = Blueprint('insurance', __name__, url_prefix='/api/v1/bcg')
insurance_api = Api(insurance_blueprint)

class InsuranceController(Resource):
    def get(self):
        """
        Get insurance policy data
        """
        return { 1: 1}

    def put(self):
        """
        Update insurance policy data
        """
        return { 1: 1}

insurance_api.add_resource(InsuranceController, '/insurance')