
# Team 43 Atlanta Movie Phase IV
## Prerequisites

You'll need to install the following packages or softwares to launch the project.

- `Python`
- `node`
- `npm`
- `pip`
- `MySQL`

### MySQL
The project needs to connect the local MySQL to do data mangement. Thus, to launch the project successfully, it is necessary to make sure that local MySQl is running on 3306 port and phase III schema has been created. Also, change your database configuration in `app.py` correctly, or remove your MySQL root's password so that the default database configuration in `app.py` can work.

## Setup

For the backend:

```
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

For the frontend:

If you don't have webpack, install it:

```
npm install webpack@1.12.12
```

Then, use `npm` to install the remaining JavaScript dependencies.

```
npm install
```


## Launch

Then in two separate tabs run `python app.py` and `npx webpack --watch`. Visit `http://127.0.0.1:5000/` to use the system.

