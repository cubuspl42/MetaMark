import { DefinitionTerm } from "./DefinitionTerm";

export interface StaticScope {
    getDefinition(name: string): DefinitionTerm | null;
}

export class LoopedStaticScope<A> implements StaticScope {
    static looped<A>(build: (staticScope: StaticScope) => [A, StaticScope]): A {
        const loopedScope = new LoopedStaticScope(build);
        const [value, _] = loopedScope.result;
        return value;
    }

    private constructor(
        private readonly build: (staticScope: StaticScope) => [A, StaticScope],
    ) {}

    private readonly result = this.build(this);

    getDefinition(name: string): DefinitionTerm | null {
        const [_, innerScope] = this.result;
        return innerScope.getDefinition(name);
    }
}

export class BlockStaticScope implements StaticScope {
    constructor(private definitions: ReadonlyArray<DefinitionTerm>) {}

    getDefinition(name: string): DefinitionTerm | null {
        return this.definitions.find((it) => it.name === name) ?? null;
    }
}
