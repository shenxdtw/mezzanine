[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / ModalProps

# Interface: ModalProps

## Hierarchy

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>

- `Pick`<[`OverlayProps`](overlayprops.md), ``"container"`` \| ``"disableCloseOnBackdropClick"`` \| ``"disablePortal"`` \| ``"hideBackdrop"`` \| ``"onBackdropClick"`` \| ``"onClose"`` \| ``"open"``\>

  ↳ **`ModalProps`**

## Table of contents

### Properties

- [container](modalprops.md#container)
- [disableCloseOnBackdropClick](modalprops.md#disablecloseonbackdropclick)
- [disableCloseOnEscapeKeyDown](modalprops.md#disablecloseonescapekeydown)
- [disablePortal](modalprops.md#disableportal)
- [fullScreen](modalprops.md#fullscreen)
- [hideBackdrop](modalprops.md#hidebackdrop)
- [hideCloseIcon](modalprops.md#hidecloseicon)
- [loading](modalprops.md#loading)
- [onBackdropClick](modalprops.md#onbackdropclick)
- [onClose](modalprops.md#onclose)
- [open](modalprops.md#open)
- [severity](modalprops.md#severity)
- [size](modalprops.md#size)

## Properties

### container

• `Optional` **container**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The destination where to portal.

#### Inherited from

Pick.container

#### Defined in

[packages/react/src/Portal/Portal.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L18)

___

### disableCloseOnBackdropClick

• `Optional` **disableCloseOnBackdropClick**: `boolean`

Controls whether to disable closing element while backdrop clicked.

**`default`** false

#### Inherited from

Pick.disableCloseOnBackdropClick

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:16](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L16)

___

### disableCloseOnEscapeKeyDown

• `Optional` **disableCloseOnEscapeKeyDown**: `boolean`

Controls whether to disable closing modal while escape key down.

**`default`** false

#### Defined in

[packages/react/src/Modal/Modal.tsx:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Modal/Modal.tsx#L37)

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether to disable portal.
If true, it will be a normal component.

**`default`** false

#### Inherited from

Pick.disablePortal

#### Defined in

[packages/react/src/Portal/Portal.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L24)

___

### fullScreen

• `Optional` **fullScreen**: `boolean`

Whether to force full screen on any breakpoint.

**`default`** false

#### Defined in

[packages/react/src/Modal/Modal.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Modal/Modal.tsx#L42)

___

### hideBackdrop

• `Optional` **hideBackdrop**: `boolean`

Whether to hide backdrop.

**`default`** false

#### Inherited from

Pick.hideBackdrop

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L21)

___

### hideCloseIcon

• `Optional` **hideCloseIcon**: `boolean`

Controls whether or not to hide close button at top-end.

**`default`** false

#### Defined in

[packages/react/src/Modal/Modal.tsx:47](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Modal/Modal.tsx#L47)

___

### loading

• `Optional` **loading**: `boolean`

Whether the modal is loading.
Controls the loading prop of confirm button in modal actions.

#### Defined in

[packages/react/src/Modal/Modal.tsx:52](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Modal/Modal.tsx#L52)

___

### onBackdropClick

• `Optional` **onBackdropClick**: (`event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

Click handler for backdrop.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Pick.onBackdropClick

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:30](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L30)

___

### onClose

• `Optional` **onClose**: `VoidFunction`

Callback fired while the element will be closed.

#### Inherited from

Pick.onClose

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L34)

___

### open

• `Optional` **open**: `boolean`

Controls whether to show the element.

**`default`** false

#### Inherited from

Pick.open

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:44](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L44)

___

### severity

• `Optional` **severity**: ``"error"`` \| ``"warning"`` \| ``"success"`` \| ``"info"``

Controlls whether or not to display status icon before title. <br />
Notice that giving a status will only display the regular title.

**`default`** 'info'

#### Defined in

[packages/react/src/Modal/Modal.tsx:58](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Modal/Modal.tsx#L58)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"extraLarge"``

Controls the size of the modal.

**`default`** "medium"

#### Defined in

[packages/react/src/Modal/Modal.tsx:63](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Modal/Modal.tsx#L63)
