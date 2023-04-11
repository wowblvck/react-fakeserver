import PlacesInfo from "./places.interface";

const places: PlacesInfo[] = [
  {
    id: 1,
    country: "Turkey",
    location: "Hagia Sophia",
    category: "Architecture",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEGsnBieihtSMKyNpTeFErn1ubvvK75frVo_j0kWmttwu5JBAR6bwd3LyLukPdnVqxaGuhPRSaS1iIo5vgYWhgPA",
    description: "Famed Byzantine mosque with a dome",
    date: "2023-03-13",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/18.jpg",
      first_name: "Tracie",
      last_name: "Colebrook",
    },
  },
  {
    id: 2,
    country: "Turkey",
    location: "The Blue Mosque",
    category: "Architecture",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIc_Uh1zFVagmGzvJ5ayZHmMjZejF9dowRQdJSk8-Ov7dZrS6YgQFXQCh74sy8xed_pXZSsNGS1tXM4zAoNOKawA",
    description: "Iconic Blue Mosque with 6 minarets",
    date: "2022-10-11",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
      first_name: "Buckminster",
      last_name: "Leblanc",
    },
  },
  {
    id: 3,
    country: "Russia",
    location: "State Hermitage Museum",
    category: "Architecture",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8X7cXH21WYx5xI8FD_7P2ZJKMH4IPe3_pVpu8yn6VPlyTSS6jKV6o7q4-W73Wd7_sOTgRTaB4EsE6svglsRZDQ",
    description: "Art & culture museum founded in 1764",
    date: "2023-03-14",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/29.jpg",
      first_name: "Phelan",
      last_name: "Blackburn",
    },
  },
  {
    id: 4,
    country: "Russia",
    location: "Red Square",
    category: "Architecture",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8gA4gYjbZBXQbn1h2aHTuCXdZNL8Cxd7hhMHz9Rwt8hn8hSBldk2C8tqxoA0LYjR83_syEmHCEZkLlw2GaUd6_A",
    description: "Iconic square with St. Basil's cathedral",
    date: "2017-08-05",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/52.jpg",
      first_name: "Maisie",
      last_name: "Dudley",
    },
  },
  {
    id: 5,
    country: "Switzerland",
    location: "Chillon Castle",
    category: "Architecture",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6h8EMLDzIXvQhsmGhb_lIA2zh9J9sRp3kZb_5VJ4ogfymMythhebc01av2UGZrMidCK_gqNFzuwd3zP0vEygkNg",
    description: "Lakeside castle & cultural center",
    date: "2015-04-18",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/65.jpg",
      first_name: "Marvin",
      last_name: "Vance",
    },
  },
  {
    id: 6,
    country: "Thailand",
    location: "The Grand Palace",
    category: "Architecture",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-W1e7iyUkteKjzl4yqSdPRmzyqRceWg7QmNKJ3HyXAwR-CnM1fVlr1T5T08Yf5waJDoUNbhZTKjJlvpSad4EsnA",
    description: "Opulent former royal residence & museum",
    date: "2016-05-18",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/64.jpg",
      first_name: "Katelyn",
      last_name: "Rodriguez",
    },
  },
  {
    id: 7,
    country: "France",
    location: "Eiffel Tower",
    category: "Architecture",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvnB0dD_MCmdoIGVGsC5tJdMxu5hjKag-mVuc8ZcbcBsJO0Yr-EtxTIU5Md9h3qoFaynWEh-qz4iuOwAbP_f7_7A",
    description: "Landmark 330m-high 19th-century tower",
    date: "2020-10-19",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
      first_name: "Evangeline",
      last_name: "Wheeler",
    },
  },
  {
    id: 8,
    country: "Ukraine",
    location: "Kiev Pechersk Lavra",
    category: "Architecture",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRzPncDCPTP0Liuc5Qtoq8Rmk-yd3JiQraowFhnyjO7PAnB-AehZP1p1rhlCKcs7SoznEWeuSyHsmmSJgIK0XDiQw",
    description: "Landmark monastery & cave system",
    date: "2017-07-09",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
      first_name: "Evangeline",
      last_name: "Wheeler",
    },
  },
  {
    id: 9,
    country: "Kazakhstan",
    location: "Baiterek",
    category: "Architecture",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxChJQaMc7Ndoxm5_cq38xPbFONLYCNxeEydgRliISVMDPBilXyH3KyA6ZxvcwB-i_HrcdIFe14ofPNrpb6QEvYg",
    description: "Iconic viewing tower & monument",
    date: "2013-11-28",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
      first_name: "Rafael",
      last_name: "Solomon",
    },
  },
  {
    id: 10,
    country: "Australia",
    location: "Sydney Opera House",
    category: "Architecture",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhFDpQMX6wrLn0Nedf5k7k9tLB6eBaztgmBx7XYDose0pDv7lAfCTvb988suo_YKHgT4WXS5MvadTfMHlLDmsAhg",
    description: "Australia's iconic performing arts venue",
    date: "2010-02-12",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/63.jpg",
      first_name: "Nola",
      last_name: "Perry",
    },
  },
  {
    id: 11,
    country: "Tanzania",
    location: "Serengeti National Park",
    category: "Nature",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQfgR4RKRQ6QdRC8BPQ1mqMC-VNJfVjycGLwEfok9ijMiUKXW6WNJn24e9Pb6e7wC33CXMFzmghPYIf_XN_IOeuHQ",
    description: "The Serengeti National Park is a large national park in northern Tanzania that stretches over 14,763 km². It is located in eastern Mara Region and northeastern Simiyu Region and contains over 1,500,000 hectares of virgin savanna. The park was established in 1940. The Serengeti is well known for the largest annual animal migration in the world of over 1.5 million blue wildebeest and 250,000 zebra along with smaller herds of Thomson's gazelle and eland. The national park is also home to the largest lion population in Africa. It is under threat from deforestation, population growth and ranching.",
    date: "2022-08-15",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
      first_name: "Brittney",
      last_name: "Loftus",
    },
  },
  {
    id: 12,
    country: "Zambia",
    location: "Victoria Falls",
    category: "Nature",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuV5CcZG1X8qaeI1N41ictY5ACaLVb1FJCMk5vTmpyYvwK4MjCqsyTyc9VrB07Uu3j39MCG0k-gG1C1XUYAdPX5g",
    description: "Victoria Falls is a waterfall on the Zambezi River in southern Africa, which provides habitat for several unique species of plants and animals. It is located on the border between Zambia and Zimbabwe and is one of the world's largest waterfalls, with a width of 1,708 m. Archeological sites and oral history describe a long record of African knowledge of the site. Though known to some European geographers before the 19th century, Scottish missionary David Livingstone identified the falls in 1855, providing the English colonial name of Victoria Falls after Queen Victoria. Since the mid 20th century, the site has been an increasingly important source of tourism. Zambia and Zimbabwe both have national parks and tourism infrastructure at the site. Research in the late 2010s found that precipitation variability due to climate change is likely to change the character of the fall.",
    date: "2022-04-08",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/12.jpg",
      first_name: "Ngan",
      last_name: "Skow",
    },
  },
  {
    id: 13,
    country: "Easter Island",
    location: "Rapa Nui National Park",
    category: "Art",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR0VYzRpXP2rOfTSIa_VTk83p9tQZBz1eOKgLj8LEhNjzAsE1_ANrEdajZvAWjdYrRa5LCu4O8AtWgChp11ZFcYoA",
    description: "Rapa Nui National Park is a national park and UNESCO World Heritage Site located on Easter Island, Chile. Rapa Nui is the Polynesian name of Easter Island; its Spanish name is Isla de Pascua. The island is located in the southeastern Pacific Ocean, at the southeastern extremity of the Polynesian Triangle. The island was taken over by Chile in 1888. Its fame and World Heritage status arise from the 887 extant stone statues known by the name 'moai', whose creation is attributed to the early Rapa Nui people who inhabited the island starting between 300 and 1200 AD. Much of the island has been declared as Rapa Nui National Park which, on 22 March 1996, UNESCO designated a World Heritage Site under cultural criteria, &. Rapa Nui National Park is now under the administrative control of the Ma´u Henua Polynesian Indigenous Community, which is the first autonomous institute on the island. The indigenous Rapa Nui people have regained authority over their ancestral lands and are in charge of the management, preservation and protection of their patrimony.",
    date: "2021-06-11",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/17.jpg",
      first_name: "Brandon",
      last_name: "Varnau",
    },
  },
  {
    id: 14,
    country: "France",
    location: "Grand Palais",
    category: "Art",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTelrgr_CmwWMzvHi-KMq3Z3kE1NmJ8n3bsnhri6U2rNOwx3_WXmoC9eYn7YjjUFPSgRFEyCSJIHU3DpOvaqEFPHA",
    description: "The Grand Palais des Champs-Élysées, commonly known as the Grand Palais, is a historic site, exhibition hall and museum complex located at the Champs-Élysées in the 8th arrondissement of Paris, France. Construction of the Grand Palais began in 1897 following the demolition of the Palais de l'Industrie to prepare for the Universal Exposition of 1900. That exposition also produced the adjacent Petit Palais and Pont Alexandre III. The building was designed to be a large-scale venue for official artistic events. A pediment on the building refers to this function with an inscription that reads, 'a monument dedicated by the Republic to the glory of French art.' Designed according to Beaux-Arts tastes, the building features ornate stone facades, glass vaults and period innovations that included iron and light steel framing and reinforced concrete. It is listed as a historic monument by the Ministry of Culture.",
    date: "2022-04-12",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/32.jpg",
      first_name: "Theodore",
      last_name: "Nesbett",
    },
  },
  {
    id: 15,
    country: "France",
    location: "L'église de la Madeleine",
    category: "Architecture",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSyEte5QDoZscGK8D_6PXmV3U3kNKOgSzKVYu0i-LRs5nzbwWa-7Fdghp0UMDcEVZz1KtujuzGaCcAaBGInUwOdWg",
    description: "The Church of Sainte-Marie-Madeleine, or less formally, La Madeleine is a Catholic parish church on Place de la Madeleine in the 8th arrondissement of Paris. It was planned by Louis XV as the focal point of the new Rue Royal, leading to the new Place Louis XV, the present Place de la Concorde. It was dedicated in 1764 by Louis XVI, but work halted due to the French Revolution. Napoleon Bonaparte had it redesigned in the Neoclassical style to become a monument to the glory of his armies, After his downfall in 1814 construction as a church resumed, but it was not completed until 1844. The building is surrounded on all four sides by columns in the Corinthian style. The interior is noted for its frescoes on the domed ceiling, and monumental sculpture by François Rude, Charles Marochetti and other prominent 19th-century French artists. The exterior and interior of the church are undergoing a major project of cleaning and restoration, which began in 2020 and is scheduled for completion in 2023.",
    date: "2018-07-22",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/20.jpg",
      first_name: "Damaris",
      last_name: "Brenneman",
    },
  },
  {
    id: 16,
    country: "Brazil",
    location: "Christ the Redeemer",
    category: "Art",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRWUon5EO7xfwt7z6MIx1Boqs1Mz4RdutcuBdf7U83arBfHEVedh19KBtUPMw8HtOdwihmhappofZDvT7tMU5OD8Q",
    description: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida sculpted the face. Constructed between 1922 and 1931, the statue is 30 metres high, excluding its 8-metre pedestal. The arms stretch 28 metres wide. It is made of reinforced concrete and soapstone. Christ the Redeemer differs considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other. Although the project organisers originally accepted the design, it later changed to the statue of today, with the arms spread out wide. The statue weighs 635 metric tons, and is located at the peak of the 700-metre Corcovado mountain in the Tijuca National Park overlooking the city of Rio de Janeiro. A symbol of Christianity around the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil and was voted one of the New Seven Wonders of the World.",
    date: "2023-04-08",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/35.jpg",
      first_name: "Erline",
      last_name: "Cadd",
    },
  },
  {
    id: 17,
    country: "Australia",
    location: "Sydney Opera House",
    category: "Art",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhFDpQMX6wrLn0Nedf5k7k9tLB6eBaztgmBx7XYDose0pDv7lAfCTvb988suo_YKHgT4WXS5MvadTfMHlLDmsAhg",
    description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture. Designed by Danish architect Jørn Utzon, but completed by an Australian architectural team headed by Peter Hall, the building was formally opened by Queen Elizabeth II on 20 October 1973 after a gestation beginning with Utzon's 1957 selection as winner of an international design competition. The Government of New South Wales, led by the premier, Joseph Cahill, authorised work to begin in 1958 with Utzon directing construction. The government's decision to build Utzon's design is often overshadowed by circumstances that followed, including cost and scheduling overruns as well as the architect's ultimate resignation. The building and its surrounds occupy the whole of Bennelong Point on Sydney Harbour, between Sydney Cove and Farm Cove, adjacent to the Sydney central business district and the Royal Botanic Gardens, and near to the Sydney Harbour Bridge.",
    date: "2005-10-27",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/22.jpg",
      first_name: "Karyl",
      last_name: "Ley",
    },
  },
  {
    id: 18,
    country: "Australia",
    location: "Kakadu National Park",
    category: "Nature",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRhAuX3vEnjdpFcdKKa85FBguaA8BMWJaLmVJA21q1413Pf27WzAAa7mOTuIKp_00jvQn6GuWKAfmm8w2yXb2nbZA",
    description: "Kakadu National Park is a protected area in the Northern Territory of Australia, 171 km southeast of Darwin. It is a World Heritage Site. Kakadu is also gazetted as a locality, covering the same area as the national park, with 313 people recorded living there in the 2016 Australian census. Water buffalo, which are now an environmental pest, were released in the area in the late 19th century, and missionaries established a mission at Oenpelli in 1925. A few pastoralists, crocodile hunters and wood cutters made a living at various times during the 20th century. The area was given protected status bit by bit from the 1970s onwards. Kakadu National Park is currently located within the Alligator Rivers Region of the Northern Territory, it covers an area of 19,804 km², extending nearly 200 kilometres from north to south and over 100 kilometres from east to west. It is roughly the size of Wales or one-third the size of Tasmania, and is the second largest national park in Australia. Most of the area is owned by the Aboriginal traditional owners, who have occupied the land for around 60,000 years, who manage the park jointly with Parks Australia.",
    date: "2006-02-16",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/30.jpg",
      first_name: "Freddie",
      last_name: "Dimambro",
    },
  },
  {
    id: 19,
    country: "Belgium",
    location: "Comics Art Museum",
    category: "Art",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT1mb62Qx8oi2rr0bo-oZETlAD7dER2vQ2M_0T19MGay-KNqg9hwAgz8u0u2rZVkWaj-fYzC36l53auvWpu8h31VQ",
    description: "The Belgian Comic Strip Center is a museum in Brussels, Belgium, dedicated to Belgian comics. It is located at 20, rue des Sables/Zandstraat, in an Art Nouveau building designed by Victor Horta, and can be accessed from Brussels-Congress railway station and Brussels Central Station.",
    date: "2009-12-06",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/10.jpg",
      first_name: "Waylon",
      last_name: "Homesley",
    },
  },
  {
    id: 20,
    country: "Germany",
    location: "Neuschwanstein Castle",
    category: "Architecture",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSF82Y4Q7psKLjuRbwsali5f8HyfoESGaotE8GCOSZE0qqyycHEpN4BxZCcLRA6YAYSFv59FlbaL74Pn6RrB3RiXA",
    description: "Neuschwanstein Castle is a 19th-century historicist palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany, near the border with Austria. The palace was commissioned by King Ludwig II of Bavaria as a retreat and in honour of composer Richard Wagner. Ludwig chose to pay for the palace out of his personal fortune and by means of extensive borrowing, rather than Bavarian public funds. Construction began in 1869, but was never fully completed. The castle was intended as a private residence for the King, until he died in 1886. It was opened to the public shortly after his death. Since then more than 61 million people have visited Neuschwanstein Castle. More than 1.3 million people visit annually, with as many as 6,000 per day in the summer.",
    date: "2011-07-21",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/25.jpg",
      first_name: "Antony",
      last_name: "Cinotto",
    },
  },
  {
    id: 21,
    country: "Germany",
    location: "Berlin Cathedral",
    category: "Architecture",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT6ssd9ySF4Yz0TlE7wNG5DdzbMBf1-NCWgWB7MbQqU0RemisfwJk2Uc-Qmw-GOmS7n_3zwwXKLPtF1GGJUZ2yEGw",
    description: "The Berlin Cathedral, also known as the Evangelical Supreme Parish and Collegiate Church, is a monumental German Evangelical church and dynastic tomb on the Museum Island in central Berlin. Having its origins as a castle chapel for the Berlin Palace, several structures have served to house the church since the 15th century. The present collegiate church was built from 1894 to 1905 by order of Emperor William II according to plans by Julius Raschdorff in Renaissance and Baroque Revival styles. The listed building is the largest Protestant church in Germany and one of the most important dynastic tombs in Europe. In addition to church services, the cathedral is used for state ceremonies, concerts and other events. Since the demolition of the Memorial Church section on the north side by the East German authorities in 1975, the Berlin Cathedral has consisted of the large Sermon Church in the center, and the smaller Baptismal and Matrimonial Church on the south side and the Hohenzollern crypt, which covers almost the entire basement. Damaged during the Allied bombing in World War II, the cathedral's original interior was restored by 2002.",
    date: "2018-07-19",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/60.jpg",
      first_name: "Lenard",
      last_name: "Winterburn",
    },
  },
  {
    id: 22,
    country: "Japan",
    location: "Mount Fuji",
    category: "Nature",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsA3aIuiXNQrhJO6G6B4YaQt0m8_XPM_HgZ64C6fQqakBOkVYhwq9Sn8AtsJ4ROZcRAEfS3YcD22lGQem4SYKyFg",
    description: "Mount Fuji, or Fugaku, located on the island of Honshū, is the highest mountain in Japan, with a summit elevation of 3,776.24 m. It is the second-highest volcano located on an island in Asia, and seventh-highest peak of an island on Earth. Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708. The mountain is located about 100 km southwest of Tokyo and is visible from there on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan and it is frequently depicted in art and photography, as well as visited by sightseers, hikers and mountain climbers. Mount Fuji is one of Japan's 'Three Holy Mountains' along with Mount Tate and Mount Haku. It is a Special Place of Scenic Beauty and one of Japan's Historic Sites. It was added to the World Heritage List as a Cultural Site on June 22, 2013. According to UNESCO, Mount Fuji has 'inspired artists and poets and been the object of pilgrimage for centuries'. UNESCO recognizes 25 sites of cultural interest within the Mount Fuji locality.",
    date: "2017-06-27",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/18.jpg",
      first_name: "Tula",
      last_name: "Molony",
    },
  },
  {
    id: 23,
    country: "Japan",
    location: "Sensō-ji",
    category: "Architecture",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnHyQAG3v4hzHWPHdvWcPhIxPexxgWz-F9CFbn4U0TQYs4ms1wwWkMgYrTgplwqNmwDSmPajIsVI0Guu3jex7VSw",
    description: "Sensō-ji is an ancient Buddhist temple located in Asakusa, Tokyo, Japan. It is Tokyo's oldest temple, and one of its most significant. Formerly associated with the Tendai sect of Buddhism, it became independent after World War II. It is dedicated to Kannon, the bodhisattva of compassion, and is the most widely visited religious site in the world with over 30 million visitors annually. Adjacent to the temple is a five-story pagoda, the Asakusa Shinto shrine, as well as many shops with traditional goods in the Nakamise-dōri. The temple has a titanium tiled roof that maintains the historic image but is stronger and lighter.",
    date: "2002-02-16",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/34.jpg",
      first_name: "Tandy",
      last_name: "Wati",
    },
  },
  {
    id: 24,
    country: "China",
    location: "Great Wall of China",
    category: "Architecture",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQf5loNzNtdlnnEZ8v3gEWUe_b4iRxm4qiWFKYaxtGvU8h8MBx8Qd3SP4Vtu3Ajyn6VUz1ioQxHNppyjDJzW3hmA",
    description: "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined by Qin Shi Huang, the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties built and maintained multiple stretches of border walls. The best-known sections of the wall were built by the Ming dynasty. Apart from defense, other purposes of the Great Wall have included border controls, allowing the imposition of duties on goods transported along the Silk Road, regulation or encouragement of trade and the control of immigration and emigration. Furthermore, the defensive characteristics of the Great Wall were enhanced by the construction of watchtowers, troop barracks, garrison stations, signaling capabilities through the means of smoke or fire, and the fact that the path of the Great Wall also served as a transportation corridor. The frontier walls built by different dynasties have multiple courses.",
    date: "2003-05-12",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/11.jpg",
      first_name: "Devona",
      last_name: "Riebli",
    },
  },
  {
    id: 25,
    country: "China",
    location: "Kangrinboqe Peak",
    category: "Nature",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR2PxqKbAKNmu0F8YXbfFGcJXWvLpSsX3HrIwzdh_bgYuq2ZcTynAH4SL5oqUJdtLG6q_Htyswv49pGYGQFp3RJwg",
    description: "Mount Kailash, is a mountain in the Ngari Prefecture, Tibet Autonomous Region of China. It has an altitude of 6,638 m. It lies in the Kailash Range of the Transhimalaya, in the western part of the Tibetan Plateau. Mount Kailash is less than 100 km towards the north from the western trijunction of the borders of China, India, and Nepal. Mount Kailash is located close to Lake Manasarovar and Lake Rakshastal. The sources of four major Asian rivers lie close to this mountain and the two lakes. These rivers are the Indus, the Sutlej, the Brahmaputra, and the Karnali. Mount Kailash is considered sacred in four religions: Hinduism, Buddhism, Jainism and Bon.",
    date: "2006-09-24",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/34.jpg",
      first_name: "Tandy",
      last_name: "Wati",
    },
  },
  {
    id: 26,
    country: "India",
    location: "Hawa Mahal",
    category: "Architecture",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTkJlh-QPJh7vm8WoBeHDj1NEUEmK2FhhUAfqc2dd3dJcIY1c9YFzNyOx2pj9DExGbhLDMtblNAg8X258QDtWxfIw",
    description: "The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, the founder of the city of Jaipur, India. He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace. It was designed by Lal Chand Ustad. Its five-floor exterior is akin to a honeycomb with its 953 small windows called Jharokhas decorated with intricate latticework. The original intent of the lattice design was to allow royal ladies to observe everyday life and festivals celebrated in the street below without being seen. This architectural feature also allowed cool air from the Venturi effect to pass through, thus making the whole area more pleasant during the high temperatures in summer. Many people see the Hawa Mahal from the street view and think it is the front of the palace, but it is the back.",
    date: "2001-04-15",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/43.jpg",
      first_name: "Lyndon",
      last_name: "Lyon",
    },
  },
  {
    id: 27,
    country: "The USA",
    location: "Yosemite National Park",
    category: "Nature",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQf01rVw08SSwnctwxkz4I2lh6lpOlLGYphK5Vi-Z2jhl_dEO2mRSTwuFWomn_W0Npx77Or-S-1hNDEkBhOIelpzQ",
    description: "Yosemite National Park is an American national park in California, surrounded on the southeast by Sierra National Forest and on the northwest by Stanislaus National Forest. The park is managed by the National Park Service and covers an area of 759,620 acres in four counties – centered in Tuolumne and Mariposa, extending north and east to Mono and south to Madera County. Designated a World Heritage Site in 1984, Yosemite is internationally recognized for its cliffs, waterfalls, clear streams, giant sequoia groves, lakes, mountains, meadows, glaciers, and biological diversity. Almost 95 percent of the park is designated wilderness. Yosemite is one of the largest and least fragmented habitat blocks in the Sierra Nevada, and the park supports a diversity of plants and animals. The geology of the Yosemite area is characterized by granite rocks and remnants of older rock. About 10 million years ago, the Sierra Nevada was uplifted and tilted to form its unique slopes, which increased the steepness of stream and river beds, resulting in the formation of deep, narrow canyons.",
    date: "2019-05-19",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/54.jpg",
      first_name: "Noe",
      last_name: "Danico",
    },
  },
  {
    id: 28,
    country: "The USA",
    location: "Disneyland Park",
    category: "All",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ74afNCHSasZIFL0OzZj-iPCUrdULKg7pBwAk56wiWyN08ksj3FdyzOx1pu_2CsAWbDTlVdyiPahxGvNYNmERSw",
    description: "Disneyland is a theme park in Anaheim, California. Opened in 1955, it was the first theme park opened by The Walt Disney Company and the only one designed and constructed under the direct supervision of Walt Disney. Disney initially envisioned building a tourist attraction adjacent to his studios in Burbank to entertain fans who wished to visit; however, he soon realized that the proposed site was too small for the ideas that he had. After hiring the Stanford Research Institute to perform a feasibility study determining an appropriate site for his project, Disney bought a 160-acre site near Anaheim in 1953. The park was designed by a creative team hand-picked by Walt from internal and outside talent. They founded WED Enterprises, the precursor to today's Walt Disney Imagineering. Construction began in 1954 and the park was unveiled during a special televised press event on the ABC Television Network on July 17, 1955. Since its opening, Disneyland has undergone expansions and major renovations, including the addition of New Orleans Square in 1966, Bear Country in 1972, Mickey's Toontown in 1993, and Star Wars: Galaxy's Edge in 2019.",
    date: "2019-06-13",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
      first_name: "Michel",
      last_name: "Klockner",
    },
  },
  {
    id: 29,
    country: "The USA",
    location: "Yellowstone National Park",
    category: "Nature",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ_IRjb-5D5nRoZUnVEeHHUxhwO7eIodWYqWkkZg5jkjUoNLI7-1kec_76vGsFDzAhzbRsO5KxUjYEQV81KHA0rBQ",
    description: "Yellowstone National Park is an American national park located in the western United States, largely in the northwest corner of Wyoming and extending into Montana and Idaho. It was established by the 42nd U.S. Congress with the Yellowstone National Park Protection Act and signed into law by President Ulysses S. Grant on March 1, 1872. Yellowstone was the first national park in the U.S. and is also widely held to be the first national park in the world. The park is known for its wildlife and its many geothermal features, especially the Old Faithful geyser, one of its most popular. While it represents many types of biomes, the subalpine forest is the most abundant. It is part of the South Central Rockies forests ecoregion. While Native Americans have lived in the Yellowstone region for at least 11,000 years, aside from visits by mountain men during the early-to-mid-19th century, organized exploration did not begin until the late 1860s. Management and control of the park originally fell under the jurisdiction of the U.S. Department of the Interior, the first Secretary of the Interior to supervise the park being Columbus Delano. However, the U.S.",
    date: "2012-06-18",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/21.jpg",
      first_name: "Caroyln",
      last_name: "Almberg",
    },
  },
  {
    id: 30,
    country: "Canada",
    location: "Whistler Blackcomb",
    category: "Nature",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYfV9NXt7LNsy8unhcTU3BgHRrrEWvyU33RiuNWs0gLHL-8uXZ9PdzYEwuZxxhEGxVo1VxR95k3AqBeafRQf12g",
    description: "Whistler Blackcomb is a ski resort in 4545 Blackcomb Way.",
    date: "2016-01-12",
    author: {
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
      first_name: "Carroll",
      last_name: "Bundick",
    },
  },
];

export default places;
