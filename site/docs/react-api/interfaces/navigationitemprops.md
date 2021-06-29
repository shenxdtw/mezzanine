[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / NavigationItemProps

# Interface: NavigationItemProps

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"li"``\>, ``"onClick"``\>

  ↳ **`NavigationItemProps`**

## Table of contents

### Properties

- [active](navigationitemprops.md#active)
- [children](navigationitemprops.md#children)
- [icon](navigationitemprops.md#icon)
- [key](navigationitemprops.md#key)
- [onClick](navigationitemprops.md#onclick)

## Properties

### active

• `Optional` **active**: `boolean`

Whether the item is active.

#### Defined in

[packages/react/src/Navigation/NavigationItem.tsx:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/NavigationItem.tsx#L25)

___

### children

• `Optional` **children**: `ReactNode`

Item display content.

#### Overrides

Omit.children

#### Defined in

[packages/react/src/Navigation/NavigationItem.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/NavigationItem.tsx#L29)

___

### icon

• `Optional` **icon**: `IconDefinition`

Icon of the item.

#### Defined in

[packages/react/src/Navigation/NavigationItem.tsx:41](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/NavigationItem.tsx#L41)

___

### key

• `Optional` **key**: ``null`` \| `string` \| `number`

Unique ID of the item.

#### Defined in

[packages/react/src/Navigation/NavigationItem.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/NavigationItem.tsx#L33)

___

### onClick

• `Optional` **onClick**: (`key?`: ``null`` \| `string` \| `number`) => `void`

#### Type declaration

▸ (`key?`): `void`

Called when item is clicked.

##### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | ``null`` \| `string` \| `number` |

##### Returns

`void`

#### Defined in

[packages/react/src/Navigation/NavigationItem.tsx:45](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/NavigationItem.tsx#L45)
