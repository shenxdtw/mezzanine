[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / PopperProps

# Interface: PopperProps

## Hierarchy

- `Pick`<[`PortalProps`](portalprops.md), ``"container"`` \| ``"disablePortal"``\>

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>

  ↳ **`PopperProps`**

  ↳↳ [`TooltipProps`](tooltipprops.md)

## Table of contents

### Properties

- [anchor](popperprops.md#anchor)
- [container](popperprops.md#container)
- [controllerRef](popperprops.md#controllerref)
- [disablePortal](popperprops.md#disableportal)
- [open](popperprops.md#open)
- [options](popperprops.md#options)

## Properties

### anchor

• `Optional` **anchor**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The ref of trigger Element.

#### Defined in

[packages/react/src/Popper/Popper.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L29)

___

### container

• `Optional` **container**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The destination where to portal.

#### Inherited from

Pick.container

#### Defined in

[packages/react/src/Portal/Portal.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L18)

___

### controllerRef

• `Optional` **controllerRef**: ``null`` \| (`instance`: ``null`` \| {}) => `void` \| `RefObject`<`Object`\>

Provide `controllerRef` if you need access to `usePopper` results.

#### Defined in

[packages/react/src/Popper/Popper.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L33)

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

### open

• `Optional` **open**: `boolean`

The portal element will show if open=true

**`default`** false

#### Defined in

[packages/react/src/Popper/Popper.tsx:38](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L38)

___

### options

• `Optional` **options**: [`PopperOptions`](../modules.md#popperoptions)<`any`\>

The options of usePopper hook of react-popper.

#### Defined in

[packages/react/src/Popper/Popper.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L42)
