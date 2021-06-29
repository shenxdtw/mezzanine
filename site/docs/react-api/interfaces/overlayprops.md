[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / OverlayProps

# Interface: OverlayProps

## Hierarchy

- `Pick`<[`PortalProps`](portalprops.md), ``"children"`` \| ``"container"`` \| ``"disablePortal"``\>

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>

  ↳ **`OverlayProps`**

## Table of contents

### Properties

- [children](overlayprops.md#children)
- [container](overlayprops.md#container)
- [disableCloseOnBackdropClick](overlayprops.md#disablecloseonbackdropclick)
- [disablePortal](overlayprops.md#disableportal)
- [hideBackdrop](overlayprops.md#hidebackdrop)
- [invisibleBackdrop](overlayprops.md#invisiblebackdrop)
- [onBackdropClick](overlayprops.md#onbackdropclick)
- [onClose](overlayprops.md#onclose)
- [onSurface](overlayprops.md#onsurface)
- [open](overlayprops.md#open)

## Properties

### children

• `Optional` **children**: `ReactNode`

The element you want to portal.

#### Inherited from

Pick.children

#### Defined in

[packages/react/src/Portal/Portal.tsx:14](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L14)

___

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

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:16](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L16)

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

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L21)

___

### invisibleBackdrop

• `Optional` **invisibleBackdrop**: `boolean`

Whether to set backdrop invisible

**`default`** false

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L26)

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

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:30](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L30)

___

### onClose

• `Optional` **onClose**: `VoidFunction`

Callback fired while the element will be closed.

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L34)

___

### onSurface

• `Optional` **onSurface**: `boolean`

Overlay is use on top of a component(surface)

**`default`** false

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:39](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L39)

___

### open

• `Optional` **open**: `boolean`

Controls whether to show the element.

**`default`** false

#### Defined in

[packages/react/src/Overlay/Overlay.tsx:44](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Overlay/Overlay.tsx#L44)
