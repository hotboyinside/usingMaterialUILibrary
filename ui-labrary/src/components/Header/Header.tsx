import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import styles from './Header.module.css';

export function Header() {
	return (
		<div className={styles.container}>
			<SimpleTreeView>
				<TreeItem className={styles.item} itemId='grid' label='Data Grid'>
					<TreeItem itemId='grid-community' label='@mui/x-data-grid' />
					<TreeItem itemId='grid-pro' label='@mui/x-data-grid-pro' />
					<TreeItem itemId='grid-premium' label='@mui/x-data-grid-premium' />
				</TreeItem>
				<TreeItem itemId='pickers' label='Date and Time Pickers'>
					<TreeItem itemId='pickers-community' label='@mui/x-date-pickers' />
					<TreeItem itemId='pickers-pro' label='@mui/x-date-pickers-pro' />
				</TreeItem>
				<TreeItem itemId='charts' label='Charts'>
					<TreeItem itemId='charts-community' label='@mui/x-charts' />
				</TreeItem>
				<TreeItem itemId='tree-view' label='Tree View'>
					<TreeItem itemId='tree-view-community' label='@mui/x-tree-view' />
				</TreeItem>
			</SimpleTreeView>
		</div>
	);
}
