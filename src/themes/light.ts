import {VscodePalette} from '../types/vscode-palette';
import {VscodeTheme} from '../types/vscode-theme';
import * as Dark from './dark';

export function create(palette: VscodePalette): VscodeTheme {
	const p = palette;
	const t = Dark.create(p);

	t.name = 'Iceberg Light';
	t.colors['editor.wordHighlightBackground'] = p.colors.blue.withAlpha(0.15);
	t.colors['editor.wordHighlightStrongBackground'] = p.colors.blue.withAlpha(
		0.3,
	);
	t.colors['sideBarSectionHeader.background'] = p.titleBar.active.bg;

	return t;
}
