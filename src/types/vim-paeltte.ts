import {Bg, BgFg, Palette} from './palette';
import {Color} from '../color';

export interface VimPalette extends Palette {
	comment: Color;
	cursorlinenr: BgFg;
	linenr: BgFg;
	matchparen: Bg;
	normal: BgFg;
	statuslinenc: BgFg;
	visual: Color;
	whitespace: Color;
}
