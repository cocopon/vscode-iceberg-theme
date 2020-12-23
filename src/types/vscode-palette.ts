import {Color} from '../color';

interface Bg {
	bg: Color;
}
interface Fg {
	fg: Color;
}
type BgFg = Bg & Fg;

export interface VscodePalette {
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

	editor: BgFg & {
		bracketMatch: Bg;
		gutter: BgFg & {
			active: {
				fg: Color;
			};
		};
		lineHighlight: Bg;
		selection: Bg;
		whitespace: Fg;
	};
	floating: Bg & {
		list: {
			selection: BgFg;
		};
		separator: Color;
		shadow: Color;
	};
	fold: Bg;
	input: BgFg;
	list: {
		activeSelection: BgFg;
		focus: BgFg;
		hover: Bg;
		inactiveSelection: Bg;
	};
	menubar: {
		selection: BgFg;
	};
	overlaySelection: Color;
	statusBar: BgFg & {
		item: {
			hover: Bg;
		};
	};
	tab: {
		active: BgFg;
		hover: Bg;
		inactive: BgFg;
		unfocusedActive: Fg;
		unfocusedInactive: Fg;
	};
	titleBar: {
		active: BgFg;
		inactive: BgFg;
	};
	tokens: {
		comment: Color;
	};
}
