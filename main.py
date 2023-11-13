import time, requests, pyfiglet, threading
print(pyfiglet.figlet_format("Spammy!"))

msg = input("Please Insert Webhook Spam Message: ")
webhook = input("Please Insert Webhook URL: ")
th = int(input('Number of thread ? (200 recommended): '))
sleep = int(input("Sleeping time ? (recommended 2): "))
def spam():
    while True:
        try:
            data = requests.post(webhook, json={'content': msg})
            if data.status_code == 204:
                print(f"Sent MSG {msg}")
        except:
            print("Bad Webhook :" + webhook)
        time.sleep(sleep)
    
for x in range(th):
    t = threading.Thread(target = spam)
    t.start()


# go to logger.html for the ip grabber / one click
