export type ColumnDefinition<T, K extends keyof T> = {
    key : K;
    header:  string;
}