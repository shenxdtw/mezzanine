[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / PaginationProps

# Interface: PaginationProps

## Hierarchy

- `Omit`<`DetailedHTMLProps`<`HTMLAttributes`<`HTMLElement`\>, `HTMLElement`\>, ``"onChange"``\>

  ↳ **`PaginationProps`**

## Table of contents

### Properties

- [boundaryCount](paginationprops.md#boundarycount)
- [buttonText](paginationprops.md#buttontext)
- [current](paginationprops.md#current)
- [disabled](paginationprops.md#disabled)
- [hideNextButton](paginationprops.md#hidenextbutton)
- [hidePreviousButton](paginationprops.md#hidepreviousbutton)
- [hintText](paginationprops.md#hinttext)
- [inputPlaceholder](paginationprops.md#inputplaceholder)
- [itemRender](paginationprops.md#itemrender)
- [onChange](paginationprops.md#onchange)
- [pageSize](paginationprops.md#pagesize)
- [showJumper](paginationprops.md#showjumper)
- [siblingCount](paginationprops.md#siblingcount)
- [total](paginationprops.md#total)

## Properties

### boundaryCount

• `Optional` **boundaryCount**: `number`

Number of always visible pages at the beginning and end.

**`default`** 1

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:20](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L20)

___

### buttonText

• `Optional` **buttonText**: `string`

The text displayed in the jumper `button` content.

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L24)

___

### current

• `Optional` **current**: `number`

The current page number.

**`default`** 1

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L29)

___

### disabled

• `Optional` **disabled**: `boolean`

Whether the fields is disabled.

**`default`** false

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L34)

___

### hideNextButton

• `Optional` **hideNextButton**: `boolean`

If `true`, hide the next-page button.

**`default`** false

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:39](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L39)

___

### hidePreviousButton

• `Optional` **hidePreviousButton**: `boolean`

If `true`, hide the previous-page button.

**`default`** false

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:44](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L44)

___

### hintText

• `Optional` **hintText**: `string`

The hint text displayed in front of jumper `input`.

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:48](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L48)

___

### inputPlaceholder

• `Optional` **inputPlaceholder**: `string`

The hint displayed in the jumper `input` before the user enters a value.

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:52](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L52)

___

### itemRender

• `Optional` **itemRender**: (`item`: [`PaginationItemProps`](paginationitemprops.md)) => `ReactNode`

#### Type declaration

▸ (`item`): `ReactNode`

Render the item.

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`PaginationItemProps`](paginationitemprops.md) |

##### Returns

`ReactNode`

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:59](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L59)

___

### onChange

• `Optional` **onChange**: (`page`: `number`) => `void`

#### Type declaration

▸ (`page`): `void`

Callback fired when the page is changed.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page` | `number` | The page active. |

##### Returns

`void`

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:65](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L65)

___

### pageSize

• `Optional` **pageSize**: `number`

Number of data per page

**`default`** 5

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:70](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L70)

___

### showJumper

• `Optional` **showJumper**: `boolean`

Show jumper or not.

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:74](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L74)

___

### siblingCount

• `Optional` **siblingCount**: `number`

Number of always visible pages before and after the current page.

**`default`** 1

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:79](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L79)

___

### total

• `Optional` **total**: `number`

Items total count.

**`default`** 0

#### Defined in

[packages/react/src/Pagination/Pagination.tsx:84](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/Pagination.tsx#L84)
