#swaping by using the varibles
a=int(input("enter the first variable number: "))
b=int(input("enter the second varible number: "))

'''
a,b= b,a
#by using varibles in directly
print("after swaping", a)
print("after swaping", b)

#we will swap varibles by using temp varibles

temp=a
a=b
b=temp

print(a)
print(b)
'''

#by using arthamatic way this is very imp during interview we have to do this way


a= a+b
b=a-b
a=a-b

print(a)
print(b)