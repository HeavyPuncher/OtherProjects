import random
import time
while True:
    answer = input("You have just woken up in a cave, there are 2 pathsways, which do you choose? Pathway 1? Pathway 2?")
    
    if answer.lower().strip() == "1":
    
    	answer = input("There are more pathways than before, 3 pathways to be exact. Which pathway do you choose: 1, 2, or 3?")
    	if answer == "1":
    		print("dead end mate, go back")
    		print("the entrance is blocked off...")
    		print("You are gonna starve to death")
    
    	elif answer == "2":
    		print("You made it, you're out of the cave!")
    
    	else:
    		print("Aaaaaahhhhhh (you fell into a pit hole")
    		print("You are dead")

    else:
        print("wait, what is that?")
        print("IT'S A FIRE BREATHING DRAGON! AHHHH!")
        print("You are dead")
        break

