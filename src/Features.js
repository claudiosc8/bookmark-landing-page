import React, {useState} from 'react';
import {Tab, Row, Col, Button} from 'react-bootstrap/'


function Features({data}) {

	const [key, setKey] = useState('1');

	return (

		<Tab.Container id="features-tabs" activeKey={key}>
		  	<Row className='center'>
			    <Col md={8}>
				    <div className='tab-keys-wrapper'>
				    	{data && data.map((item, index) => <Col  md={4} key={index} className={`tab-key${key === item.key ? ' active' : ''}`} onClick={() => setKey(item.key)}>{item.label}</Col>)}
				    </div>
			    </Col>
    		</Row>

	      	<Tab.Content>
		      
		      {data && data.map((item, index) => {
		      	return (
		      		<Tab.Pane eventKey={item.key} key={index}>
			         <Row className='align-center tab-row'>
				        <Col md={7} className={`bg-detail left image j-${item.align}`}>
			             	<img src={item.image} alt={item.title} />
			            </Col>
			          	<Col md={5} className='tab-content'>
				            <h2>{item.title}</h2>
				            <p className='paragraph'>{item.copy}</p>
				            <div className='btn-row'><Button>{item.button}</Button></div>
			            </Col>
			         </Row>
			        </Tab.Pane>
		      		)
		      })}

	      	</Tab.Content>
		</Tab.Container>
		)

	}

export default Features;