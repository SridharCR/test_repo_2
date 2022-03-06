from datetime import datetime

from src.services.insurance.config.insurance_config import COLUMNS
from src.services.insurance.models.models import InsuranceModel

def dynamic_query_builder(filters):
    build_query = []
    arguments = []
    for k, v in filters.items():
        build_query.append("`" + k + "` = " + "%(" + k + ")s")
        arguments.append(v)
    return build_query, arguments

def build_dynamic_where_query(filters, page, limit, count=False):
    select_data = "count(*) as count" if count else "*"
    limit_content = " limit %s offset %s" % (page, limit) if not count else ""
    base_select_query = "select " + select_data +  " from customer join insurance_policy using (Customer_id)"
    base_where_query = " where "
    build_query, arguments = dynamic_query_builder(filters)
    if filters:
        query = base_select_query + base_where_query + " and ".join(build_query) + limit_content
        final_query = (query, filters)
    else:
        final_query = (base_select_query + limit_content,)
    return final_query


def build_dynamic_set_query(table, filters):
    base_update_query = "update %s set " % table
    base_where_query = " where "
    if table == 'customer':
        where = base_where_query + "Customer_id = " + str(filters.pop('Customer_id'))
    elif table == 'insurance_policy':
        where = base_where_query + "Policy_id = " + str(filters.pop('Policy_id'))
        filters.pop('Customer_id')
    else:
        raise Exception("Not configured for other tables")
    build_query, arguments = dynamic_query_builder(filters)
    if filters:
        final_query = (base_update_query + " , ".join(build_query) + where, filters)
    else:
        return None
    return final_query


def update_data(post_request_data):
    customer_data = {k: v for k, v in post_request_data.items() if k in COLUMNS['customer'].keys()}
    insurance_data = {k: v for k, v in post_request_data.items() if k in COLUMNS['insurance_policies'].keys()}
    insurance_data['Date of Purchase'] = datetime.strptime(insurance_data['Date of Purchase'], "%m/%d/%Y")
    customer_query = build_dynamic_set_query('customer', customer_data)
    insurance_query = build_dynamic_set_query('insurance_policy', insurance_data)
    InsuranceModel().update_table_data(customer_query)
    InsuranceModel().update_table_data(insurance_query)

def dt_to_str(x):
    x['Date of Purchase'] = x['Date of Purchase'].strftime("%m/%d/%Y")
    return x