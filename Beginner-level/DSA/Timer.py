#basic code to create a simple but reliable timer

import time

def countdown(time_sec):
    while time_sec:
        mins, secs = divmod(time_sec, 60)
        timeformat = '{:02d}:{:02d}'.format(mins, secs)
        print(timeformat, end='\r')
        time.sleep(1)
        time_sec -= 1

    print("stop")
    print("The timer is OVER")
#Replace the number in countdown by a time for counter with unit being seconds
countdown(10)
