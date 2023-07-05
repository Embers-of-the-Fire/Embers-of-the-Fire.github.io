(function (Prism) {
    const operator = /==|!=|<=|>=|>|<|=|\+|\.|-|\*|\/|%|\|/;
    const numbers = [
        /-?\bbx[01]+\b/,
        /-?\b0x[a-f0-9]+\b/,
        /-?\box[0-7]+\b/,
        /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    ];
    const variable = {
        pattern: /\$.*\$/,
        inside: {
            number: numbers,
            operator: operator,
        },
    };
    const pdx = {
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"/,
            lookbehind: true,
            greedy: true,
        },
        comment: {
            pattern: /#.*/,
            greedy: true,
        },
        key: { pattern: /@\w+\b/, greedy: true, alias: "atrule" },
        variable: variable,
        function: {
            pattern: /@\\?/,
            alias: "function-definition",
        },
        number: numbers,
        punctuation: /[{}[\],]/,
        operator: operator,
        boolean: /\b(?:yes|no)\b/i,
        keyword: [
            /trigger\:|event_target\:/,
            /\b(?:root|this|from|prev|not|or|and|nand|nor|if|else_if|else|factor)+\b/i,
            /\b(?:null|namespace|id|limit)\b/,
        ],
    };
    Prism.languages.pdx_lang = pdx;
    Prism.languages.pdx = pdx;
    Prism.languages.pdxlang = pdx;
})(Prism);
