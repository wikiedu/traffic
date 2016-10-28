# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Company.create(name: 'company1')
User.create!(:username => 'Transport1', :email => 'transport@mail.com', :password => '123456', :password_confirmation => '123456', :role => 'transporter', :company_id => 1)
User.create!(:username => 'Admin', :email => 'eduardcalderon@vonzu.es', :password => '123456', :password_confirmation => '123456', :role => 'admin', :company_id => 1)
User.create!(:username => 'Client', :email => 'client@mail.com', :password => '123456', :password_confirmation => '123456', :role => 'client', :company_id => 1)
