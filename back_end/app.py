from flask import Flask,request
import sqlite3


app=Flask(__name__)


con=sqlite3.connect("db.db")
con.execute("CREATE TABLE IF NOT EXISTS accounts (ID INTEGER PRIMARY KEY AUTOINCREMENT , user_name VARCHAR(20),password VARCHAR(20),fname VARCHAR(20),lname VARCHAR(20), dob VARCHAR(12),email VARCHAR(30),ph INT)")
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
    cur.execute(f"INSERT INTO accounts (user_name,password,fname,lname,dob,email,ph) VALUES ('{user_name}','{password}','{fname}','{lname}',2020-03-01,'{email}',{int(ph)})")
    con.commit()

    return "Inserted Successfully!"




if(__name__=="__main__"):
    app.run(debug=True)