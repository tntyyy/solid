# Принцип подстановки Барбары Лисков

### Наследуемый класс должен ДОПОЛНЯТЬ, а не замещать поведение базового класса.

## _Для чего это нужно?_

1. Помогает проектировать систему, опираясь на поведение модулей.
2. Вводит ограничения и правила наследования объектов, чтобы их потомки не противоречили базовому поведению.
3. Делает поведение модулей последовательным и предсказуемым.
4. Помогает избегать дублирования, выделять общую для нескольких модулей функциональность в общий интерфейс.
5. Позволяет выявлять при проектировании проблемные абстракции и скрытые связи между сущностями.