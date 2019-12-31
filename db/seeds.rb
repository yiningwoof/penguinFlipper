# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

african = Penguin.create(
  species: "African penguin",
  description: "The African penguin, (Spheniscus demersus), also known as the Cape penguin, and South African penguin, is a species of penguin confined to southern African waters.",
  link: "https://en.wikipedia.org/wiki/African_penguin"
)
african.pictures.attach(io: File.open("./storage/african.jpg"), filename: "african.jpg", content_type: "image/jpg")

emperor = Penguin.create(
  species: "Emperor penguin",
  description: "The emperor penguin (Aptenodytes forsteri) is the tallest and heaviest of all living penguin species and is endemic to Antarctica.",
  link: "https://en.wikipedia.org/wiki/Emperor_penguin"
)
emperor.pictures.attach(io: File.open("./storage/emperor.jpg"), filename: "emperor.jpg", content_type: "image/jpg")
emperor.pictures.attach(io: File.open("./storage/emperor2.jpg"), filename: "emperor2.jpg", content_type: "image/jpg")
emperor.pictures.attach(io: File.open("./storage/emperor3.jpg"), filename: "emperor3.jpg", content_type: "image/jpg")
emperor.pictures.attach(io: File.open("./storage/emperor4.jpg"), filename: "emperor4.jpg", content_type: "image/jpg")
emperor.pictures.attach(io: File.open("./storage/emperor5.jpg"), filename: "emperor5.jpg", content_type: "image/jpg")

northern_rockhopper = Penguin.create(
  species: "Northern rockhopper penguin",
  description: "Northern rockhoppers (Eudyptes moseleyi) are native to Tristan da Cunha and Gough Island. A study published in 2009 showed that the population of the northern rockhopper had declined by 90% since the 1950s. For this reason, the northern rockhopper penguin is classified as endangered.",
  link: "https://en.wikipedia.org/wiki/Northern_rockhopper_penguin"
)
northern_rockhopper.pictures.attach(io: File.open("./storage/northern_rockhopper.jpg"), filename: "northern_rockhopper.jpg", content_type: "image/jpg")

king = Penguin.create(
  species: "King Penguin",
  description: "King penguins (Aptenodytes patagonicus patagonicus) are native to the frozen and cold islands of the southern Atlantic Ocean, particularly the Falkland Islands. At first glance, the king penguin appears very similar to the larger, closely related emperor penguin. However, the cheek patch of the adult king penguin is a solid bright orange whereas that of the emperor penguin is yellow and white.",
  link: "https://en.wikipedia.org/wiki/King_penguin"
)
king.pictures.attach(io: File.open("./storage/king.jpg"), filename: "king.jpg", content_type: "image/jpg")
king.pictures.attach(io: File.open("./storage/king2.jpg"), filename: "king2.jpg", content_type: "image/jpg")

adelie = Penguin.create(
  species: "Adélie penguin",
  description: "The Adélie penguin (Pygoscelis adeliae) is a species of penguin common along the entire coast of the Antarctic continent, which is its only habitat. It is the most widely spread penguin species,[2] as well as the most southerly distributed of all penguins, along with the emperor penguin. Unfortunately, climate change is affecting their food source and thousands of their chicks starve every year.",
  link: "https://en.wikipedia.org/wiki/Ad%C3%A9lie_penguin"
)
adelie.pictures.attach(io: File.open("./storage/adelie.jpg"), filename: "adelie.jpg", content_type: "image/jpg")
adelie.pictures.attach(io: File.open("./storage/adelie2.jpg"), filename: "adelie2.jpg", content_type: "image/jpg")
adelie.pictures.attach(io: File.open("./storage/adelie3.jpg"), filename: "adelie3.jpg", content_type: "image/jpg")
adelie.pictures.attach(io: File.open("./storage/adelie4.jpg"), filename: "adelie4.jpg", content_type: "image/jpg")
adelie.pictures.attach(io: File.open("./storage/adelie5.jpg"), filename: "adelie5.jpg", content_type: "image/jpg")

fairy = Penguin.create(
  species: "Fairy penguin",
  description: "Fairy penguins (Eudyptula minor minor), also known as southern little penguins, inhabit the western and southeastern coasts of the southern island of New Zealand. Fairy penguins and other little penguin subspecies are the smallest penguins on the planet, and the only ones with blue eyes and feathers.",
  link: "https://en.wikipedia.org/wiki/Little_penguin"
)
fairy.pictures.attach(io: File.open("./storage/fairy.jpg"), filename: "fairy.jpg", content_type: "image/jpg")
fairy.pictures.attach(io: File.open("./storage/fairy2.jpg"), filename: "fairy2.jpg", content_type: "image/jpg")
fairy.pictures.attach(io: File.open("./storage/fairy3.jpg"), filename: "fairy3.jpg", content_type: "image/jpg")

