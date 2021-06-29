[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / NavigationProps

# Interface: NavigationProps

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"ul"``\>, ``"onClick"``\>

  ↳ **`NavigationProps`**

## Table of contents

### Properties

- [activeKey](navigationprops.md#activekey)
- [children](navigationprops.md#children)
- [onClick](navigationprops.md#onclick)
- [orientation](navigationprops.md#orientation)

## Properties

### activeKey

• `Optional` **activeKey**: ``null`` \| `string` \| `number`

Current active key.

#### Defined in

[packages/react/src/Navigation/Navigation.tsx:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/Navigation.tsx#L26)

___

### children

• `Optional` **children**: [`NavigationChild`](../modules.md#navigationchild) \| [`NavigationChild`](../modules.md#navigationchild)[]

Strict children with `NavigationItem` or `NavigationSubMenu`.

**`default`** []

#### Overrides

Omit.children

#### Defined in

[packages/react/src/Navigation/Navigation.tsx:31](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/Navigation.tsx#L31)

___

### onClick

• `Optional` **onClick**: (`key?`: ``null`` \| `string` \| `number`) => `void`

#### Type declaration

▸ (`key?`): `void`

Called when a navigation item is clicked.

##### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | ``null`` \| `string` \| `number` |

##### Returns

`void`

#### Defined in

[packages/react/src/Navigation/Navigation.tsx:35](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/Navigation.tsx#L35)

___

### orientation

• `Optional` **orientation**: ``"horizontal"`` \| ``"vertical"``

Navigation orientation.

**`default`** 'horizontal'

#### Defined in

[packages/react/src/Navigation/Navigation.tsx:40](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Navigation/Navigation.tsx#L40)
