#write a python program to find the smallest number in list
list_a=[1,2,3,4,5,6,78,9,0,2]

#here we use min() function to find the smallest number in list
print("smalles number using built-in function min(): ",min(list_a))

#another way to find the smallest number in list
smallest_num= list_a[0]
for i in list_a:
    if i < smallest_num:
        smallest_num=i
print("smallest number using loop:",smallest_num)
