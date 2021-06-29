[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TimePanelProps

# Interface: TimePanelProps

## Hierarchy

- `Pick`<[`TimePanelActionProps`](timepanelactionprops.md), ``"confirmText"`` \| ``"onConfirm"``\>

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"value"`` \| ``"onChange"`` \| ``"children"``\>

  ↳ **`TimePanelProps`**

## Table of contents

### Properties

- [confirmText](timepanelprops.md#confirmtext)
- [hideHour](timepanelprops.md#hidehour)
- [hideMinute](timepanelprops.md#hideminute)
- [hideSecond](timepanelprops.md#hidesecond)
- [hourPrefix](timepanelprops.md#hourprefix)
- [hourStep](timepanelprops.md#hourstep)
- [minutePrefix](timepanelprops.md#minuteprefix)
- [minuteStep](timepanelprops.md#minutestep)
- [onChange](timepanelprops.md#onchange)
- [onConfirm](timepanelprops.md#onconfirm)
- [secondPrefix](timepanelprops.md#secondprefix)
- [secondStep](timepanelprops.md#secondstep)
- [value](timepanelprops.md#value)
- [withoutAction](timepanelprops.md#withoutaction)

## Properties

### confirmText

• `Optional` **confirmText**: `ReactNode`

Display name of the confirm button.

**`default`** 'OK'

#### Inherited from

Pick.confirmText

#### Defined in

[packages/react/src/TimePanel/TimePanelAction.tsx:14](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelAction.tsx#L14)

___

### hideHour

• `Optional` **hideHour**: `boolean`

Controls whether or not to hide hours column.

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L29)

___

### hideMinute

• `Optional` **hideMinute**: `boolean`

Controls whether or not to hide minutes column.

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L33)

___

### hideSecond

• `Optional` **hideSecond**: `boolean`

Controls whether or not to hide seconds column.

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L37)

___

### hourPrefix

• `Optional` **hourPrefix**: `ReactNode`

The hours column prefix.

**`default`** 'Hrs''

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L42)

___

### hourStep

• `Optional` **hourStep**: `number`

The steps of hour.

**`default`** 1

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:47](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L47)

___

### minutePrefix

• `Optional` **minutePrefix**: `ReactNode`

The minutes column prefix.

**`default`** 'Min''

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:52](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L52)

___

### minuteStep

• `Optional` **minuteStep**: `number`

The steps of minute.

**`default`** 1

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:57](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L57)

___

### onChange

• `Optional` **onChange**: (`target`: `Moment`) => `void`

#### Type declaration

▸ (`target`): `void`

Change handler. Takes `DateType` as its argument.

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:61](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L61)

___

### onConfirm

• `Optional` **onConfirm**: `VoidFunction`

Click handler for the confirm button.

#### Inherited from

Pick.onConfirm

#### Defined in

[packages/react/src/TimePanel/TimePanelAction.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelAction.tsx#L18)

___

### secondPrefix

• `Optional` **secondPrefix**: `ReactNode`

The seconds column prefix.

**`default`** 'Sec''

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:66](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L66)

___

### secondStep

• `Optional` **secondStep**: `number`

The steps of second.

**`default`** 1

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:71](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L71)

___

### value

• `Optional` **value**: `Moment`

Display value of the panel

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:75](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L75)

___

### withoutAction

• `Optional` **withoutAction**: `boolean`

Controls whether or not to show actions.

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:79](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L79)
