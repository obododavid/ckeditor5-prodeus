# PRODEUS CKEditor 5 editor build

<!-- [![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-build-classic.svg)](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic)
[![Dependency Status](https://david-dm.org/ckeditor/ckeditor5-build-classic/status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-classic)
[![devDependency Status](https://david-dm.org/ckeditor/ckeditor5-build-classic/dev-status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-classic?type=dev) -->

The Prodeus editor build for CKEditor 5. Just used in the Prodeus Web app for now (https://prodeus.app/)

<!-- Read more about the [classic editor build](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#classic-editor) and see the [demo](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html). -->

<!-- ![CKEditor 5 classic editor build screenshot](https://c.cksource.com/a/1/img/npm/ckeditor5-build-classic.png) -->

## Quick start

First, install the build from npm:

```bash
npm install --save prodeus-editor
```

And use it in your website:

```html
<div id="editor">
    <p>This is the editor content.</p>
</div>
<script src="../build/ckeditor.js"></script>
<script>
    ClassicEditor.create(document.querySelector("#editor"))
        .then((editor) => {
            window.editor = editor;
        })
        .catch((error) => {
            console.error("There was a problem initializing the editor.", error);
        });
</script>
```

Or in your JavaScript application:

```js
import ClassicEditor from "prodeus-editor";

// Or using the CommonJS version:
// const ClassicEditor = require( 'prodeus-editor' );

ClassicEditor.create(document.querySelector("#editor"))
    .then((editor) => {
        window.editor = editor;
    })
    .catch((error) => {
        console.error("There was a problem initializing the editor.", error);
    });
```

<!-- **Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html). -->

<!-- ## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license). -->
