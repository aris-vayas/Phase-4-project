# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "🍕 Seeding items..."
Item.create!([
    {
        name: "Ageratum",
        description: "Ageratum is a super cool plant that is used for x, y, z",
        image_url:
        "https://www.gardeningknowhow.com/wp-content/uploads/2020/06/ageratum.jpg"
    },
    {
        name: "Dracaena",
        description: "Dracaena is the weirdest plant I know",
        image_url:
          "https://plantsnflora.com/wp-content/uploads/2021/06/Plantsnflora-Sansevieria-Trifasciata-Snake-Plant-var.-laurentii.png",
      },
      {
        name: "American Marigold",
        description: "American Marigold is orange",
        image_url:
        "https://www.brooksidenursery.co.uk/media/catalog/product/cache/2be6b7d2f1efc1891b21b74af0ca37fe/2/6/260076a.jpg"
      },
      {
        name: "Annual Vinca",
        description: "Annual Vinca is the most expensive plant we have",
        image_url:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F02%2Fcatharanthus-tropical-rose-vinca-768f2e2c.jpg"
      },
      {
        name: "Bacopa",
        description: "Bacopa is a white plant",
        image_url:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Starr_070815-8055_Bacopa_monnieri.jpg"
      }
])


puts "🍕 Seeding users..."

User.create!([
    {
      username: "Aris",
      password: "sk876466155p"
    },
    {
    username: "Sergio",
    password: "arjy7uhd9d"
    }])

    puts "🍕 Seeding carts..."


Cart.create!([
        {
          user_id: 1,
          cart_number: 1
        },
        {
            user_id: 2,
            cart_number: 2
          }])


