import Tab1 from './images/illustration-features-tab-1.svg'
import Tab2 from './images/illustration-features-tab-2.svg'
import Tab3 from './images/illustration-features-tab-3.svg'
import Chrome from './images/logo-chrome.svg'
import Firefox from './images/logo-firefox.svg'
import Opera from './images/logo-opera.svg'

export const featuresData = [
	{
		title:'Bookmark in one click',
		label:'Simple Bookmarking',
		copy:'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
		button:'More info',
		image:Tab1,
		align:'left',
		key:'1'
	},
	{
		title:'Intelligent search',
		label:'Speedy Searching',
		copy:'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
		button:'More info',
		image:Tab2,
		align:'center',
		key:'2'
	},
	{
		title:'Share your bookmarks',
		label:'Easy Sharing',
		copy:'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
		button:'More info',
		image:Tab3,
		align:'center',
		key:'3'
	}

]

export const browserSupport = [
	{
		title:'Add to Chrome',
		version:'Minimum version 62',
		button:'Add & Install Extension',
		image:Chrome
	},
	{
		title:'Add to Firefox',
		version:'Minimum version 55',
		button:'Add & Install Extension',
		image:Firefox
	},
	{
		title:'Add to Opera',
		version:'Minimum version 62',
		button:'Add & Install Extension',
		image:Opera
	},
]

export const faq = [
	{	
		key:'1',
		question:'What is Bookmark?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.,'
	},
	{	
		key:'2',
		question:'How can I request a new browser?',
		answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
	},
	{	
		key:'3',
		question:'Is there a mobile app?',
		answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
	},
	{	
		key:'4',
		question:'What about other Chromium browsers?',
		answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
	},
]

