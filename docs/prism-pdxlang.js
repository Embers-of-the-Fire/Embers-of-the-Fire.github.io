(function (Prism) {
    const pdx = {
        'string': {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: true,
            greedy: true
        },
        'comment': {
            pattern: /#.*/,
            greedy: true
        },
        'key': { pattern: /@\w+/, greedy: true, alias: "atrule" },
        'identifier': {
            pattern: /\w+(?=\s*(?:!=|>=|<=|<|>|==|=)(?!\s*{))/,
            greedy: true,
            lookbehind: true,
        },
        'function': /\w+(?=\s*(?:!=|>=|<=|<|>|==|=)\s*{)/,
        'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        'punctuation': /[{}[\],]/,
        'operator': /==|!=|<=|>=|>|<|=|@/,
        'boolean': /\b(?:yes|no)\b/i,
        'keyword': [/trigger\:|event_target\:/, /\b(?:root|this|from|prev|not|or|and|nand|nor|if|else|factor)+\b/i, /\b(?:null|namespace|id|limit)\b/]
    };
    Prism.languages.pdx_lang = pdx;
    Prism.languages.pdx = pdx;
    Prism.languages.pdxlang = pdx;
}(Prism));