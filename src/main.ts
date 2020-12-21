import * as Fs from 'fs';

import {Dark as DarkPalette} from './palette/dark';
import {Light as LightPalette} from './palette/light';
import * as DarkTheme from './theme/dark';
import * as LightTheme from './theme/light';
import * as Theme from './theme/theme';

{
	Fs.writeFileSync(
		'themes/iceberg.color-theme.json',
		Theme.stringify(DarkTheme.create(DarkPalette)),
	);
	Fs.writeFileSync(
		'themes/iceberg-light.color-theme.json',
		Theme.stringify(LightTheme.create(LightPalette)),
	);
}
