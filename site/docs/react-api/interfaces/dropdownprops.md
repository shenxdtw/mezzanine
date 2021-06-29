[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / DropdownProps

# Interface: DropdownProps

## Hierarchy

- `Omit`<`DetailedHTMLProps`<`HTMLAttributes`<`HTMLDivElement`\>, `HTMLDivElement`\>, ``"ref"`` \| ``"children"``\>

  ↳ **`DropdownProps`**

## Table of contents

### Properties

- [children](dropdownprops.md#children)
- [disableClickAway](dropdownprops.md#disableclickaway)
- [menu](dropdownprops.md#menu)
- [onClose](dropdownprops.md#onclose)
- [popperProps](dropdownprops.md#popperprops)

## Properties

### children

• **children**: (`ref`: `Ref`<`HTMLElement`\>) => `ReactNode`

#### Type declaration

▸ (`ref`): `ReactNode`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `Ref`<`HTMLElement`\> |

##### Returns

`ReactNode`

#### Defined in

[packages/react/src/Dropdown/Dropdown.tsx:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Dropdown/Dropdown.tsx#L15)

___

### disableClickAway

• `Optional` **disableClickAway**: `boolean`

Whether to disable triggering onClose while clicked away.

**`default`** false

#### Defined in

[packages/react/src/Dropdown/Dropdown.tsx:20](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Dropdown/Dropdown.tsx#L20)

___

### menu

• `Optional` **menu**: `ReactNode`

The dropdown menu

#### Defined in

[packages/react/src/Dropdown/Dropdown.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Dropdown/Dropdown.tsx#L24)

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

[packages/react/src/Dropdown/Dropdown.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Dropdown/Dropdown.tsx#L28)

___

### popperProps

• `Optional` **popperProps**: [`PopperProps`](popperprops.md)

the props of popper

#### Defined in

[packages/react/src/Dropdown/Dropdown.tsx:32](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Dropdown/Dropdown.tsx#L32)
