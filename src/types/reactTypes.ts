export type IncludeClassName<T extends { [k in string]: any }> = T &
{
    /** класс который необходимо добавить к корневому элементу */
    readonly requiredClass: string
}