import {Palette} from '../palette';
import * as Dark from './dark';
import {Theme} from '../theme';

export function create(palette: Palette): Theme {
	const p = palette;
	const t = Dark.create(p);

	t.name = 'Iceberg Light';
	t.colors['editor.wordHighlightBackground'] = p.blue.withAlpha(0.15);
	t.colors['editor.wordHighlightStrongBackground'] = p.blue.withAlpha(0.3);

	return t;
}
