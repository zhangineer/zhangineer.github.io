// Custom rich-text toolbar buttons for Sveltia CMS.
// Each saves plain inline HTML, which Hugo renders because goldmark `unsafe` is on.
// Text colors keep >= 3.4:1 contrast on both PaperMod light and dark backgrounds.

const TEXT_COLORS = [
  { label: 'Red', value: '#dc3e42' },
  { label: 'Orange', value: '#cc5500' },
  { label: 'Green', value: '#2b9a66' },
  { label: 'Blue', value: '#0d84e3' },
  { label: 'Purple', value: '#9a5cd0' },
];

const HIGHLIGHT_COLORS = [
  { label: 'Yellow', value: '#fde68a' },
  { label: 'Green', value: '#bbf7d0' },
  { label: 'Blue', value: '#bfdbfe' },
  { label: 'Pink', value: '#fbcfe8' },
];

// Highlighted text is forced dark so it stays readable on the dark theme.
const HIGHLIGHT_TEXT_COLOR = '#1d1e20';

// Besides HTML, escape Markdown and Hugo shortcode syntax so the text renders exactly
// as typed. Named entities are used because the rich-text editor rewrites numeric ones.
const ENTITIES = {
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '*': '&ast;', '_': '&lowbar;', '`': '&grave;',
  '[': '&lsqb;', ']': '&rsqb;', '{': '&lcub;', '}': '&rcub;', '\\': '&bsol;',
};
const DECODED = {
  ...Object.fromEntries(Object.entries(ENTITIES).map(([char, entity]) => [entity, char])),
  '&quot;': '"', '&#39;': "'", '&nbsp;': '\u00a0',
};

const escapeHtml = (text) => text.replace(/[&<>*_`[\]{}\\]/g, (char) => ENTITIES[char]);

const unescapeHtml = (text) => text.replace(/&[a-z]+;|&#39;/g, (entity) => DECODED[entity] ?? entity);

const colorSpan = ({ text = '', color = TEXT_COLORS[0].value }) =>
  `<span style="color:${color}">${escapeHtml(text)}</span>`;

const highlightMark = ({ text = '', color = HIGHLIGHT_COLORS[0].value }) =>
  `<mark style="background:${color};color:${HIGHLIGHT_TEXT_COLOR}">${escapeHtml(text)}</mark>`;

CMS.registerEditorComponent({
  id: 'text-color',
  label: 'Text Color',
  icon: 'format_color_text',
  trigger: 'button',
  mode: 'dialog',
  summary: '{{text}}',
  fields: [
    { name: 'text', label: 'Text' },
    { name: 'color', label: 'Color', widget: 'select', options: TEXT_COLORS, default: TEXT_COLORS[0].value },
  ],
  pattern: /<span style="color:(?<color>#[0-9a-f]{6})">(?<text>[^<]*)<\/span>/,
  fromBlock: ({ groups }) => ({ color: groups.color, text: unescapeHtml(groups.text) }),
  toBlock: colorSpan,
  toPreview: colorSpan,
});

CMS.registerEditorComponent({
  id: 'highlight',
  label: 'Highlight',
  icon: 'format_ink_highlighter',
  trigger: 'button',
  mode: 'dialog',
  summary: '{{text}}',
  fields: [
    { name: 'text', label: 'Text' },
    { name: 'color', label: 'Color', widget: 'select', options: HIGHLIGHT_COLORS, default: HIGHLIGHT_COLORS[0].value },
  ],
  pattern: /<mark style="background:(?<color>#[0-9a-f]{6});color:#1d1e20">(?<text>[^<]*)<\/mark>/,
  fromBlock: ({ groups }) => ({ color: groups.color, text: unescapeHtml(groups.text) }),
  toBlock: highlightMark,
  toPreview: highlightMark,
});
