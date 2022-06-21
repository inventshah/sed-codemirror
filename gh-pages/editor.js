import { standardKeymap } from "@codemirror/commands";
import {
	defaultHighlightStyle,
	syntaxHighlighting,
} from "@codemirror/language";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { sed } from "../dist/index";

const sampleCode = `# Printing
i Hello, World!

# Looping
h
s/.*/0/
:loop
p
y/012345678/123456789/
/9/!b loop
G

# Accessing arguments
# (... automatic, one per line ...)`;

const editor = new EditorView({
	dispatch: (tr) => {
		const result = editor.update([tr]);
		return result;
	},
	parent: document.getElementById("code"),
	state: EditorState.create({
		doc: sampleCode,
		extensions: [
			syntaxHighlighting(defaultHighlightStyle),
			keymap.of(standardKeymap),
			lineNumbers(),
			sed(),
		],
	}),
});
