50.times do
  name = Faker::Creature::Dog.name
  race = Faker::Creature::Dog.breed
  registry = Faker::Creature::Dog.meme_phrase
  avatar = Faker::Avatar.image(slug: name, size: '100x400', format: 'png', set: 'set4')
  Dude.create(name: name, race: race, registry: registry, avatar: avatar)
end

puts "50 Dogs Seeded"
# im just gonna do set four because its the best and the others suck or don't run as well