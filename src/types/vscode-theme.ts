import {Color} from '../color';

type ThemeValue = string | Color;

interface TokenColor {
	scope: string | string[];
	settings: {
		fontStyle?: ThemeValue;
		foreground?: ThemeValue;
	};
}

export interface VscodeTheme {
	name: string;
	colors: {
		'activityBar.background': ThemeValue;
		'activityBar.foreground': ThemeValue;
		'activityBar.inactiveForeground': ThemeValue;
		'activityBarBadge.background': ThemeValue;
		'activityBarBadge.foreground': ThemeValue;
		'badge.background': ThemeValue;
		'badge.foreground': ThemeValue;
		'breadcrumb.activeSelectionForeground': ThemeValue;
		'breadcrumb.background': ThemeValue;
		'breadcrumb.focusForeground': ThemeValue;
		'breadcrumb.foreground': ThemeValue;
		'breadcrumbPicker.background': ThemeValue;
		'button.background': ThemeValue;
		'button.foreground': ThemeValue;
		'button.hoverBackground': ThemeValue;
		'debugConsole.errorForeground': ThemeValue;
		'debugConsole.infoForeground': ThemeValue;
		'debugConsole.sourceForeground': ThemeValue;
		'debugConsole.warningForeground': ThemeValue;
		'debugConsoleInputIcon.foreground': ThemeValue;
		'debugIcon.breakpointCurrentStackframeForeground': ThemeValue;
		'debugIcon.breakpointDisabledForeground': ThemeValue;
		'debugIcon.breakpointForeground': ThemeValue;
		'debugIcon.breakpointStackframeForeground': ThemeValue;
		'debugIcon.breakpointUnverifiedForeground': ThemeValue;
		'debugIcon.continueForeground': ThemeValue;
		'debugIcon.disconnectForeground': ThemeValue;
		'debugIcon.pauseForeground': ThemeValue;
		'debugIcon.restartForeground': ThemeValue;
		'debugIcon.startForeground': ThemeValue;
		'debugIcon.stepBackForeground': ThemeValue;
		'debugIcon.stepIntoForeground': ThemeValue;
		'debugIcon.stepOutForeground': ThemeValue;
		'debugIcon.stepOverForeground': ThemeValue;
		'debugIcon.stopForeground': ThemeValue;
		'debugTokenExpression.boolean': ThemeValue;
		'debugTokenExpression.error': ThemeValue;
		'debugTokenExpression.name': ThemeValue;
		'debugTokenExpression.number': ThemeValue;
		'debugTokenExpression.string': ThemeValue;
		'debugTokenExpression.value': ThemeValue;
		'debugToolBar.background': ThemeValue;
		descriptionForeground: ThemeValue;
		'diffEditor.insertedTextBackground': ThemeValue;
		'diffEditor.removedTextBackground': ThemeValue;
		'dropdown.background': ThemeValue;
		'dropdown.border': ThemeValue;
		'dropdown.foreground': ThemeValue;
		'editor.background': ThemeValue;
		'editor.foreground': ThemeValue;
		'editor.findMatchBackground': ThemeValue;
		'editor.findMatchHighlightBackground': ThemeValue;
		'editor.foldBackground': ThemeValue;
		'editor.lineHighlightBackground': ThemeValue;
		'editor.rangeHighlightBackground': ThemeValue;
		'editor.selectionBackground': ThemeValue;
		'editor.wordHighlightBackground': ThemeValue;
		'editor.wordHighlightStrongBackground': ThemeValue;
		'editorBracketHighlight.foreground1': ThemeValue;
		'editorBracketHighlight.foreground2': ThemeValue;
		'editorBracketHighlight.foreground3': ThemeValue;
		'editorBracketHighlight.foreground4': ThemeValue;
		'editorBracketHighlight.foreground5': ThemeValue;
		'editorBracketHighlight.foreground6': ThemeValue;
		'editorBracketHighlight.unexpectedBracket.foreground': ThemeValue;
		'editorBracketMatch.background': ThemeValue;
		'editorBracketMatch.border': ThemeValue;
		'editorCursor.foreground': ThemeValue;
		'editorError.foreground': ThemeValue;
		'editorGroup.border': ThemeValue;
		'editorGroup.dropBackground': ThemeValue;
		'editorGroupHeader.tabsBackground': ThemeValue;
		'editorGutter.addedBackground': ThemeValue;
		'editorGutter.background': ThemeValue;
		'editorGutter.deletedBackground': ThemeValue;
		'editorGutter.modifiedBackground': ThemeValue;
		'editorHoverWidget.background': ThemeValue;
		'editorHoverWidget.border': ThemeValue;
		'editorHoverWidget.foreground': ThemeValue;
		'editorHoverWidget.statusBarBackground': ThemeValue;
		'editorIndentGuide.activeBackground': ThemeValue;
		'editorIndentGuide.background': ThemeValue;
		'editorLightBulb.foreground': ThemeValue;
		'editorLightBulbAutoFix.foreground': ThemeValue;
		'editorLineNumber.activeForeground': ThemeValue;
		'editorLineNumber.foreground': ThemeValue;
		'editorLink.activeForeground': ThemeValue;
		'editorMarkerNavigation.background': ThemeValue;
		'editorOverviewRuler.addedForeground': ThemeValue;
		'editorOverviewRuler.border': ThemeValue;
		'editorOverviewRuler.deletedForeground': ThemeValue;
		'editorOverviewRuler.errorForeground': ThemeValue;
		'editorOverviewRuler.infoForeground': ThemeValue;
		'editorOverviewRuler.modifiedForeground': ThemeValue;
		'editorOverviewRuler.warningForeground': ThemeValue;
		'editorOverviewRuler.wordHighlightForeground': ThemeValue;
		'editorRuler.foreground': ThemeValue;
		'editorSuggestWidget.selectedBackground': ThemeValue;
		'editorWhitespace.foreground': ThemeValue;
		'editorWidget.background': ThemeValue;
		'editorWidget.border': ThemeValue;
		'editorWarning.foreground': ThemeValue;
		'extensionButton.prominentBackground': ThemeValue;
		'extensionButton.prominentForeground': ThemeValue;
		'extensionButton.prominentHoverBackground': ThemeValue;
		foreground: ThemeValue;
		focusBorder: ThemeValue;
		'gitDecoration.addedResourceForeground': ThemeValue;
		'gitDecoration.conflictingResourceForeground': ThemeValue;
		'gitDecoration.deletedResourceForeground': ThemeValue;
		'gitDecoration.ignoredResourceForeground': ThemeValue;
		'gitDecoration.modifiedResourceForeground': ThemeValue;
		'gitDecoration.renamedResourceForeground': ThemeValue;
		'gitDecoration.stageDeletedResourceForeground': ThemeValue;
		'gitDecoration.stageModifiedResourceForeground': ThemeValue;
		'gitDecoration.submoduleResourceForeground': ThemeValue;
		'gitDecoration.untrackedResourceForeground': ThemeValue;
		'input.background': ThemeValue;
		'input.foreground': ThemeValue;
		'input.placeholderForeground': ThemeValue;
		'inputOption.activeBorder': ThemeValue;
		'inputValidation.errorBackground': ThemeValue;
		'inputValidation.errorBorder': ThemeValue;
		'list.activeSelectionBackground': ThemeValue;
		'list.activeSelectionForeground': ThemeValue;
		'list.dropBackground': ThemeValue;
		'list.errorForeground': ThemeValue;
		'list.highlightForeground': ThemeValue;
		'list.inactiveSelectionBackground': ThemeValue;
		'list.focusForeground': ThemeValue;
		'list.hoverBackground': ThemeValue;
		'list.warningForeground': ThemeValue;
		'menu.background': ThemeValue;
		'menu.foreground': ThemeValue;
		'menu.selectionBackground': ThemeValue;
		'menu.selectionForeground': ThemeValue;
		'menu.separatorBackground': ThemeValue;
		'menubar.selectionBackground': ThemeValue;
		'menubar.selectionForeground': ThemeValue;
		'merge.currentHeaderBackground': ThemeValue;
		'merge.currentContentBackground': ThemeValue;
		'merge.incomingHeaderBackground': ThemeValue;
		'merge.incomingContentBackground': ThemeValue;
		'notifications.background': ThemeValue;
		'notifications.border': ThemeValue;
		'notifications.foreground': ThemeValue;
		'notificationCenterHeader.background': ThemeValue;
		'notificationsErrorIcon.foreground': ThemeValue;
		'notificationsInfoIcon.foreground': ThemeValue;
		'notificationsWarningIcon.foreground': ThemeValue;
		'panel.background': ThemeValue;
		'panel.border': ThemeValue;
		'panelTitle.activeForeground': ThemeValue;
		'panelTitle.inactiveForeground': ThemeValue;
		'peekView.border': ThemeValue;
		'peekViewEditor.background': ThemeValue;
		'peekViewEditor.matchHighlightBackground': ThemeValue;
		'peekViewEditorGutter.background': ThemeValue;
		'peekViewResult.background': ThemeValue;
		'peekViewResult.fileForeground': ThemeValue;
		'peekViewResult.lineForeground': ThemeValue;
		'peekViewResult.matchHighlightBackground': ThemeValue;
		'peekViewResult.selectionBackground': ThemeValue;
		'peekViewTitle.background': ThemeValue;
		'peekViewTitleDescription.foreground': ThemeValue;
		'peekViewTitleLabel.foreground': ThemeValue;
		'pickerGroup.border': ThemeValue;
		'pickerGroup.foreground': ThemeValue;
		'problemsErrorIcon.foreground': ThemeValue;
		'problemsInfoIcon.foreground': ThemeValue;
		'problemsWarningIcon.foreground': ThemeValue;
		'progressBar.background': ThemeValue;
		'quickInput.background': ThemeValue;
		'quickInput.foreground': ThemeValue;
		'quickInput.list.focusBackground': ThemeValue;
		'scrollbar.shadow': ThemeValue;
		'scrollbarSlider.background': ThemeValue;
		'scrollbarSlider.hoverBackground': ThemeValue;
		'selection.background': ThemeValue;
		'statusBarItem.errorBackground': ThemeValue;
		'statusBarItem.errorForeground': ThemeValue;
		'settings.headerForeground': ThemeValue;
		'settings.modifiedItemIndicator': ThemeValue;
		'sideBar.background': ThemeValue;
		'sideBar.border': ThemeValue;
		'sideBar.dropBackground': ThemeValue;
		'sideBar.foreground': ThemeValue;
		'sideBarSectionHeader.background': ThemeValue;
		'sideBarSectionHeader.foreground': ThemeValue;
		'statusBar.background': ThemeValue;
		'statusBar.debuggingBackground': ThemeValue;
		'statusBar.debuggingForeground': ThemeValue;
		'statusBar.foreground': ThemeValue;
		'statusBar.noFolderBackground': ThemeValue;
		'statusBar.noFolderForeground': ThemeValue;
		'statusBarItem.hoverBackground': ThemeValue;
		'symbolIcon.classForeground': ThemeValue;
		'symbolIcon.constructorForeground': ThemeValue;
		'symbolIcon.enumeratorForeground': ThemeValue;
		'symbolIcon.enumeratorMemberForeground': ThemeValue;
		'symbolIcon.eventForeground': ThemeValue;
		'symbolIcon.fieldForeground': ThemeValue;
		'symbolIcon.functionForeground': ThemeValue;
		'symbolIcon.interfaceForeground': ThemeValue;
		'symbolIcon.methodForeground': ThemeValue;
		'symbolIcon.variableForeground': ThemeValue;
		'tab.activeBackground': ThemeValue;
		'tab.activeForeground': ThemeValue;
		'tab.border': ThemeValue;
		'tab.hoverBackground': ThemeValue;
		'tab.inactiveBackground': ThemeValue;
		'tab.inactiveForeground': ThemeValue;
		'tab.unfocusedActiveForeground': ThemeValue;
		'tab.unfocusedInactiveForeground': ThemeValue;
		'terminal.ansiBlack': ThemeValue;
		'terminal.ansiBlue': ThemeValue;
		'terminal.ansiBrightBlack': ThemeValue;
		'terminal.ansiBrightBlue': ThemeValue;
		'terminal.ansiBrightCyan': ThemeValue;
		'terminal.ansiBrightGreen': ThemeValue;
		'terminal.ansiBrightMagenta': ThemeValue;
		'terminal.ansiBrightRed': ThemeValue;
		'terminal.ansiBrightWhite': ThemeValue;
		'terminal.ansiBrightYellow': ThemeValue;
		'terminal.ansiCyan': ThemeValue;
		'terminal.ansiGreen': ThemeValue;
		'terminal.ansiMagenta': ThemeValue;
		'terminal.ansiRed': ThemeValue;
		'terminal.ansiWhite': ThemeValue;
		'terminal.ansiYellow': ThemeValue;
		'terminal.foreground': ThemeValue;
		'terminal.selectionBackground': ThemeValue;
		'textLink.activeForeground': ThemeValue;
		'textLink.foreground': ThemeValue;
		'titleBar.activeBackground': ThemeValue;
		'titleBar.activeForeground': ThemeValue;
		'titleBar.inactiveBackground': ThemeValue;
		'titleBar.inactiveForeground': ThemeValue;
		'tree.indentGuidesStroke': ThemeValue;
		'widget.shadow': ThemeValue;
	};
	tokenColors: TokenColor[];
}

export function stringify(theme: VscodeTheme): string {
	return JSON.stringify(
		theme,
		(_: string, value: unknown) =>
			value instanceof Color ? value.hex() : value,
		'\t',
	);
}
