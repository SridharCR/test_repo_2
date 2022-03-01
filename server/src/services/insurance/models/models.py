from lib.db import create_connection


class InsuranceModel:
    def fetch_policy_and_customer_data(self, query):
        results = []
        conn = create_connection('BCG')
        print(query)
        with conn.cursor(dictionary=True) as cur:
            cur.execute(*query)
            results = cur.fetchall()
        return results

    def update_policy_data(self, query):
        conn = create_connection('BCG')
        with conn.cursor() as cur:
            cur.execute(*query)
        conn.commit()
        return True

    def update_table_data(self, query):
        conn = create_connection('BCG')
        with conn.cursor() as cur:
            cur.execute(*query)
        conn.commit()
        return True
