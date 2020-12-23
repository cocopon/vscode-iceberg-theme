import {Color} from '../color';

export interface Bg {
	bg: Color;
}
export interface Fg {
	fg: Color;
}
export type BgFg = Bg & Fg;

export interface Palette {
	colors: {
		red: Color;
		orange: Color;
		green: Color;
		lblue: Color;
		blue: Color;
		purple: Color;
	};
	tints: {
		blue: BgFg;
		green: BgFg;
		lblue: BgFg;
		purple: BgFg;
		red: BgFg;
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
