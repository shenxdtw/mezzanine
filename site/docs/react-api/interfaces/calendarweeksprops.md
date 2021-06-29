[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / CalendarWeeksProps

# Interface: CalendarWeeksProps

## Hierarchy

- `Pick`<[`CalendarDayOfWeekProps`](calendardayofweekprops.md), ``"displayWeekDayLocale"``\>

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"onClick"`` \| ``"children"``\>

  ↳ **`CalendarWeeksProps`**

## Table of contents

### Properties

- [referenceDate](calendarweeksprops.md#referencedate)
- [displayWeekDayLocale](calendarweeksprops.md#displayweekdaylocale)
- [isWeekDisabled](calendarweeksprops.md#isweekdisabled)
- [isWeekInRange](calendarweeksprops.md#isweekinrange)
- [onClick](calendarweeksprops.md#onclick)
- [onWeekHover](calendarweeksprops.md#onweekhover)
- [value](calendarweeksprops.md#value)

## Properties

### referenceDate

• **referenceDate**: `Moment`

The refernce date for getting the dates of calendar.

#### Defined in

[packages/react/src/Calendar/CalendarWeeks.tsx:39](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarWeeks.tsx#L39)

___

### displayWeekDayLocale

• `Optional` **displayWeekDayLocale**: `string`

The locale you want to use when rendering the name of week day.
If none provided, it will use the `displayWeekDayLocale` from calendar context.

#### Inherited from

Pick.displayWeekDayLocale

#### Defined in

[packages/react/src/Calendar/CalendarDayOfWeek.tsx:16](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarDayOfWeek.tsx#L16)

___

### isWeekDisabled

• `Optional` **isWeekDisabled**: (`date`: `Moment`) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Provide if you have a custom disabling logic.
The method takes the date object of first date in week as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |

##### Returns

`boolean`

#### Defined in

[packages/react/src/Calendar/CalendarWeeks.tsx:20](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarWeeks.tsx#L20)

___

### isWeekInRange

• `Optional` **isWeekInRange**: (`firstDateOfWeek`: `Moment`) => `boolean`

#### Type declaration

▸ (`firstDateOfWeek`): `boolean`

Provide if you have a custom logic for checking if the week is in range.
The method takes the date object of first date in week as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `firstDateOfWeek` | `Moment` |

##### Returns

`boolean`

#### Defined in

[packages/react/src/Calendar/CalendarWeeks.tsx:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarWeeks.tsx#L25)

___

### onClick

• `Optional` **onClick**: (`date`: `Moment`) => `void`

#### Type declaration

▸ (`date`): `void`

Click handler for the button of week row.
The method takes the date object of first date in week as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/Calendar/CalendarWeeks.tsx:30](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarWeeks.tsx#L30)

___

### onWeekHover

• `Optional` **onWeekHover**: (`firstDateOfWeek`: `Moment`) => `void`

#### Type declaration

▸ (`firstDateOfWeek`): `void`

Mouse enter handler for the button of week row.
The method takes the date object of first date in week as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `firstDateOfWeek` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/Calendar/CalendarWeeks.tsx:35](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarWeeks.tsx#L35)

___

### value

• `Optional` **value**: `Moment`[]

The week will be marked as active if the first date of week matches the same date of any value in the array.

#### Defined in

[packages/react/src/Calendar/CalendarWeeks.tsx:43](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarWeeks.tsx#L43)
