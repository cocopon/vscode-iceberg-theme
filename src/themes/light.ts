import {VscodePalette} from '../vscode-palette';
import {VscodeTheme} from '../vscode-theme';
import * as Dark from './dark';

export function create(palette: VscodePalette): VscodeTheme {
	const p = palette;
	const t = Dark.create(p);

	t.name = 'Iceberg Light';
	t.colors['editor.wordHighlightBackground'] = p.blue.withAlpha(0.15);
	t.colors['editor.wordHighlightStrongBackground'] = p.blue.withAlpha(0.3);
	t.colors['sideBarSectionHeader.background'] = p.statuslinenc.bg;

	return t;
}
