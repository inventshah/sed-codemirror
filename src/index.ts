import { parser } from "./sed.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const sedLanguage = LRLanguage.define({
	parser: parser.configure({
		props: [
			styleTags({
				LineComment: t.lineComment,
				NoArgCommand: t.keyword,
				SCommand: t.keyword,
				YCommand: t.keyword,
				BranchCommand: t.keyword,
				SFlag: t.number,
				Regex: t.regexp,
				SingleSlash: t.regexp,
				LabelIdentifier: t.labelName,
			}),
		],
	}),
	languageData: {
		commentTokens: { line: "#" },
	},
});

export function sed() {
	return new LanguageSupport(sedLanguage);
}
