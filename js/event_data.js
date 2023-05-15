//Idea from https://stackoverflow.com/a/2117523/14749665
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
const data = [
  {
    id: "9a13c001-87b1-4846-b38b-16f57c878dcf",
    eventName: "The Art of Ancient Pottery",
    calendar: "Temporary Exhibitions",
    color: "orange",
    link: "event.html",
    description:
      "The aim of this exhibition is to showcase the beauty and diversity of ancient Greek pottery and to explore the techniques and styles used by ancient Greek potters. Visitors will gain a deeper appreciation for the skill and artistry involved in creating these beautiful objects. The exhibition will feature a variety of ancient Greek pottery from different time periods and regions, including vases, jars, and other vessels. Visitors will learn about the different techniques used by ancient Greek potters, such as black-figure and red-figure painting, as well as the various styles and themes represented in ancient Greek pottery. Interactive displays and hands-on activities will allow visitors to try their hand at ancient pottery techniques and to gain a better understanding of the skill involved in creating these objects. The exhibition is curated by a team of archaeologists and art historians, who will provide expert insight into the techniques and styles used by ancient Greek potters.",
    key: "23/01/2023",
    image: "./Images/Ancient-Greek-Vase.jpg",
  },
  {
    id: "e5c5d5f9-5f3e-4d3a-8c63-36dd5013a7d3",
    eventName: "Lost Cities of the Aegean",
    calendar: "Temporary Exhibitions",
    color: "orange",
    link: "event.html",
    description:
      "The aim of this exhibition is to explore the lost cities and civilizations of the Aegean, and to shed light on the lives and cultures of the people who lived there. Visitors will gain a better understanding of the history and archaeology of the Aegean region. The exhibition will feature artifacts and objects from the lost cities and civilizations of the Aegean, including the Minoan and Mycenaean civilizations. Visitors will learn about the daily life, culture, and religion of these ancient people, and will gain a better understanding of the archaeology and history of the Aegean region. Interactive displays and multimedia presentations will provide visitors with a deeper insight into the lost cities and civilizations of the Aegean. he exhibition is curated by a team of archaeologists and historians, who will provide expert knowledge and insights into the history and archaeology of the Aegean region.",
    key: "15/02/2023",
    image: "./Images/Ancient-City.jpg",
  },
  {
    id: "be0c8537-9e38-428f-bd94-d93a8b7c0674",
    eventName: "The Gods of Olympus: Divine Myths and Legends",
    calendar: "Temporary Exhibitions",
    color: "orange",
    link: "event.html",
    description:
      " The aim of this exhibition is to explore the myths and legends of ancient Greece, and to shed light on the religious beliefs and practices of the ancient Greeks. Visitors will gain a better understanding of the role that religion played in ancient Greek society. The exhibition will feature artifacts and objects related to the myths and legends of ancient Greece, including statues, reliefs, and other religious artifacts. Visitors will learn about the various gods and goddesses of the ancient Greek pantheon, as well as the myths and legends associated with them. Interactive displays and multimedia presentations will allow visitors to explore the religious beliefs and practices of the ancient Greeks in greater depth. The exhibition is curated by a team of archaeologists, historians, and religious studies scholars, who will provide expert knowledge and insights into the myths and legends of ancient Greece.",
    key: "17/03/2023",
    image: "./Images/GodOfOlympus.jpg",
  },
  {
    id: "dc019d7f-2db1-4c25-9f80-4c93d35dbd8c",
    eventName: "Alexander the Great: Conqueror of the Ancient World",
    calendar: "Temporary Exhibitions",
    color: "orange",
    link: "event.html",
    description:
      "The aim of this exhibition is to explore the life and legacy of Alexander the Great, one of the most famous and influential figures in ancient history. Visitors will gain a deeper understanding of Alexander's achievements and legacy, and his impact on the ancient world. Alexander's early life, his education under Aristotle, and his military campaigns in Persia, Egypt, and India. The exhibition will also explore Alexander's impact on the arts, literature, and culture of the ancient world, as well as his lasting legacy in politics and philosophy. The exhibition is organized in collaboration with several leading institutions and scholars in the field of ancient history, including the Hellenic Ministry of Culture and Sports, the British Museum, and the University of Oxford. Experts in the field of ancient history and archaeology will provide additional context and insights into the life and legacy of Alexander the Great.",
    key: "20/03/2023",
    image: "./Images/AlexanderTheGreat.jpg",
  },
  {
    id: "7bfa10d4-39d2-4db4-9c95-9d4e4c4d4db8",
    eventName: "Discovering the Treasures of Ancient Greece",
    calendar: "Guided Tours",
    color: "blue",
    link: "event.html",
    description:
      "Join us on a journey of discovery as we explore the treasures of ancient Greece. This event will take you on a tour of some of the most important archaeological sites in Greece, including the Acropolis, Delphi, and Olympia. You'll learn about the history and culture of ancient Greece and gain a new appreciation for this fascinating civilization.",
    key: "20/04/2023",
    image: "./Images/DiscoveringTheTreasuresOfAncientGreece.jpg",
  },
  {
    id: "291c53b3-3d11-4be3-bab8-7b2d75bae900",
    eventName: "The Wonders Of The Acropolis",
    calendar: "Guided Tours",
    color: "blue",
    link: "event.html",
    description:
      "Step back in time and experience the wonder of the Acropolis. This event will take you on a tour of this iconic monument and provide you with a unique perspective on the history and culture of ancient Greece. You'll learn about the myths and legends associated with the Acropolis and gain a new appreciation for the architectural and artistic achievements of the ancient Greeks.",
    key: "01/05/2023",
    image: "./Images/Acropolis.jpg",
  },
  {
    id: "a0a1826b-7e89-4656-92ce-faa5ea0f5d9a",
    eventName: "Thessaloniki Through the Ages",
    calendar: "Guided Tours",
    color: "blue",
    link: "event.html",
    description:
      "Discover the rich history and culture of Thessaloniki with this event. You'll learn about the city's ancient past and explore its modern-day landmarks. From the Roman Forum to the White Tower, you'll gain a new appreciation for the rich history and culture of this vibrant city.",
    key: "02/06/2023",
    image: "./Images/Greece_Athens_Zeus-temple.jpg",
  },
  {
    id: "872fb3af-f66f-49b8-8f95-523d58234d25",
    eventName: "Mythical Creatures of Greek Legend",
    calendar: "Guided Tours",
    color: "blue",
    link: "event.html",
    description:
      "Experience the magic and wonder of Greek mythology with this event. You'll learn about the myths and legends associated with the ancient Greek gods and goddesses and discover the fascinating creatures that populate these stories. From the Minotaur to the Sphinx, you'll gain a new appreciation for the imagination and creativity of ancient Greek culture.",
    key: "02/06/2023",
    image: "./Images/GodOfOlympus.jpg",
  },
  {
    id: "e26c2937-c9fc-475c-92e2-e496cd5c6b1f",
    eventName: "Digging Up the Past: Introduction to Archaeology",
    calendar: "Educational Programs",
    color: "yellow",
    link: "event.html",
    description:
      "Join us for an introduction to the exciting world of archaeology. You'll learn about the methods and techniques used by archaeologists to uncover the secrets of the past. From fieldwork to laboratory analysis, you'll gain a new appreciation for the hard work and dedication of those who study the past.",
    key: "02/06/2023",
    image: "./Images/DigginUPToThePast.jpg",
  },
  {
    id: "2a92c57e-baf6-4725-9e9a-3f3a9256b059",
    eventName: "Unearthing Ancient Artifacts: A Hands-on Experience",
    calendar: "Educational Programs",
    color: "yellow",
    link: "event.html",
    description:
      "Get your hands dirty and experience archaeology up close with this hands-on event. You'll have the opportunity to handle artifacts from the ancient world and learn about their history and significance. From pottery to jewelry, you'll gain a new appreciation for the craftsmanship and artistry of ancient Greece.",
    key: "01/07/2023",
    image: "./Images/UnearthingAncientArtifacts.jpg",
  },
  {
    id: "b8f02de8-7d57-4edf-8c8a-9b557e6f1dc2",
    eventName: "Understanding Greek Mythology: Stories and Symbolism",
    calendar: "Educational Programs",
    color: "yellow",
    link: "event.html",
    description:
      "Explore the world of Greek mythology with this event. You'll learn about the stories and symbols associated with the ancient Greek gods and goddesses and gain a new appreciation for the enduring influence of these myths on Western culture. From the Trojan War to the Odyssey, you'll discover the rich tapestry of stories that make up the world of Greek mythology.",
    key: "31/07/2023",
    image: "./Images/UnderstandingGreekMythology.jpg",
  },
  {
    id: "c212e8ed-20eb-4d38-a1f2-7ce8cb49a9a7",
    eventName: "The Science of Conservation: Preserving the Past",
    calendar: "Educational Programs",
    color: "yellow",
    link: "event.html",
    description:
      "Join us for an exploration of the science behind the preservation of ancient artifacts. You'll learn about the techniques used to conserve and restore artifacts and gain a new appreciation for the important work done by conservators. From cleaning to documentation, you'll discover the many steps involved in preserving the past for future generations.",
    key: "02/09/2023",
    image: "./Images/TheScienceOfConservation.jpg",
  },
  {
    id: "4d191523-20c8-4e96-9307-3eb0e61c0b8d",
    eventName: "Greek Food and Wine Tasting Night",
    calendar: "Special Events",
    color: "green",
    link: "event.html",
    description:
      "This event aims to introduce visitors to the unique flavors of Greek cuisine and wine. Collaborating with local chefs and sommeliers, the museum will offer an evening of tasting traditional Greek dishes and wines from different regions of Greece. The program includes presentations on the history and cultural significance of Greek cuisine and wine, as well as guided tastings and pairing suggestions. The event will take place in a specially designed area of the museum, decorated with elements of Greek culture and tradition, creating a warm and inviting atmosphere. The program will conclude with a traditional Greek dance performance, inviting guests to participate and celebrate the joy of Greek culture.",
    key: "06/10/2023",
    image: "./Images/GreekFood.jpg",
  },
  {
    id: "9f1377da-998d-431c-b8e2-df2e2cb9a520",
    eventName: "A Night at the Museum: Exclusive After-Hours Tour",
    calendar: "Special Events",
    color: "green",
    link: "event.html",
    description:
      "This event is designed for those who want to experience the museum in a unique and exclusive way. The program includes an after-hours tour of the museum, led by an expert archaeologist, who will guide visitors through the exhibits and provide insights and stories about the artifacts and their historical context. The tour will be followed by a reception in the museum's courtyard, where guests can enjoy drinks and snacks, and engage in conversation with the archaeologist and other guests. The event offers a rare opportunity to explore the museum's treasures in a quiet and intimate setting, free from the crowds and noise of regular visiting hours.",
    key: "10/12/2023",
    image: "./Images/Acropolis-Museum-Pediments-Why-Athens-820x410.jpg",
  },
  {
    id: "0aee6d18-246c-4f67-b937-d1c0a30a481c",
    eventName: "Meet the Experts: Q&A with Archaeologists and Historians",
    calendar: "Special Events",
    color: "green",
    link: "event.html",
    description:
      "This event offers visitors the opportunity to meet and interact with archaeologists and historians, who will share their knowledge and expertise about the museum's collections and research. The program includes a panel discussion, where experts will discuss a specific topic related to archaeology or history, followed by a Q&A session, where visitors can ask questions and engage in dialogue with the panelists. The event is designed to provide visitors with a deeper understanding of the museum's work and mission, and to encourage dialogue and exchange of ideas between the experts and the public.",
    key: "15/12/2023",
    image: "./Images/MeetTheExperts.jpg",
  },
  {
    id: "bdf9bfb9-5238-46ea-b12a-00b1e30db396",
    eventName: "Greek Cultural Festival: Music, Dance, and Food",
    calendar: "Special Events",
    color: "green",
    link: "event.html",
    description:
      "This event celebrates the richness and diversity of Greek culture, through music, dance, and food. Collaborating with local artists and musicians, the museum will offer a day-long program of live performances, showcasing different styles of Greek music and dance, from traditional folk songs to contemporary pop and rock. The event will also feature a variety of Greek foods and drinks, prepared by local chefs and vendors, offering visitors a chance to sample the flavors and aromas of Greece. The program includes workshops and demonstrations on traditional Greek dance and music, as well as interactive activities for children and families. The festival aims to promote Greek culture and heritage, and to encourage visitors to explore and appreciate the richness of this ancient civilization.",
    key: "25/12/2023",
    image: "./Images/panigiri_greece.jpg",
  },
];
