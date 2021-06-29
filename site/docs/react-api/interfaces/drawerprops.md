[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / DrawerProps

# Interface: DrawerProps

## Hierarchy

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>

- `Pick`<[`OverlayProps`](overlayprops.md), ``"container"`` \| ``"disableCloseOnBackdropClick"`` \| ``"disablePortal"`` \| ``"hideBackdrop"`` \| ``"onBackdropClick"`` \| ``"onClose"`` \| ``"open"``\>

  ↳ **`DrawerProps`**

## Table of contents

### Properties

- [container](drawerprops.md#container)
- [disableCloseOnBackdropClick](drawerprops.md#disablecloseonbackdropclick)
- [disableCloseOnEscapeKeyDown](drawerprops.md#disablecloseonescapekeydown)
- [disablePortal](drawerprops.md#disableportal)
- [hideBackdrop](drawerprops.md#hidebackdrop)
- [onBackdropClick](drawerprops.md#onbackdropclick)
- [onClose](drawerprops.md#onclose)
- [open](drawerprops.md#open)
- [placement](drawerprops.md#placement)

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

Controls whether to disable closing drawer while escape key down.

**`default`** false

#### Defined in

[packages/react/src/Drawer/Drawer.tsx:27](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Drawer/Drawer.tsx#L27)

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

### hideBackdrop

• `Optional` **hideBackdrop**: `boolean`

Whether to hide backdrop.

**`default`** false

#### Inherited from

Pick.hideBackdrop

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L21)

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

### placement

• `Optional` **placement**: ``"top"`` \| ``"right"`` \| ``"bottom"`` \| ``"left"``

Whether the drawer placement.

**`default`** 'left'

#### Defined in

[packages/react/src/Drawer/Drawer.tsx:32](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Drawer/Drawer.tsx#L32)
