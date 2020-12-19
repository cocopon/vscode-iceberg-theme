const Fs = require('fs');

const ColorTheme = require('./color/color-theme');
const Dark = require('./palette/dark');

{
	const theme = ColorTheme.create(Dark);
	const json = ColorTheme.stringify(theme);
	Fs.writeFileSync('themes/iceberg.color-theme.json', json);
}
