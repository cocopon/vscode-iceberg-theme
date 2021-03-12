import {VscodePalette} from '../types/vscode-palette';
import {VscodeTheme} from '../types/vscode-theme';

export function create(palette: VscodePalette): VscodeTheme {
	const p = palette;
	return {
		name: 'Iceberg',
		colors: {
			'activityBar.background': p.editor.bg,
			'activityBar.foreground': p.editor.fg,
			'activityBar.inactiveForeground': p.tokens.comment,
			'activityBarBadge.background': p.colors.blue,
			'activityBarBadge.foreground': p.editor.bg,
			'badge.background': p.tokens.comment.withAlpha(0.125),
			'badge.foreground': p.tokens.comment,
			'breadcrumb.activeSelectionForeground': p.editor.fg,
			'breadcrumb.background': p.editor.bg,
			'breadcrumb.focusForeground': p.editor.fg,
			'breadcrumb.foreground': p.tokens.comment,
			'breadcrumbPicker.background': p.floating.bg,
			'button.background': p.editor.fg,
			'button.foreground': p.editor.bg,
			'button.hoverBackground': p.ansi.brightWhite,
			'debugConsole.errorForeground': p.colors.red,
			'debugConsole.infoForeground': p.colors.lblue,
			'debugConsole.sourceForeground': p.editor.fg,
			'debugConsole.warningForeground': p.colors.orange,
			'debugConsoleInputIcon.foreground': p.editor.fg,
			'debugIcon.breakpointCurrentStackframeForeground': p.colors.orange,
			'debugIcon.breakpointDisabledForeground': p.tokens.comment,
			'debugIcon.breakpointForeground': p.colors.red,
			'debugIcon.breakpointStackframeForeground': p.colors.green,
			'debugIcon.breakpointUnverifiedForeground': p.tokens.comment,
			'debugIcon.continueForeground': p.colors.blue,
			'debugIcon.disconnectForeground': p.colors.red.withAlpha(0.3),
			'debugIcon.pauseForeground': p.colors.blue,
			'debugIcon.restartForeground': p.colors.green,
			'debugIcon.startForeground': p.colors.green,
			'debugIcon.stepBackForeground': p.colors.blue,
			'debugIcon.stepIntoForeground': p.colors.blue,
			'debugIcon.stepOutForeground': p.colors.blue,
			'debugIcon.stepOverForeground': p.colors.blue,
			'debugIcon.stopForeground': p.colors.red,
			'debugTokenExpression.boolean': p.colors.purple,
			'debugTokenExpression.error': p.colors.red,
			'debugTokenExpression.name': p.editor.fg,
			'debugTokenExpression.number': p.colors.purple,
			'debugTokenExpression.string': p.colors.lblue,
			'debugTokenExpression.value': p.colors.purple,
			'debugToolBar.background': p.floating.bg,
			descriptionForeground: p.tokens.comment,
			'diffEditor.insertedTextBackground': p.colors.green.withAlpha(0.125),
			'diffEditor.removedTextBackground': p.colors.red.withAlpha(0.125),
			'dropdown.background': p.input.bg,
			'dropdown.border': p.input.bg,
			'dropdown.foreground': p.input.fg,
			'editor.background': p.editor.bg,
			'editor.foreground': p.editor.fg,
			'editor.findMatchBackground': p.colors.orange.withAlpha(0.5),
			'editor.findMatchHighlightBackground': p.colors.orange.withAlpha(0.25),
			'editor.foldBackground': p.fold.bg,
			'editor.lineHighlightBackground': p.editor.lineHighlight.bg,
			'editor.rangeHighlightBackground': p.colors.orange.withAlpha(0.1),
			'editor.selectionBackground': p.editor.selection.bg,
			'editor.wordHighlightBackground': p.colors.blue.withAlpha(0.25),
			'editor.wordHighlightStrongBackground': p.colors.blue.withAlpha(0.5),
			'editorBracketMatch.background': p.editor.bracketMatch.bg,
			'editorBracketMatch.border': p.editor.bracketMatch.bg,
			'editorCursor.foreground': p.editor.fg,
			'editorError.foreground': p.colors.red,
			'editorGroup.border': p.titleBar.active.bg,
			'editorGroup.dropBackground': p.colors.blue.withAlpha(0.125),
			'editorGroupHeader.tabsBackground': p.titleBar.active.bg,
			'editorGutter.addedBackground': p.colors.green.withAlpha(0.5),
			'editorGutter.background': p.editor.gutter.bg,
			'editorGutter.deletedBackground': p.colors.red.withAlpha(0.5),
			'editorGutter.modifiedBackground': p.colors.green.withAlpha(0.5),
			'editorHoverWidget.background': p.floating.bg,
			'editorHoverWidget.border': p.floating.bg,
			'editorHoverWidget.foreground': p.editor.fg,
			'editorHoverWidget.statusBarBackground': p.floating.bg,
			'editorIndentGuide.activeBackground': p.editor.whitespace.fg,
			'editorIndentGuide.background': p.editor.whitespace.fg.withAlpha(0.25),
			'editorLightBulb.foreground': p.colors.orange,
			'editorLightBulbAutoFix.foreground': p.colors.lblue,
			'editorLineNumber.activeForeground': p.editor.gutter.active.fg,
			'editorLineNumber.foreground': p.editor.gutter.fg,
			'editorLink.activeForeground': p.colors.blue,
			'editorMarkerNavigation.background': p.editor.gutter.bg,
			'editorOverviewRuler.addedForeground': p.colors.green.withAlpha(0.5),
			'editorOverviewRuler.border': p.editor.whitespace.fg.withAlpha(0.25),
			'editorOverviewRuler.deletedForeground': p.colors.red.withAlpha(0.5),
			'editorOverviewRuler.errorForeground': p.colors.red,
			'editorOverviewRuler.infoForeground': p.ansi.brightCyan.withAlpha(0.5),
			'editorOverviewRuler.modifiedForeground': p.colors.green.withAlpha(0.5),
			'editorOverviewRuler.warningForeground': p.colors.orange.withAlpha(0.5),
			'editorOverviewRuler.wordHighlightForeground': p.colors.blue.withAlpha(
				0.5,
			),
			'editorRuler.foreground': p.editor.whitespace.fg,
			'editorSuggestWidget.selectedBackground': p.editor.fg.withAlpha(0.125),
			'editorWhitespace.foreground': p.editor.whitespace.fg,
			'editorWidget.background': p.floating.bg,
			'editorWidget.border': p.floating.bg,
			'editorWarning.foreground': p.colors.orange,
			'extensionButton.prominentBackground': p.editor.fg,
			'extensionButton.prominentForeground': p.editor.bg,
			'extensionButton.prominentHoverBackground': p.ansi.brightWhite,
			foreground: p.editor.fg,
			focusBorder: p.editor.whitespace.fg,
			'gitDecoration.addedResourceForeground': p.colors.green,
			'gitDecoration.conflictingResourceForeground': p.colors.orange,
			'gitDecoration.deletedResourceForeground': p.colors.red,
			'gitDecoration.ignoredResourceForeground': p.tokens.comment,
			'gitDecoration.modifiedResourceForeground': p.colors.lblue,
			'gitDecoration.renamedResourceForeground': p.colors.purple,
			'gitDecoration.stageDeletedResourceForeground': p.colors.red,
			'gitDecoration.stageModifiedResourceForeground': p.colors.lblue,
			'gitDecoration.submoduleResourceForeground': p.tokens.comment,
			'gitDecoration.untrackedResourceForeground': p.tokens.comment,
			'input.background': p.input.bg,
			'input.foreground': p.input.fg,
			'input.placeholderForeground': p.editor.fg.withAlpha(0.25),
			'inputOption.activeBorder': p.colors.blue,
			'inputValidation.errorBackground': p.tints.red.bg,
			'inputValidation.errorBorder': p.colors.red,
			'list.activeSelectionBackground': p.list.activeSelection.bg,
			'list.activeSelectionForeground': p.editor.fg,
			'list.dropBackground': p.colors.blue.withAlpha(0.125),
			'list.errorForeground': p.colors.red,
			'list.highlightForeground': p.colors.green,
			'list.inactiveSelectionBackground': p.list.inactiveSelection.bg,
			'list.focusForeground': p.list.focus.fg,
			'list.hoverBackground': p.list.hover.bg,
			'list.warningForeground': p.colors.orange,
			'menu.background': p.floating.bg,
			'menu.foreground': p.editor.fg,
			'menu.selectionBackground': p.floating.list.selection.bg,
			'menu.selectionForeground': p.floating.list.selection.fg,
			'menu.separatorBackground': p.floating.separator,
			'menubar.selectionBackground': p.menubar.selection.bg,
			'menubar.selectionForeground': p.menubar.selection.fg,
			'merge.currentHeaderBackground': p.colors.purple.withAlpha(0.25),
			'merge.currentContentBackground': p.colors.purple.withAlpha(0.125),
			'merge.incomingHeaderBackground': p.colors.lblue.withAlpha(0.25),
			'merge.incomingContentBackground': p.colors.lblue.withAlpha(0.125),
			'notifications.background': p.floating.bg,
			'notifications.border': p.floating.separator,
			'notifications.foreground': p.editor.fg,
			'notificationCenterHeader.background': p.floating.bg,
			'notificationsErrorIcon.foreground': p.colors.red,
			'notificationsInfoIcon.foreground': p.colors.lblue,
			'notificationsWarningIcon.foreground': p.colors.orange,
			'panel.background': p.editor.bg,
			'panel.border': p.titleBar.active.bg,
			'panelTitle.activeForeground': p.editor.fg,
			'panelTitle.inactiveForeground': p.tokens.comment,
			'peekView.border': p.editor.whitespace.fg,
			'peekViewEditor.background': p.editor.bg,
			'peekViewEditor.matchHighlightBackground': p.colors.orange.withAlpha(
				0.25,
			),
			'peekViewEditorGutter.background': p.editor.gutter.bg,
			'peekViewResult.background': p.floating.bg,
			'peekViewResult.fileForeground': p.editor.fg,
			'peekViewResult.lineForeground': p.tokens.comment,
			'peekViewResult.matchHighlightBackground': p.colors.orange.withAlpha(
				0.25,
			),
			'peekViewResult.selectionBackground': p.editor.selection.bg,
			'peekViewTitle.background': p.floating.bg,
			'peekViewTitleDescription.foreground': p.tokens.comment,
			'peekViewTitleLabel.foreground': p.editor.fg,
			'pickerGroup.border': p.floating.separator,
			'pickerGroup.foreground': p.colors.blue,
			'problemsErrorIcon.foreground': p.colors.red,
			'problemsInfoIcon.foreground': p.colors.lblue,
			'problemsWarningIcon.foreground': p.colors.orange,
			'progressBar.background': p.colors.blue,
			'quickInput.background': p.floating.bg,
			'quickInput.foreground': p.tokens.comment,
			'quickInput.list.focusBackground': p.list.focus.bg,
			'scrollbar.shadow': p.floating.shadow,
			'scrollbarSlider.background': p.editor.whitespace.fg.withAlpha(0.5),
			'scrollbarSlider.hoverBackground': p.editor.whitespace.fg.withAlpha(
				0.628,
			),
			'selection.background': p.overlaySelection,
			'settings.headerForeground': p.editor.fg,
			'settings.modifiedItemIndicator': p.colors.lblue.withAlpha(0.298),
			'sideBar.background': p.editor.bg,
			'sideBar.border': p.titleBar.active.bg,
			'sideBar.dropBackground': p.colors.blue.withAlpha(0.125),
			'sideBar.foreground': p.editor.fg,
			'sideBarSectionHeader.background': p.editor.whitespace.fg,
			'sideBarSectionHeader.foreground': p.tokens.comment,
			'statusBar.background': p.statusBar.bg,
			'statusBar.debuggingBackground': p.statusBar.bg,
			'statusBar.debuggingForeground': p.statusBar.fg,
			'statusBar.foreground': p.statusBar.fg,
			'statusBar.noFolderBackground': p.statusBar.bg,
			'statusBar.noFolderForeground': p.statusBar.fg,
			'statusBarItem.hoverBackground': p.statusBar.item.hover.bg,
			'symbolIcon.classForeground': p.colors.orange,
			'symbolIcon.constructorForeground': p.colors.orange,
			'symbolIcon.enumeratorForeground': p.colors.orange,
			'symbolIcon.enumeratorMemberForeground': p.colors.lblue,
			'symbolIcon.eventForeground': p.colors.orange,
			'symbolIcon.fieldForeground': p.colors.lblue,
			'symbolIcon.functionForeground': p.colors.purple,
			'symbolIcon.interfaceForeground': p.colors.lblue,
			'symbolIcon.methodForeground': p.colors.purple,
			'symbolIcon.variableForeground': p.colors.lblue,
			'tab.activeBackground': p.tab.active.bg,
			'tab.activeForeground': p.tab.active.fg,
			'tab.border': p.titleBar.active.bg,
			'tab.hoverBackground': p.tab.hover.bg,
			'tab.inactiveBackground': p.tab.inactive.bg,
			'tab.inactiveForeground': p.tab.inactive.fg,
			'tab.unfocusedActiveForeground': p.tab.unfocusedActive.fg,
			'tab.unfocusedInactiveForeground': p.tab.unfocusedInactive.fg,
			'terminal.ansiBlack': p.ansi.black,
			'terminal.ansiBlue': p.ansi.blue,
			'terminal.ansiBrightBlack': p.ansi.brightBlack,
			'terminal.ansiBrightBlue': p.ansi.brightBlue,
			'terminal.ansiBrightCyan': p.ansi.brightCyan,
			'terminal.ansiBrightGreen': p.ansi.brightGreen,
			'terminal.ansiBrightMagenta': p.ansi.brightMagenta,
			'terminal.ansiBrightRed': p.ansi.brightRed,
			'terminal.ansiBrightWhite': p.ansi.brightWhite,
			'terminal.ansiBrightYellow': p.ansi.brightYellow,
			'terminal.ansiCyan': p.ansi.cyan,
			'terminal.ansiGreen': p.ansi.green,
			'terminal.ansiMagenta': p.ansi.magenta,
			'terminal.ansiRed': p.ansi.red,
			'terminal.ansiWhite': p.ansi.white,
			'terminal.ansiYellow': p.ansi.yellow,
			'terminal.foreground': p.ansi.white,
			'terminal.selectionBackground': p.overlaySelection,
			'textLink.activeForeground': p.colors.blue,
			'textLink.foreground': p.colors.blue,
			'titleBar.activeBackground': p.titleBar.active.bg,
			'titleBar.activeForeground': p.titleBar.active.fg,
			'titleBar.inactiveBackground': p.titleBar.inactive.bg,
			'titleBar.inactiveForeground': p.titleBar.inactive.fg,
			'tree.indentGuidesStroke': p.editor.whitespace.fg,
			'widget.shadow': p.floating.shadow,
		},
		tokenColors: [
			{
				scope: 'comment',
				settings: {
					foreground: p.tokens.comment,
				},
			},
			{
				scope: ['constant', 'support.constant'],
				settings: {
					foreground: p.colors.purple,
				},
			},
			{
				scope: 'entity.other.attribute-name',
				settings: {
					foreground: p.colors.purple,
				},
			},
			{
				scope: 'entity.name.class',
				settings: {
					foreground: p.editor.fg,
				},
			},
			{
				scope: 'entity.name.function',
				settings: {
					foreground: p.editor.fg,
				},
			},
			{
				scope: 'entity.name.section',
				settings: {
					foreground: p.colors.orange,
				},
			},
			{
				scope: 'entity.name.tag',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: [
					'keyword',
					'keyword.operator.expression',
					'keyword.operator.new',
				],
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'keyword.control.at-rule, keyword.control.content',
				settings: {
					foreground: p.colors.green,
				},
			},
			{
				scope: 'keyword.function',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'keyword.operator',
				settings: {
					foreground: p.editor.fg,
				},
			},
			{
				scope: 'keyword.other.unit',
				settings: {
					foreground: p.colors.purple,
				},
			},
			{
				scope: 'markup.bold',
				settings: {
					fontStyle: 'bold',
					foreground: p.ansi.brightWhite,
				},
			},
			{
				scope: 'markup.fenced_code.block',
				settings: {
					foreground: p.tokens.comment,
				},
			},
			{
				scope: 'markup.inline.raw.string',
				settings: {
					foreground: p.colors.purple,
				},
			},
			{
				scope: 'meta.link',
				settings: {
					foreground: p.colors.lblue,
				},
			},
			{
				scope: 'meta.brace.square',
				settings: {
					foreground: p.editor.fg,
				},
			},
			{
				scope: [
					'entity.name.function.method',
					'markup.heading',
					'meta.definition.method',
				],
				settings: {
					foreground: p.colors.orange,
				},
			},
			{
				scope: 'meta.object-literal.key',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'meta.tag.attributes',
				settings: {
					foreground: p.colors.purple,
				},
			},
			{
				scope: 'meta.tag.sgml.doctype',
				settings: {
					foreground: p.tokens.comment,
				},
			},
			{
				scope: 'meta.type.annotation',
				settings: {
					foreground: p.colors.green,
				},
			},
			{
				scope: 'punctuation.definition.template-expression',
				settings: {
					foreground: p.colors.green,
				},
			},
			{
				scope: 'punctuation.definition.block',
				settings: {
					foreground: p.editor.fg,
				},
			},
			{
				scope: 'punctuation.definition.tag',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'storage',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'storage.type.function',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'string',
				settings: {
					foreground: p.colors.lblue,
				},
			},
			{
				scope: 'support',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'support.type.property-name',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'variable.language.this',
				settings: {
					foreground: p.colors.green,
				},
			},
			{
				scope: 'text',
				settings: {
					foreground: p.editor.fg,
				},
			},
			{
				scope: 'meta.diff.header',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'meta.diff.range',
				settings: {
					foreground: p.colors.lblue,
				},
			},
			{
				scope:
					'entity.other.attribute-name.class.css, entity.other.attribute-name.parent-selector-suffix.css',
				settings: {
					foreground: p.editor.fg,
				},
			},
			{
				scope: 'markup.deleted.diff',
				settings: {
					foreground: p.colors.red,
				},
			},
			{
				scope: 'markup.inserted.diff',
				settings: {
					foreground: p.colors.green,
				},
			},
			{
				scope: 'support.type.class.flowtype',
				settings: {
					foreground: p.colors.green,
				},
			},
			{
				scope: 'punctuation.definition.block.tag.jsdoc',
				settings: {
					foreground: p.colors.green,
				},
			},
			{
				scope: 'storage.type.class.jsdoc',
				settings: {
					foreground: p.colors.green,
				},
			},
			{
				scope: 'variable.other.jsdoc',
				settings: {
					foreground: p.editor.fg,
				},
			},
			{
				scope: 'entity.name.import.go',
				settings: {
					foreground: p.colors.lblue,
				},
			},
			{
				scope: 'markup.underline.link',
				settings: {
					foreground: p.colors.blue,
				},
			},
			{
				scope: 'keyword.other.important.scss',
				settings: {
					foreground: p.colors.orange,
				},
			},
			{
				scope: 'variable.interpolation.scss',
				settings: {
					foreground: p.colors.green,
				},
			},
			{
				scope: 'variable.scss',
				settings: {
					foreground: p.colors.lblue,
				},
			},
		],
	};
}
