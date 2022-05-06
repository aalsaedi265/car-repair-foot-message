# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "clearing data"

User.destroy_all
Massage.destroy_all
CarShop.destroy_all


puts "user data"

u1 =User.create(full_name: "Ashley", password:"1", password_confirmation: "1")

u2=  User.create(full_name: "Acaicia",password:"2", password_confirmation: "2")

u3= User.create(full_name: "Raven", password:"3", password_confirmation: "3")

u4= User.create(full_name: "Emily", password:"4", password_confirmation: "4")

u5= User.create(full_name: "Julia", password:"5", password_confirmation: "5")


puts "massage data"

m1=Massage.create(name:"aragon", request:"I rather explain in perosn then in wirintg", price:100, user_id: u1.id)

m2= Massage.create(name:"engin name synthetic", request:"make it hurt", price: 30, user_id:u2.id)

m3= Massage.create(name:"not the ones here", request:"i brough my speical name to use on my feet", price: 20, user_id:u3.id)

m4= Massage.create(name:"none", request:"cheapest", price: 10, user_id: u4.id)

m5= Massage.create(name:"aragon", request:"a lot of pressure on the heel, and ball, with medum on the bridge", price: 50, user_id: u5.id)


puts "carshop data"

   c1= CarShop.create(user_id: u1.id,price: 89, name:"sysnethic name change")

   c2= CarShop.create(user_id: u2.id,price: 69, name:"hammer out bummper")

   c3= CarShop.create(user_id: u3.id,price: 100, name:"replace window")

   c4= CarShop.create(user_id: u4.id,price: 50, name:"tape up window")

   c5= CarShop.create(user_id: u5.id,price: 200, name:"no question cleaning")



puts "seeding completed "