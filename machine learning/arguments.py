#we use args when we dont know the how many arguments are there 
def add(*args):
    
    total=0
    for i in (args):
        total+=i
    print(total)
add(10,20,30,40,50,60)

def multipy(*args):
    multies=1
    for num in args:
        multies*=num
    print(multies)
multipy(20,30)


#**kwargs allows a function to accept any number of keyword arguments.

def deatils(**kwargs):
    for i in kwargs.items():
        print(i)
deatils(name="vinod",age=25)