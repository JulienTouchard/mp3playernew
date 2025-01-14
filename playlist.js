const playlist = [
    {
        titre: "Woo-Hah!!!",
        auteur: "Busta Rhymes",
        annee: 2004,
        cover: require("./assets/img/cover/woohahbustarhymes.jpg"),
        audio: require("./assets/audio/Busta Rhymes _- Woo-Hah!! Got You All In Check (Official Video) [Explicit].mp3"),
        album: "Woo-Hah!!!",
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."
    },
    {
        "audio": require("./assets/audio/Jill Scott - Golden (Lyrics).mp3"),
        "cover": require("./assets/img/cover/golden-Jill-Scott.jpg"),
        "titre": "Golden",
        "auteur": "Jill Scott",
        "album": "Golden",
        "annee": 2004,
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."
    },
    {
        "audio": require("./assets/audio/its-bigger-than-hip-hop-dead-prez.mp3"),
        "cover": require("./assets/img/cover/coverDeadPrez.jpg"),
        "titre": "It's bigger than Hip Hop",
        "auteur": "Dead Prez",
        "album": "It's bigger than Hip Hop",
        "annee": 2004,
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."
    },
    {
        "audio": require("./assets/audio/Missy Elliott - Work It [Official Music Video].mp3"),
        "cover": require("./assets/img/cover/workit-MissyElliott.jpg"),
        "titre": "Work It",
        "auteur": "Missy Elliott",
        "album": "Work It",
        "annee": 2004,
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."
    }
    ,
    {
        audio: require("./assets/audio/the-pharcyde-passin-me-by.mp3"),
        cover: require("./assets/img/cover/coverPharcyde.jpg"),
        titre: "Passin me by",
        auteur: "The Pharcyde",
        annee: 1993,
        album: "YOUPIIIIIIIIIIIIIII",
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."

    },
    {
        audio: require("./assets/audio/soul-of-mischief-93-til-infinity.mp3"),
        cover: require("./assets/img/cover/coverSoulOf.jpg"),
        titre: "Passin me by",
        auteur: "The Pharcyde",
        annee: 1993,
        album: "YOUPIIIIIIIIIIIIIII",
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."

    },
    {
        audio: require("./assets/audio/In A Sentimental Mood.mp3"),
        cover: require("./assets/img/cover/In A Sentimental Mood.jpg"),
        titre: "In A Sentimental Mood",
        auteur: "Duke Ellington",
        annee: 1966,
        album: "YOUPIIIIIIIIIIIIIII",
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."
    },
    {
        audio: require("./assets/audio/DAngelo - Spanish Joint (acoustic demo).mp3"),
        cover: require("./assets/img/cover/DAngelo - Spanish Joint (acoustic demo).jpg"),
        titre: "Spanish Joint (acoustic demo)",
        auteur: "D'Angelo",
        annee: 2000,
        album: "YOUPIIIIIIIIIIIIIII",
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."
    },
    {
        audio: require("./assets/audio/Jamiroquai - Alright.mp3"),
        cover: require("./assets/img/cover/Jamiroquai - Alright.jpg"),
        titre: "Alright",
        auteur: "Jamiroquai",
        annee: 1993,
        album: "YOUPIIIIIIIIIIIIIII",
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."
    },
    {
        audio: require("./assets/audio/Gorillaz - Dare HD.mp3"),
        cover: require("./assets/img/cover/Gorillaz - Dare HD.jpg"),
        titre: "Dare",
        auteur: "Gorillaz",
        annee: 2005,
        album: "YOUPIIIIIIIIIIIIIII",
        "genre": ["genre1", "genre2"],
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."
    },
    {
        audio: require("./assets/audio/Chopin - Waltz Op. 64 No. 2 (Rubinstein).mp3"),
        cover: require("./assets/img/cover/Chopin - Waltz Op. 64 No. 2 (Rubinstein).jpg"),
        titre: "Waltz Op. 64 No. 2 (Rubinstein)",
        auteur: "Chopin",
        annee: 1958,
        album: "YOUPIIIIIIIIIIIIIII",
        "genre": ["genre1", "genre2"],
    },
    {
        audio: require("./assets/audio/Nina Simone & Lauryn Hill - Fu-Gee-La feat. The Fugees (Prod. Amerigo Gazaway).mp3"),
        cover: require("./assets/img/cover/Nina Simone & Lauryn Hill - Fu-Gee-La feat. The Fugees (Prod. Amerigo Gazaway).jpg"),
        titre: "Fu-Gee-La",
        auteur: "Nina Simone & Lauryn Hill (Prod. Amerigo Gazaway)",
        annee: 2019,
        album: "YOUPIIIIIIIIIIIIIII",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque magnam quam ut laborum maxime? Consequuntur veritatis enim voluptates totam quisquam? Voluptas nam dicta, expedita possimus neque fugiat nostrum culpa."
    }
]
export { playlist }