Prism.languages.pdx = {
    'string': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'comment': {
        pattern: /#.*/,
        greedy: true
    },
    'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    'punctuation': /[{}[\],]/,
    'operator': /==|!=|<=|>=|=|@/,
    'boolean': /\b(?:yes|no)\b/i,
    'keyword': [/trigger\:|event_target\:/, /\b(?:null|namespace|id|limit)\b/, /\b(?:root|this|from|prev|not|or|and|nand|nor|if|else|)+\b/i]
};