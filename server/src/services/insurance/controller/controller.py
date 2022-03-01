import validictory
from flask import Blueprint, request
from flask_restful import Resource, Api

from src.services.insurance.config.insurance_config import SCHEMA
from src.services.insurance.logics.insurance_logics import build_dynamic_where_query
from src.services.insurance.models.models import InsuranceModel

insurance_blueprint = Blueprint('insurance', __name__, url_prefix='/api/v1/bcg')
insurance_api = Api(insurance_blueprint)

class InsuranceController(Resource):
    def get(self):
        """
        Get insurance policy data
        """
        request_data = request.args.to_dict()
        # validictory.validate(request_data, SCHEMA)
        query = build_dynamic_where_query(request_data)
        return InsuranceModel().fetch_policy_and_customer_data(query)

    def put(self):
        """
        Update insurance policy data
        """
        data = {}
        InsuranceModel().update_customer_data(data)
        InsuranceModel().update_policy_data(data)

insurance_api.add_resource(InsuranceController, '/insurance')