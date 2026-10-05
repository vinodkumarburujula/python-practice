list_num=[1,2,3,4,5,6,7]

#without using a built-in function
reverse_list=[]
for i in list_num:
    reverse_list=[i]+reverse_list
print(reverse_list)

#this is the simple way to reverse a array
l=list_num[::-1]
print(l)

#with using a built-in function
list_num.reverse()
print(list_num)