
#creating a class called mobile and adding the all deatils of the mobile

class mobile:
    #here using construtor __init__() to auto intialize the values to variables
    def __init__(self, brand, price, model, battery, color,):
        self.brand=brand
        self.price=price
        self.model=model
        self.battery= battery
        self.color=color
    #here printing the deatils of mobile
    def display(self):
        print("brand: ",self.brand)
        print("price: ",self.price)
        print("model: ",self.model)
        print("battery: ",self.battery)
        print("color: ",self.color)


obj=mobile("vivo", 45000, "4gb/128gb", "10000mah", "black")

obj.display()