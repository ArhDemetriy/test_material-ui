/**
 * Костыль для хоть какого-то требования к статическим методам.
 * Вторым параметром передавать typeof класса который должен имплементировать методы из первого параметра.
 *
 * @example
 * class StaticClass implements StaticImplements<{ foo: () => void }, typeof StaticClass>{
 *   static foo() { }
 * }
 */
// @ts-expect-error
export type StaticImplements<I extends { [k in string]: any }, C extends I> = {}

export type IHideDispatch<Actions extends { [k in string]: (...args: any[]) => any }> = { [a in keyof Actions]: (...args: Parameters<Actions[a]>) => void }