[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / UseInputWithClearControlValueProps

# Interface: UseInputWithClearControlValueProps<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `HTMLInputElement` \| `HTMLTextAreaElement` |

## Hierarchy

- [`UseInputControlValueProps`](useinputcontrolvalueprops.md)<`E`\>

  ↳ **`UseInputWithClearControlValueProps`**

## Table of contents

### Properties

- [ref](useinputwithclearcontrolvalueprops.md#ref)
- [defaultValue](useinputwithclearcontrolvalueprops.md#defaultvalue)
- [onChange](useinputwithclearcontrolvalueprops.md#onchange)
- [value](useinputwithclearcontrolvalueprops.md#value)

## Properties

### ref

• **ref**: `RefObject`<`E`\>

#### Defined in

[packages/react/src/Form/useInputWithClearControlValue.ts:10](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useInputWithClearControlValue.ts#L10)

___

### defaultValue

• `Optional` **defaultValue**: `string`

#### Inherited from

[UseInputControlValueProps](useinputcontrolvalueprops.md).[defaultValue](useinputcontrolvalueprops.md#defaultvalue)

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

#### Inherited from

[UseInputControlValueProps](useinputcontrolvalueprops.md).[onChange](useinputcontrolvalueprops.md#onchange)

#### Defined in

[packages/react/src/Form/useInputControlValue.ts:8](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useInputControlValue.ts#L8)

___

### value

• `Optional` **value**: `string`

#### Inherited from

[UseInputControlValueProps](useinputcontrolvalueprops.md).[value](useinputcontrolvalueprops.md#value)

#### Defined in

[packages/react/src/Form/useControlValueState.ts:6](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useControlValueState.ts#L6)
