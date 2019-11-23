from flask import Flask, render_template
app = Flask(__name__)

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


if __name__ == '__main__':
  app.run(debug=True)

