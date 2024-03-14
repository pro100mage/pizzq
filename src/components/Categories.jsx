import React from 'react';

function Categories() {
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
	const [active, setActive] = React.useState(0);
	const clickCategory = (index) => {
		setActive(index);
	};
	return (
		<div className="categories">
			<ul>
				{categories.map((value, i) => (
					<li key={i} onClick={() => clickCategory(i)} className={active === i ? 'active' : ''}>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}
export default Categories;
