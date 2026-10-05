#here we creating the dict and performaing all the operations on it
dict_a={"name":"vinod", "age":25}
print(dict_a)
a=dict(name="vinod", age=25)
print(a)
print(dict_a["name"])
print(dict_a["age"])

#retriving the dict values by using built-in unctions
print(dict_a.values())
print(dict_a.keys())
print(dict_a.items())
del dict_a["age"]
print(dict_a)