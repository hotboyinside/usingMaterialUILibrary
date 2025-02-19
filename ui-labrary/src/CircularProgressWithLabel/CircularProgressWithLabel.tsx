import Box from '@mui/material/Box';
import CircularProgress, {
	CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function CircularProgressWithLabel(
	props: CircularProgressProps & { value: number }
) {
	return (
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress variant='determinate' {...props} />
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography
					variant='caption'
					component='div'
					sx={{ color: 'text.secondary' }}
				>{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
}

export default function CircularWithValueLabel({
	newValue,
}: {
	newValue: number;
}) {
	const [progress, setProgress] = React.useState(0);

	if (newValue !== progress) setProgress(newValue);
	return <CircularProgressWithLabel value={progress} />;
}
