[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TimePanelColumnProps

# Interface: TimePanelColumnProps

## Table of contents

### Properties

- [units](timepanelcolumnprops.md#units)
- [activeUnit](timepanelcolumnprops.md#activeunit)
- [cellHeight](timepanelcolumnprops.md#cellheight)
- [onChange](timepanelcolumnprops.md#onchange)
- [onNext](timepanelcolumnprops.md#onnext)
- [onPrev](timepanelcolumnprops.md#onprev)
- [prefix](timepanelcolumnprops.md#prefix)

## Properties

### units

• **units**: `TimePanelUnit`[]

Display units inside the column.

#### Defined in

[packages/react/src/TimePanel/TimePanelColumn.tsx:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelColumn.tsx#L37)

___

### activeUnit

• `Optional` **activeUnit**: `number`

The active unit of time.

#### Defined in

[packages/react/src/TimePanel/TimePanelColumn.tsx:13](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelColumn.tsx#L13)

___

### cellHeight

• `Optional` **cellHeight**: `number`

`cellHeight` controls the scroll positioning. This should meet the value of the computed cell height.

#### Defined in

[packages/react/src/TimePanel/TimePanelColumn.tsx:17](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelColumn.tsx#L17)

___

### onChange

• `Optional` **onChange**: (`unit`: `TimePanelUnit`) => `void`

#### Type declaration

▸ (`unit`): `void`

Change handler. Takes `TimePanelUnit` as its argument.

##### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `TimePanelUnit` |

##### Returns

`void`

#### Defined in

[packages/react/src/TimePanel/TimePanelColumn.tsx:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelColumn.tsx#L21)

___

### onNext

• `Optional` **onNext**: `VoidFunction`

Click handler for the next button.

#### Defined in

[packages/react/src/TimePanel/TimePanelColumn.tsx:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelColumn.tsx#L25)

___

### onPrev

• `Optional` **onPrev**: `VoidFunction`

Click handler for the prev button.

#### Defined in

[packages/react/src/TimePanel/TimePanelColumn.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelColumn.tsx#L29)

___

### prefix

• `Optional` **prefix**: `ReactNode`

The prefix of the column.

#### Defined in

[packages/react/src/TimePanel/TimePanelColumn.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelColumn.tsx#L33)
