import { Divider } from '@material-ui/core';

import {styled} from '@material-ui/core/styles';

import Colors from '../Colors'


const ColoredDivider = styled(Divider)(({theme})=> ({
	backgroundColor: theme.palette.mode === 'dark' ? Colors.awesomeLightRed : Colors.awesomeRed,
	})
)

export default ColoredDivider;