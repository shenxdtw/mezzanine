[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TextFieldProps

# Interface: TextFieldProps

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"defaultValue"`` \| ``"onChange"`` \| ``"prefix"``\>

  ↳ **`TextFieldProps`**

## Table of contents

### Properties

- [active](textfieldprops.md#active)
- [children](textfieldprops.md#children)
- [className](textfieldprops.md#classname)
- [clearable](textfieldprops.md#clearable)
- [disabled](textfieldprops.md#disabled)
- [error](textfieldprops.md#error)
- [fullWidth](textfieldprops.md#fullwidth)
- [onClear](textfieldprops.md#onclear)
- [prefix](textfieldprops.md#prefix)
- [size](textfieldprops.md#size)
- [suffix](textfieldprops.md#suffix)
- [suffixActionIcon](textfieldprops.md#suffixactionicon)

## Properties

### active

• `Optional` **active**: `boolean`

Whether the field is active.

#### Defined in

[packages/react/src/TextField/TextField.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L24)

___

### children

• `Optional` **children**: `ReactNode`

#### Overrides

Omit.children

#### Defined in

[packages/react/src/TextField/TextField.tsx:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L25)

___

### className

• `Optional` **className**: `string`

#### Overrides

Omit.className

#### Defined in

[packages/react/src/TextField/TextField.tsx:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L26)

___

### clearable

• `Optional` **clearable**: `boolean`

Whether to show the clear button.

**`default`** false

#### Defined in

[packages/react/src/TextField/TextField.tsx:31](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L31)

___

### disabled

• `Optional` **disabled**: `boolean`

Whether the field is disabled.

**`default`** false

#### Defined in

[packages/react/src/TextField/TextField.tsx:36](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L36)

___

### error

• `Optional` **error**: `boolean`

Whether the field is error.

**`default`** false

#### Defined in

[packages/react/src/TextField/TextField.tsx:41](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L41)

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

If `true`, set width: 100%.

**`default`** false

#### Defined in

[packages/react/src/TextField/TextField.tsx:46](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L46)

___

### onClear

• `Optional` **onClear**: (`event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

The callback will be fired after clear icon clicked.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

##### Returns

`void`

#### Defined in

[packages/react/src/TextField/TextField.tsx:50](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L50)

___

### prefix

• `Optional` **prefix**: `ReactNode`

The prefix addon of the field.

#### Defined in

[packages/react/src/TextField/TextField.tsx:54](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L54)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

The size of field.

**`default`** 'medium'

#### Defined in

[packages/react/src/TextField/TextField.tsx:59](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L59)

___

### suffix

• `Optional` **suffix**: `ReactNode`

The suffix addon of the field.

#### Defined in

[packages/react/src/TextField/TextField.tsx:63](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L63)

___

### suffixActionIcon

• `Optional` **suffixActionIcon**: `ReactElement`<`any`, `string` \| (`props`: `any`) => ``null`` \| `ReactElement`<`any`, `any`\> \| (`props`: `any`) => `Component`<`any`, `any`, `any`\>\>

#### Defined in

[packages/react/src/TextField/TextField.tsx:64](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L64)
