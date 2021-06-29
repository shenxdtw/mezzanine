[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / CalendarConfigs

# Interface: CalendarConfigs

## Hierarchy

- `CalendarMethods`<`DateType`\>

  ↳ **`CalendarConfigs`**

## Table of contents

### Properties

- [addDay](calendarconfigs.md#addday)
- [addMonth](calendarconfigs.md#addmonth)
- [addYear](calendarconfigs.md#addyear)
- [defaultDateFormat](calendarconfigs.md#defaultdateformat)
- [defaultTimeFormat](calendarconfigs.md#defaulttimeformat)
- [displayMonthLocale](calendarconfigs.md#displaymonthlocale)
- [displayWeekDayLocale](calendarconfigs.md#displayweekdaylocale)
- [formatToString](calendarconfigs.md#formattostring)
- [getCalendarGrid](calendarconfigs.md#getcalendargrid)
- [getDate](calendarconfigs.md#getdate)
- [getHour](calendarconfigs.md#gethour)
- [getMinute](calendarconfigs.md#getminute)
- [getMonth](calendarconfigs.md#getmonth)
- [getMonthShortName](calendarconfigs.md#getmonthshortname)
- [getMonthShortNames](calendarconfigs.md#getmonthshortnames)
- [getNow](calendarconfigs.md#getnow)
- [getSecond](calendarconfigs.md#getsecond)
- [getWeekDay](calendarconfigs.md#getweekday)
- [getWeekDayNames](calendarconfigs.md#getweekdaynames)
- [getYear](calendarconfigs.md#getyear)
- [isBefore](calendarconfigs.md#isbefore)
- [isBetween](calendarconfigs.md#isbetween)
- [isDateIncluded](calendarconfigs.md#isdateincluded)
- [isInMonth](calendarconfigs.md#isinmonth)
- [isMonthIncluded](calendarconfigs.md#ismonthincluded)
- [isSameDate](calendarconfigs.md#issamedate)
- [isSameWeek](calendarconfigs.md#issameweek)
- [isWeekIncluded](calendarconfigs.md#isweekincluded)
- [isYearIncluded](calendarconfigs.md#isyearincluded)
- [parse](calendarconfigs.md#parse)
- [setDate](calendarconfigs.md#setdate)
- [setHour](calendarconfigs.md#sethour)
- [setMinute](calendarconfigs.md#setminute)
- [setMonth](calendarconfigs.md#setmonth)
- [setSecond](calendarconfigs.md#setsecond)
- [setYear](calendarconfigs.md#setyear)
- [startOf](calendarconfigs.md#startof)
- [valueLocale](calendarconfigs.md#valuelocale)

## Properties

### addDay

• **addDay**: (`value`: `Moment`, `diff`: `number`) => `Moment`

#### Type declaration

▸ (`value`, `diff`): `Moment`

Manipulate

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `diff` | `number` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.addDay

#### Defined in

[packages/core/src/calendar/presets/typings.ts:17](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L17)

___

### addMonth

• **addMonth**: (`value`: `Moment`, `diff`: `number`) => `Moment`

#### Type declaration

▸ (`value`, `diff`): `Moment`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `diff` | `number` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.addMonth

#### Defined in

[packages/core/src/calendar/presets/typings.ts:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L19)

___

### addYear

• **addYear**: (`value`: `Moment`, `diff`: `number`) => `Moment`

#### Type declaration

▸ (`value`, `diff`): `Moment`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `diff` | `number` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.addYear

#### Defined in

[packages/core/src/calendar/presets/typings.ts:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L18)

___

### defaultDateFormat

• **defaultDateFormat**: `string`

#### Defined in

[packages/react/src/Calendar/CalendarContext.tsx:5](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarContext.tsx#L5)

___

### defaultTimeFormat

• **defaultTimeFormat**: `string`

#### Defined in

[packages/react/src/Calendar/CalendarContext.tsx:6](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarContext.tsx#L6)

___

### displayMonthLocale

• **displayMonthLocale**: `string`

#### Defined in

[packages/react/src/Calendar/CalendarContext.tsx:7](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarContext.tsx#L7)

___

### displayWeekDayLocale

• **displayWeekDayLocale**: `string`

#### Defined in

[packages/react/src/Calendar/CalendarContext.tsx:8](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarContext.tsx#L8)

___

### formatToString

• **formatToString**: (`locale`: `string`, `date`: `Moment`, `format`: `string`) => `string`

#### Type declaration

▸ (`locale`, `date`, `format`): `string`

Format

##### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |
| `date` | `Moment` |
| `format` | `string` |

##### Returns

`string`

#### Inherited from

CalendarMethods.formatToString

#### Defined in

[packages/core/src/calendar/presets/typings.ts:43](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L43)

___

### getCalendarGrid

• **getCalendarGrid**: (`target`: `Moment`) => `number`[][]

#### Type declaration

▸ (`target`): `number`[][]

Generate day calendar

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Moment` |

##### Returns

`number`[][]

#### Inherited from

CalendarMethods.getCalendarGrid

#### Defined in

[packages/core/src/calendar/presets/typings.ts:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L29)

___

### getDate

• **getDate**: (`value`: `Moment`) => `number`

#### Type declaration

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |

##### Returns

`number`

#### Inherited from

CalendarMethods.getDate

#### Defined in

[packages/core/src/calendar/presets/typings.ts:8](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L8)

___

### getHour

• **getHour**: (`value`: `Moment`) => `number`

#### Type declaration

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |

##### Returns

`number`

#### Inherited from

CalendarMethods.getHour

#### Defined in

[packages/core/src/calendar/presets/typings.ts:7](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L7)

___

### getMinute

• **getMinute**: (`value`: `Moment`) => `number`

#### Type declaration

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |

##### Returns

`number`

#### Inherited from

CalendarMethods.getMinute

#### Defined in

[packages/core/src/calendar/presets/typings.ts:6](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L6)

___

### getMonth

• **getMonth**: (`value`: `Moment`) => `number`

#### Type declaration

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |

##### Returns

`number`

#### Inherited from

CalendarMethods.getMonth

#### Defined in

[packages/core/src/calendar/presets/typings.ts:10](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L10)

___

### getMonthShortName

• **getMonthShortName**: (`value`: `number`, `locale`: `string`) => `string`

#### Type declaration

▸ (`value`, `locale`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `locale` | `string` |

##### Returns

`string`

#### Inherited from

CalendarMethods.getMonthShortName

#### Defined in

[packages/core/src/calendar/presets/typings.ts:13](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L13)

___

### getMonthShortNames

• **getMonthShortNames**: (`locale`: `string`) => readonly `string`[]

#### Type declaration

▸ (`locale`): readonly `string`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |

##### Returns

readonly `string`[]

#### Inherited from

CalendarMethods.getMonthShortNames

#### Defined in

[packages/core/src/calendar/presets/typings.ts:14](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L14)

___

### getNow

• **getNow**: () => `Moment`

#### Type declaration

▸ (): `Moment`

Get date infos

##### Returns

`Moment`

#### Inherited from

CalendarMethods.getNow

#### Defined in

[packages/core/src/calendar/presets/typings.ts:4](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L4)

___

### getSecond

• **getSecond**: (`value`: `Moment`) => `number`

#### Type declaration

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |

##### Returns

`number`

#### Inherited from

CalendarMethods.getSecond

#### Defined in

[packages/core/src/calendar/presets/typings.ts:5](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L5)

___

### getWeekDay

• **getWeekDay**: (`value`: `Moment`) => `number`

#### Type declaration

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |

##### Returns

`number`

#### Inherited from

CalendarMethods.getWeekDay

#### Defined in

[packages/core/src/calendar/presets/typings.ts:9](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L9)

___

### getWeekDayNames

• **getWeekDayNames**: (`locale`: `string`) => `string`[]

#### Type declaration

▸ (`locale`): `string`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |

##### Returns

`string`[]

#### Inherited from

CalendarMethods.getWeekDayNames

#### Defined in

[packages/core/src/calendar/presets/typings.ts:12](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L12)

___

### getYear

• **getYear**: (`value`: `Moment`) => `number`

#### Type declaration

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |

##### Returns

`number`

#### Inherited from

CalendarMethods.getYear

#### Defined in

[packages/core/src/calendar/presets/typings.ts:11](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L11)

___

### isBefore

• **isBefore**: (`target`: `Moment`, `comparison`: `Moment`) => `boolean`

#### Type declaration

▸ (`target`, `comparison`): `boolean`

Compares

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Moment` |
| `comparison` | `Moment` |

##### Returns

`boolean`

#### Inherited from

CalendarMethods.isBefore

#### Defined in

[packages/core/src/calendar/presets/typings.ts:32](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L32)

___

### isBetween

• **isBetween**: (`value`: `Moment`, `target1`: `Moment`, `target2`: `Moment`, `granularity`: `any`) => `boolean`

#### Type declaration

▸ (`value`, `target1`, `target2`, `granularity`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `target1` | `Moment` |
| `target2` | `Moment` |
| `granularity` | `any` |

##### Returns

`boolean`

#### Inherited from

CalendarMethods.isBetween

#### Defined in

[packages/core/src/calendar/presets/typings.ts:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L33)

___

### isDateIncluded

• **isDateIncluded**: (`date`: `Moment`, `targets`: `Moment`[]) => `boolean`

#### Type declaration

▸ (`date`, `targets`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |
| `targets` | `Moment`[] |

##### Returns

`boolean`

#### Inherited from

CalendarMethods.isDateIncluded

#### Defined in

[packages/core/src/calendar/presets/typings.ts:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L37)

___

### isInMonth

• **isInMonth**: (`target`: `Moment`, `month`: `number`) => `boolean`

#### Type declaration

▸ (`target`, `month`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Moment` |
| `month` | `number` |

##### Returns

`boolean`

#### Inherited from

CalendarMethods.isInMonth

#### Defined in

[packages/core/src/calendar/presets/typings.ts:36](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L36)

___

### isMonthIncluded

• **isMonthIncluded**: (`date`: `Moment`, `targets`: `Moment`[]) => `boolean`

#### Type declaration

▸ (`date`, `targets`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |
| `targets` | `Moment`[] |

##### Returns

`boolean`

#### Inherited from

CalendarMethods.isMonthIncluded

#### Defined in

[packages/core/src/calendar/presets/typings.ts:39](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L39)

___

### isSameDate

• **isSameDate**: (`dateOne`: `Moment`, `dateTwo`: `Moment`) => `boolean`

#### Type declaration

▸ (`dateOne`, `dateTwo`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dateOne` | `Moment` |
| `dateTwo` | `Moment` |

##### Returns

`boolean`

#### Inherited from

CalendarMethods.isSameDate

#### Defined in

[packages/core/src/calendar/presets/typings.ts:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L34)

___

### isSameWeek

• **isSameWeek**: (`dateOne`: `Moment`, `dateTwo`: `Moment`) => `boolean`

#### Type declaration

▸ (`dateOne`, `dateTwo`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dateOne` | `Moment` |
| `dateTwo` | `Moment` |

##### Returns

`boolean`

#### Inherited from

CalendarMethods.isSameWeek

#### Defined in

[packages/core/src/calendar/presets/typings.ts:35](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L35)

___

### isWeekIncluded

• **isWeekIncluded**: (`firstDateOfWeek`: `Moment`, `targets`: `Moment`[]) => `boolean`

#### Type declaration

▸ (`firstDateOfWeek`, `targets`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `firstDateOfWeek` | `Moment` |
| `targets` | `Moment`[] |

##### Returns

`boolean`

#### Inherited from

CalendarMethods.isWeekIncluded

#### Defined in

[packages/core/src/calendar/presets/typings.ts:38](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L38)

___

### isYearIncluded

• **isYearIncluded**: (`date`: `Moment`, `targets`: `Moment`[]) => `boolean`

#### Type declaration

▸ (`date`, `targets`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Moment` |
| `targets` | `Moment`[] |

##### Returns

`boolean`

#### Inherited from

CalendarMethods.isYearIncluded

#### Defined in

[packages/core/src/calendar/presets/typings.ts:40](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L40)

___

### parse

• **parse**: (`locale`: `string`, `text`: `string`, `formats`: `string`[]) => `undefined` \| `Moment`

#### Type declaration

▸ (`locale`, `text`, `formats`): `undefined` \| `Moment`

Parse

##### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |
| `text` | `string` |
| `formats` | `string`[] |

##### Returns

`undefined` \| `Moment`

#### Inherited from

CalendarMethods.parse

#### Defined in

[packages/core/src/calendar/presets/typings.ts:46](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L46)

___

### setDate

• **setDate**: (`value`: `Moment`, `date`: `number`) => `Moment`

#### Type declaration

▸ (`value`, `date`): `Moment`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `date` | `number` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.setDate

#### Defined in

[packages/core/src/calendar/presets/typings.ts:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L25)

___

### setHour

• **setHour**: (`value`: `Moment`, `hour`: `number`) => `Moment`

#### Type declaration

▸ (`value`, `hour`): `Moment`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `hour` | `number` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.setHour

#### Defined in

[packages/core/src/calendar/presets/typings.ts:22](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L22)

___

### setMinute

• **setMinute**: (`value`: `Moment`, `minute`: `number`) => `Moment`

#### Type declaration

▸ (`value`, `minute`): `Moment`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `minute` | `number` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.setMinute

#### Defined in

[packages/core/src/calendar/presets/typings.ts:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L21)

___

### setMonth

• **setMonth**: (`value`: `Moment`, `month`: `number`) => `Moment`

#### Type declaration

▸ (`value`, `month`): `Moment`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `month` | `number` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.setMonth

#### Defined in

[packages/core/src/calendar/presets/typings.ts:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L24)

___

### setSecond

• **setSecond**: (`value`: `Moment`, `second`: `number`) => `Moment`

#### Type declaration

▸ (`value`, `second`): `Moment`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `second` | `number` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.setSecond

#### Defined in

[packages/core/src/calendar/presets/typings.ts:20](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L20)

___

### setYear

• **setYear**: (`value`: `Moment`, `year`: `number`) => `Moment`

#### Type declaration

▸ (`value`, `year`): `Moment`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `year` | `number` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.setYear

#### Defined in

[packages/core/src/calendar/presets/typings.ts:23](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L23)

___

### startOf

• **startOf**: (`value`: `Moment`, `granularity`: `any`) => `Moment`

#### Type declaration

▸ (`value`, `granularity`): `Moment`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Moment` |
| `granularity` | `any` |

##### Returns

`Moment`

#### Inherited from

CalendarMethods.startOf

#### Defined in

[packages/core/src/calendar/presets/typings.ts:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/calendar/presets/typings.ts#L26)

___

### valueLocale

• **valueLocale**: `string`

#### Defined in

[packages/react/src/Calendar/CalendarContext.tsx:9](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarContext.tsx#L9)
