import React, { useState, useEffect } from 'react';
import { firestore } from 'firebase';

import FB from '../../../Server';
import Timeline from '../Timeline';

import './styles.css';

const Education = () => {
	const [edu, setEdu] = useState<Array<firestore.QueryDocumentSnapshot>>([]);

	useEffect(() => {
		const db = FB.firestore();
		db.collection('edu')
			.orderBy('end', 'desc')
			.get()
			.then(snapshot => {
				if (!snapshot.empty) setEdu(snapshot.docs);
			});
	}, []);

	return (
		<div className="block-content">
			<h3 className="block-title">Education</h3>
			<Timeline category="education" details={edu} />
		</div>
	);
};

export default Education;
