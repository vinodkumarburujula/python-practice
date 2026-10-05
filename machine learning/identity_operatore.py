given_list=[]
'''
for i in range(0,30,2):
    given_list.append(i)

search_value=int(input("enter the value what you want to scarch: "))


#here we performing membership operator in list  
print(given_list)
if search_value in given_list:
    print(search_value, " is located at", given_list.index(search_value)," index")
else:
    print(search_value, " is not located in list. try another value")
     
'''

#here we are using identity operator that is and is not
a= 20
b=40

print(a is not b) #false because a is having different value and different memory location

c=a
print(c is a )#true because a and c is having same value and same memory location.
