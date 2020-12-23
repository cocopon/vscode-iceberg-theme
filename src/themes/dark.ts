import {Palette} from '../palette';
import {Theme} from '../theme';

export function create(palette: Palette): Theme {
	const p = palette;
	return {
		name: 'Iceberg',
		colors: {
			'activityBar.background': p.normal.bg,
			'activityBar.foreground': p.normal.fg,
			'activityBar.inactiveForeground': p.comment,
			'activityBarBadge.background': p.blue,
			'activityBarBadge.foreground': p.normal.bg,
			'badge.background': p.comment.withAlpha(0.125),
			'badge.foreground': p.comment,
			'breadcrumb.activeSelectionForeground': p.normal.fg,
			'breadcrumb.background': p.normal.bg,
			'breadcrumb.focusForeground': p.normal.fg,
			'breadcrumb.foreground': p.comment,
			'breadcrumbPicker.background': p.vscode.floating.bg,
			'button.background': p.normal.fg,
			'button.foreground': p.normal.bg,
			'button.hoverBackground': p.ansi.brightWhite,
			'debugIcon.breakpointCurrentStackframeForeground': p.orange,
			'debugIcon.breakpointDisabledForeground': p.comment,
			'debugIcon.breakpointForeground': p.red,
			'debugIcon.breakpointStackframeForeground': p.green,
			'debugIcon.breakpointUnverifiedForeground': p.comment,
			'debugIcon.continueForeground': p.blue,
			'debugIcon.disconnectForeground': p.red.withAlpha(0.3),
			'debugIcon.pauseForeground': p.blue,
			'debugIcon.restartForeground': p.green,
			'debugIcon.startForeground': p.green,
			'debugIcon.stepBackForeground': p.blue,
			'debugIcon.stepIntoForeground': p.blue,
			'debugIcon.stepOutForeground': p.blue,
			'debugIcon.stepOverForeground': p.blue,
			'debugIcon.stopForeground': p.red,
			'debugToolBar.background': p.vscode.floating.bg,
			descriptionForeground: p.comment,
			'diffEditor.insertedTextBackground': p.green.withAlpha(0.125),
			'diffEditor.removedTextBackground': p.red.withAlpha(0.125),
			'dropdown.background': p.statuslinenc.bg,
			'dropdown.border': p.statuslinenc.bg,
			'dropdown.foreground': p.normal.fg,
			'editor.background': p.normal.bg,
			'editor.foreground': p.normal.fg,
			'editor.findMatchBackground': p.orange.withAlpha(0.5),
			'editor.findMatchHighlightBackground': p.orange.withAlpha(0.25),
			'editor.foldBackground': p.linenr.bg,
			'editor.lineHighlightBackground': p.linenr.bg,
			'editor.rangeHighlightBackground': p.orange.withAlpha(0.1),
			'editor.selectionBackground': p.visual,
			'editor.wordHighlightBackground': p.blue.withAlpha(0.25),
			'editor.wordHighlightStrongBackground': p.blue.withAlpha(0.5),
			'editorBracketMatch.background': p.matchparen.bg,
			'editorBracketMatch.border': p.matchparen.bg,
			'editorCursor.foreground': p.normal.fg,
			'editorError.foreground': p.red,
			'editorGroup.border': p.statuslinenc.bg,
			'editorGroup.dropBackground': p.blue.withAlpha(0.125),
			'editorGroupHeader.tabsBackground': p.statuslinenc.bg,
			'editorGutter.addedBackground': p.green.withAlpha(0.5),
			'editorGutter.background': p.linenr.bg,
			'editorGutter.deletedBackground': p.red.withAlpha(0.5),
			'editorGutter.modifiedBackground': p.green.withAlpha(0.5),
			'editorHoverWidget.background': p.vscode.floating.bg,
			'editorHoverWidget.border': p.vscode.floating.bg,
			'editorHoverWidget.foreground': p.normal.fg,
			'editorHoverWidget.statusBarBackground': p.vscode.floating.bg,
			'editorIndentGuide.activeBackground': p.whitespace,
			'editorIndentGuide.background': p.whitespace.withAlpha(0.25),
			'editorLightBulb.foreground': p.orange,
			'editorLightBulbAutoFix.foreground': p.lblue,
			'editorLineNumber.activeForeground': p.cursorlinenr.fg,
			'editorLineNumber.foreground': p.linenr.fg,
			'editorLink.activeForeground': p.blue,
			'editorMarkerNavigation.background': p.linenr.bg,
			'editorOverviewRuler.addedForeground': p.green.withAlpha(0.5),
			'editorOverviewRuler.border': p.whitespace.withAlpha(0.25),
			'editorOverviewRuler.deletedForeground': p.red.withAlpha(0.5),
			'editorOverviewRuler.errorForeground': p.red,
			'editorOverviewRuler.infoForeground': p.ansi.brightCyan.withAlpha(0.5),
			'editorOverviewRuler.modifiedForeground': p.green.withAlpha(0.5),
			'editorOverviewRuler.warningForeground': p.orange.withAlpha(0.5),
			'editorOverviewRuler.wordHighlightForeground': p.blue.withAlpha(0.5),
			'editorRuler.foreground': p.linenr.fg,
			'editorSuggestWidget.selectedBackground': p.normal.fg.withAlpha(0.125),
			'editorWhitespace.foreground': p.whitespace,
			'editorWidget.background': p.vscode.floating.bg,
			'editorWidget.border': p.vscode.floating.bg,
			'editorWarning.foreground': p.orange,
			'extensionButton.prominentBackground': p.normal.fg,
			'extensionButton.prominentForeground': p.normal.bg,
			'extensionButton.prominentHoverBackground': p.ansi.brightWhite,
			foreground: p.normal.fg,
			focusBorder: p.whitespace,
			'gitDecoration.addedResourceForeground': p.green,
			'gitDecoration.conflictingResourceForeground': p.orange,
			'gitDecoration.deletedResourceForeground': p.red,
			'gitDecoration.ignoredResourceForeground': p.comment,
			'gitDecoration.modifiedResourceForeground': p.lblue,
			'gitDecoration.stageDeletedResourceForeground': p.red,
			'gitDecoration.stageModifiedResourceForeground': p.lblue,
			'gitDecoration.submoduleResourceForeground': p.comment,
			'gitDecoration.untrackedResourceForeground': p.comment,
			'input.background': p.statuslinenc.bg,
			'input.foreground': p.normal.fg,
			'input.placeholderForeground': p.normal.fg.withAlpha(0.25),
			'inputOption.activeBorder': p.blue,
			'inputValidation.errorBackground': p.tint.red.bg,
			'inputValidation.errorBorder': p.red,
			'list.activeSelectionBackground': p.linenr.bg,
			'list.activeSelectionForeground': p.normal.fg,
			'list.dropBackground': p.blue.withAlpha(0.125),
			'list.errorForeground': p.red,
			'list.highlightForeground': p.green,
			'list.inactiveSelectionBackground': p.linenr.bg,
			'list.focusBackground': p.cursorlinenr.bg,
			'list.focusForeground': p.cursorlinenr.fg,
			'list.hoverBackground': p.linenr.bg,
			'list.warningForeground': p.orange,
			'menu.background': p.vscode.floating.bg,
			'menu.foreground': p.normal.fg,
			'menu.selectionBackground': p.cursorlinenr.bg,
			'menu.selectionForeground': p.cursorlinenr.fg,
			'menu.separatorBackground': p.vscode.floating.separator,
			'menubar.selectionBackground': p.linenr.bg,
			'menubar.selectionForeground': p.normal.fg,
			'merge.currentHeaderBackground': p.purple.withAlpha(0.25),
			'merge.currentContentBackground': p.purple.withAlpha(0.125),
			'merge.incomingHeaderBackground': p.lblue.withAlpha(0.25),
			'merge.incomingContentBackground': p.lblue.withAlpha(0.125),
			'notifications.background': p.vscode.floating.bg,
			'notifications.border': p.vscode.floating.separator,
			'notifications.foreground': p.normal.fg,
			'notificationCenterHeader.background': p.vscode.floating.bg,
			'notificationsErrorIcon.foreground': p.red,
			'notificationsInfoIcon.foreground': p.lblue,
			'notificationsWarningIcon.foreground': p.orange,
			'panel.background': p.normal.bg,
			'panel.border': p.statuslinenc.bg,
			'panelTitle.activeForeground': p.normal.fg,
			'panelTitle.inactiveForeground': p.comment,
			'peekView.border': p.whitespace,
			'peekViewEditor.background': p.normal.bg,
			'peekViewEditor.matchHighlightBackground': p.orange.withAlpha(0.25),
			'peekViewEditorGutter.background': p.linenr.bg,
			'peekViewResult.background': p.vscode.floating.bg,
			'peekViewResult.fileForeground': p.normal.fg,
			'peekViewResult.lineForeground': p.comment,
			'peekViewResult.matchHighlightBackground': p.orange.withAlpha(0.25),
			'peekViewResult.selectionBackground': p.visual,
			'peekViewTitle.background': p.vscode.floating.bg,
			'peekViewTitleDescription.foreground': p.comment,
			'peekViewTitleLabel.foreground': p.normal.fg,
			'pickerGroup.border': p.vscode.floating.separator,
			'pickerGroup.foreground': p.blue,
			'problemsErrorIcon.foreground': p.red,
			'problemsInfoIcon.foreground': p.lblue,
			'problemsWarningIcon.foreground': p.orange,
			'progressBar.background': p.blue,
			'quickInput.background': p.vscode.floating.bg,
			'quickInput.foreground': p.comment,
			'scrollbar.shadow': p.vscode.floating.shadow,
			'scrollbarSlider.background': p.whitespace.withAlpha(0.5),
			'scrollbarSlider.hoverBackground': p.whitespace.withAlpha(0.628),
			'selection.background': p.vscode.overlaySelection,
			'settings.headerForeground': p.normal.fg,
			'settings.modifiedItemIndicator': p.lblue.withAlpha(0.298),
			'sideBar.background': p.normal.bg,
			'sideBar.border': p.statuslinenc.bg,
			'sideBar.dropBackground': p.blue.withAlpha(0.125),
			'sideBar.foreground': p.normal.fg,
			'sideBarSectionHeader.background': p.whitespace,
			'sideBarSectionHeader.foreground': p.comment,
			'statusBar.background': p.statuslinenc.bg,
			'statusBar.debuggingBackground': p.statuslinenc.bg,
			'statusBar.debuggingForeground': p.comment,
			'statusBar.foreground': p.comment,
			'statusBar.noFolderBackground': p.statuslinenc.bg,
			'statusBar.noFolderForeground': p.comment,
			'statusBarItem.hoverBackground': p.comment.withAlpha(0.125),
			'symbolIcon.classForeground': p.orange,
			'symbolIcon.constructorForeground': p.orange,
			'symbolIcon.enumeratorForeground': p.orange,
			'symbolIcon.enumeratorMemberForeground': p.lblue,
			'symbolIcon.eventForeground': p.orange,
			'symbolIcon.fieldForeground': p.lblue,
			'symbolIcon.functionForeground': p.purple,
			'symbolIcon.interfaceForeground': p.lblue,
			'symbolIcon.methodForeground': p.purple,
			'symbolIcon.variableForeground': p.lblue,
			'tab.activeBackground': p.normal.bg,
			'tab.activeForeground': p.normal.fg,
			'tab.border': p.statuslinenc.bg,
			'tab.hoverBackground': p.linenr.bg,
			'tab.inactiveBackground': p.statuslinenc.bg,
			'tab.inactiveForeground': p.comment,
			'tab.unfocusedActiveForeground': p.comment,
			'tab.unfocusedInactiveForeground': p.comment.withAlpha(0.5),
			'terminal.ansiBlack': p.linenr.bg,
			'terminal.ansiBlue': p.blue,
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
			'terminal.selectionBackground': p.vscode.overlaySelection,
			'textLink.activeForeground': p.blue,
			'textLink.foreground': p.blue,
			'titleBar.activeBackground': p.statuslinenc.bg,
			'titleBar.activeForeground': p.normal.fg,
			'titleBar.inactiveBackground': p.statuslinenc.bg,
			'titleBar.inactiveForeground': p.comment,
			'tree.indentGuidesStroke': p.whitespace,
			'widget.shadow': p.vscode.floating.shadow,
		},
		tokenColors: [
			{
				scope: 'comment',
				settings: {
					foreground: p.comment,
				},
			},
			{
				scope: ['constant', 'support.constant'],
				settings: {
					foreground: p.purple,
				},
			},
			{
				scope: 'entity.other.attribute-name',
				settings: {
					foreground: p.purple,
				},
			},
			{
				scope: 'entity.name.class',
				settings: {
					foreground: p.normal.fg,
				},
			},
			{
				scope: 'entity.name.function',
				settings: {
					foreground: p.normal.fg,
				},
			},
			{
				scope: 'entity.name.section',
				settings: {
					foreground: p.orange,
				},
			},
			{
				scope: 'entity.name.tag',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: [
					'keyword',
					'keyword.operator.expression',
					'keyword.operator.new',
				],
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'keyword.control.at-rule, keyword.control.content',
				settings: {
					foreground: p.green,
				},
			},
			{
				scope: 'keyword.function',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'keyword.operator',
				settings: {
					foreground: p.normal.fg,
				},
			},
			{
				scope: 'keyword.other.unit',
				settings: {
					foreground: p.purple,
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
					foreground: p.comment,
				},
			},
			{
				scope: 'markup.inline.raw.string',
				settings: {
					foreground: p.purple,
				},
			},
			{
				scope: 'meta.link',
				settings: {
					foreground: p.lblue,
				},
			},
			{
				scope: 'meta.brace.square',
				settings: {
					foreground: p.normal.fg,
				},
			},
			{
				scope: [
					'entity.name.function.method',
					'markup.heading',
					'meta.definition.method',
				],
				settings: {
					foreground: p.orange,
				},
			},
			{
				scope: 'meta.object-literal.key',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'meta.tag.attributes',
				settings: {
					foreground: p.purple,
				},
			},
			{
				scope: 'meta.tag.sgml.doctype',
				settings: {
					foreground: p.comment,
				},
			},
			{
				scope: 'meta.type.annotation',
				settings: {
					foreground: p.green,
				},
			},
			{
				scope: 'punctuation.definition.template-expression',
				settings: {
					foreground: p.green,
				},
			},
			{
				scope: 'punctuation.definition.block',
				settings: {
					foreground: p.normal.fg,
				},
			},
			{
				scope: 'punctuation.definition.tag',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'storage',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'storage.type.function',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'string',
				settings: {
					foreground: p.lblue,
				},
			},
			{
				scope: 'support',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'support.type.property-name',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'variable.language.this',
				settings: {
					foreground: p.green,
				},
			},
			{
				scope: 'text',
				settings: {
					foreground: p.normal.fg,
				},
			},
			{
				scope: 'meta.diff.header',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'meta.diff.range',
				settings: {
					foreground: p.lblue,
				},
			},
			{
				scope:
					'entity.other.attribute-name.class.css, entity.other.attribute-name.parent-selector-suffix.css',
				settings: {
					foreground: p.normal.fg,
				},
			},
			{
				scope: 'markup.deleted.diff',
				settings: {
					foreground: p.red,
				},
			},
			{
				scope: 'markup.inserted.diff',
				settings: {
					foreground: p.green,
				},
			},
			{
				scope: 'support.type.class.flowtype',
				settings: {
					foreground: p.green,
				},
			},
			{
				scope: 'punctuation.definition.block.tag.jsdoc',
				settings: {
					foreground: p.green,
				},
			},
			{
				scope: 'storage.type.class.jsdoc',
				settings: {
					foreground: p.green,
				},
			},
			{
				scope: 'variable.other.jsdoc',
				settings: {
					foreground: p.normal.fg,
				},
			},
			{
				scope: 'entity.name.import.go',
				settings: {
					foreground: p.lblue,
				},
			},
			{
				scope: 'markup.underline.link',
				settings: {
					foreground: p.blue,
				},
			},
			{
				scope: 'keyword.other.important.scss',
				settings: {
					foreground: p.orange,
				},
			},
			{
				scope: 'variable.interpolation.scss',
				settings: {
					foreground: p.green,
				},
			},
			{
				scope: 'variable.scss',
				settings: {
					foreground: p.lblue,
				},
			},
		],
	};
}
