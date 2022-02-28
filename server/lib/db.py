from configparser import ConfigParser
import mysql.connector


def config(filename='D:\\workspace\\bcg_insurance\\server\\config.ini', section='mysql'):
    parser = ConfigParser()
    parser.read(filename)

    db = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            db[param[0]] = param[1]
    else:
        raise Exception('Section {0} not found in the {1} file'.format(section, filename))

    return db


def create_connection(db=None):
    db_params = config()
    if db:
        db_params['database'] = db
    conn = mysql.connector.connect(**db_params)
    return conn


def get_base_conn_string(schema):
    data = config()
    return 'mysql://' + data['user'] + ':' + data['password'] + '@' + data['host'] + '/' + schema