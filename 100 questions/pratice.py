class mobile:
    print("mobile details")
    
    def __init__(self,brand,battery,ram,storage,price):
        self.brand=brand
        self.battery=battery
        self.ram=ram
        self.storage=storage
        self.price=price
    def display(self):
        print("brand: ",self.brand)
        print("battery: ",self.battery)
        print("ram: ",self.ram)
        print("storage: ",self.storage)
        print("price: ",self.price)


mobile_obj=mobile("vivo","5000mah","8gb","120gb",23000)

for i in range(1,6):
    print("------------------")
    mobile_obj.display()        