const Color = require('../color/color').Color;

const hues = {
	base: 230,
	red: 0,
	orange: 25,
	green: 70,
	lblue: 190,
	blue: 215,
	purple: 255,
};
const colors = {
	blue: Color.hsl(hues.blue, 0.37, 0.65 - 0.002),
	green: Color.hsl(hues.green, 0.32, 0.63 - 0.002),
	lblue: Color.hsl(hues.lblue, 0.32, 0.65 - 0.002),
	orange: Color.hsl(hues.orange, 0.65, 0.68 - 0.002),
	purple: Color.hsl(hues.purple, 0.32, 0.68 - 0.002),
	red: Color.hsl(hues.red, 0.65, 0.68),
};
const normal = {
	bg: Color.hsl(hues.base, 0.2, 0.11 - 0.002),
	fg: Color.hsl(hues.base, 0.1, 0.8 - 0.002),
};
const tint = {
	blue: {
		bg: Color.mix(colors.blue, normal.bg, 0.3),
		fg: Color.mix(colors.blue, normal.bg, 0.3),
	},
	green: {
		bg: Color.mix(colors.green, normal.bg, 0.3),
		fg: Color.mix(colors.green, normal.bg, 0.3),
	},
	lblue: {
		bg: Color.mix(colors.lblue, normal.bg, 0.3),
		fg: Color.mix(colors.lblue, normal.bg, 0.3),
	},
	purple: {
		bg: Color.mix(colors.purple, normal.bg, 0.3),
		fg: Color.mix(colors.purple, normal.bg, 0.3),
	},
	red: {
		bg: Color.mix(colors.red, normal.bg, 0.3),
		fg: Color.mix(colors.red, normal.bg, 0.3),
	},
};
const comment = Color.hsl(hues.base, 0.12, 0.48 - 0.002);

const linenrBg = normal.bg.adjust({
	saturation: 0.05,
	lightness: 0.05 - 0.002,
});
const linenr = {
	bg: linenrBg,
	fg: linenrBg.lighten(0.2 - 0.002),
};
const cursorlinenr = {
	bg: linenr.bg.adjust({
		saturation: 0.1,
		lightness: 0.1 - 0.002,
	}),
	fg: linenr.fg.adjust({
		saturation: 0.1 - 0.01,
		lightness: 0.5 - 0.0018,
	}),
};

module.exports = {
	...colors,
	tint: tint,

	comment: comment,
	visual: normal.bg.adjust({
		saturation: 0.05,
		lightness: 0.1 - 0.002,
	}),

	normal: normal,
	cursorlinenr: cursorlinenr,
	linenr: linenr,
	statuslinenc: {
		bg: normal.bg.darken(0.03 + 0.002),
		fg: normal.bg.lighten(0.2),
	},
	whitespace: normal.bg.adjust({
		saturation: 0.08,
		lightness: 0.09 - 0.002,
	}),

	vscode: {
		overlaySelection: Color.hsl(hues.base, 0.27, 0.4).withAlpha(0.4),
	},

	ansi: {
		black: linenr.bg,
		blue: colors.blue,
		cyan: colors.lblue,
		green: colors.green,
		magenta: colors.purple,
		red: colors.red,
		white: normal.fg,
		yellow: colors.orange,

		brightBlack: comment,
		brightBlue: colors.blue.adjust({
			saturation: 0.05 - 0.002,
			lightness: 0.05 - 0.002,
		}),
		brightCyan: colors.lblue.adjust({
			saturation: 0.05,
			lightness: 0.05 - 0.002,
		}),
		brightGreen: colors.green.adjust({
			saturation: 0.05,
			lightness: 0.05 - 0.003,
		}),
		brightMagenta: colors.purple.adjust({
			saturation: 0.05,
			lightness: 0.05,
		}),
		brightRed: colors.red.adjust({
			saturation: 0.05 - 0.005,
			lightness: 0.05 - 0.002,
		}),
		brightWhite: normal.fg.adjust({
			saturation: 0.05,
			lightness: 0.05,
		}),
		brightYellow: colors.orange.adjust({
			saturation: 0.05 - 0.004,
			lightness: 0.05 - 0.0028,
		}),
	},
};