[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / CheckboxGroupProps

# Interface: CheckboxGroupProps

Data Entry

## Hierarchy

- `Omit`<`InputCheckGroupProps`, ``"defaultValue"`` \| ``"onChange"``\>

  ↳ **`CheckboxGroupProps`**

## Table of contents

### Properties

- [children](checkboxgroupprops.md#children)
- [defaultValue](checkboxgroupprops.md#defaultvalue)
- [disabled](checkboxgroupprops.md#disabled)
- [name](checkboxgroupprops.md#name)
- [onChange](checkboxgroupprops.md#onchange)
- [options](checkboxgroupprops.md#options)
- [orientation](checkboxgroupprops.md#orientation)
- [size](checkboxgroupprops.md#size)
- [value](checkboxgroupprops.md#value)

## Properties

### children

• `Optional` **children**: `ReactNode`

The checkboxes in radio group.

#### Overrides

Omit.children

#### Defined in

[packages/react/src/Checkbox/CheckboxGroup.tsx:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Checkbox/CheckboxGroup.tsx#L15)

___

### defaultValue

• `Optional` **defaultValue**: `string`[]

The default value of checkbox group.

#### Defined in

[packages/react/src/Checkbox/CheckboxGroup.tsx:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Checkbox/CheckboxGroup.tsx#L19)

___

### disabled

• `Optional` **disabled**: `boolean`

Whether the checkbox group is disabled.
Control the disabled of checkboxes in group if disabled not passed to checkbox.

#### Defined in

[packages/react/src/Checkbox/CheckboxGroup.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Checkbox/CheckboxGroup.tsx#L24)

___

### name

• `Optional` **name**: `string`

The name of checkbox group.
Control the name of checkboxes in group if name not passed to checkbox.

#### Defined in

[packages/react/src/Checkbox/CheckboxGroup.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Checkbox/CheckboxGroup.tsx#L29)

___

### onChange

• `Optional` **onChange**: (`value`: `string`[], `event`: `ChangeEvent`<`HTMLInputElement`\>) => `void`

#### Type declaration

▸ (`value`, `event`): `void`

The onChange of checkbox group.
Will be passed to each checkboxes but composing both instead of overriding.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string`[] |
| `event` | `ChangeEvent`<`HTMLInputElement`\> |

##### Returns

`void`

#### Defined in

[packages/react/src/Checkbox/CheckboxGroup.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Checkbox/CheckboxGroup.tsx#L34)

___

### options

• `Optional` **options**: [`CheckboxGroupOption`](checkboxgroupoption.md)[]

The options of checkbox group.
Will be ignored if children passed.

#### Defined in

[packages/react/src/Checkbox/CheckboxGroup.tsx:39](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Checkbox/CheckboxGroup.tsx#L39)

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

The size of checkbox group.
Control the size of checkboxes in group if size not passed to checkbox.

#### Defined in

[packages/react/src/Checkbox/CheckboxGroup.tsx:44](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Checkbox/CheckboxGroup.tsx#L44)

___

### value

• `Optional` **value**: `string`[]

The value of checkbox group.

#### Defined in

[packages/react/src/Checkbox/CheckboxGroup.tsx:48](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Checkbox/CheckboxGroup.tsx#L48)
