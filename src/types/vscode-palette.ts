import {Color} from '../color';
import {Bg, BgFg, Fg, Palette} from './palette';

export interface VscodePalette extends Palette {
	editor: BgFg & {
		bracketMatch: Bg;
		gutter: BgFg & {
			active: Fg;
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
