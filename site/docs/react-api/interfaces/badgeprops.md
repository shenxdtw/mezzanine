[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / BadgeProps

# Interface: BadgeProps

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"span"``\>, ``"color"``\>

  ↳ **`BadgeProps`**

## Table of contents

### Properties

- [dot](badgeprops.md#dot)
- [overflowCount](badgeprops.md#overflowcount)

## Properties

### dot

• `Optional` **dot**: `boolean`

It `true`, ignore passed children and display as a dot.

**`default`** false

#### Defined in

[packages/react/src/Badge/Badge.tsx:11](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Badge/Badge.tsx#L11)

___

### overflowCount

• `Optional` **overflowCount**: `number`

If the children is number and greater than overflowCount, it will show overflowCount suffixed with a "+".

**`default`** 99

#### Defined in

[packages/react/src/Badge/Badge.tsx:16](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Badge/Badge.tsx#L16)
