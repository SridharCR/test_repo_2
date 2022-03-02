from src.services.insurance.config.insurance_config import COLUMNS
from src.services.insurance.models.models import InsuranceModel


def build_dynamic_where_query(filters):
    base_select_query = "select * from customer join insurance_policy using (Customer_id) limit 100"
    base_where_query = " where "
    final_query = None
    build_query = []
    arguments = []
    for k, v in filters.items():
        build_query.append(k + " = " + "%(" + k + ")s")
        arguments.append(v)
    if filters:
        final_query = (base_select_query + base_where_query + " and ".join(build_query), filters)
    else:
        final_query = (base_select_query,)
    return final_query


def build_dynamic_set_query(table, filters):
    base_update_query = "update %s set " % table
    base_where_query = " where "
    final_query = None
    build_query = []
    arguments = []
    if table == 'customer':
        where = base_where_query + "Customer_id = " + str(filters.pop('Customer_id'))
    elif table == 'insurance_policy':
        where = base_where_query + "Policy_id = " + str(filters.pop('Policy_id'))
        filters.pop('Customer_id')
    else:
        raise Exception("Not configured for other tables")
    for k, v in filters.items():
        build_query.append("`" + k + "` = " + "%(" + k + ")s")
        arguments.append(v)

    if filters:
        final_query = (base_update_query + " , ".join(build_query) + where, filters)
    else:
        return None
    return final_query


def update_data(post_request_data):
    customer_data = {k: v for k, v in post_request_data.items() if k in COLUMNS['customer'].keys()}
    insurance_data = {k: v for k, v in post_request_data.items() if k in COLUMNS['insurance_policies'].keys()}
    customer_query = build_dynamic_set_query('customer', customer_data)
    insurance_query = build_dynamic_set_query('insurance_policy', insurance_data)
    InsuranceModel().update_table_data(customer_query)
    InsuranceModel().update_table_data(insurance_query)