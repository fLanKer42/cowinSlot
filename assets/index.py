from datetime import datetime, timedelta
import urllib.request, urllib.parse, urllib.error
import ssl
import json
import time
from tkinter import *
import tkinter.messagebox
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

root=Tk()

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

num_days = 0
district_id = 192
x = datetime.today() + timedelta(days=num_days)

Url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=' + str(district_id) + '&date=' + str(x.strftime("%d")) + '-' + str(x.strftime("%m")) + '-' + str(x.strftime("%Y"))
def mailSend():
    sender_email = "dhruv.rai2019@gmail.com"
    reciever_email = ["dhruv.rai2001@gmail.com", "vickyahlawat2019@gmail.com"]
    password = "battle@2001"
    message = MIMEMultipart("alternative")
    message["Subject"] = "Vaccine Available"
    message["From"] = sender_email

    text = """ \Vaccine is Available, visit cowin site or arogya setu app to book a slot"""
    html = """\<html><body><p>Vaccine is available check cowin site!</p></body>
    </html>"""

    part1 = MIMEText(text,"plain")
    part2 = MIMEText(html, "html")

    message.attach(part1)
    message.attach(part2)

    for rec in reciever_email:
        message["To"] = rec
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(
                sender_email, rec, message.as_string()
            )


def doFun():
    jhand = open("vaccine.json", "w")
    fhand = urllib.request.urlopen(Url, context=ctx)
    for line in fhand:
        jhand.write(line.decode().strip())
    jhand.close()
    fhand.close()
    print('written')
    with open('vaccine.json') as f:
        data = json.load(f)
    for i in range(len(data["sessions"])):
        if data["sessions"][i]["available_capacity_dose1"] > 0 and data["sessions"][i]["min_age_limit"]==18:
            #do something
            print("#alert")
            mailSend()
            tkinter.messagebox.showinfo('Vaccine Available','Vaccine available, check cowin site')
            root.mainloop()
            return 1
    print('read')
    return 0

while True:
    if doFun() == 1:
        break
    time.sleep(20)


