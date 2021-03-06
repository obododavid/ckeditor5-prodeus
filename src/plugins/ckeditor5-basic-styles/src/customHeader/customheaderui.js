/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/bold/boldui
 */

import { Plugin } from "ckeditor5/src/core";
import { ButtonView } from "ckeditor5/src/ui";

import customHeaderIcon from "../../theme/icons/customHeader.svg";

const CUSTOMHEADER = "customheader";

/**
 * The bold UI feature. It introduces the Bold button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class CustomHeaderUI extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName() {
        return "CustomHeaderUI";
    }

    /**
     * @inheritDoc
     */
    init() {
        const editor = this.editor;
        const t = editor.t;

        // Add bold button to feature components.
        editor.ui.componentFactory.add(CUSTOMHEADER, (locale) => {
            const command = editor.commands.get(CUSTOMHEADER);
            const view = new ButtonView(locale);

            view.set({
                label: t("Heading"),
                icon: customHeaderIcon,
                // keystroke: 'CTRL+B',
                tooltip: true,
                isToggleable: true
            });

            view.bind("isOn", "isEnabled").to(command, "value", "isEnabled");

            // Execute command.
            this.listenTo(view, "execute", () => {
                editor.execute(CUSTOMHEADER);
                editor.editing.view.focus();
            });

            return view;
        });
    }
}
