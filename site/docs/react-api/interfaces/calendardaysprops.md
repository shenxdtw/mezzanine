[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / CalendarDaysProps

# Interface: CalendarDaysProps

## Hierarchy

- `Pick`<[`CalendarDayOfWeekProps`](calendardayofweekprops.md), ``"displayWeekDayLocale"``\>

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"onClick"`` \| ``"children"``\>

  ↳ **`CalendarDaysProps`**

## Table of contents

### Properties

- [referenceDate](calendardaysprops.md#referencedate)
- [displayWeekDayLocale](calendardaysprops.md#displayweekdaylocale)
- [isDateDisabled](calendardaysprops.md#isdatedisabled)
- [isDateInRange](calendardaysprops.md#isdateinrange)
- [onClick](calendardaysprops.md#onclick)
- [onDateHover](calendardaysprops.md#ondatehover)
- [value](calendardaysprops.md#value)

## Properties

### referenceDate

• **referenceDate**: `Moment`

The refernce date for getting the month of the calendar.

#### Defined in

[packages/react/src/Calendar/CalendarDays.tsx:36](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarDays.tsx#L36)

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

### isDateDisabled

• `Optional` **isDateDisabled**: (`date`: `Moment`) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Provide if you have a custom disabling logic. The method takes the date object as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |

##### Returns

`boolean`

#### Defined in

[packages/react/src/Calendar/CalendarDays.tsx:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarDays.tsx#L19)

___

### isDateInRange

• `Optional` **isDateInRange**: (`date`: `Moment`) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Provide if you have a custom logic for checking if the date is in range.
The method takes the date object as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |

##### Returns

`boolean`

#### Defined in

[packages/react/src/Calendar/CalendarDays.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarDays.tsx#L24)

___

### onClick

• `Optional` **onClick**: (`date`: `Moment`) => `void`

#### Type declaration

▸ (`date`): `void`

Click handler for date button.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/Calendar/CalendarDays.tsx:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarDays.tsx#L28)

___

### onDateHover

• `Optional` **onDateHover**: (`date`: `Moment`) => `void`

#### Type declaration

▸ (`date`): `void`

Mouse enter handler for date button.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/Calendar/CalendarDays.tsx:32](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarDays.tsx#L32)

___

### value

• `Optional` **value**: `Moment`[]

If provided, each date that matches the same dates in this array will be marked as active.

#### Defined in

[packages/react/src/Calendar/CalendarDays.tsx:40](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarDays.tsx#L40)
