[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TagProps

# Interface: TagProps

## Hierarchy

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"span"``\>

  ↳ **`TagProps`**

## Table of contents

### Properties

- [closable](tagprops.md#closable)
- [disabled](tagprops.md#disabled)
- [onClose](tagprops.md#onclose)
- [size](tagprops.md#size)

## Properties

### closable

• `Optional` **closable**: `boolean`

Whether the tag can be closed.

**`default`** false

#### Defined in

[packages/react/src/Tag/Tag.tsx:13](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tag/Tag.tsx#L13)

___

### disabled

• `Optional` **disabled**: `boolean`

Whether the tag disabled.

**`default`** false

#### Defined in

[packages/react/src/Tag/Tag.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tag/Tag.tsx#L18)

___

### onClose

• `Optional` **onClose**: (`event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

Callback executed while tag closed.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

##### Returns

`void`

#### Defined in

[packages/react/src/Tag/Tag.tsx:22](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tag/Tag.tsx#L22)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

The size of the tag.

**`default`** 'medium'

#### Defined in

[packages/react/src/Tag/Tag.tsx:27](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tag/Tag.tsx#L27)
