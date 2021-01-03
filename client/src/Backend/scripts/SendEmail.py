import sys
from string import Template
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

MY_ADDRESS = "ethichacktest@outlook.com"

if(len(sys.argv) != 3):
    print("Wrong syntax")
    sys.exit()


def send_mail(filename, template):
    print("starting Process")
    names, emails = get_contacts(filename)
    for i in range(len(names)):
        print(names[i], emails[i])
    message_template = read_template(template)
    
    s = smtplib.SMTP(host='smtp-mail.outlook.com' ,port=587)
    s.starttls()
    s.login(MY_ADDRESS, "ZenAnaGenjiRein")    

    # For each contact, send the email:
    for name, email in zip(names, emails):
        msg = MIMEMultipart()       # create a message

        # add in the actual person name to the message template
        message = message_template.substitute(PERSON_NAME=name.title())

        # setup the parameters of the message
        msg['From']= MY_ADDRESS
        msg['To']=email
        msg['Subject']="This is TEST"

        # add in the message body
        msg.attach(MIMEText(message, 'plain'))

        # send the message via the server set up earlier.
        s.send_message(msg)
    
        del msg 
    s.quit()
    print("\nEmail sent successfully!")
    sys.exit()

def get_contacts(filename):
    names = []
    emails = []
    try:
        with open(filename, mode='r', encoding='utf-8') as contacts_file:
            for a_contact in contacts_file:
                names.append(a_contact.split(":")[0])
                emails.append(a_contact.split(":")[1])
    except:
        print("\nsome issue has arisen")
    return names, emails  


def read_template(filename):
    with open(filename, 'r', encoding='utf-8') as template_file:
        template_file_content = template_file.read()
    return Template(template_file_content)

print("debugging")
send_mail(sys.argv[1], sys.argv[2])

