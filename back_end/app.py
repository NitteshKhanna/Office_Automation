from flask import Flask,request,redirect
import sqlite3


app=Flask(__name__)


con=sqlite3.connect("db.db")
con.execute("CREATE TABLE IF NOT EXISTS accounts (ID INTEGER PRIMARY KEY AUTOINCREMENT , user_name VARCHAR(20),password VARCHAR(20),fname VARCHAR(20),lname VARCHAR(20), dob VARCHAR(12),email VARCHAR(30),ph INTEGER)")
con.commit()
con.close()

@app.route("/register", methods=['POST'])
def register():
    
    print("\n\n\n yy",request.form.get('fname'),"\n\n\n")

    #Recieving the new member details from front-end    
    user_name=request.form.get('user_name')
    print(user_name)
    password=request.form.get('password')
    fname=request.form.get('fname')
    lname=request.form.get('lname')
    dob=request.form.get('dob')
    email=request.form.get('email')
    ph=request.form.get('ph')
    
    #intializing sqlite3 server
    con=sqlite3.connect("db.db")
    cur=con.cursor()
    # cur.execute("SELECT * FROM accounts")
    query=f"INSERT INTO accounts (user_name,password,fname,lname,dob,email,ph) VALUES ('{user_name}','{password}','{fname}','{lname}',{dob},'{email}',{ph})"
    # cur.execute(query)
    cur.execute(f"INSERT INTO accounts (user_name,password,fname,lname,dob,email,ph) VALUES ('{user_name}','{password}','{fname}','{lname}','{dob}','{email}','{ph}')")
    con.commit()
    con.close()
    return redirect("http://localhost:4200/register",code=302)

@app.route("/user_name",methods=['GET'])
def user_name():
    con=sqlite3.connect("db.db")
    cur=con.cursor()
    cur.execute("SELECT user_name from accounts")
    op=cur.fetchall()
    con.close()
    # ip=request.json["user_name"]
    return op

@app.route("/test",methods=['POST'])
def test():
    a=request.form.get("a")
    b=request.form.get("b")
    return [a,b]

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

if(__name__=="__main__"):
    app.run(debug=True)