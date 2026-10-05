list_a=[1,2,4,6,98,9,653,5,6,8,6,47,5,4,0,-7]

largest = second_largest = float('-inf')
smallest = second_smallest = float('inf')

for i in list_a:
    if i > largest:
        second_largest=largest
        largest=i
    elif i > second_largest and i != largest:
        second_largest=i
    
    if i < smallest:
        second_smallest=smallest
        smallest=i
    elif i < second_smallest and i != smallest:
        second_smallest=i
print("Largest number: ",largest)
print("second Largest number: ",second_largest)  
print("smallest number: ",smallest)
print("second smallest number: ",second_smallest)