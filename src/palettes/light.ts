import {Color} from '../color';
import {VscodePalette} from '../vscode-palette';

const hues = {
	base: 230,
	red: 340,
	orange: 25,
	green: 90,
	lblue: 200,
	blue: 220,
	purple: 260,
};
const colors = {
	blue: Color.hsl(hues.blue, 0.55 + 0.01, 0.4 - 0.002),
	green: Color.hsl(hues.green, 0.4, 0.4 - 0.001),
	lblue: Color.hsl(hues.lblue, 0.45, 0.45 - 0.002),
	orange: Color.hsl(hues.orange, 0.55, 0.5 - 0.002),
	purple: Color.hsl(hues.purple, 0.38, 0.53 - 0.002),
	red: Color.hsl(hues.red, 0.55, 0.56 - 0.001),
};
const normal = {
	bg: Color.hsl(hues.base, 0.1 + 0.01, 0.92 - 0.002),
	fg: Color.hsl(hues.base, 0.2, 0.249),
};
const tint = {
	blue: {
		bg: Color.mix(colors.blue, normal.bg, 0.15),
		fg: Color.mix(colors.blue, normal.bg, 0.4),
	},
	green: {
		bg: Color.mix(colors.green, normal.bg, 0.15),
		fg: Color.mix(colors.green, normal.bg, 0.4),
	},
	lblue: {
		bg: Color.mix(colors.lblue, normal.bg, 0.15),
		fg: Color.mix(colors.lblue, normal.bg, 0.4),
	},
	purple: {
		bg: Color.mix(colors.purple, normal.bg, 0.15),
		fg: Color.mix(colors.purple, normal.bg, 0.4),
	},
	red: {
		bg: Color.mix(colors.red, normal.bg, 0.15),
		fg: Color.mix(colors.red, normal.bg, 0.4),
	},
};
const comment = Color.hsl(hues.base, 0.15, 0.58 - 0.0022);

const linenrBg = normal.bg.adjust({
	saturation: 0.1,
	lightness: -0.03 - 0.003,
});
const linenr = {
	bg: linenrBg,
	fg: linenrBg.darken(0.2 + 0.001),
};
const cursorlinenr = {
	bg: linenr.bg.adjust({
		saturation: 0.05 - 0.008,
		lightness: -0.05 - 0.003,
	}),
	fg: linenr.fg.adjust({
		saturation: 0.1,
		lightness: -0.2,
	}),
};
const statuslinenc = {
	bg: cursorlinenr.bg,
	fg: cursorlinenr.bg.darken(0.2),
};

export const Light: VscodePalette = {
	...colors,
	tint: tint,

	comment: comment,
	visual: normal.bg.adjust({
		saturation: 0.05,
		lightness: -0.1,
	}),

	matchparen: {
		bg: normal.bg.darken(0.15),
	},
	normal: normal,
	cursorlinenr: cursorlinenr,
	linenr: linenr,
	statuslinenc: statuslinenc,
	whitespace: normal.bg.adjust({
		saturation: 0.08,
		lightness: -0.09 - 0.002,
	}),

	vscode: {
		floating: {
			bg: linenr.bg,
			separator: comment.withAlpha(0.3),
			shadow: Color.hsl(hues.base, 0.3, 0.3).withAlpha(0.3),
		},
		overlaySelection: Color.hsl(hues.base, 0.17, 0.73).withAlpha(0.4),
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
			saturation: 0.05 + 0.005,
			lightness: -0.05 - 0.002,
		}),
		brightCyan: colors.lblue.adjust({
			saturation: 0.05 + 0.005,
			lightness: -0.05 - 0.002,
		}),
		brightGreen: colors.green.adjust({
			saturation: 0.05 + 0.002,
			lightness: -0.05 - 0.002,
		}),
		brightMagenta: colors.purple.adjust({
			saturation: 0.05,
			lightness: -0.05 - 0.002,
		}),
		brightRed: colors.red.adjust({
			saturation: 0.05 - 0.005,
			lightness: -0.05 - 0.002,
		}),
		brightWhite: normal.fg.adjust({
			saturation: 0.05,
			lightness: -0.05,
		}),
		brightYellow: colors.orange.adjust({
			saturation: 0.05,
			lightness: -0.05 - 0.002,
		}),
	},
};
