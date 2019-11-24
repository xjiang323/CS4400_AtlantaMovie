from flask import Blueprint, request, Response
import MySQLdb

# db = MySQLdb.connect(host='localhost',
#                      user='',
#                      passwd='',
#                      db='')

backend_api = Blueprint('backend_api', __name__)

@backend_api.route('/approveUser')
def approve_user():
    username = request.args.get('username')
    if username is None:
        return Response(status=500)
    # cur = db.cursor()
    # try:
    #     cur.callproc('admin_approve_user', [username])
    # except MySQLdb.Error as e:
    #     return Response(status=500)
    # finally:
    #     cur.close()
    return Response(status=200)


@backend_api.route('/declineUser')
def decline_user():
    username = request.args.get('username')
    if username is None:
        return Response(status=500)
    # cur = db.cursor()
    # try:
    #     cur.callproc('admin_decline_user', [username])
    # except MySQLdb.Error as e:
    #     return Response(status=500)
    # finally:
    #     cur.close()
    return Response(status=200)
