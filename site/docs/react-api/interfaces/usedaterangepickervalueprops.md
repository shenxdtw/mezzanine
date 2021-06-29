[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / UseDateRangePickerValueProps

# Interface: UseDateRangePickerValueProps

## Hierarchy

- `Omit`<[`UseRangePickerValueProps`](userangepickervalueprops.md), ``"onChange"``\>

  ↳ **`UseDateRangePickerValueProps`**

## Table of contents

### Properties

- [format](usedaterangepickervalueprops.md#format)
- [formats](usedaterangepickervalueprops.md#formats)
- [inputFromRef](usedaterangepickervalueprops.md#inputfromref)
- [inputToRef](usedaterangepickervalueprops.md#inputtoref)
- [onChange](usedaterangepickervalueprops.md#onchange)
- [value](usedaterangepickervalueprops.md#value)

## Properties

### format

• **format**: `string`

#### Inherited from

Omit.format

#### Defined in

[packages/react/src/Picker/usePickerValue.ts:14](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Picker/usePickerValue.ts#L14)

___

### formats

• **formats**: `string`[]

#### Inherited from

Omit.formats

#### Defined in

[packages/react/src/Picker/usePickerValue.ts:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Picker/usePickerValue.ts#L15)

___

### inputFromRef

• **inputFromRef**: `RefObject`<`HTMLInputElement`\>

#### Inherited from

Omit.inputFromRef

#### Defined in

[packages/react/src/Picker/useRangePickerValue.ts:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Picker/useRangePickerValue.ts#L18)

___

### inputToRef

• **inputToRef**: `RefObject`<`HTMLInputElement`\>

#### Inherited from

Omit.inputToRef

#### Defined in

[packages/react/src/Picker/useRangePickerValue.ts:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Picker/useRangePickerValue.ts#L19)

___

### onChange

• `Optional` **onChange**: (`value?`: `undefined`[] \| [`Moment`, `Moment`]) => `void`

#### Type declaration

▸ (`value?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `undefined`[] \| [`Moment`, `Moment`] |

##### Returns

`void`

#### Defined in

[packages/react/src/DateRangePicker/useDateRangePickerValue.ts:9](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/DateRangePicker/useDateRangePickerValue.ts#L9)

___

### value

• `Optional` **value**: `undefined`[] \| [`Moment`, `Moment`]

#### Inherited from

Omit.value

#### Defined in

[packages/react/src/Picker/useRangePickerValue.ts:20](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Picker/useRangePickerValue.ts#L20)
