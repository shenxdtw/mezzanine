[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / AlertProps

# Interface: AlertProps

Feedback

## Hierarchy

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>

  ↳ **`AlertProps`**

## Table of contents

### Properties

- [onClose](alertprops.md#onclose)
- [severity](alertprops.md#severity)

## Properties

### onClose

• `Optional` **onClose**: (`event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

Close handler.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

##### Returns

`void`

#### Defined in

[packages/react/src/Alert/Alert.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Alert/Alert.tsx#L18)

___

### severity

• `Optional` **severity**: ``"error"`` \| ``"warning"`` \| ``"success"``

The severity of alert.

**`default`** success

#### Defined in

[packages/react/src/Alert/Alert.tsx:23](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Alert/Alert.tsx#L23)
