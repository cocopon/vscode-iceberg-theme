const Fs = require('fs');

const DarkPalette = require('./palette/dark');
const LightPalette = require('./palette/light');
const DarkTheme = require('./theme/dark');
const LightTheme = require('./theme/light');

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
