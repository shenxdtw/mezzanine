[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / PageFooterProps

# Interface: PageFooterProps

## Hierarchy

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"footer"``\>

- `Pick`<[`ConfirmActionsProps`](confirmactionsprops.md), ``"cancelButtonProps"`` \| ``"cancelText"`` \| ``"confirmButtonProps"`` \| ``"confirmText"`` \| ``"danger"`` \| ``"loading"`` \| ``"hideCancelButton"`` \| ``"hideConfirmButton"`` \| ``"onCancel"`` \| ``"onConfirm"``\>

  ↳ **`PageFooterProps`**

## Table of contents

### Properties

- [actionClassName](pagefooterprops.md#actionclassname)
- [cancelButtonProps](pagefooterprops.md#cancelbuttonprops)
- [cancelText](pagefooterprops.md#canceltext)
- [children](pagefooterprops.md#children)
- [confirmButtonProps](pagefooterprops.md#confirmbuttonprops)
- [confirmText](pagefooterprops.md#confirmtext)
- [danger](pagefooterprops.md#danger)
- [hideCancelButton](pagefooterprops.md#hidecancelbutton)
- [hideConfirmButton](pagefooterprops.md#hideconfirmbutton)
- [loading](pagefooterprops.md#loading)
- [onCancel](pagefooterprops.md#oncancel)
- [onConfirm](pagefooterprops.md#onconfirm)

## Properties

### actionClassName

• `Optional` **actionClassName**: `string`

The className of action wrapper.

#### Defined in

[packages/react/src/PageFooter/PageFooter.tsx:31](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/PageFooter/PageFooter.tsx#L31)

___

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

### children

• `Optional` **children**: `ReactNode`

The action element in the left.

#### Overrides

NativeElementPropsWithoutKeyAndRef.children

#### Defined in

[packages/react/src/PageFooter/PageFooter.tsx:35](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/PageFooter/PageFooter.tsx#L35)

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

### danger

• `Optional` **danger**: `boolean`

If the `danger` of a button inside group not provided, the `danger` of group will override it.

**`default`** false

#### Inherited from

Pick.danger

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L42)

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

### loading

• `Optional` **loading**: `boolean`

Indicate whether confirm button loading and cancel button disabled.

#### Inherited from

Pick.loading

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:32](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L32)

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
