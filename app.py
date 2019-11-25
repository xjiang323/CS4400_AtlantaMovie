from flask import Flask, render_template
from backend import backend_api
from backend import db

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


@app.route('/AdminOnlyFunction')
def admin_function():
  return render_template('index.html')


@app.route('/AdminCustomerFunction')
def admin_customer_function():
  return render_template('index.html')


@app.route('/ManagerOnlyFunction')
def manager_only_function():
  return render_template('index.html')


@app.route('/ManagerCustomerFunction')
def manager_customer_function():
  return render_template('index.html')


@app.route('/CustomerFunction')
def customer_function():
  return render_template('index.html')


@app.route('/UserFunction')
def user_function():
  return render_template('index.html')


@app.route('/manageUser')
def admin_manage_user():
  return render_template('index.html')


@app.route('/manageCompany')
def manage_company():
  return render_template('index.html')

@app.route('/customerExploreMovie')
def customer_explore_movie():
  return render_template('index.html')

@app.route('/customerViewHistory')
def customer_view_history():
  return render_template('index.html')

@app.route('/userExploreTheater')
def user_explore_theater():
  return render_template('index.html')

@app.route('/userVisitHistory')
def user_visit_history():
  return render_template('index.html')

if __name__ == '__main__':
  app.run(debug=True)

