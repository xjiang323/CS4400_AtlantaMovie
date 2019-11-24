from flask import Blueprint, request, Response
from flaskext.mysql import MySQL
import json

db = MySQL()

backend_api = Blueprint('backend_api', __name__)


@backend_api.route('/approveUser')
def approve_user():
    username = request.args.get('username')
    if username is None:
        return Response(status=500)
    cur = db.get_db().cursor()
    try:
        cur.callproc('admin_approve_user', [username])
    except Exception as e:
        return Response(status=500)
    finally:
        cur.close()
    return Response(status=200)


@backend_api.route('/declineUser')
def decline_user():
    username = request.args.get('username')
    if username is None:
        return Response(status=500)
    cur = db.get_db().cursor()
    try:
        cur.callproc('admin_decline_user', [username])
    except Exception as e:
        return Response(status=500)
    finally:
        cur.close()
    return Response(status=200)


@backend_api.route('/filterUser')
def filter_user():
    username = request.args.get('username')
    status = request.args.get('status')
    sortBy = request.args.get('sortBy')
    sortDirection = request.args.get('sortDirection')

    if username is None:
        username = ''
    if status is None or status == '':
        status = 'ALL'
    cur = db.get_db().cursor()
    try:
        cur.callproc('admin_filter_user', [username, status, sortBy, sortDirection])
        cur.execute('''SELECT * FROM AdFilterUser''')
        row_headers = [x[0] for x in cur.description]
        result = cur.fetchall()
        json_data = []
        for row in result:
            json_data.append(dict(zip(row_headers, row)))
    except Exception as e:
        return Response(status=500)
    finally:
        cur.close()
    return json.dumps(json_data)