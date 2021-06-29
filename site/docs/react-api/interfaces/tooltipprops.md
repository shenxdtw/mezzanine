[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TooltipProps

# Interface: TooltipProps

## Hierarchy

- [`PopperProps`](popperprops.md)

  ↳ **`TooltipProps`**

## Table of contents

### Methods

- [children](tooltipprops.md#children)

### Properties

- [anchor](tooltipprops.md#anchor)
- [container](tooltipprops.md#container)
- [controllerRef](tooltipprops.md#controllerref)
- [disablePortal](tooltipprops.md#disableportal)
- [mouseLeaveDelay](tooltipprops.md#mouseleavedelay)
- [open](tooltipprops.md#open)
- [options](tooltipprops.md#options)
- [title](tooltipprops.md#title)

## Methods

### children

▸ **children**(`opt`): `ReactElement`<`any`, `string` \| (`props`: `any`) => ``null`` \| `ReactElement`<`any`, `any`\> \| (`props`: `any`) => `Component`<`any`, `any`, `any`\>\>

child function that can receive events

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | `Object` |
| `opt.onMouseEnter` | (`event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void` |
| `opt.onMouseLeave` | (`event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void` |

#### Returns

`ReactElement`<`any`, `string` \| (`props`: `any`) => ``null`` \| `ReactElement`<`any`, `any`\> \| (`props`: `any`) => `Component`<`any`, `any`, `any`\>\>

#### Overrides

PopperProps.children

#### Defined in

[packages/react/src/Tooltip/Tooltip.tsx:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tooltip/Tooltip.tsx#L25)

## Properties

### anchor

• `Optional` **anchor**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The ref of trigger Element.

#### Inherited from

[PopperProps](popperprops.md).[anchor](popperprops.md#anchor)

#### Defined in

[packages/react/src/Popper/Popper.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L29)

___

### container

• `Optional` **container**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The destination where to portal.

#### Inherited from

[PopperProps](popperprops.md).[container](popperprops.md#container)

#### Defined in

[packages/react/src/Portal/Portal.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L18)

___

### controllerRef

• `Optional` **controllerRef**: ``null`` \| (`instance`: ``null`` \| {}) => `void` \| `RefObject`<`Object`\>

Provide `controllerRef` if you need access to `usePopper` results.

#### Inherited from

[PopperProps](popperprops.md).[controllerRef](popperprops.md#controllerref)

#### Defined in

[packages/react/src/Popper/Popper.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L33)

___

### disablePortal

• `Optional` **disablePortal**: `boolean`

Whether to disable portal.
If true, it will be a normal component.

**`default`** false

#### Inherited from

[PopperProps](popperprops.md).[disablePortal](popperprops.md#disableportal)

#### Defined in

[packages/react/src/Portal/Portal.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Portal/Portal.tsx#L24)

___

### mouseLeaveDelay

• `Optional` **mouseLeaveDelay**: `number`

delay time to hide when mouse leave. unit: s.

**`default`** 0.1

#### Defined in

[packages/react/src/Tooltip/Tooltip.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tooltip/Tooltip.tsx#L33)

___

### open

• `Optional` **open**: `boolean`

The portal element will show if open=true

**`default`** false

#### Inherited from

[PopperProps](popperprops.md).[open](popperprops.md#open)

#### Defined in

[packages/react/src/Popper/Popper.tsx:38](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L38)

___

### options

• `Optional` **options**: [`PopperOptions`](../modules.md#popperoptions)<`any`\>

The options of usePopper hook of react-popper.

#### Inherited from

[PopperProps](popperprops.md).[options](popperprops.md#options)

#### Defined in

[packages/react/src/Popper/Popper.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L42)

___

### title

• `Optional` **title**: `string`

title of tooltip

#### Overrides

PopperProps.title

#### Defined in

[packages/react/src/Tooltip/Tooltip.tsx:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tooltip/Tooltip.tsx#L37)
