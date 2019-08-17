from flask import Flask, render_template, request, redirect, url_for, session, json, jsonify
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
	msg = ''
	json_data = request.get_json()
	username = json_data.get('username')
	password = json_data.get('password')
	# Check if "username" and "password" POST requests exist (user submitted form)
	if request.method == 'POST' and username and password:
		# Create variables for easy access
		
		# Check if account exists using MySQL
		cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
		cursor.execute('SELECT * FROM User WHERE username = %s AND password = %s', (username, password))
		# Fetch one record and return result
		account = cursor.fetchone()
		# If account exists in accounts table in out database
		if account:
			# Create session data, we can access this data in other routes
			session['loggedin'] = True
			session['username'] = account['username']
			# Redirect to home page
			msg = 'Logged in successfully!'
		else:
			# Account doesnt exist or username/password incorrect
			msg = 'Incorrect username/password!'
		res = {
        'msg': msg,
        'username': username
        }
	return json.dumps(res)

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
		json_data = request.get_json()
		username = json_data.get('username')
		password = json_data.get('password')
		email = json_data.get('email')
		typ = json_data.get('typ')
		# Check if "username", "password" and "email" POST requests exist (user submitted form)
		if request.method == 'POST' and username and password and email and typ:
				# Check if account exists using MySQL
				cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
				cursor.execute('SELECT * FROM User WHERE username = %s', [username])
				account = cursor.fetchone()
				# If account exists show error and validation checks
				if account:
						msg = 'Account already exists!'
				elif not re.match('[^@]+@[^@]+\.[^@]+', email):
						msg = 'Invalid email address!'
				elif not re.match('[A-Za-z0-9]+', username):
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
		json_data = request.get_json()
		firstname = json_data.get('firstname')
		lastname = json_data.get('lastname')
		yearofgrad = json_data.get('yearofgrad')
		linkedinprofile = json_data.get('linkedinprofile')
		lastdegree = json_data.get('lastdegree')
		university = json_data.get('university')
		resume = json_data.get('resume')
		username = json_data.get('username')
		# Check if "username", "password" and "email" POST requests exist (user submitted form)
		if request.method == 'POST' and username and firstname and yearofgrad and lastdegree and university:
			cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
			cursor.execute('SELECT * FROM Profile WHERE username = (%s)', [username])
			account = cursor.fetchone()
			if account:
				cursor1 = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
				cursor1.execute('UPDATE Profile  SET username = %s, firstname = %s, lastname = %s, yearofgrad = %s, linkedinprofile = %s, lastdegree = %s, university = %s, resume = %s', (username, firstname, lastname, yearofgrad, linkedinprofile, lastdegree, university, resume))
				mysql.connection.commit()
			else:
				cursor1 = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
				cursor1.execute('INSERT INTO Profile VALUES (%s, %s, %s, %s, %s, %s, %s, %s)', (username, firstname, lastname, yearofgrad, linkedinprofile, lastdegree, university, resume))
				mysql.connection.commit()
			msg = 'You have successfully registered!'
		elif request.method == 'POST':
				# Form is empty... (no POST data)
				msg = 'Please fill out the form!'
		# Show registration form with message (if any)
		return msg

@app.route('/jobs', methods=['GET', 'POST'])
def getJobOpenings():
	msg = ''
	cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
	cursor.execute('SELECT * FROM JobOpening')
	result = cursor.fetchall()
	json_data=[]
	json_data = [dict(row.items()) for row in result]
	return json.dumps(json_data)

@app.route('/getprofile', methods=['GET', 'POST'])
def getProfile():
	msg = ''
	json_data = request.get_json()
	username = json_data.get('username')
	cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
	cursor.execute('SELECT * FROM Profile WHERE username = %s', [username])
	result = cursor.fetchall()
	json_data=[]
	json_data = [dict(row.items()) for row in result]
	return json.dumps(json_data)

@app.route('/getjobs', methods=['GET', 'POST'])
def getJobsApplied():
	msg = ''
	json_data = request.get_json()
	username = json_data.get('username')
	cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
	cursor.execute('SELECT id,status,title,description,experience,company FROM Applied INNER JOIN JobOpening ON Applied.jobid = JobOpening.id WHERE applicantid = (%s)', [username])
	result = cursor.fetchall()
	json_data=[]
	json_data = [dict(row.items()) for row in result]
	return json.dumps(json_data)

@app.route('/apply', methods=['GET', 'POST'])
def apply():
	msg = ''
	json_data = request.get_json()
	username = json_data.get('username')
	jobid = json_data.get('jobid')
	status = 'Applied'
	cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
	cursor.execute('INSERT INTO Applied VALUES (%s, %s, %s)', (jobid, username, status))
	mysql.connection.commit()
	msg = 'You have successfully Applied!'
	return msg

if __name__ == '__main__':
		app.run(debug = True)