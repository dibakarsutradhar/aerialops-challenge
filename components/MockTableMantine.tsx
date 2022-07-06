import { Card, Group, Table } from '@mantine/core';
import { mockData } from '../utils/mockData';
import Collapsible from './Collapsible';

const MockDataTable = () => {
	const rows = mockData.map((element) => (
		<tr key={element.applicationId}>
			<td>{element.applicationId}</td>
			<td>{element.name}</td>
			<td>{element.salary}</td>
			<td style={{ overflowX: 'hidden' }}>
				<Collapsible label='Document'>
					{element.documents.map((data) => (
						<Card
							shadow='sm'
							p='sm'
							style={{
								float: 'left',
								marginRight: '5px',
							}}
						>
							{data.documentName}
						</Card>
					))}
				</Collapsible>
			</td>
		</tr>
	));

	return (
		<Table>
			<thead>
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
