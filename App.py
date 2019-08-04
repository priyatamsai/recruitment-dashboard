from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)

# Enter your database connection details below
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'recruitment'

# Intialize MySQL
mysql = MySQL(app)

# Change this to your secret key (can be anything, it's for extra protection)
app.secret_key = 'your secret key'

@app.route('/login', methods=['GET', 'POST'])
def login():
	# Output message if something goes wrong...
	msg = 'sai'
	# Check if "username" and "password" POST requests exist (user submitted form)
	if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
		# Create variables for easy access
		username = request.form['username']
		password = request.form['password']
		msg = 'post'
		# Check if account exists using MySQL
		cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
		cursor.execute('SELECT * FROM User WHERE username = %s AND password = %s', (username, password))
	  # Fetch one record and return result
		account = cursor.fetchone()
		msg = 'acc'
		# If account exists in accounts table in out database
		if account:
		  # Create session data, we can access this data in other routes
		  session['loggedin'] = True
		  session['username'] = account['username']
		  # Redirect to home page
		  return 'Logged in successfully!'
		else:
	    # Account doesnt exist or username/password incorrect
			msg = 'Incorrect username/password!'
	return msg

@app.route('/logout')
def logout():
    # Remove session data, this will log the user out
   session.pop('loggedin', None)
   session.pop('username', None)
   # Redirect to login page
   return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    # Output message if something goes wrong...
    msg = ''
    # Check if "username", "password" and "email" POST requests exist (user submitted form)
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'email' in request.form and 'type' in request.form:
        # Create variables for easy access
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        typ = request.form['type']
        # Check if account exists using MySQL
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM User WHERE username = %s', [username])
        account = cursor.fetchone()
        # If account exists show error and validation checks
        if account:
            msg = 'Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = 'Invalid email address!'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Username must contain only characters and numbers!'
        elif not username or not password or not email:
            msg = 'Please fill out the form!'
        else:
            # Account doesnt exists and the form data is valid, now insert new account into accounts table
            cursor.execute('INSERT INTO User VALUES (%s, %s, %s, %s)', (username, email, password, typ))
            mysql.connection.commit()
            msg = 'You have successfully registered!'
    elif request.method == 'POST':
        # Form is empty... (no POST data)
        msg = 'Please fill out the form!'
    # Show registration form with message (if any)
    return msg

@app.route('/profile', methods=['GET', 'POST'])
def profile():
    # Output message if something goes wrong...
    msg = ''
    # Check if "username", "password" and "email" POST requests exist (user submitted form)
    if request.method == 'POST' and 'firstname' in request.form and 'yearofgrad' in request.form and 'lastdegree' in request.form and 'university' in request.form:
        # Create variables for easy access
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        yearofgrad = request.form['yearofgrad']
        lastdegree = request.form['lastdegree']
        # Check if account exists using MySQL
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    elif request.method == 'POST':
        # Form is empty... (no POST data)
        msg = 'Please fill out the form!'
    # Show registration form with message (if any)
    return msg

if __name__ == '__main__':
    app.run(debug = True)

