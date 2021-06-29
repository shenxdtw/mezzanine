[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / ButtonGroupProps

# Interface: ButtonGroupProps

General

## Hierarchy

- [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>

  ↳ **`ButtonGroupProps`**

## Table of contents

### Properties

- [children](buttongroupprops.md#children)
- [attached](buttongroupprops.md#attached)
- [color](buttongroupprops.md#color)
- [danger](buttongroupprops.md#danger)
- [disabled](buttongroupprops.md#disabled)
- [fullWidth](buttongroupprops.md#fullwidth)
- [orientation](buttongroupprops.md#orientation)
- [size](buttongroupprops.md#size)
- [spacing](buttongroupprops.md#spacing)
- [variant](buttongroupprops.md#variant)

## Properties

### children

• **children**: `undefined` \| ``null`` \| ``false`` \| `ReactElement`<[`ComponentOverridableForwardRefComponentPropsFactory`](../modules.md#componentoverridableforwardrefcomponentpropsfactory)<[`ButtonComponent`](../modules.md#buttoncomponent), ``"button"``, [`ButtonPropsBase`](buttonpropsbase.md)\> \| [`ComponentOverridableForwardRefComponentPropsFactory`](../modules.md#componentoverridableforwardrefcomponentpropsfactory)<[`ButtonComponent`](../modules.md#buttoncomponent), ``"button"``, `Pick`<[`ButtonPropsBase`](buttonpropsbase.md), ``"color"`` \| ``"danger"`` \| ``"disabled"`` \| ``"loading"`` \| ``"size"`` \| ``"variant"``\> & { `children?`: `ReactNode`  }\>, `string` \| (`props`: `any`) => ``null`` \| `ReactElement`<`any`, `any`\> \| (`props`: `any`) => `Component`<`any`, `any`, `any`\>\> \| [`ButtonGroupChild`](../modules.md#buttongroupchild)[]

Only accept button elements or icon button elements.

#### Overrides

NativeElementPropsWithoutKeyAndRef.children

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:32](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L32)

___

### attached

• `Optional` **attached**: `boolean`

If `true`, all buttons will not have spacing between each others.

**`default`** false

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L28)

___

### color

• `Optional` **color**: ``"primary"`` \| ``"secondary"``

If the `color` of a button inside group not provided, the `color` of group will override it.

**`default`** 'primary'

#### Overrides

NativeElementPropsWithoutKeyAndRef.color

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L37)

___

### danger

• `Optional` **danger**: `boolean`

If the `danger` of a button inside group not provided, the `danger` of group will override it.

**`default`** false

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L42)

___

### disabled

• `Optional` **disabled**: `boolean`

If the `disabled` of a button inside group not provided, the `disabled` of group will override it.

**`default`** false

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:47](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L47)

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

If `true`, set width: 100%.

**`default`** false

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:52](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L52)

___

### orientation

• `Optional` **orientation**: ``"horizontal"`` \| ``"vertical"``

The orientation of button group.

**`default`** horizontal

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:57](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L57)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

If the `size` of a button inside group not provided, the `size` of group will override it.

**`default`** 'medium'

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:62](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L62)

___

### spacing

• `Optional` **spacing**: `number`

The spacing level of button gap between each buttons.
Will be added on if `attached`=false.

**`default`** small:3,others:4

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:68](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L68)

___

### variant

• `Optional` **variant**: ``"text"`` \| ``"contained"`` \| ``"outlined"``

If the `variant` of a button inside group not provided, the `variant` of group will override it.

**`default`** 'text'

#### Defined in

[packages/react/src/Button/ButtonGroup.tsx:73](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Button/ButtonGroup.tsx#L73)
