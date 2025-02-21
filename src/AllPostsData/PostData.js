import batman2 from "../assets/Pictures/batman2.png";
import batmanSetPhoto from "../assets/Pictures/batman2-setphoto.png";

const PostData = [
    {
        label: "Featured",
        title: "The Batman 2: First Look at Robert Pattinson's New Suit Revealed!",
        image: batman2,
        description: "Warner Bros. drops the first official look at Robert Pattinson’s upgraded Batsuit for The Batman – Part II.",
        root: "The Batman 2",
        category: "Movie",
        tags: ["TheBatman2", "RobertPattinson", "DC"],
        meta: {
            author: "John Doe",
            date: "February 17, 2025",
            comments: 42
        },
        content: [
            { type: "text", value: "Warner Bros. has just dropped the first official look at Robert Pattinson’s new Batsuit for The Batman – Part II. The highly anticipated sequel, directed by Matt Reeves, is set to release in 2025 and promises a darker, more intense storyline than the first film." },
            { type: "image", value: batmanSetPhoto, caption: "A leaked set photo from The Batman 2 filming in London." },
            { type: "text", value: "The new suit is rumored to be more tactical, featuring reinforced armor plates and a sleeker bat emblem. Fans are already speculating whether this could be inspired by Batman’s iconic No Man’s Land storyline." }
        ]
    },
    /*
    {
        label: "News",
        title: "Joaquin Phoenix Confirms Joker 2 is Darker Than Ever",
        image: jokerPoster,
        description: "Joaquin Phoenix teases a deeper, darker Joker sequel that pushes boundaries.",
        root: "Joker 2",
        category: "Movie",
        tags: ["Joker2", "JoaquinPhoenix", "DC"],
        meta: {
            author: "Jane Smith",
            date: "March 5, 2025",
            comments: 28
        },
        content: [
            { type: "text", value: "Joaquin Phoenix has confirmed that Joker 2, officially titled Joker: Folie à Deux, will be even darker than the first film. The sequel is expected to explore deeper psychological aspects of the Joker and introduce Lady Gaga’s Harley Quinn in a fresh new take on the character." },
            { type: "image", value: jokerScene, caption: "First look at Joaquin Phoenix and Lady Gaga on the set of Joker 2." },
            { type: "text", value: "Todd Phillips, the director of Joker 2, has emphasized that this film will have a unique style, blending psychological horror with musical elements. Fans are eager to see how this creative risk plays out." }
        ]
    }
    */
];

export default PostData;

