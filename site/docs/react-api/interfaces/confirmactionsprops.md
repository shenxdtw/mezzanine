[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / ConfirmActionsProps

# Interface: ConfirmActionsProps

## Hierarchy

- `Omit`<[`ButtonGroupProps`](buttongroupprops.md), ``"children"``\>

  ↳ **`ConfirmActionsProps`**

  ↳↳ [`CardActionsProps`](cardactionsprops.md)

## Table of contents

### Properties

- [attached](confirmactionsprops.md#attached)
- [cancelButtonProps](confirmactionsprops.md#cancelbuttonprops)
- [cancelText](confirmactionsprops.md#canceltext)
- [color](confirmactionsprops.md#color)
- [confirmButtonProps](confirmactionsprops.md#confirmbuttonprops)
- [confirmText](confirmactionsprops.md#confirmtext)
- [danger](confirmactionsprops.md#danger)
- [disabled](confirmactionsprops.md#disabled)
- [fullWidth](confirmactionsprops.md#fullwidth)
- [hideCancelButton](confirmactionsprops.md#hidecancelbutton)
- [hideConfirmButton](confirmactionsprops.md#hideconfirmbutton)
- [loading](confirmactionsprops.md#loading)
- [onCancel](confirmactionsprops.md#oncancel)
- [onConfirm](confirmactionsprops.md#onconfirm)
- [orientation](confirmactionsprops.md#orientation)
- [size](confirmactionsprops.md#size)
- [spacing](confirmactionsprops.md#spacing)
- [variant](confirmactionsprops.md#variant)

## Properties

### attached

• `Optional` **attached**: `boolean`

If `true`, all buttons will not have spacing between each others.

**`default`** false

#### Inherited from

Omit.attached

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L28)

___

### cancelButtonProps

• `Optional` **cancelButtonProps**: [`ComponentOverridableForwardRefComponentPropsFactory`](../modules.md#componentoverridableforwardrefcomponentpropsfactory)<[`ButtonComponent`](../modules.md#buttoncomponent), ``"button"``, [`ButtonPropsBase`](buttonpropsbase.md)\>

Other props of cancel button.

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:8](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L8)

___

### cancelText

• `Optional` **cancelText**: `ReactNode`

Content of cancel button.

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:12](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L12)

___

### color

• `Optional` **color**: ``"primary"`` \| ``"secondary"``

If the `color` of a button inside group not provided, the `color` of group will override it.

**`default`** 'primary'

#### Inherited from

Omit.color

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L37)

___

### confirmButtonProps

• `Optional` **confirmButtonProps**: [`ComponentOverridableForwardRefComponentPropsFactory`](../modules.md#componentoverridableforwardrefcomponentpropsfactory)<[`ButtonComponent`](../modules.md#buttoncomponent), ``"button"``, [`ButtonPropsBase`](buttonpropsbase.md)\>

Other props of confirm button.

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:16](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L16)

___

### confirmText

• `Optional` **confirmText**: `ReactNode`

Content of confirm button.

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:20](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L20)

___

### danger

• `Optional` **danger**: `boolean`

If the `danger` of a button inside group not provided, the `danger` of group will override it.

**`default`** false

#### Inherited from

Omit.danger

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L42)

___

### disabled

• `Optional` **disabled**: `boolean`

If the `disabled` of a button inside group not provided, the `disabled` of group will override it.

**`default`** false

#### Inherited from

Omit.disabled

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:47](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L47)

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

If `true`, set width: 100%.

**`default`** false

#### Inherited from

Omit.fullWidth

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:52](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L52)

___

### hideCancelButton

• `Optional` **hideCancelButton**: `boolean`

Whether to hide cancel button.

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L24)

___

### hideConfirmButton

• `Optional` **hideConfirmButton**: `boolean`

Whether to hide confirm button.

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L28)

___

### loading

• `Optional` **loading**: `boolean`

Indicate whether confirm button loading and cancel button disabled.

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

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:40](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L40)

___

### orientation

• `Optional` **orientation**: ``"horizontal"`` \| ``"vertical"``

The orientation of button group.

**`default`** horizontal

#### Inherited from

Omit.orientation

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:57](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L57)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

If the `size` of a button inside group not provided, the `size` of group will override it.

**`default`** 'medium'

#### Inherited from

Omit.size

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:62](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L62)

___

### spacing

• `Optional` **spacing**: `number`

The spacing level of button gap between each buttons.
Will be added on if `attached`=false.

**`default`** small:3,others:4

#### Inherited from

Omit.spacing

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:68](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L68)

___

### variant

• `Optional` **variant**: ``"text"`` \| ``"contained"`` \| ``"outlined"``

If the `variant` of a button inside group not provided, the `variant` of group will override it.

**`default`** 'text'

#### Inherited from

Omit.variant

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:73](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L73)
