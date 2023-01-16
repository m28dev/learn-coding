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
        // TODO? x = a + 1
        if (/^[a-zA-Z][a-zA-Z_]*/.test(tokens[0]) && '=' == tokens[1]) {
            this.vars[tokens[0]] = tokens[2];
            return Number(this.vars[tokens[0]]);
        }

        // calc
        let vton = tokens.map(element => {
            if (/[0-9*\/%+\-()]/.test(element)) return element;
            return this.#refVar(element);
        });
        let ans = this.#calc(this.#bracketsCalc(vton));
        return ans;
    }
    #calc(f) {
        // times, divided, mod
        while (true) {
            let idx = f.findIndex(element => /[*/%]/.test(element));
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
            let idx = f.findIndex(element => /[+-]/.test(element));
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
        let start = f.indexOf('(');
        // FIXME (1+1) + (1+1)
        let end = f.lastIndexOf(')');

        if (start == -1) return f;

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

const t = new Interpreter();
console.log(t.input("1 + 1"))
console.log(eval(1 + 1))

console.log(t.input("2 * 3 + 4"))
console.log(eval(2 * 3 + 4))

console.log(t.input("2 + 3 * 4"))
console.log(eval(2 + 3 * 4))

console.log(t.input("2 + 3 * 4 / 5 * 3 + 1"))
console.log(eval(2 + 3 * 4 / 5 * 3 + 1))

console.log(t.input("5 + 2 % 3 * 4 - 6 / 5 * 3 + 1"))
console.log(eval(5 + 2 % 3 * 4 - 6 / 5 * 3 + 1))

console.log(t.input("2 + 3 + ( 4 + 5 + ( 6 + 7 ) )"))
console.log(eval(2 + 3 + (4 + 5 + (6 + 7))));

console.log(t.input("( 2 + 3 + ( 4 + 5 + ( 6 + 7 ) ) )"))
console.log(eval((2 + 3 + (4 + 5 + (6 + 7)))))

console.log(t.input("6 / 2 * ( 1 + 2 )"))
console.log(eval(6 / 2 * (1 + 2)));

console.log(t.input("10 / 2 * ( 6 - ( 4 + 1 ) ) )"))
console.log(eval(10 / 2 * (6 - (4 + 1))));

console.log(t.input("15 - ( 5 * ( 6 / ( 4 - 2 ) ) )"))
console.log(eval(15 - (5 * (6 / (4 - 2)))));

/*
1 + ( 1 + 1 * ( 1 + 1 ) )

1 + 1 * ( 1 + 1 )

( 1 + 1 )

1 + 1
*/

console.log(t.input("x = 1"));
console.log(t.input("x = 7"));
console.log(t.input("       "));

console.log(t.input("x"));
//console.log(t.input("y"));
console.log(t.input("x + 8"));
console.log(t.input("x - 8")); // TODO timed out
