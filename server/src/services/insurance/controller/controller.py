import json

import validictory
from flask import Blueprint, request
from flask_restful import Resource, Api

from src.services.insurance.config.insurance_config import SCHEMA
from src.services.insurance.logics.insurance_logics import build_dynamic_where_query, update_data, dt_to_str
from src.services.insurance.models.models import InsuranceModel

insurance_blueprint = Blueprint('insurance', __name__, url_prefix='/api/v1/bcg')
insurance_api = Api(insurance_blueprint)


class InsuranceController(Resource):
    def get(self):
        """
        Get insurance policy data
        Request:
        http://192.168.0.6:5000/api/v1/bcg/insurance?Policy_id=12345
        Response:
        [
            {
                "Customer_id": 400,
                "Customer_Gender": "Male",
                "Customer_Income group": "0- $25K",
                "Customer_Region": "Sridhar",
                "Customer_Marital_status": 0,
                "Policy_id": 12345,
                "Date of Purchase": "1/16/2018",
                "Fuel": "CNG",
                "VEHICLE_SEGMENT": "A",
                "Premium": 958,
                "bodily injury liability": 0,
                "personal injury protection": 0,
                "property damage liability": 0,
                "collision": 1,
                "comprehensive": 1
            }
        ]
        """
        try:
            request_data = request.args.to_dict()
            validictory.validate(request_data, SCHEMA)
            results = {}
            page, limit = request_data.pop('page') if request_data.get('page') else 0, request_data.pop(
                'limit') if request_data.get('limit') else 10
            query = build_dynamic_where_query(request_data, page, limit)
            count_query = build_dynamic_where_query(request_data, page, limit, True)
            model_object = InsuranceModel()
            results['totalcount'] = model_object.fetch_policy_and_customer_data(count_query)
            results['results'] = model_object.fetch_policy_and_customer_data(query)
            results['results'] = list(map(dt_to_str, results['results']))
            print(results)
            return results
        except Exception as ex:
            return {"status": "failure", "exception": str(ex)}

    def put(self):
        """
        Update insurance policy data
        Request:
        http://192.168.0.6:5000/api/v1/bcg/insurance
        {
                "Customer_id": 400,
                "Customer_Gender": "Male",
                "Customer_Income group": "0- $25K",
                "Customer_Region": "Sridhar",
                "Customer_Marital_status": 0,
                "Policy_id": 12345,
                "Date of Purchase": "1/16/2018",
                "Fuel": "CNG",
                "VEHICLE_SEGMENT": "A",
                "Premium": 958,
                "bodily injury liability": 0,
                "personal injury protection": 0,
                "property damage liability": 0,
                "collision": 1,
                "comprehensive": 1
        }
        Response:
        {
            "status": "success"
        }
        """
        try:
            post_request_data = request.get_json()
            print(post_request_data)
            update_data(post_request_data)
            return {"status": "success"}
        except Exception as ex:
            print("exception in updating the data %s" % ex)
            return {"status": "failure", "exception": str(ex)}


insurance_api.add_resource(InsuranceController, '/insurance')
