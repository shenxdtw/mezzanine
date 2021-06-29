[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / PaginationJumperProps

# Interface: PaginationJumperProps

## Hierarchy

- `Omit`<`DetailedHTMLProps`<`HTMLAttributes`<`HTMLDivElement`\>, `HTMLDivElement`\>, ``"onChange"``\>

  ↳ **`PaginationJumperProps`**

## Table of contents

### Properties

- [buttonText](paginationjumperprops.md#buttontext)
- [disabled](paginationjumperprops.md#disabled)
- [hintText](paginationjumperprops.md#hinttext)
- [inputPlaceholder](paginationjumperprops.md#inputplaceholder)
- [onChange](paginationjumperprops.md#onchange)
- [pageSize](paginationjumperprops.md#pagesize)
- [total](paginationjumperprops.md#total)

## Properties

### buttonText

• `Optional` **buttonText**: `string`

The text displayed in the `button` content.

#### Defined in

[packages/react/src/Pagination/PaginationJumper.tsx:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/PaginationJumper.tsx#L19)

___

### disabled

• `Optional` **disabled**: `boolean`

If `true`, the pagination jumper fields is disabled.

**`default`** false

#### Defined in

[packages/react/src/Pagination/PaginationJumper.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/PaginationJumper.tsx#L24)

___

### hintText

• `Optional` **hintText**: `string`

The hint text displayed in front of `input`.

#### Defined in

[packages/react/src/Pagination/PaginationJumper.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/PaginationJumper.tsx#L28)

___

### inputPlaceholder

• `Optional` **inputPlaceholder**: `string`

The hint displayed in the `input` before the user enters a value.

#### Defined in

[packages/react/src/Pagination/PaginationJumper.tsx:32](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/PaginationJumper.tsx#L32)

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

[packages/react/src/Pagination/PaginationJumper.tsx:38](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/PaginationJumper.tsx#L38)

___

### pageSize

• `Optional` **pageSize**: `number`

Number of data per page

**`default`** 5

#### Defined in

[packages/react/src/Pagination/PaginationJumper.tsx:43](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/PaginationJumper.tsx#L43)

___

### total

• `Optional` **total**: `number`

Items total count.

**`default`** 0

#### Defined in

[packages/react/src/Pagination/PaginationJumper.tsx:48](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Pagination/PaginationJumper.tsx#L48)
