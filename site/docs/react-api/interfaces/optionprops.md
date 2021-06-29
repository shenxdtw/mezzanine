[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / OptionProps

# Interface: OptionProps

## Hierarchy

- `Omit`<[`MenuItemProps`](menuitemprops.md), ``"children"`` \| ``"role"``\>

  ↳ **`OptionProps`**

## Table of contents

### Properties

- [children](optionprops.md#children)
- [value](optionprops.md#value)
- [active](optionprops.md#active)
- [disabled](optionprops.md#disabled)
- [role](optionprops.md#role)

## Properties

### children

• **children**: `string`

option children (often means the option name)

#### Defined in

[packages/react/src/Select/Option.tsx:13](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Option.tsx#L13)

___

### value

• **value**: `string`

The value of option

#### Overrides

Omit.value

#### Defined in

[packages/react/src/Select/Option.tsx:22](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Option.tsx#L22)

___

### active

• `Optional` **active**: `boolean`

Whether the menu item is active.

**`default`** false

#### Inherited from

Omit.active

#### Defined in

[packages/react/src/Menu/MenuItem.tsx:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Menu/MenuItem.tsx#L15)

___

### disabled

• `Optional` **disabled**: `boolean`

Whether the menu item is disabled.

**`default`** false

#### Inherited from

Omit.disabled

#### Defined in

[packages/react/src/Menu/MenuItem.tsx:20](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Menu/MenuItem.tsx#L20)

___

### role

• `Optional` **role**: `string`

The role of menu item.

**`default`** 'option'

#### Defined in

[packages/react/src/Select/Option.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Option.tsx#L18)
