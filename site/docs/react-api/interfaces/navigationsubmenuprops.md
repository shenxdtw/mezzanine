[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / NavigationSubMenuProps

# Interface: NavigationSubMenuProps

## Hierarchy

- `Omit`<[`NavigationItemProps`](navigationitemprops.md), ``"onClick"`` \| ``"eventKey"`` \| ``"key"``\>

  ↳ **`NavigationSubMenuProps`**

## Table of contents

### Properties

- [active](navigationsubmenuprops.md#active)
- [children](navigationsubmenuprops.md#children)
- [icon](navigationsubmenuprops.md#icon)
- [title](navigationsubmenuprops.md#title)

## Properties

### active

• `Optional` **active**: `boolean`

Whether the item is active.

#### Inherited from

Omit.active

#### Defined in

[packages/react/src/Navigation/NavigationItem.tsx:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/NavigationItem.tsx#L25)

___

### children

• `Optional` **children**: [`NavigationSubMenuChild`](../modules.md#navigationsubmenuchild) \| [`NavigationSubMenuChild`](../modules.md#navigationsubmenuchild)[]

Strict children with `NavigationItem`.

**`default`** []

#### Overrides

Omit.children

#### Defined in

[packages/react/src/Navigation/NavigationSubMenu.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/NavigationSubMenu.tsx#L33)

___

### icon

• `Optional` **icon**: `IconDefinition`

Icon of the item.

#### Inherited from

Omit.icon

#### Defined in

[packages/react/src/Navigation/NavigationItem.tsx:41](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/NavigationItem.tsx#L41)

___

### title

• `Optional` **title**: `string`

Set display title for sub-menu item.

#### Overrides

Omit.title

#### Defined in

[packages/react/src/Navigation/NavigationSubMenu.tsx:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/NavigationSubMenu.tsx#L37)
