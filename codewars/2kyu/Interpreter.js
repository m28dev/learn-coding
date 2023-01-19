class Interpreter {
    constructor() {
        this.vars = {};
    }
    static tokenize(program) {
        const regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
        return program.split(regex).filter(s => /\S/.test(s));
    }
    input(expr) {
        const tokens = Interpreter.tokenize(expr);

        // no input
        if (tokens.length == 0) return '';

        // ref
        if (tokens.length == 1 && /^[a-zA-Z][a-zA-Z_]*/.test(tokens[0])) {
            return Number(this.#refVar(tokens[0]));
        }

        // assignments
        let vFlg = false;
        if (/^[a-zA-Z][a-zA-Z_]*/.test(tokens[0]) && '=' == tokens[1]) {
            if (tokens.length == 3) {
                this.vars[tokens[0]] = tokens[2];
                return Number(this.vars[tokens[0]]);
            } else {
                vFlg = true;
            }
        }

        // FIXME 'All other cases will throw an error'

        // calc
        let expand = vFlg ? tokens.slice(2) : tokens;

        while (true) {
            let len = expand.length;
            expand = this.#bracketsCalc(expand);
            if (len == expand.length) break;
        }

        expand = expand.map(element => {
            if (/[0-9*\/%+\-()]/.test(element)) return element;
            return this.#refVar(element);
        });

        let ans = this.#calc(expand);

        if (vFlg) {
            this.vars[tokens[0]] = ans;
            return this.vars[tokens[0]];
        } else {
            return ans;
        }

    }
    #calc(f) {
        // times, divided, mod
        while (true) {
            let idx = f.findIndex(element => /^[*/%]$/.test(element));
            if (idx == -1) break;

            switch (f[idx]) {
                case '*':
                    f.splice(idx - 1, 3, Number(f[idx - 1]) * Number(f[idx + 1]));
                    break;
                case '/':
                    f.splice(idx - 1, 3, Number(f[idx - 1]) / Number(f[idx + 1]));
                    break;
                case '%':
                    f.splice(idx - 1, 3, Number(f[idx - 1]) % Number(f[idx + 1]));
                    break;
                default:
                    break;
            }
        }
        // plus, minus
        while (true) {
            let idx = f.findIndex(element => /^[+-]$/.test(element));
            if (idx == -1) break;

            switch (f[idx]) {
                case '+':
                    f.splice(idx - 1, 3, Number(f[idx - 1]) + Number(f[idx + 1]));
                    break;
                case '-':
                    f.splice(idx - 1, 3, Number(f[idx - 1]) - Number(f[idx + 1]));
                    break;
                default:
                    break;
            }
        }

        return f[0];
    }
    #bracketsCalc(f) {
        let start, end;

        start = f.indexOf('(');
        if (start == -1) return f;

        let bracketCount = 1;
        for (let i = start + 1; i < f.length; i++) {
            if (f[i] == ')') bracketCount--;
            if (f[i] == '(') bracketCount++;
            if (bracketCount == 0) {
                end = i;
                break;
            }
        }

        let inside = this.#bracketsCalc(f.slice(start + 1, end));
        f.splice(start, end - start + 1, this.#calc(inside));

        return f;
    }
    #refVar(v) {
        if (this.vars.hasOwnProperty(v)) {
            return this.vars[v];
        } else {
            throw new Error(`${v} is not defined`);
        }
    }
}
