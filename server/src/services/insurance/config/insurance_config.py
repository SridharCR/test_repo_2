import sqlalchemy

SCHEMA = {
    'type': 'object',
    'properties': {
        'Customer_id': {
            'type': ['integer', 'string'],
            'required': False
        },
        'Policy_id': {
            'type': ['integer', 'string'],
            'required': False
        }
    }
}

COLUMNS = {
    'insurance_policies': {
        "Policy_id": sqlalchemy.types.INTEGER(),
        "Customer_id": sqlalchemy.types.INTEGER(),
        "Date of Purchase": sqlalchemy.types.DateTime(),
        "Fuel": sqlalchemy.types.INTEGER(),
        "VEHICLE_SEGMENT": int,
        "Premium": int,
        "bodily injury liability": int,
        "personal injury protection": int,
        "property damage liability": int,
        "collision": sqlalchemy.types.INTEGER(),
        "comprehensive": sqlalchemy.types.INTEGER()
    },
    'customer': {
        "Customer_id": sqlalchemy.types.INTEGER(),
        "Customer_Gender": int,
        "Customer_Income group": int,
        "Customer_Region": int,
        "Customer_Marital_status": sqlalchemy.types.INTEGER()
    }
}
