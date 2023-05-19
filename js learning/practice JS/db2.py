import mysql.connector
mydb=mysql.connector.connect(host='localhost',user='root',password='123456',database='test1')
cur=mydb.cursor()
s="SELECT * FROM book"
cur.execute(s)
result=cur.fetchall()
for i in result:
    print(i)