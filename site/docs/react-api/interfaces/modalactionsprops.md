[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / ModalActionsProps

# Interface: ModalActionsProps

## Hierarchy

- [`ModalFooterProps`](../modules.md#modalfooterprops)

- `Pick`<[`ConfirmActionsProps`](confirmactionsprops.md), ``"cancelButtonProps"`` \| ``"cancelText"`` \| ``"confirmButtonProps"`` \| ``"confirmText"`` \| ``"hideCancelButton"`` \| ``"hideConfirmButton"`` \| ``"onCancel"`` \| ``"onConfirm"``\>

  ↳ **`ModalActionsProps`**

## Table of contents

### Properties

- [cancelButtonProps](modalactionsprops.md#cancelbuttonprops)
- [cancelText](modalactionsprops.md#canceltext)
- [confirmButtonProps](modalactionsprops.md#confirmbuttonprops)
- [confirmText](modalactionsprops.md#confirmtext)
- [hideCancelButton](modalactionsprops.md#hidecancelbutton)
- [hideConfirmButton](modalactionsprops.md#hideconfirmbutton)
- [onCancel](modalactionsprops.md#oncancel)
- [onConfirm](modalactionsprops.md#onconfirm)

## Properties

### cancelButtonProps

• `Optional` **cancelButtonProps**: [`ComponentOverridableForwardRefComponentPropsFactory`](../modules.md#componentoverridableforwardrefcomponentpropsfactory)<[`ButtonComponent`](../modules.md#buttoncomponent), ``"button"``, [`ButtonPropsBase`](buttonpropsbase.md)\>

Other props of cancel button.

#### Inherited from

Pick.cancelButtonProps

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:8](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L8)

___

### cancelText

• `Optional` **cancelText**: `ReactNode`

Content of cancel button.

#### Inherited from

Pick.cancelText

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:12](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L12)

___

### confirmButtonProps

• `Optional` **confirmButtonProps**: [`ComponentOverridableForwardRefComponentPropsFactory`](../modules.md#componentoverridableforwardrefcomponentpropsfactory)<[`ButtonComponent`](../modules.md#buttoncomponent), ``"button"``, [`ButtonPropsBase`](buttonpropsbase.md)\>

Other props of confirm button.

#### Inherited from

Pick.confirmButtonProps

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:16](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L16)

___

### confirmText

• `Optional` **confirmText**: `ReactNode`

Content of confirm button.

#### Inherited from

Pick.confirmText

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:20](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L20)

___

### hideCancelButton

• `Optional` **hideCancelButton**: `boolean`

Whether to hide cancel button.

#### Inherited from

Pick.hideCancelButton

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L24)

___

### hideConfirmButton

• `Optional` **hideConfirmButton**: `boolean`

Whether to hide confirm button.

#### Inherited from

Pick.hideConfirmButton

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L28)

___

### onCancel

• `Optional` **onCancel**: (`event`: `MouseEvent`<`HTMLButtonElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

Click handler for cancel button.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLButtonElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onCancel

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:36](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L36)

___

### onConfirm

• `Optional` **onConfirm**: (`event`: `MouseEvent`<`HTMLButtonElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

Click handler for confirm button.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLButtonElement`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onConfirm

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:40](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L40)
