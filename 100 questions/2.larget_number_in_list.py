#write a program to find largest number in the given list
list_a=[1,2,3,4,56,7,9,6,3,5,8,4,7,5,7,0]


#here we are using built-in function max()
print("largest number in list using built-in max() : ",max(list_a))


#there is another way to find largest number 
greast_number=list_a[0]
for i in list_a:
    if i > greast_number:
        greast_number=i
print("largest number : ",greast_number)