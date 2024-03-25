import React from 'react';

import Error404 from '../../assets/img/fatal.svg';
import styles from './NotFoundPage.module.scss';
const NotFound = () => {
	return (
		<div>
			<img className={styles.root} src={Error404} alt="404" />
		</div>
	);
};
export default NotFound;
