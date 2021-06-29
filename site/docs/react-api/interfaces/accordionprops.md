[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / AccordionProps

# Interface: AccordionProps

Data Display

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"onChange"``\>

  ↳ **`AccordionProps`**

## Table of contents

### Properties

- [defaultExpanded](accordionprops.md#defaultexpanded)
- [disabled](accordionprops.md#disabled)
- [expanded](accordionprops.md#expanded)

### Methods

- [onChange](accordionprops.md#onchange)

## Properties

### defaultExpanded

• `Optional` **defaultExpanded**: `boolean`

If true, expands the accordion by default.

**`default`** false

#### Defined in

[packages/react/src/Accordion/Accordion.tsx:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Accordion/Accordion.tsx#L21)

___

### disabled

• `Optional` **disabled**: `boolean`

If true, the accordion will be displayed in a disabled state.

**`default`** false

#### Defined in

[packages/react/src/Accordion/Accordion.tsx:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Accordion/Accordion.tsx#L26)

___

### expanded

• `Optional` **expanded**: `boolean`

If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.

#### Defined in

[packages/react/src/Accordion/Accordion.tsx:30](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Accordion/Accordion.tsx#L30)

## Methods

### onChange

▸ `Optional` **onChange**(`e`): `void`

Callback fired when the expand/collapse state is changed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/react/src/Accordion/Accordion.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Accordion/Accordion.tsx#L34)
