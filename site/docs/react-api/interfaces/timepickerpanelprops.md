[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TimePickerPanelProps

# Interface: TimePickerPanelProps

## Hierarchy

- `Omit`<[`TimePanelProps`](timepanelprops.md), `Exclude`<keyof [`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"className"`` \| ``"style"`` \| ``"id"``\> \| ``"withoutAction"`` \| ``"onChange"`` \| ``"value"``\>

- `Pick`<`InputTriggerPopperProps`, ``"anchor"`` \| ``"fadeProps"`` \| ``"open"``\>

  ↳ **`TimePickerPanelProps`**

## Table of contents

### Properties

- [anchor](timepickerpanelprops.md#anchor)
- [confirmText](timepickerpanelprops.md#confirmtext)
- [fadeProps](timepickerpanelprops.md#fadeprops)
- [hideHour](timepickerpanelprops.md#hidehour)
- [hideMinute](timepickerpanelprops.md#hideminute)
- [hideSecond](timepickerpanelprops.md#hidesecond)
- [hourPrefix](timepickerpanelprops.md#hourprefix)
- [hourStep](timepickerpanelprops.md#hourstep)
- [minutePrefix](timepickerpanelprops.md#minuteprefix)
- [minuteStep](timepickerpanelprops.md#minutestep)
- [onChange](timepickerpanelprops.md#onchange)
- [onConfirm](timepickerpanelprops.md#onconfirm)
- [open](timepickerpanelprops.md#open)
- [popperProps](timepickerpanelprops.md#popperprops)
- [secondPrefix](timepickerpanelprops.md#secondprefix)
- [secondStep](timepickerpanelprops.md#secondstep)
- [value](timepickerpanelprops.md#value)

## Properties

### anchor

• `Optional` **anchor**: ``null`` \| `HTMLElement` \| () => `HTMLElement` \| `RefObject`<``null`` \| `HTMLElement`\>

The ref of trigger Element.

#### Inherited from

Pick.anchor

#### Defined in

[packages/react/src/Popper/Popper.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L29)

___

### confirmText

• `Optional` **confirmText**: `ReactNode`

Display name of the confirm button.

**`default`** 'OK'

#### Inherited from

Omit.confirmText

#### Defined in

[packages/react/src/TimePanel/TimePanelAction.tsx:14](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelAction.tsx#L14)

___

### fadeProps

• `Optional` **fadeProps**: `Pick`<`TransitionImplementationProps`, ``"appear"`` \| ``"duration"`` \| ``"keepMount"`` \| ``"lazyMount"`` \| ``"onEnter"`` \| ``"onEntering"`` \| ``"onEntered"`` \| ``"onExit"`` \| ``"onExiting"`` \| ``"onExited"`` \| ``"delay"`` \| ``"easing"``\>

Other fade props you may provide to `Fade`.

#### Inherited from

Pick.fadeProps

#### Defined in

[packages/react/src/_internal/InputTriggerPopper/InputTriggerPopper.tsx:12](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/_internal/InputTriggerPopper/InputTriggerPopper.tsx#L12)

___

### hideHour

• `Optional` **hideHour**: `boolean`

Controls whether or not to hide hours column.

#### Inherited from

Omit.hideHour

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L29)

___

### hideMinute

• `Optional` **hideMinute**: `boolean`

Controls whether or not to hide minutes column.

#### Inherited from

Omit.hideMinute

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:33](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L33)

___

### hideSecond

• `Optional` **hideSecond**: `boolean`

Controls whether or not to hide seconds column.

#### Inherited from

Omit.hideSecond

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:37](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L37)

___

### hourPrefix

• `Optional` **hourPrefix**: `ReactNode`

The hours column prefix.

**`default`** 'Hrs''

#### Inherited from

Omit.hourPrefix

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L42)

___

### hourStep

• `Optional` **hourStep**: `number`

The steps of hour.

**`default`** 1

#### Inherited from

Omit.hourStep

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:47](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L47)

___

### minutePrefix

• `Optional` **minutePrefix**: `ReactNode`

The minutes column prefix.

**`default`** 'Min''

#### Inherited from

Omit.minutePrefix

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:52](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L52)

___

### minuteStep

• `Optional` **minuteStep**: `number`

The steps of minute.

**`default`** 1

#### Inherited from

Omit.minuteStep

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:57](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L57)

___

### onChange

• `Optional` **onChange**: (`value?`: `Moment`) => `void`

#### Type declaration

▸ (`value?`): `void`

Change Handler. Receive `DateType` as props.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `Moment` |

##### Returns

`void`

#### Defined in

[packages/react/src/TimePicker/TimePickerPanel.tsx:23](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePicker/TimePickerPanel.tsx#L23)

___

### onConfirm

• `Optional` **onConfirm**: `VoidFunction`

Click handler for the confirm button.

#### Inherited from

Omit.onConfirm

#### Defined in

[packages/react/src/TimePanel/TimePanelAction.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanelAction.tsx#L18)

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

[packages/react/src/TimePicker/TimePickerPanel.tsx:27](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePicker/TimePickerPanel.tsx#L27)

___

### secondPrefix

• `Optional` **secondPrefix**: `ReactNode`

The seconds column prefix.

**`default`** 'Sec''

#### Inherited from

Omit.secondPrefix

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:66](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L66)

___

### secondStep

• `Optional` **secondStep**: `number`

The steps of second.

**`default`** 1

#### Inherited from

Omit.secondStep

#### Defined in

[packages/react/src/TimePanel/TimePanel.tsx:71](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePanel/TimePanel.tsx#L71)

___

### value

• `Optional` **value**: `Moment`

Display value of the panel.

#### Defined in

[packages/react/src/TimePicker/TimePickerPanel.tsx:36](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TimePicker/TimePickerPanel.tsx#L36)
