# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

print("clearing data")

User.destroy_all
Massage.destroy_all
CarShop.destroy_all

print("massage data")

m1=Massage.create(oil:"aragon", request:"I rather explain in perosn then in wirintg", price:100)

m2= Massage.create(oil:"engin oil synthetic", request:"make it hurt", price: 30)

m3= Massage.create(oil:"not the ones here", request:"i brough my speical oil to use on my feet", price: 20)

m4= Massage.create(oil:"none", request:"cheapest", price: 10)

m5= Massage.create(oil:"aragon", request:"a lot of pressure on the heel, and ball, with medum on the bridge", price: 50)


print ("carshop data")

   c1= CarShop.create(price: 89, server:"sysnethic oil change")

   c2= CarShop.create(price: 69, server:"hammer out bummper")

   c3= CarShop.create(price: 100, server:"replace window")

   c4= CarShop.create(price: 50, server:"tape up window")

   c5= CarShop.create(price: 200, server:"no question cleaning")


print("user data")

User.create(full_name: "Gabriela", password_digest:12345, massage_id: m1.id, car_shop_id: c1.id)

User.create(full_name: "Acaicia", password_digest:56789, massage_id: m2.id, car_shop_id: c2.id)

User.create(full_name: "Raven", password_digest:12345, massage_id: m3.id, car_shop_id: c3.id)

User.create(full_name: "Emily", password_digest:19285, massage_id: m4.id, car_shop_id: c4.id)

User.create(full_name: "Julia", password_digest:12345, massage_id: m5.id, car_shop_id: c5.id)


print("seeding completed ")