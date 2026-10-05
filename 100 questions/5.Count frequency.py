given_list=[1,2,3,4,5,6,4,7,5,1,2,3,5,6,7,8,7,9]

#using the built in funtion to find the accurancy of the word count and that will be converted into list also
unique_list= list(set(given_list))
count_list=[]
for i in unique_list:
    count_letter=str(i)+ " count="+ str(given_list.count(i))
    count_list.append(count_letter)
print(count_list)