yellow_eyed = Penguin.create(
  species: "Yellow-eyed penguin",
  description: "The uninspiringly-named yellow-eyed penguins (Megadyptes antipodes) call New Zealand's South Island home, where they are known as 'hoiho' - Maori for 'noise shouter'. With fewer than 3 400 of these penguins remaining, they are the species facing the most critical risk of extinction in the very near future.",
  link: "https://en.wikipedia.org/wiki/Yellow-eyed_penguin"
)
yellow_eyed.pictures.attach(io: File.open("./storage/yellow_eyed.jpeg"), filename: "yellow_eyed.jpeg", content_type: "image/jpg")
yellow_eyed.pictures.attach(io: File.open("./storage/yellow_eyed2.jpg"), filename: "yellow_eyed2.jpg", content_type: "image/jpg")

chinstrap = Penguin.create(
  species: "Chinstrap penguin",
  description: "Chinstrap penguins (Pygoscelis antarcticus) call the shores of Antarctica and several Pacific and Southern Ocean islands home. Not only do chinstrap penguins look like they are wearing little army helmets all the time, but they are the most common penguin on Antarctica - with almost 13 million individuals.",
  link: "https://en.wikipedia.org/wiki/Chinstrap_penguin"
)
chinstrap.pictures.attach(io: File.open("./storage/chinstrap.jpg"), filename: "chinstrap.jpg", content_type: "image/jpg")
chinstrap.pictures.attach(io: File.open("./storage/chinstrap2.jpg"), filename: "chinstrap2.jpg", content_type: "image/jpg")
chinstrap.pictures.attach(io: File.open("./storage/chinstrap3.jpg"), filename: "chinstrap3.jpg", content_type: "image/jpg")
chinstrap.pictures.attach(io: File.open("./storage/chinstrap4.jpg"), filename: "chinstrap4.jpg", content_type: "image/jpg")
chinstrap.pictures.attach(io: File.open("./storage/chinstrap5.jpg"), filename: "chinstrap5.jpg", content_type: "image/jpg")
chinstrap.pictures.attach(io: File.open("./storage/chinstrap6.jpg"), filename: "chinstrap6.jpg", content_type: "image/jpg")
chinstrap.pictures.attach(io: File.open("./storage/chinstrap7.jpg"), filename: "chinstrap7.jpg", content_type: "image/jpg")

magellanic = Penguin.create(
  species: "Magellanic penguin",
  description: "Magellanic penguins (Spheniscus magellanicus) look very similar to African penguins, but they have a dark black neck stripe which distinguishes them from their African cousins. They inhabit the southern coasts of South America, but do occasionally nest as far north as Brazil. Unlike their African counterparts, Magellanic penguins actively hunt jellyfish!",
  link: "https://en.wikipedia.org/wiki/Magellanic_penguin"
)
magellanic.pictures.attach(io: File.open("./storage/magellanic.jpg"), filename: "magellanic.jpg", content_type: "image/jpg")
magellanic.pictures.attach(io: File.open("./storage/magellanic2.jpg"), filename: "magellanic2.jpg", content_type: "image/jpg")
magellanic.pictures.attach(io: File.open("./storage/magellanic3.jpg"), filename: "magellanic3.jpg", content_type: "image/jpg")

southern_rockhopper = Penguin.create(
  species: "Southern rockhopper penguin",
  description: "Southern rockhopper penguins (Eudyptes chrysocome chrysocome) call the Falkland Islands home. They look very similar to other rockhoppers, but do not have the usual patch of pale skin below their beaks, and a few black feathers in their crests. They are cute, but their birdsong is very rough and they are probably the least musical penguin.",
  link: "https://en.wikipedia.org/wiki/Southern_rockhopper_penguin"
)
southern_rockhopper.pictures.attach(io: File.open("./storage/southern_rockhopper.jpg"), filename: "southern_rockhopper.jpg", content_type: "image/jpg")
southern_rockhopper.pictures.attach(io: File.open("./storage/southern_rockhopper2.jpg"), filename: "southern_rockhopper2.jpg", content_type: "image/jpg")

macaroni = Penguin.create(
  species: "Macaroni penguin",
  description: "Macaroni penguins (Eudyptes chrysolophus) are the most abundant species in the world, with almost 24 million penguins in 260 colonies spanning South America, Australia, Antarctica and Marion Island - more than all other penguins combined. They are vulnerable, as almost all colonies are under threat from human settlement, but huge conservation efforts are being made to protect these little ones in Chile and Argentina.",
  link: "https://en.wikipedia.org/wiki/Macaroni_penguin"
)
macaroni.pictures.attach(io: File.open("./storage/macaroni.jpg"), filename: "macaroni.jpg", content_type: "image/jpg")

snares = Penguin.create(
  species: "Snares penguin",
  description: "Snares crested penguins (Eudyptes robustus) are very unusual, nesting in open coastal forests on small islets around New Zealand's South Island. The main way these penguins communicate is by chest pumping to attract mates and bowing regularly to their partners and children.",
  link: "https://en.wikipedia.org/wiki/Snares_penguin"
)
snares.pictures.attach(io: File.open("./storage/snares.jpg"), filename: "snares.jpg", content_type: "image/jpg")
snares.pictures.attach(io: File.open("./storage/snares2.jpg"), filename: "snares2.jpg", content_type: "image/jpg")

