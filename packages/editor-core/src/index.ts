export interface EditorCommand<TState> {
  readonly label: string;
  apply(state: TState): TState;
  revert(state: TState): TState;
}

export class CommandHistory<TState> {
  readonly #undoStack: EditorCommand<TState>[] = [];
  readonly #redoStack: EditorCommand<TState>[] = [];

  execute(state: TState, command: EditorCommand<TState>): TState {
    const nextState = command.apply(state);
    this.#undoStack.push(command);
    this.#redoStack.length = 0;
    return nextState;
  }

  undo(state: TState): TState {
    const command = this.#undoStack.pop();
    if (!command) return state;
    this.#redoStack.push(command);
    return command.revert(state);
  }

  redo(state: TState): TState {
    const command = this.#redoStack.pop();
    if (!command) return state;
    this.#undoStack.push(command);
    return command.apply(state);
  }
}
