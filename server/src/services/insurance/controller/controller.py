from flask import Blueprint
from flask_restful import Resource, Api

from src.services.insurance.models.models import InsuranceModel

insurance_blueprint = Blueprint('insurance', __name__, url_prefix='/api/v1/bcg')
insurance_api = Api(insurance_blueprint)

class InsuranceController(Resource):
    def get(self):
        """
        Get insurance policy data
        """
        return InsuranceModel().fetch_policy_and_customer_data({})

    def put(self):
        """
        Update insurance policy data
        """
        data = {}
        InsuranceModel().update_customer_data(data)
        InsuranceModel().update_policy_data(data)

insurance_api.add_resource(InsuranceController, '/insurance')