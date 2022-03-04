import sqlalchemy

SCHEMA = {
    'type': 'object',
    'properties': {
        'Customer_id': {
            'type': ['integer', 'string'],
            'pattern': '^[0-9]+$',
            'required': False
        },
        'Policy_id': {
            'type': ['integer', 'string'],
            'pattern': '^[0-9]+$',
            'required': False
        },
        'page': {
            'type': ['integer', 'string'],
            'pattern': '^[0-9]+$',
            'required': False
        },
        'limit': {
            'type': ['integer', 'string'],
            'pattern': '^[0-9]+$',
            'required': False
        }
    }
}

COLUMNS = {
    'insurance_policies': {
        "Policy_id": sqlalchemy.types.INTEGER(),
        "Customer_id": sqlalchemy.types.INTEGER(),
        "Date of Purchase": sqlalchemy.types.DATE(),
        "Fuel": sqlalchemy.types.VARCHAR(10),
        "VEHICLE_SEGMENT": sqlalchemy.types.VARCHAR(5),
        "Premium": sqlalchemy.types.INTEGER(),
        "bodily injury liability": sqlalchemy.types.SMALLINT(),
        "personal injury protection": sqlalchemy.types.SMALLINT(),
        "property damage liability": sqlalchemy.types.SMALLINT(),
        "collision": sqlalchemy.types.SMALLINT(),
        "comprehensive": sqlalchemy.types.SMALLINT()
    },
    'customer': {
        "Customer_id": sqlalchemy.types.INTEGER(),
        "Customer_Gender": sqlalchemy.types.VARCHAR(20),
        "Customer_Income group": sqlalchemy.types.VARCHAR(20),
        "Customer_Region": sqlalchemy.types.VARCHAR(100),
        "Customer_Marital_status": sqlalchemy.types.INTEGER()
    }
}
