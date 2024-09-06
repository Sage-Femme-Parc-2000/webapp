
import Picture1 from '../assets/img/team/team1Picture.jpg'
import Picture2 from '../assets/img/team/team2Picture.jpg'
import Picture3 from '../assets/img/team/team3Picture.jpg'
import Picture4 from '../assets/img/team/team4Picture.jpg'

const MEMBER_LIST = [
	{
		id: 0,
		name: 'Edwards',
		firstname: 'Sophie',
		img: Picture1,
		tel: '06.28.34.47.99',
		url: 'https://calendar.app.google/fM4LbP9maa6CU3dCA',
		certifications : [
			{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing'},
			{text: 'Single-line item'},
			{text: 'Single-line item dolor sit amet'}
		]
	},
	{
		id: 1,
		name: 'Barret',
		firstname: 'Julie',
		img: Picture2,
		tel: '06.08.58.61.70',
		url: 'https://calendar.app.google/fM4LbP9maa6CU3dCA',
		certifications : [
			{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing'},
			{text: 'Single-line item'},
			{text: 'Single-line item dolor sit amet'}
		]
	},
	{
		id: 2,
		name: 'Mateu',
		firstname: 'Stéphanie',
		img: Picture3,
		tel: '',
		url: 'https://www.doctolib.fr/sage-femme-echographiste/montpellier/stephanie-mateu',
		certifications : [
			{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing'},
			{text: 'Single-line item'},
			{text: 'Single-line item dolor sit amet'}
		]
	},
	{
		id: 3,
		name: 'Molinier',
		firstname: 'Elsa',
		img: Picture4,
		tel: '06.27.33.00.79',
		url: 'https://calendar.app.google/fM4LbP9maa6CU3dCA',
		certifications: [
			{text: '2021: Diplôme d\'état de sage-femme de l\'université de Montpellier, antenne de Nîmes'},
			{text: '2022: Formation à la méthode de préparation à la naissance "Bonapace"'},
			{text: '2022: Conventionnement avec le CHU de Montpellier pour la pratique d\'IVG médicamenteuse à domicile'}
		]
	}
];
export default MEMBER_LIST;