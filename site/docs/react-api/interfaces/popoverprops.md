[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / PopoverProps

# Interface: PopoverProps

## Hierarchy

- `Omit`<[`PopperProps`](popperprops.md), ``"title"``\>

  ↳ **`PopoverProps`**

  ↳↳ [`PopconfirmProps`](popconfirmprops.md)

## Table of contents

### Properties

- [anchor](popoverprops.md#anchor)
- [container](popoverprops.md#container)
- [controllerRef](popoverprops.md#controllerref)
- [disableClickAway](popoverprops.md#disableclickaway)
- [disablePortal](popoverprops.md#disableportal)
- [onClose](popoverprops.md#onclose)
- [open](popoverprops.md#open)
- [options](popoverprops.md#options)
- [title](popoverprops.md#title)

## Properties

### anchor

• `Optional` **anchor**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The ref of trigger Element.

#### Inherited from

Omit.anchor

#### Defined in

[packages/react/src/Popper/Popper.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L29)

___

### container

• `Optional` **container**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The destination where to portal.

#### Inherited from

Omit.container

#### Defined in

[packages/react/src/Portal/Portal.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L18)

___

### controllerRef

• `Optional` **controllerRef**: ``null`` \| (`instance`: ``null`` \| {}) => `void` \| `RefObject`<`Object`\>

Provide `controllerRef` if you need access to `usePopper` results.

#### Inherited from

Omit.controllerRef

#### Defined in

[packages/react/src/Popper/Popper.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L33)

___

### disableClickAway

• `Optional` **disableClickAway**: `boolean`

Whether to disable triggering onClose while clicked away.

**`default`** false

#### Defined in

[packages/react/src/Popover/Popover.tsx:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popover/Popover.tsx#L21)

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether to disable portal.
If true, it will be a normal component.

**`default`** false

#### Inherited from

Omit.disablePortal

#### Defined in

[packages/react/src/Portal/Portal.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L24)

___

### onClose

• `Optional` **onClose**: (`event`: [`ClickAwayEvent`](../modules.md#clickawayevent)) => `void`

#### Type declaration

▸ (`event`): `void`

The handler fired while clicked away.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ClickAwayEvent`](../modules.md#clickawayevent) |

##### Returns

`void`

#### Defined in

[packages/react/src/Popover/Popover.tsx:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popover/Popover.tsx#L25)

___

### open

• `Optional` **open**: `boolean`

The portal element will show if open=true

**`default`** false

#### Inherited from

Omit.open

#### Defined in

[packages/react/src/Popper/Popper.tsx:38](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L38)

___

### options

• `Optional` **options**: [`PopperOptions`](../modules.md#popperoptions)<`any`\>

The options of usePopper hook of react-popper.

#### Inherited from

Omit.options

#### Defined in

[packages/react/src/Popper/Popper.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L42)

___

### title

• `Optional` **title**: `ReactNode`

the title of popover

#### Defined in

[packages/react/src/Popover/Popover.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popover/Popover.tsx#L29)
