from lib.db import create_connection


class InsuranceModel:
    def fetch_policy_and_customer_data(self, filters):
        results = []
        conn = create_connection('BCG')
        with conn.cursor(dictionary=True) as cur:
            cur.execute("select * from customer join insurance_policy using (Customer_id) limit 50")
            results = cur.fetchall()
        return results

    def update_policy_data(self, data):
        conn = create_connection('BCG')
        update_query = "update insurance_policy set Fuel = '123' where index = 1199"
        with conn.cursor() as cur:
            cur.execute(update_query)
        conn.commit()
        return True

    def update_customer_data(self, data):
        conn = create_connection('BCG')
        update_query = "update customer set Customer_Gender = 'Edachu' where index = 1199"
        with conn.cursor as cur:
            cur.execute(update_query)
        conn.commit()
        return True
