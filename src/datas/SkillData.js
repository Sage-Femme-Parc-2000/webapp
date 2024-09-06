import pregnantCategory from "../assets/img/category/pregnant.jpg";
import babyCategory from "../assets/img/category/baby.jpg";
import adultCategory from "../assets/img/category/adult.jpg";
import WomanCategory from "../assets/img/category/woman.jpg";

const ACTIVITY_DATA = [
    {id: 0, title: 'Enceinte', img: pregnantCategory,
        activity : [
            {
                name: 'Suivi de grossesse',
                description: 'la sage-femme peut suivre une grossesse à bas niveau de risque, en alternance ou non avec le gynécologue.',
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
            {
                name: 'Préparation à la naissance',
                description: "8 séances prises en charge à 100% dès la 24eme semaine aménorrhée. Seule ou en groupe, ce sont des séances qui ont pour but de vous préparer au mieux à l'arrivée de votre enfant. C'est un temps d'échange avec des notions théoriques et pratiques.",
                team: [{name: 'Sophie Edwards'}, {name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
        ]
    },
    {id: 1, title: 'Bébé', img: babyCategory,
        activity : [
            {
                name: "Suivi de l'allaitement",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Sophie Edwards'}, {name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
            {
                name: "Suivi médical du 1er mois",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Sophie Edwards'}, {name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
        ]
    },
    {id: 3, title: 'Femme', img: WomanCategory,
        activity : [
            {
                name: 'Rééducation abdomino-pelvienne',
                description: "La sage-femme peut la réaliser seulement sur les femmes ayant accouché 1 fois, autrement elle devra se faire avec un kinésithérapeute sur ordonnance.La rééducation peut être faite manuellement, avec de l'électro stimulation ou bien avec INDIBA (cf. INDIBA dans nos compétences).",
                team: [{name: 'Sophie Edwards'}, {name: 'Elsa Molinier'}]
            },
            {
                name: 'Suivi gynécologique',
                description: "la Sage-femme assure le suivi gynécologique de prévention comme le dépistage du cancer du col de l'utérus, la prescription d'une contraception et sa pose, le diagnostic et le traitement d'infection gynécologique et urinaires. Dès lors qu'une pathologie est décelée ou un traitement est nécessaire, nous vous orientons vers un gynécologue.",
                team: [{name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
            {
                name: 'Prèscription et pose de contraceptifs',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}, {name: 'Elsa Molinier'}]
            },
            {
                name: 'IVG médicamenteuse à domicile',
                description: "Je vous reçois pour une première consultation au cabinet pour vérifier vos critères d'admissibilité à la méthode médicamenteuse. Selon votre terme de grossesse, je vous prescrit une prise de sang et une échographie puis je vous délivre les médicaments à prendre chez vous. Pour plus d'informations, n'hésitez pas à me contacter par téléphone ou SMS de préférence.",
                team: [{name: 'Elsa Molinier'}]
            },
        ]
    },
    {id: 5, title: 'Femme2', img: WomanCategory,
        activity : [
            {
                name: 'Micronutrition',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}]
            },
            {
                name: 'INDIBA (técarthérapie)',
                description: "INDIBA stimule les mécanismes naturels de récupération du corps par la tecartherapie.Il soulage la douleur, accélère la cicatrisation et stimule le travail musculaire pour la rééducation abdomino-pelvienne. La séance est au prix d'une consultation ainsi qu'une avance de frais de 15 euros en hors nomenclature (remboursable selon votre mutuelle).",
                team: [{name: 'Elsa Molinier'}]
            },
            {
                name: 'Acupuncture',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}]
            },
            {
                name: 'Kinésiologie',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}]
            },
        ]
    },
    {id: 2, title: 'Adultes', img: adultCategory,
        activity : [
            {
                name: 'Vaccination',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
                team: [{name: 'Julie Barret'}]
            },
        ]
    }
];

export default ACTIVITY_DATA;
