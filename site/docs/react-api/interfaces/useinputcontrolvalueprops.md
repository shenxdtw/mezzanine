[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / UseInputControlValueProps

# Interface: UseInputControlValueProps<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `HTMLInputElement` \| `HTMLTextAreaElement` |

## Hierarchy

- `Omit`<[`UseControlValueStateProps`](usecontrolvaluestateprops.md)<`string`\>, ``"defaultValue"`` \| ``"equalityFn"``\>

  ↳ **`UseInputControlValueProps`**

  ↳↳ [`UseInputWithClearControlValueProps`](useinputwithclearcontrolvalueprops.md)

## Table of contents

### Properties

- [defaultValue](useinputcontrolvalueprops.md#defaultvalue)
- [onChange](useinputcontrolvalueprops.md#onchange)
- [value](useinputcontrolvalueprops.md#value)

## Properties

### defaultValue

• `Optional` **defaultValue**: `string`

#### Defined in

[packages/react/src/Form/useInputControlValue.ts:7](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useInputControlValue.ts#L7)

___

### onChange

• `Optional` **onChange**: (`event`: `ChangeEvent`<`E`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`E`\> |

##### Returns

`void`

#### Defined in

[packages/react/src/Form/useInputControlValue.ts:8](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useInputControlValue.ts#L8)

___

### value

• `Optional` **value**: `string`

#### Inherited from

Omit.value

#### Defined in

[packages/react/src/Form/useControlValueState.ts:6](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useControlValueState.ts#L6)
