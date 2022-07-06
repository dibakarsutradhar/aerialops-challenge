import { Button, Group, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

interface Props {
	children?: any;
	label?: string;
}

const Collapsible = ({ children, label }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [domLoaded, setDomLoaded] = useState(false);
	const largeScreen = useMediaQuery('(min-width: 900px)');

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	if (domLoaded && !largeScreen) {
		return (
			<Group>
				<Button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
					{label}
				</Button>

				<Stack
					className={
						isOpen ? `${styles.show} ${styles.content}` : styles.content
					}
					sx={{ gap: '8px' }}
				>
					{children}
				</Stack>
			</Group>
		);
	} else {
		return <Group>{children}</Group>;
	}
};

export default Collapsible;
