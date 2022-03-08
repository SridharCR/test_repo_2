import pandas as pd
from sqlalchemy import create_engine

from lib.db import get_base_conn_string
from src.services.insurance.config.insurance_config import COLUMNS


def get_con(schema):
    conn_string = get_base_conn_string(schema)
    print(conn_string)
    db = create_engine(conn_string)
    connection = db.connect()
    return connection


class DataAdaptor:
    def read_file_and_insert_data(self, filename):
        con = get_con('BCG')
        data = pd.read_csv(filename)
        data = data.rename(columns=lambda x: x.strip())
        customer_data = data[COLUMNS['customer'].keys()].copy()
        insurance_data = data[COLUMNS['insurance_policies'].keys()].copy()
        insurance_data['Date of Purchase'] = pd.to_datetime(insurance_data['Date of Purchase'], format="%m/%d/%Y")
        # customer_data = customer_data.astype({'Customer_id': int})
        customer_data.to_sql(con=con, name='customer', if_exists='append', dtype=COLUMNS['customer'])
        insurance_data.to_sql(con=con, name='insurance_policy', if_exists='append', dtype=COLUMNS['insurance_policies'])


if __name__ == "__main__":
    DataAdaptor().read_file_and_insert_data(
        "D:\\workspace\\bcg_insurance\\server\\data\\Data Set - Insurance Client.csv")
