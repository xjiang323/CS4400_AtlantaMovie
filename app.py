from flask import Flask, render_template
from backend import backend_api
from backend import db
import config

app = Flask(__name__)
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'movie_company'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3306
db.init_app(app)

app.register_blueprint(backend_api)


@app.route('/')
def hello_world():
  return render_template('index.html')

# 1
@app.route('/login')
def login():
  return render_template('index.html')

# 2
@app.route('/RegisterNavigation')
def register_navigate():
  return render_template('index.html')

# 3
@app.route('/UserOnlyReg')
def useronly_reg():
  return render_template('index.html')

# 4
@app.route('/CustomerReg')
def customer_reg():
  return render_template('index.html')

# 5
@app.route('/ManagerReg')
def manager_reg():
  return render_template('index.html')

# 6
@app.route('/ManagerCustomerReg')
def manager_customer_reg():
 return render_template('index.html')

# 7
@app.route('/AdminOnlyFunction')
def admin_function():
  return render_template('index.html')

# 8
@app.route('/AdminCustomerFunction')
def admin_customer_function():
  return render_template('index.html')

# 9
@app.route('/ManagerOnlyFunction')
def manager_only_function():
  return render_template('index.html')

# 10
@app.route('/ManagerCustomerFunction')
def manager_customer_function():
  return render_template('index.html')

# 11
@app.route('/CustomerFunction')
def customer_function():
  return render_template('index.html', logged_username=config.USERNAME)

# 12
@app.route('/UserFunction')
def user_function():
  return render_template('index.html')

# 13
@app.route('/manageUser')
def admin_manage_user():
  return render_template('index.html')

# 14
@app.route('/manageCompany')
def manage_company():
  return render_template('index.html')

# 15
@app.route('/createTheater')
def admin_create_theater():
  return render_template('index.html')

# 16
@app.route('/companyDetail')
def admin_company_detail():
  return render_template('index.html')

# 17
@app.route('/createMovie')
def admin_create_movie():
  return render_template('index.html')

# 18
@app.route('/theaterOverview')
def manager_theater_overview():
  return render_template('index.html')

# 19
@app.route('/scheduleMovie')
def manager_schedule_movie():
  return render_template('index.html')

# 20
@app.route('/customerExploreMovie')
def customer_explore_movie():
  return render_template('index.html')

# 21
@app.route('/customerViewHistory')
def customer_view_history():
  return render_template('index.html')

# 22
@app.route('/userExploreTheater')
def user_explore_theater():
  return render_template('index.html')

# 23
@app.route('/userVisitHistory')
def user_visit_history():
  return render_template('index.html', logged_username=config.USERNAME )


if __name__ == '__main__':
  app.run(debug=True)
