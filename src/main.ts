import * as Fs from 'fs';

import * as Palettes from './palettes';
import * as Themes from './themes';
import * as Theme from './vscode-theme';

{
	Fs.writeFileSync(
		'themes/iceberg.color-theme.json',
		Theme.stringify(Themes.Dark.create(Palettes.Dark)),
	);
	Fs.writeFileSync(
		'themes/iceberg-light.color-theme.json',
		Theme.stringify(Themes.Light.create(Palettes.Light)),
	);
}
