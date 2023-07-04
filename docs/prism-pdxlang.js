(function (Prism) {
    const pdx = {
        'string': {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"/,
            lookbehind: true,
            greedy: true
        },
        'comment': {
            pattern: /#.*/,
            greedy: true
        },
        'key': { pattern: /@\w+\b/, greedy: true, alias: "atrule" },
        'variable': /\$\s*[A-Za-z0-9_]+\s*\$/,
        'function': { pattern: /@\\?/, alias: "function-definition" },
        'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        'punctuation': /[{}[\],]/,
        'operator': /==|!=|<=|>=|>|<|=|@/,
        'boolean': /\b(?:yes|no)\b/i,
        'keyword': [/trigger\:|event_target\:/, /\b(?:root|this|from|prev|not|or|and|nand|nor|if|else_if|else|factor)+\b/i, /\b(?:null|namespace|id|limit)\b/]
    };
    Prism.languages.pdx_lang = pdx;
    Prism.languages.pdx = pdx;
    Prism.languages.pdxlang = pdx;
}(Prism));