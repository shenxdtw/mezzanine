[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / DateRangePickerCalendarProps

# Interface: DateRangePickerCalendarProps

## Hierarchy

- `Pick`<`InputTriggerPopperProps`, ``"anchor"`` \| ``"fadeProps"`` \| ``"open"``\>

- `Pick`<[`CalendarProps`](calendarprops.md), ``"value"`` \| ``"onChange"`` \| ``"displayMonthLocale"`` \| ``"mode"`` \| ``"isDateInRange"`` \| ``"isDateDisabled"`` \| ``"isMonthDisabled"`` \| ``"isMonthInRange"`` \| ``"isWeekInRange"`` \| ``"isYearDisabled"`` \| ``"isYearInRange"`` \| ``"onDateHover"`` \| ``"onWeekHover"`` \| ``"onMonthHover"`` \| ``"onYearHover"`` \| ``"referenceDate"``\>

  ↳ **`DateRangePickerCalendarProps`**

## Table of contents

### Properties

- [referenceDate](daterangepickercalendarprops.md#referencedate)
- [anchor](daterangepickercalendarprops.md#anchor)
- [calendarProps](daterangepickercalendarprops.md#calendarprops)
- [displayMonthLocale](daterangepickercalendarprops.md#displaymonthlocale)
- [fadeProps](daterangepickercalendarprops.md#fadeprops)
- [firstCalendarRef](daterangepickercalendarprops.md#firstcalendarref)
- [isDateDisabled](daterangepickercalendarprops.md#isdatedisabled)
- [isDateInRange](daterangepickercalendarprops.md#isdateinrange)
- [isMonthDisabled](daterangepickercalendarprops.md#ismonthdisabled)
- [isMonthInRange](daterangepickercalendarprops.md#ismonthinrange)
- [isWeekInRange](daterangepickercalendarprops.md#isweekinrange)
- [isYearDisabled](daterangepickercalendarprops.md#isyeardisabled)
- [isYearInRange](daterangepickercalendarprops.md#isyearinrange)
- [mode](daterangepickercalendarprops.md#mode)
- [onChange](daterangepickercalendarprops.md#onchange)
- [onDateHover](daterangepickercalendarprops.md#ondatehover)
- [onMonthHover](daterangepickercalendarprops.md#onmonthhover)
- [onWeekHover](daterangepickercalendarprops.md#onweekhover)
- [onYearHover](daterangepickercalendarprops.md#onyearhover)
- [open](daterangepickercalendarprops.md#open)
- [popperProps](daterangepickercalendarprops.md#popperprops)
- [secondCalendarRef](daterangepickercalendarprops.md#secondcalendarref)
- [value](daterangepickercalendarprops.md#value)

## Properties

### referenceDate

• **referenceDate**: `Moment`

The refernce date for getting the calendar.
**The type of `referenceDate` should be the same as your declared `DateType`.**

#### Inherited from

Pick.referenceDate

#### Defined in

[packages/react/src/Calendar/Calendar.tsx:106](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/Calendar.tsx#L106)

___

### anchor

• `Optional` **anchor**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The ref of trigger Element.

#### Inherited from

Pick.anchor

#### Defined in

[packages/react/src/Popper/Popper.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L29)

___

### calendarProps

• `Optional` **calendarProps**: `Pick`<[`CalendarProps`](calendarprops.md), ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"color"`` \| ``"prefix"`` \| ``"defaultChecked"`` \| ``"defaultValue"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"placeholder"`` \| ``"spellCheck"`` \| ``"tabIndex"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-autocomplete"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-disabled"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-haspopup"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiline"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-readonly"`` \| ``"aria-relevant"`` \| ``"aria-required"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"disableOnNext"`` \| ``"disableOnPrev"`` \| ``"displayWeekDayLocale"`` \| ``"isWeekDisabled"`` \| ``"onMonthControlClick"`` \| ``"onNext"`` \| ``"onPrev"`` \| ``"onYearControlClick"`` \| ``"calendarDaysProps"`` \| ``"calendarMonthsProps"`` \| ``"calendarWeeksProps"`` \| ``"calendarYearsProps"``\>

Other props you may pass to calendar component.

#### Defined in

[packages/react/src/DateRangePicker/DateRangePickerCalendar.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/DateRangePicker/DateRangePickerCalendar.tsx#L42)

___

### displayMonthLocale

• `Optional` **displayMonthLocale**: `string`

The locale you want to use when rendering the names of month.
If none provided, it will use the `displayMonthLocale` from calendar context.

#### Inherited from

Pick.displayMonthLocale

#### Defined in

[packages/react/src/Calendar/CalendarMonths.tsx:17](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L17)

___

### fadeProps

• `Optional` **fadeProps**: `Pick`<`TransitionImplementationProps`, ``"appear"`` \| ``"duration"`` \| ``"keepMount"`` \| ``"lazyMount"`` \| ``"onEnter"`` \| ``"onEntering"`` \| ``"onEntered"`` \| ``"onExit"`` \| ``"onExiting"`` \| ``"onExited"`` \| ``"delay"`` \| ``"easing"``\>

Other fade props you may provide to `Fade`.

#### Inherited from

Pick.fadeProps

#### Defined in

[packages/react/src/_internal/InputTriggerPopper/InputTriggerPopper.tsx:12](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/_internal/InputTriggerPopper/InputTriggerPopper.tsx#L12)

___

### firstCalendarRef

• `Optional` **firstCalendarRef**: `RefObject`<`HTMLDivElement`\>

React Ref for the first(on the left side) calendar

#### Defined in

[packages/react/src/DateRangePicker/DateRangePickerCalendar.tsx:46](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/DateRangePicker/DateRangePickerCalendar.tsx#L46)

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

#### Inherited from

Pick.isDateDisabled

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

#### Inherited from

Pick.isDateInRange

#### Defined in

[packages/react/src/Calendar/CalendarDays.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarDays.tsx#L24)

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

#### Inherited from

Pick.isMonthDisabled

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

#### Inherited from

Pick.isMonthInRange

#### Defined in

[packages/react/src/Calendar/CalendarMonths.tsx:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L26)

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

#### Inherited from

Pick.isWeekInRange

#### Defined in

[packages/react/src/Calendar/CalendarWeeks.tsx:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarWeeks.tsx#L25)

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

#### Inherited from

Pick.isYearDisabled

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

#### Inherited from

Pick.isYearInRange

#### Defined in

[packages/react/src/Calendar/CalendarYears.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarYears.tsx#L24)

___

### mode

• `Optional` **mode**: ``"year"`` \| ``"month"`` \| ``"week"`` \| ``"day"``

Use this prop to switch calendars.

**`default`** 'day'

#### Inherited from

Pick.mode

#### Defined in

[packages/react/src/Calendar/Calendar.tsx:81](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/Calendar.tsx#L81)

___

### onChange

• `Optional` **onChange**: (`target`: `Moment`) => `void`

#### Type declaration

▸ (`target`): `void`

Click handler for every cell on calendars.

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Moment` |

##### Returns

`void`

#### Inherited from

Pick.onChange

#### Defined in

[packages/react/src/Calendar/Calendar.tsx:85](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/Calendar.tsx#L85)

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

#### Inherited from

Pick.onDateHover

#### Defined in

[packages/react/src/Calendar/CalendarDays.tsx:32](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarDays.tsx#L32)

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

#### Inherited from

Pick.onMonthHover

#### Defined in

[packages/react/src/Calendar/CalendarMonths.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarMonths.tsx#L34)

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

#### Inherited from

Pick.onWeekHover

#### Defined in

[packages/react/src/Calendar/CalendarWeeks.tsx:35](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarWeeks.tsx#L35)

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

#### Inherited from

Pick.onYearHover

#### Defined in

[packages/react/src/Calendar/CalendarYears.tsx:34](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/CalendarYears.tsx#L34)

___

### open

• `Optional` **open**: `boolean`

The portal element will show if open=true

**`default`** false

#### Inherited from

Pick.open

#### Defined in

[packages/react/src/Popper/Popper.tsx:38](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L38)

___

### popperProps

• `Optional` **popperProps**: `Pick`<`InputTriggerPopperProps`, ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"color"`` \| ``"prefix"`` \| ``"defaultChecked"`` \| ``"defaultValue"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"placeholder"`` \| ``"spellCheck"`` \| ``"tabIndex"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-autocomplete"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-disabled"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-haspopup"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiline"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-readonly"`` \| ``"aria-relevant"`` \| ``"aria-required"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"container"`` \| ``"disablePortal"`` \| ``"options"`` \| ``"sameWidth"`` \| ``"controllerRef"``\>

Other props you may provide to `Popper` component

#### Defined in

[packages/react/src/DateRangePicker/DateRangePickerCalendar.tsx:50](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/DateRangePicker/DateRangePickerCalendar.tsx#L50)

___

### secondCalendarRef

• `Optional` **secondCalendarRef**: `RefObject`<`HTMLDivElement`\>

React Ref for the second(on the right side) calendar

#### Defined in

[packages/react/src/DateRangePicker/DateRangePickerCalendar.tsx:59](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/DateRangePicker/DateRangePickerCalendar.tsx#L59)

___

### value

• `Optional` **value**: `Moment` \| `Moment`[]

The displaying cells will be marked as active
if the single value of it matches any date object in the array. <br />
**The type of `value` should be the same as your declared `DateType`.**

#### Inherited from

Pick.value

#### Defined in

[packages/react/src/Calendar/Calendar.tsx:112](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Calendar/Calendar.tsx#L112)
