import { Divider } from '@material-ui/core';

import {styled} from '@material-ui/core/styles';

import Theme from '../Colors'


const ColoredDivider = styled(Divider)(({theme})=> ({
	borderColor: theme.palette.mode === 'dark' ? Theme.textDarkTerciaryTop : Theme.textLightTerciaryTop,
	})
)

export default ColoredDivider;