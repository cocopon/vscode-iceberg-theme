import {Color} from '../color/color';

interface BgFg {
	bg: Color;
	fg: Color;
}

export interface Palette {
	red: Color;
	orange: Color;
	green: Color;
	lblue: Color;
	blue: Color;
	purple: Color;

	tint: {
		blue: BgFg;
		green: BgFg;
		lblue: BgFg;
		purple: BgFg;
		red: BgFg;
	};

	comment: Color;
	visual: Color;

	matchparen: {
		bg: Color;
	};
	normal: BgFg;
	cursorlinenr: BgFg;
	linenr: BgFg;
	statuslinenc: BgFg;
	whitespace: Color;

	vscode: {
		floating: {
			bg: Color;
			separator: Color;
			shadow: Color;
		};
		overlaySelection: Color;
	};

	ansi: {
		black: Color;
		blue: Color;
		cyan: Color;
		green: Color;
		magenta: Color;
		red: Color;
		white: Color;
		yellow: Color;

		brightBlack: Color;
		brightBlue: Color;
		brightCyan: Color;
		brightGreen: Color;
		brightMagenta: Color;
		brightRed: Color;
		brightWhite: Color;
		brightYellow: Color;
	};
}
