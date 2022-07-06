import { Card, Table } from '@mantine/core';
import { mockData } from '../utils/mockData';

const MockDataTable = () => {
	const rows = mockData.map((element) => (
		<tr key={element.applicationId}>
			<td>{element.applicationId}</td>
			<td>{element.name}</td>
			<td>{element.salary}</td>
			<td style={{ overflow: 'hidden' }}>
				{element.documents.map((data) => (
					<Card
						shadow='sm'
						p='sm'
						style={{ float: 'left', marginRight: '10px' }}
					>
						{data.documentName}
					</Card>
				))}
			</td>
		</tr>
	));

	return (
		<Table>
			<thead>
				<tr>
					<th>Application ID</th>
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
