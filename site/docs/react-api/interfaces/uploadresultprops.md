[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / UploadResultProps

# Interface: UploadResultProps

## Hierarchy

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>

  ↳ **`UploadResultProps`**

## Table of contents

### Properties

- [name](uploadresultprops.md#name)
- [status](uploadresultprops.md#status)
- [onDelete](uploadresultprops.md#ondelete)
- [onDownload](uploadresultprops.md#ondownload)
- [percentage](uploadresultprops.md#percentage)
- [size](uploadresultprops.md#size)

## Properties

### name

• **name**: `string`

#### Defined in

[packages/react/src/Upload/UploadResult.tsx:14](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Upload/UploadResult.tsx#L14)

___

### status

• **status**: [`UploadResultStatus`](../modules.md#uploadresultstatus)

#### Defined in

[packages/react/src/Upload/UploadResult.tsx:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Upload/UploadResult.tsx#L19)

___

### onDelete

• `Optional` **onDelete**: (`event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

##### Returns

`void`

#### Defined in

[packages/react/src/Upload/UploadResult.tsx:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Upload/UploadResult.tsx#L15)

___

### onDownload

• `Optional` **onDownload**: (`event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

##### Returns

`void`

#### Defined in

[packages/react/src/Upload/UploadResult.tsx:16](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Upload/UploadResult.tsx#L16)

___

### percentage

• `Optional` **percentage**: `number`

#### Defined in

[packages/react/src/Upload/UploadResult.tsx:17](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Upload/UploadResult.tsx#L17)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

#### Defined in

[packages/react/src/Upload/UploadResult.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Upload/UploadResult.tsx#L18)
