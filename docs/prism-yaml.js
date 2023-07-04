(function (Prism) {
    Prism.languages.yaml = {
        'comment': /#.*/,
        'key': {
            pattern: /\w+\s*(?=:)/,
            lookbehind: true,
            greedy: true,
            alias: 'atrule'
        },
        'boolean': {
            pattern: /\bfalse\b|\btrue\b/i,
            lookbehind: true,
            alias: 'important'
        },
        'null': {
            pattern: /\bnull\b|\b~\b/i,
            lookbehind: true,
            alias: 'important'
        },
        'string': {
            pattern: /[^\\]"(?:\\.|[^\\"\r\n])*"/,
            lookbehind: true,
            greedy: true,
            inside: {
                'key': {
                    pattern: /\[.*\]/,
                    alias: 'atrule'
                },
                'variable': /\$\s*[A-Za-z0-9_]+\s*\$/,
                'tag': /£\s*\w+\s*£/,
                'keyword': /§[A-Za-z!]/
            }
        },
        'number': {
            pattern: /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/i,
            lookbehind: true
        },
        'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
    };
    Prism.languages.yml = Prism.languages.yaml;
}(Prism));