import React, {useState} from 'react';
import {Accordion} from 'react-bootstrap/'

function Faqs({data}) {

	const [key, setKey] = useState(false);

	return (

		<Accordion activeKey={key}>
			{
				data && data.map((item, index) => {
					return (
						<div className='accordion-item' key={index}>
						    <Accordion.Toggle as={'div'} className='accordion-toggle' onClick={() => setKey(e => e === item.key ? false : item.key)}>
						      {item.question}
						      <span className='ml-auto'>
						      <svg className={`arrow${item.key === key ? ' active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="18" height="12">
						      	<path d="M1 1l8 8 8-8"/>
						      </svg>
						      </span>
						    </Accordion.Toggle>
						    <Accordion.Collapse eventKey={item.key}>
						      <div className='accordion-body'>{item.answer}</div>
						    </Accordion.Collapse>
					  	</div>
						)
				})

			}
		</Accordion>

		)

	}

export default Faqs;