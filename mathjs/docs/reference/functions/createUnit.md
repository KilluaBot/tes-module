<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->

# Function createUnit

Create a user-defined unit and register it with the Unit type.


## Syntax

```js
math.createUnit({
  baseUnit1: {
    aliases: [string, ...]
    prefixes: object
  },
  unit2: {
    definition: string,
    aliases: [string, ...]
    prefixes: object,
    offset: number
  },
  unit3: string    // Shortcut
})
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`name` | string | The name of the new unit. Must be unique. Example: 'knot'
`definition` | string, Unit | Definition of the unit in terms of existing units. For example, '0.514444444 m / s'.
`options` | Object | (optional) An object containing any of the following properties:</br>- `prefixes {string}` "none", "short", "long", "binary_short", or "binary_long". The default is "none".</br>- `aliases {Array}` Array of strings. Example: ['knots', 'kt', 'kts']</br>- `offset {Numeric}` An offset to apply when converting from the unit. For example, the offset for celsius is 273.15. Default is 0.

### Returns

Type | Description
---- | -----------
Unit | The new unit


## Examples

```js
math.createUnit('foo')
math.createUnit('knot', {definition: '0.514444444 m/s', aliases: ['knots', 'kt', 'kts']})
math.createUnit('mph', '1 mile/hour')
```


## See also

[unit](unit.md)