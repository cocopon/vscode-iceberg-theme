import * as Fs from 'fs';

import * as VimPalettes from './vim-palettes';
import * as Themes from './themes';
import * as Theme from './types/vscode-theme';

{
	Fs.writeFileSync(
		'themes/iceberg.color-theme.json',
		Theme.stringify(
			Themes.Dark.create(VimPalettes.Dark.toVscode(VimPalettes.Dark.Palette)),
		),
	);
	Fs.writeFileSync(
		'themes/iceberg-light.color-theme.json',
		Theme.stringify(
			Themes.Light.create(
				VimPalettes.Light.toVscode(VimPalettes.Light.Palette),
			),
		),
	);
}
