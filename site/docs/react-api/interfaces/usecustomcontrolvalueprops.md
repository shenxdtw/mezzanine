[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / UseCustomControlValueProps

# Interface: UseCustomControlValueProps<V\>

## Type parameters

| Name |
| :------ |
| `V` |

## Hierarchy

- [`UseControlValueStateProps`](usecontrolvaluestateprops.md)<`V`\>

  ↳ **`UseCustomControlValueProps`**

## Table of contents

### Properties

- [defaultValue](usecustomcontrolvalueprops.md#defaultvalue)
- [equalityFn](usecustomcontrolvalueprops.md#equalityfn)
- [onChange](usecustomcontrolvalueprops.md#onchange)
- [value](usecustomcontrolvalueprops.md#value)

## Properties

### defaultValue

• **defaultValue**: `V`

#### Inherited from

[UseControlValueStateProps](usecontrolvaluestateprops.md).[defaultValue](usecontrolvaluestateprops.md#defaultvalue)

#### Defined in

[packages/react/src/Form/useControlValueState.ts:4](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useControlValueState.ts#L4)

___

### equalityFn

• `Optional` **equalityFn**: (`a`: `V`, `b`: `V`) => `boolean`

#### Type declaration

▸ (`a`, `b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `V` |
| `b` | `V` |

##### Returns

`boolean`

#### Inherited from

[UseControlValueStateProps](usecontrolvaluestateprops.md).[equalityFn](usecontrolvaluestateprops.md#equalityfn)

#### Defined in

[packages/react/src/Form/useControlValueState.ts:5](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useControlValueState.ts#L5)

___

### onChange

• `Optional` **onChange**: (`value`: `V`) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

`void`

#### Defined in

[packages/react/src/Form/useCustomControlValue.ts:5](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useCustomControlValue.ts#L5)

___

### value

• `Optional` **value**: `V`

#### Inherited from

[UseControlValueStateProps](usecontrolvaluestateprops.md).[value](usecontrolvaluestateprops.md#value)

#### Defined in

[packages/react/src/Form/useControlValueState.ts:6](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useControlValueState.ts#L6)
