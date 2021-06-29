[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / PopconfirmProps

# Interface: PopconfirmProps

## Hierarchy

- [`PopoverProps`](popoverprops.md)

- `Pick`<[`ConfirmActionsProps`](confirmactionsprops.md), ``"cancelButtonProps"`` \| ``"cancelText"`` \| ``"confirmButtonProps"`` \| ``"confirmText"`` \| ``"onCancel"`` \| ``"onConfirm"``\>

  ↳ **`PopconfirmProps`**

## Table of contents

### Properties

- [anchor](popconfirmprops.md#anchor)
- [cancelButtonProps](popconfirmprops.md#cancelbuttonprops)
- [cancelText](popconfirmprops.md#canceltext)
- [confirmButtonProps](popconfirmprops.md#confirmbuttonprops)
- [confirmText](popconfirmprops.md#confirmtext)
- [container](popconfirmprops.md#container)
- [controllerRef](popconfirmprops.md#controllerref)
- [disableClickAway](popconfirmprops.md#disableclickaway)
- [disablePortal](popconfirmprops.md#disableportal)
- [icon](popconfirmprops.md#icon)
- [onCancel](popconfirmprops.md#oncancel)
- [onClose](popconfirmprops.md#onclose)
- [onConfirm](popconfirmprops.md#onconfirm)
- [open](popconfirmprops.md#open)
- [options](popconfirmprops.md#options)
- [title](popconfirmprops.md#title)

## Properties

### anchor

• `Optional` **anchor**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The ref of trigger Element.

#### Inherited from

[PopoverProps](popoverprops.md).[anchor](popoverprops.md#anchor)

#### Defined in

[packages/react/src/Popper/Popper.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L29)

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

### container

• `Optional` **container**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The destination where to portal.

#### Inherited from

[PopoverProps](popoverprops.md).[container](popoverprops.md#container)

#### Defined in

[packages/react/src/Portal/Portal.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L18)

___

### controllerRef

• `Optional` **controllerRef**: ``null`` \| (`instance`: ``null`` \| {}) => `void` \| `RefObject`<`Object`\>

Provide `controllerRef` if you need access to `usePopper` results.

#### Inherited from

[PopoverProps](popoverprops.md).[controllerRef](popoverprops.md#controllerref)

#### Defined in

[packages/react/src/Popper/Popper.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L33)

___

### disableClickAway

• `Optional` **disableClickAway**: `boolean`

Whether to disable triggering onClose while clicked away.

**`default`** false

#### Inherited from

[PopoverProps](popoverprops.md).[disableClickAway](popoverprops.md#disableclickaway)

#### Defined in

[packages/react/src/Popover/Popover.tsx:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popover/Popover.tsx#L21)

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether to disable portal.
If true, it will be a normal component.

**`default`** false

#### Inherited from

[PopoverProps](popoverprops.md).[disablePortal](popoverprops.md#disableportal)

#### Defined in

[packages/react/src/Portal/Portal.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L24)

___

### icon

• `Optional` **icon**: `IconDefinition`

Customize the icon on the popconfirm

#### Defined in

[packages/react/src/Popconfirm/Popconfirm.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popconfirm/Popconfirm.tsx#L24)

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

### onClose

• `Optional` **onClose**: (`event`: [`ClickAwayEvent`](../modules.md#clickawayevent)) => `void`

The handler fired while clicked away.

#### Type declaration

▸ (`event`): `void`

The handler fired while clicked away.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ClickAwayEvent`](../modules.md#clickawayevent) |

##### Returns

`void`

#### Inherited from

[PopoverProps](popoverprops.md).[onClose](popoverprops.md#onclose)

#### Defined in

[packages/react/src/Popover/Popover.tsx:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popover/Popover.tsx#L25)

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

___

### open

• `Optional` **open**: `boolean`

The portal element will show if open=true

**`default`** false

#### Inherited from

[PopoverProps](popoverprops.md).[open](popoverprops.md#open)

#### Defined in

[packages/react/src/Popper/Popper.tsx:38](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L38)

___

### options

• `Optional` **options**: [`PopperOptions`](../modules.md#popperoptions)<`any`\>

The options of usePopper hook of react-popper.

#### Inherited from

[PopoverProps](popoverprops.md).[options](popoverprops.md#options)

#### Defined in

[packages/react/src/Popper/Popper.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L42)

___

### title

• `Optional` **title**: `ReactNode`

the title of the confirmation box

#### Overrides

[PopoverProps](popoverprops.md).[title](popoverprops.md#title)

#### Defined in

[packages/react/src/Popconfirm/Popconfirm.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popconfirm/Popconfirm.tsx#L28)
