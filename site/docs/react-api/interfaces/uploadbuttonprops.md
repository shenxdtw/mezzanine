[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / UploadButtonProps

# Interface: UploadButtonProps

## Hierarchy

- `Omit`<[`ButtonProps`](../modules.md#buttonprops), ``"component"`` \| ``"prefix"`` \| ``"suffix"``\>

- `UploadInputProps`

  ↳ **`UploadButtonProps`**

## Table of contents

### Properties

- [accept](uploadbuttonprops.md#accept)
- [color](uploadbuttonprops.md#color)
- [danger](uploadbuttonprops.md#danger)
- [disabled](uploadbuttonprops.md#disabled)
- [loading](uploadbuttonprops.md#loading)
- [multiple](uploadbuttonprops.md#multiple)
- [onUpload](uploadbuttonprops.md#onupload)
- [size](uploadbuttonprops.md#size)
- [variant](uploadbuttonprops.md#variant)

## Properties

### accept

• `Optional` **accept**: `string`

The accept attributes of native input element.

#### Inherited from

UploadInputProps.accept

#### Defined in

[packages/react/src/Upload/UploadInput.tsx:10](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Upload/UploadInput.tsx#L10)

___

### color

• `Optional` **color**: ``"primary"`` \| ``"secondary"``

The color name provided by palette.

**`default`** 'primary'

#### Inherited from

Omit.color

#### Defined in

[packages/react/src/Button/typings.ts:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/typings.ts#L15)

___

### danger

• `Optional` **danger**: `boolean`

If true, will use error color instead of color from props.

**`default`** false

#### Inherited from

Omit.danger

#### Defined in

[packages/react/src/Button/typings.ts:20](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/typings.ts#L20)

___

### disabled

• `Optional` **disabled**: `boolean`

If true, button will be disabled

**`default`** false

#### Inherited from

Omit.disabled

#### Defined in

[packages/react/src/Button/typings.ts:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/typings.ts#L25)

___

### loading

• `Optional` **loading**: `boolean`

If true, replace the original icon.
Replace suffix if only suffix provided, or prefix.

**`default`** false

#### Inherited from

Omit.loading

#### Defined in

[packages/react/src/Button/typings.ts:31](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/typings.ts#L31)

___

### multiple

• `Optional` **multiple**: `boolean`

Whether can select multiple files to upload.

#### Inherited from

UploadInputProps.multiple

#### Defined in

[packages/react/src/Upload/UploadInput.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Upload/UploadInput.tsx#L18)

___

### onUpload

• `Optional` **onUpload**: (`files`: `File`[]) => `void`

#### Type declaration

▸ (`files`): `void`

Fired after user selected files.

##### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `File`[] |

##### Returns

`void`

#### Inherited from

UploadInputProps.onUpload

#### Defined in

[packages/react/src/Upload/UploadInput.tsx:22](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Upload/UploadInput.tsx#L22)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

The size of button.

**`default`** 'medium'

#### Inherited from

Omit.size

#### Defined in

[packages/react/src/Button/typings.ts:40](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/typings.ts#L40)

___

### variant

• `Optional` **variant**: ``"text"`` \| ``"contained"`` \| ``"outlined"``

The variant of button.

**`default`** 'text'

#### Inherited from

Omit.variant

#### Defined in

[packages/react/src/Button/typings.ts:49](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/typings.ts#L49)
