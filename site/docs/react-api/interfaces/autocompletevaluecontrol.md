[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / AutoCompleteValueControl

# Interface: AutoCompleteValueControl

## Table of contents

### Properties

- [focused](autocompletevaluecontrol.md#focused)
- [onChange](autocompletevaluecontrol.md#onchange)
- [onFocus](autocompletevaluecontrol.md#onfocus)
- [options](autocompletevaluecontrol.md#options)
- [searchText](autocompletevaluecontrol.md#searchtext)
- [setSearchText](autocompletevaluecontrol.md#setsearchtext)
- [setValue](autocompletevaluecontrol.md#setvalue)
- [value](autocompletevaluecontrol.md#value)

### Methods

- [onClear](autocompletevaluecontrol.md#onclear)

## Properties

### focused

• **focused**: `boolean`

#### Defined in

[packages/react/src/Form/useAutoCompleteValueControl.ts:22](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useAutoCompleteValueControl.ts#L22)

___

### onChange

• **onChange**: (`v`: ``null`` \| [`SelectValue`](selectvalue.md)) => [`SelectValue`](selectvalue.md)[]

#### Type declaration

▸ (`v`): [`SelectValue`](selectvalue.md)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | ``null`` \| [`SelectValue`](selectvalue.md) |

##### Returns

[`SelectValue`](selectvalue.md)[]

#### Defined in

[packages/react/src/Form/useAutoCompleteValueControl.ts:23](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useAutoCompleteValueControl.ts#L23)

___

### onFocus

• **onFocus**: (`f`: `boolean`) => `void`

#### Type declaration

▸ (`f`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `boolean` |

##### Returns

`void`

#### Defined in

[packages/react/src/Form/useAutoCompleteValueControl.ts:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useAutoCompleteValueControl.ts#L25)

___

### options

• **options**: `string`[]

#### Defined in

[packages/react/src/Form/useAutoCompleteValueControl.ts:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useAutoCompleteValueControl.ts#L26)

___

### searchText

• **searchText**: `string`

#### Defined in

[packages/react/src/Form/useAutoCompleteValueControl.ts:27](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useAutoCompleteValueControl.ts#L27)

___

### setSearchText

• **setSearchText**: `Dispatch`<`SetStateAction`<`string`\>\>

#### Defined in

[packages/react/src/Form/useAutoCompleteValueControl.ts:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useAutoCompleteValueControl.ts#L28)

___

### setValue

• **setValue**: `Dispatch`<`SetStateAction`<`string`\>\>

#### Defined in

[packages/react/src/Form/useAutoCompleteValueControl.ts:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useAutoCompleteValueControl.ts#L29)

___

### value

• **value**: [`SelectValue`](selectvalue.md)[]

#### Defined in

[packages/react/src/Form/useAutoCompleteValueControl.ts:30](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useAutoCompleteValueControl.ts#L30)

## Methods

### onClear

▸ **onClear**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[packages/react/src/Form/useAutoCompleteValueControl.ts:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/useAutoCompleteValueControl.ts#L24)
