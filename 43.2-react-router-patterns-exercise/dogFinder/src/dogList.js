import { v4 as uuid } from 'uuid';

const dogList = [
    {
        id: uuid(),
        name: "Whiskey",
        age: 5,
        src: "https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg",
        facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle!"
        ]
    },
    {
        id: uuid(),
        name: "Duke",
        age: 3,
        src: "https://nypost.com/wp-content/uploads/sites/2/2022/12/worlds-cutest-dog-comp-1.jpg",
        facts: [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
    },
    {
        id: uuid(),
        name: "Perry",
        age: 4,
        src: "https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-1920-80.jpg",
        facts: [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
    },
    {
        id: uuid(),
        name: "Tubby",
        age: 4,
        src: "https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg",
        facts: [
            "Tubby is really stupid.",
            "Tubby does not like walks.",
            "Angelina used to hate Tubby, but claims not to anymore."
        ]
    }
];

export default dogList;