galapagos = Penguin.create(
  species: "Galápagos penguin",
  description: "Galápagos penguins (Spheniscus mendiculus) are the northernmost species of penguin, living on the equatorial Galápagos archipelago. They are a banded penguin, closely related to the African penguin, but far smaller. Their small size allows them to subsist entirely on small coastal minnows and shellfish, avoiding deep-water predators.",
  link: "https://en.wikipedia.org/wiki/Galapagos_penguin"
)
galapagos.pictures.attach(io: File.open("./storage/galapagos.jpg"), filename: "galapagos.jpg", content_type: "image/jpg")
galapagos.pictures.attach(io: File.open("./storage/galapagos2.jpg"), filename: "galapagos2.jpg", content_type: "image/jpg")

erect_crested = Penguin.create(
  species: "Erect-crested penguin",
  description: "Inhabiting Bounty and Antipodes Islands of New Zealand, erect-crested penguins (Eudyptes sclateri) are serious long-distance swimmers - hunting as far as South America and Antarctica to fatten up for their summer moults. We think they have the coolest hairstyles of all penguins - and they spend large amounts of time grooming each other!",
  link: "https://en.wikipedia.org/wiki/Erect-crested_penguin"
)
erect_crested.pictures.attach(io: File.open("./storage/erect_crested.jpg"), filename: "erect_crested.jpg", content_type: "image/jpg")
erect_crested.pictures.attach(io: File.open("./storage/erect_crested2.jpg"), filename: "erect_crested2.jpg", content_type: "image/jpg")

subantarctic_gentoo = Penguin.create(
  species: "Subantarctic gentoo penguin",
  description: "Gentoo penguins (Pygoscelis papua papua) are larger than their Antarctic counterpart, even though those are the ones you most likely recognise from photos. The subantarctic gentoos inhabit islands in the southern Indian and Atlantic Oceans, such as Marion Island.",
  link: "https://en.wikipedia.org/wiki/Gentoo_penguin"
)
subantarctic_gentoo.pictures.attach(io: File.open("./storage/subantarctic_gentoo.jpg"), filename: "subantarctic_gentoo.jpg", content_type: "image/jpg")
subantarctic_gentoo.pictures.attach(io: File.open("./storage/subantarctic_gentoo2.jpg"), filename: "subantarctic_gentoo2.jpg", content_type: "image/jpg")
subantarctic_gentoo.pictures.attach(io: File.open("./storage/subantarctic_gentoo3.jpg"), filename: "subantarctic_gentoo2.jpg", content_type: "image/jpg")

royal = Penguin.create(
  species: "Royal penguin",
  description: "Royal penguins (Eudyptes schlegeli) are unusual, living only on the sub-Antarctic island of Macquarie. They look like Macaroni penguins, but with white faces instead of a black ones - for this reason there is much disagreement about whether they are actually two distinct species. Together with the Macaroni penguin, these are the only two species whose crests meet in the middle.",
  link: "https://en.wikipedia.org/wiki/Royal_penguin"
)
royal.pictures.attach(io: File.open("./storage/royal.jpg"), filename: "royal.jpg", content_type: "image/jpg")
royal.pictures.attach(io: File.open("./storage/royal2.jpg"), filename: "royal2.jpg", content_type: "image/jpg")

humboldt = Penguin.create(
  species: "Humboldt penguin",
  description: "Another close relative of African penguins, Humboldt penguins (Spheniscus humboldti) have a distinct black face with a white ring around it and pink exposed skin below its bill. A Humboldt penguin made world news when it escaped from Tokyo Sea Life Park by climbing a 4m high wall and a barbed wire fence. It then survived in the waters of Japan for 82 days before being found.",
  link: "https://en.wikipedia.org/wiki/Humboldt_penguin"
)
humboldt.pictures.attach(io: File.open("./storage/humboldt.jpg"), filename: "humboldt.jpg", content_type: "image/jpg")
humboldt.pictures.attach(io: File.open("./storage/humboldt2.jpg"), filename: "humboldt2.jpg", content_type: "image/jpg")

fiordland = Penguin.create(
  species: "Fiordland penguin",
  description: "Fiordland penguins (Eudyptes pachyrhynchus) are small crested penguins of New Zealand's South Island. They are unusual (and awesome), as they are the only penguin to live in rainforests!",
  link: "https://en.wikipedia.org/wiki/Fiordland_penguin"
)
fiordland.pictures.attach(io: File.open("./storage/fiordland.jpg"), filename: "fiordland.jpg", content_type: "image/jpg")
fiordland.pictures.attach(io: File.open("./storage/fiordland2.jpg"), filename: "fiordland2.jpg", content_type: "image/jpg")