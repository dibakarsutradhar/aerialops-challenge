import { Card, Table } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';

import { mockData } from '../utils/mockData';

// useEffect --> if-else condition to check the element size --> render accordingly
// If elements.document.length > breakpoints ? collapse : don't collapse
// if element window size changes && window width is smalled than div element width
//		? collapse into document button
//		: don't collapse

const MockDataTable = () => {
	const [size, setSize] = useState<number>(0);
	let ref = useRef<HTMLTableSectionElement>(null);

	const updateDimensions = () => {
		console.log(ref.current?.clientWidth);
		if (ref.current) setSize(ref.current.clientWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		setSize(ref.current?.clientWidth);
		return () => {
			console.log('dismount');
			window.removeEventListener('resize', updateDimensions);
		};
	}, []);

	const rows = mockData.map((element) => {
		return (
			<tr key={element.applicationId}>
				<td id='id'>{element.applicationId}</td>
				<td id='name'>{element.name}</td>
				<td id='salary'>{element.salary}</td>
				<td id='docname' style={{ width: size }}>
					{element.documents.map((item) => (
						<Card
							shadow='sm'
							p='sm'
							style={{
								float: 'left',
								marginRight: '5px',
							}}
						>
							{item.documentName}
						</Card>
					))}
				</td>
			</tr>
		);
	});

	return (
		<Table>
			<thead ref={ref}>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Salary</th>
					<th>Documents</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
};

export default MockDataTable;
