# Принцип открытости/закрытости

### Сущности должны быть открыты для расширения, но закрыты для изменения.

## _Для чего это нужно?_

1. Изменять существующий код плохо, это сложно тестировать и он уже работает.
2. При изменении существующего кода необходимо делать регрессионное тестирование.
3. Позволяет сократить количество кода, которое необходимо менять при изменении бизнес-требований.
4. Делает внесение изменений более безопасным.
5. Меньше вероятность ошибок.

## _Как сделать?_

Нужно стараться добавлять функционал не за счет изменения существующих сущностей,
а за счет добавления новой сущности посредством композиции, наследования и т.д. И реализовывать новый функционал уже в новых сущностях.

Придерживаться этого принципа на 100% не всегда получится, но когда это возможно - его нужно использовать.
