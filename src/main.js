const Fs = require('fs');

const DarkTheme = require('./color/theme/dark');
const DarkPalette = require('./palette/dark');
const LightTheme = require('./color/theme/light');
const LightPalette = require('./palette/light');

{
	Fs.writeFileSync(
		'themes/iceberg.color-theme.json',
		DarkTheme.stringify(DarkTheme.create(DarkPalette)),
	);
	Fs.writeFileSync(
		'themes/iceberg-light.color-theme.json',
		LightTheme.stringify(LightTheme.create(LightPalette)),
	);
}
