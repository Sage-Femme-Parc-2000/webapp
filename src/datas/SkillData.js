import pregnantCategory from "../assets/img/category/pregnant.jpg";
import babyCategory from "../assets/img/category/baby.jpg";
import adultCategory from "../assets/img/category/adult.jpg";
import WomanCategory from "../assets/img/category/woman.jpg";

const ACTIVITY_DATA = [
    {id: 0, title: 'Enceinte', img: pregnantCategory,
        activity : [
            {
                name: 'Suivi de grossesse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Sophie Edwards'}, {name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
            {
                name: 'Visites à domiciles après accouchement et grossesse pathologique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
            {
                name: 'Échographie obstétricales',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Stephanie Mateu'}]
            },
        ]
    },
    {id: 1, title: 'Bébé', img: babyCategory,
        activity : [
            {
                name: 'Micronutrition',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}]
            },
            {
                name: 'INDIBA (tecartherapie)',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Elsa Molinier'}]
            },
        ]
    },
    {id: 3, title: 'Femme', img: WomanCategory,
        activity : [
            {
                name: 'Rééducation du périnée',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Sophie Edwards'}, {name: 'Elsa Molinier'}]
            },
            {
                name: 'Suivi gynécologique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
            {
                name: 'Préscription et pose de contraceptifs',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
            {
                name: 'IVG médicamenteuse à domicile',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Elsa Molinier'}]
            }
        ]
    },
    {id: 2, title: 'Adultes', img: adultCategory,
        activity : [
            {
                name: 'Préparation à la naissance',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Sophie Edwards'}, {name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
            {
                name: 'Acupuncture',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}]
            },
        ]
    }
];

export default ACTIVITY_DATA;
