[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / CalendarYearsProps

# Interface: CalendarYearsProps

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"onClick"`` \| ``"children"``\>

  ↳ **`CalendarYearsProps`**

## Table of contents

### Properties

- [referenceDate](calendaryearsprops.md#referencedate)
- [isYearDisabled](calendaryearsprops.md#isyeardisabled)
- [isYearInRange](calendaryearsprops.md#isyearinrange)
- [onClick](calendaryearsprops.md#onclick)
- [onYearHover](calendaryearsprops.md#onyearhover)
- [value](calendaryearsprops.md#value)

## Properties

### referenceDate

• **referenceDate**: `Moment`

The refernce date for getting the years range and computing the date object.

#### Defined in

[packages/react/src/Calendar/CalendarYears.tsx:38](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarYears.tsx#L38)

___

### isYearDisabled

• `Optional` **isYearDisabled**: (`date`: `Moment`) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Provide if you have a custom disabling logic.
The method takes the date object as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |

##### Returns

`boolean`

#### Defined in

[packages/react/src/Calendar/CalendarYears.tsx:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarYears.tsx#L19)

___

### isYearInRange

• `Optional` **isYearInRange**: (`date`: `Moment`) => `boolean`

#### Type declaration

▸ (`date`): `boolean`

Provide if you have a custom logic for checking if the year is in range.
The method takes the date object as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |

##### Returns

`boolean`

#### Defined in

[packages/react/src/Calendar/CalendarYears.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarYears.tsx#L24)

___

### onClick

• `Optional` **onClick**: (`target`: `Moment`) => `void`

#### Type declaration

▸ (`target`): `void`

Click handler for the button of each year.
The method takes the date object as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/Calendar/CalendarYears.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarYears.tsx#L29)

___

### onYearHover

• `Optional` **onYearHover**: (`target`: `Moment`) => `void`

#### Type declaration

▸ (`target`): `void`

Mouse enter handler for the button of each year.
The method takes the date object as its parameter.

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/Calendar/CalendarYears.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarYears.tsx#L34)

___

### value

• `Optional` **value**: `Moment`[]

The year will be marked as active if it matches the same year of any value in the array.

#### Defined in

[packages/react/src/Calendar/CalendarYears.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarYears.tsx#L42)
