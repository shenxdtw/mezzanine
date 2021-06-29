[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / CalendarMonthsProps

# Interface: CalendarMonthsProps

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"onClick"`` \| ``"children"``\>

  ↳ **`CalendarMonthsProps`**

## Table of contents

### Properties

- [referenceDate](calendarmonthsprops.md#referencedate)
- [displayMonthLocale](calendarmonthsprops.md#displaymonthlocale)
- [isMonthDisabled](calendarmonthsprops.md#ismonthdisabled)
- [isMonthInRange](calendarmonthsprops.md#ismonthinrange)
- [onClick](calendarmonthsprops.md#onclick)
- [onMonthHover](calendarmonthsprops.md#onmonthhover)
- [value](calendarmonthsprops.md#value)

## Properties

### referenceDate

• **referenceDate**: `Moment`

The refernce date for computing the date object.

#### Defined in

[packages/react/src/Calendar/CalendarMonths.tsx:38](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L38)

___

### displayMonthLocale

• `Optional` **displayMonthLocale**: `string`

The locale you want to use when rendering the names of month.
If none provided, it will use the `displayMonthLocale` from calendar context.

#### Defined in

[packages/react/src/Calendar/CalendarMonths.tsx:17](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L17)

___

### isMonthDisabled

• `Optional` **isMonthDisabled**: (`date`: `Moment`) => `boolean`

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

[packages/react/src/Calendar/CalendarMonths.tsx:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L21)

___

### isMonthInRange

• `Optional` **isMonthInRange**: (`date`: `Moment`) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Provide if you have a custom logic for checking if the month is in range.
The method takes the date object as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |

##### Returns

`boolean`

#### Defined in

[packages/react/src/Calendar/CalendarMonths.tsx:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L26)

___

### onClick

• `Optional` **onClick**: (`target`: `Moment`) => `void`

#### Type declaration

▸ (`target`): `void`

Click handler for each month button.

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/Calendar/CalendarMonths.tsx:30](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L30)

___

### onMonthHover

• `Optional` **onMonthHover**: (`target`: `Moment`) => `void`

#### Type declaration

▸ (`target`): `void`

Mouse enter handler for each month button.

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/Calendar/CalendarMonths.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L34)

___

### value

• `Optional` **value**: `Moment`[]

If provided, each month that matches the same months in this array will be marked as active.

#### Defined in

[packages/react/src/Calendar/CalendarMonths.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L42)
