#relay testing
import RPi.GPIO as GPIO
#enter pin number here 
l0=29
l1=31
l2=33
l3=35
#setting up the pins
GPIO.setmode(GPIO.BOARD)
GPIO.setup(l0, GPIO.OUT)
GPIO.setup(l1, GPIO.OUT)
GPIO.setup(l2, GPIO.OUT)
GPIO.setup(l3, GPIO.OUT)
#initializing the pin
GPIO.output(l0, False)
GPIO.output(l1, False)
GPIO.output(l2, False)
GPIO.output(l3, False)

s0=int(input("enter state value for load 0: "))
s1=int(input("enter state value for load 1: "))
s2=int(input("enter state value for load 2: "))
s3=int(input("enter state value for load 3: "))

GPIO.output(l0,True) if s0==1 else GPIO.output(l0,False)
GPIO.output(l1,True) if s1==1 else GPIO.output(l1,False)
GPIO.output(l2,True) if s2==1 else GPIO.output(l2,False)
GPIO.output(l3,True) if s3==1 else GPIO.output(l3,False)

