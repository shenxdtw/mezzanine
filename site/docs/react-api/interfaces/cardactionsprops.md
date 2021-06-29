[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / CardActionsProps

# Interface: CardActionsProps

## Hierarchy

- [`ConfirmActionsProps`](confirmactionsprops.md)

  ↳ **`CardActionsProps`**

## Table of contents

### Properties

- [attached](cardactionsprops.md#attached)
- [cancelButtonProps](cardactionsprops.md#cancelbuttonprops)
- [cancelText](cardactionsprops.md#canceltext)
- [color](cardactionsprops.md#color)
- [confirmButtonProps](cardactionsprops.md#confirmbuttonprops)
- [confirmText](cardactionsprops.md#confirmtext)
- [danger](cardactionsprops.md#danger)
- [disabled](cardactionsprops.md#disabled)
- [fullWidth](cardactionsprops.md#fullwidth)
- [hideCancelButton](cardactionsprops.md#hidecancelbutton)
- [hideConfirmButton](cardactionsprops.md#hideconfirmbutton)
- [loading](cardactionsprops.md#loading)
- [onCancel](cardactionsprops.md#oncancel)
- [onConfirm](cardactionsprops.md#onconfirm)
- [orientation](cardactionsprops.md#orientation)
- [otherActions](cardactionsprops.md#otheractions)
- [size](cardactionsprops.md#size)
- [spacing](cardactionsprops.md#spacing)
- [variant](cardactionsprops.md#variant)

## Properties

### attached

• `Optional` **attached**: `boolean`

If `true`, all buttons will not have spacing between each others.

**`default`** false

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[attached](confirmactionsprops.md#attached)

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L28)

___

### cancelButtonProps

• `Optional` **cancelButtonProps**: [`ComponentOverridableForwardRefComponentPropsFactory`](../modules.md#componentoverridableforwardrefcomponentpropsfactory)<[`ButtonComponent`](../modules.md#buttoncomponent), ``"button"``, [`ButtonPropsBase`](buttonpropsbase.md)\>

Other props of cancel button.

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[cancelButtonProps](confirmactionsprops.md#cancelbuttonprops)

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:8](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L8)

___

### cancelText

• `Optional` **cancelText**: `string`

Content of cancel button. not render if value is empty.

#### Overrides

[ConfirmActionsProps](confirmactionsprops.md).[cancelText](confirmactionsprops.md#canceltext)

#### Defined in

[packages/react/src/Card/CardActions.tsx:11](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Card/CardActions.tsx#L11)

___

### color

• `Optional` **color**: ``"primary"`` \| ``"secondary"``

If the `color` of a button inside group not provided, the `color` of group will override it.

**`default`** 'primary'

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[color](confirmactionsprops.md#color)

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L37)

___

### confirmButtonProps

• `Optional` **confirmButtonProps**: [`ComponentOverridableForwardRefComponentPropsFactory`](../modules.md#componentoverridableforwardrefcomponentpropsfactory)<[`ButtonComponent`](../modules.md#buttoncomponent), ``"button"``, [`ButtonPropsBase`](buttonpropsbase.md)\>

Other props of confirm button.

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[confirmButtonProps](confirmactionsprops.md#confirmbuttonprops)

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:16](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L16)

___

### confirmText

• `Optional` **confirmText**: `string`

Content of confirm button. not render if value is empty.

#### Overrides

[ConfirmActionsProps](confirmactionsprops.md).[confirmText](confirmactionsprops.md#confirmtext)

#### Defined in

[packages/react/src/Card/CardActions.tsx:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Card/CardActions.tsx#L15)

___

### danger

• `Optional` **danger**: `boolean`

If the `danger` of a button inside group not provided, the `danger` of group will override it.

**`default`** false

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[danger](confirmactionsprops.md#danger)

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L42)

___

### disabled

• `Optional` **disabled**: `boolean`

If the `disabled` of a button inside group not provided, the `disabled` of group will override it.

**`default`** false

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[disabled](confirmactionsprops.md#disabled)

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:47](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L47)

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

If `true`, set width: 100%.

**`default`** false

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[fullWidth](confirmactionsprops.md#fullwidth)

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:52](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L52)

___

### hideCancelButton

• `Optional` **hideCancelButton**: `boolean`

Whether to hide cancel button.

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[hideCancelButton](confirmactionsprops.md#hidecancelbutton)

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L24)

___

### hideConfirmButton

• `Optional` **hideConfirmButton**: `boolean`

Whether to hide confirm button.

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[hideConfirmButton](confirmactionsprops.md#hideconfirmbutton)

#### Defined in

[packages/react/src/ConfirmActions/ConfirmActions.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/ConfirmActions/ConfirmActions.tsx#L28)

___

### loading

• `Optional` **loading**: `boolean`

Indicate whether confirm button loading and cancel button disabled.

#### Overrides

[ConfirmActionsProps](confirmactionsprops.md).[loading](confirmactionsprops.md#loading)

#### Defined in

[packages/react/src/Card/CardActions.tsx:27](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Card/CardActions.tsx#L27)

___

### onCancel

• `Optional` **onCancel**: (`event`: `MouseEvent`<`HTMLButtonElement`, `MouseEvent`\>) => `void`

Click handler for cancel button.

#### Type declaration

▸ (`event`): `void`

Click handler for cancel button.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLButtonElement`, `MouseEvent`\> |

##### Returns

`void`

#### Overrides

[ConfirmActionsProps](confirmactionsprops.md).[onCancel](confirmactionsprops.md#oncancel)

#### Defined in

[packages/react/src/Card/CardActions.tsx:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Card/CardActions.tsx#L19)

___

### onConfirm

• `Optional` **onConfirm**: (`event`: `MouseEvent`<`HTMLButtonElement`, `MouseEvent`\>) => `void`

Click handler for confirm button.

#### Type declaration

▸ (`event`): `void`

Click handler for confirm button.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLButtonElement`, `MouseEvent`\> |

##### Returns

`void`

#### Overrides

[ConfirmActionsProps](confirmactionsprops.md).[onConfirm](confirmactionsprops.md#onconfirm)

#### Defined in

[packages/react/src/Card/CardActions.tsx:23](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Card/CardActions.tsx#L23)

___

### orientation

• `Optional` **orientation**: ``"horizontal"`` \| ``"vertical"``

The orientation of button group.

**`default`** horizontal

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[orientation](confirmactionsprops.md#orientation)

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:57](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L57)

___

### otherActions

• `Optional` **otherActions**: `ReactNode`

The action bottom on the left. not render if value is empty.

#### Defined in

[packages/react/src/Card/CardActions.tsx:31](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Card/CardActions.tsx#L31)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

If the `size` of a button inside group not provided, the `size` of group will override it.

**`default`** 'medium'

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[size](confirmactionsprops.md#size)

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:62](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L62)

___

### spacing

• `Optional` **spacing**: `number`

The spacing level of button gap between each buttons.
Will be added on if `attached`=false.

**`default`** small:3,others:4

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[spacing](confirmactionsprops.md#spacing)

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:68](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L68)

___

### variant

• `Optional` **variant**: ``"text"`` \| ``"contained"`` \| ``"outlined"``

If the `variant` of a button inside group not provided, the `variant` of group will override it.

**`default`** 'text'

#### Inherited from

[ConfirmActionsProps](confirmactionsprops.md).[variant](confirmactionsprops.md#variant)

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:73](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L73)
