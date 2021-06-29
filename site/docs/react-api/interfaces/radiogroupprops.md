[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / RadioGroupProps

# Interface: RadioGroupProps

## Hierarchy

- `Omit`<`InputCheckGroupProps`, ``"onChange"``\>

  ↳ **`RadioGroupProps`**

## Table of contents

### Properties

- [children](radiogroupprops.md#children)
- [defaultValue](radiogroupprops.md#defaultvalue)
- [disabled](radiogroupprops.md#disabled)
- [name](radiogroupprops.md#name)
- [onChange](radiogroupprops.md#onchange)
- [options](radiogroupprops.md#options)
- [orientation](radiogroupprops.md#orientation)
- [size](radiogroupprops.md#size)
- [value](radiogroupprops.md#value)

## Properties

### children

• `Optional` **children**: `ReactNode`

The radios in radio group.

#### Overrides

Omit.children

#### Defined in

[packages/react/src/Radio/RadioGroup.tsx:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Radio/RadioGroup.tsx#L15)

___

### defaultValue

• `Optional` **defaultValue**: `string`

The default value of radio group.

#### Overrides

Omit.defaultValue

#### Defined in

[packages/react/src/Radio/RadioGroup.tsx:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Radio/RadioGroup.tsx#L19)

___

### disabled

• `Optional` **disabled**: `boolean`

Whether the radio group is disabled.
Control the disabled of radios in group if disabled not passed to radio.

#### Defined in

[packages/react/src/Radio/RadioGroup.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Radio/RadioGroup.tsx#L24)

___

### name

• `Optional` **name**: `string`

The name of radio group.
Control the name of radios in group if name not passed to radio.

#### Defined in

[packages/react/src/Radio/RadioGroup.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Radio/RadioGroup.tsx#L29)

___

### onChange

• `Optional` **onChange**: (`event`: `ChangeEvent`<`HTMLInputElement`\>) => `void`

#### Type declaration

▸ (`event`): `void`

The onChange of radio group.
Will be passed to each radios but composing both instead of overriding.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`HTMLInputElement`\> |

##### Returns

`void`

#### Defined in

[packages/react/src/Radio/RadioGroup.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Radio/RadioGroup.tsx#L34)

___

### options

• `Optional` **options**: [`RadioGroupOption`](radiogroupoption.md)[]

The options of radio group.
Will be ignored if children passed.

#### Defined in

[packages/react/src/Radio/RadioGroup.tsx:39](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Radio/RadioGroup.tsx#L39)

___

### orientation

• `Optional` **orientation**: ``"horizontal"`` \| ``"vertical"``

The orientation of input check group.

#### Inherited from

Omit.orientation

#### Defined in

[packages/react/src/_internal/InputCheck/InputCheckGroup.tsx:17](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/_internal/InputCheck/InputCheckGroup.tsx#L17)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

The size of radio group.
Control the size of radios in group if size not passed to radio.

#### Defined in

[packages/react/src/Radio/RadioGroup.tsx:44](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Radio/RadioGroup.tsx#L44)

___

### value

• `Optional` **value**: `string`

The value of radio group.

#### Defined in

[packages/react/src/Radio/RadioGroup.tsx:48](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Radio/RadioGroup.tsx#L48)
