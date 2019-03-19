function Scooter(year, color, model){
  this.year = year
  this.color = color
  this.model = model
}
const s = new Scooter(2019, 'Red', 'bm' )

function Driver(name, age, experience){
  this.name = name
  this.age = age
  this.experience = experience
}
const d = new Driver('Jean', 19, 'experience')

function PickupLocation(address, city){
  this.address = address
  this.city = city
}
const pl = new PickupLocation('Fleuriot', 'Tabarre')  
