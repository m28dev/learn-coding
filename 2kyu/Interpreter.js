// FIXME Variables

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
        return this.#calc(this.#bracketsCals(tokens));
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
    #bracketsCals(f) {
        let start = f.indexOf('(');
        let end = f.lastIndexOf(')');

        if (start == -1) return f;

        let inside = this.#bracketsCals(f.slice(start + 1, end));
        f.splice(start, end - start + 1, this.#calc(inside));

        return f;
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

/*
1 + ( 1 + 1 * ( 1 + 1 ) )

1 + 1 * ( 1 + 1 )

( 1 + 1 )

1 + 1
*/