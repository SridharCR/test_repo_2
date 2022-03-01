
def build_dynamic_where_query(filters):
    base_select_query = "select * from customer join insurance_policy using (Customer_id)"
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