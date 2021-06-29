[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / SelectTriggerProps

# Interface: SelectTriggerProps

## Hierarchy

- `Omit`<[`TextFieldProps`](textfieldprops.md), ``"active"`` \| ``"children"`` \| ``"defaultChecked"`` \| ``"suffix"``\>

  ↳ **`SelectTriggerProps`**

## Table of contents

### Properties

- [active](selecttriggerprops.md#active)
- [className](selecttriggerprops.md#classname)
- [clearable](selecttriggerprops.md#clearable)
- [disabled](selecttriggerprops.md#disabled)
- [error](selecttriggerprops.md#error)
- [forceHideSuffixActionIcon](selecttriggerprops.md#forcehidesuffixactionicon)
- [fullWidth](selecttriggerprops.md#fullwidth)
- [inputProps](selecttriggerprops.md#inputprops)
- [inputRef](selecttriggerprops.md#inputref)
- [mode](selecttriggerprops.md#mode)
- [onClear](selecttriggerprops.md#onclear)
- [onTagClose](selecttriggerprops.md#ontagclose)
- [prefix](selecttriggerprops.md#prefix)
- [readOnly](selecttriggerprops.md#readonly)
- [renderValue](selecttriggerprops.md#rendervalue)
- [required](selecttriggerprops.md#required)
- [size](selecttriggerprops.md#size)
- [suffixActionIcon](selecttriggerprops.md#suffixactionicon)
- [value](selecttriggerprops.md#value)

## Properties

### active

• `Optional` **active**: `boolean`

Controls the chevron icon layout.

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:45](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L45)

___

### className

• `Optional` **className**: `string`

#### Inherited from

Omit.className

#### Defined in

[packages/react/src/TextField/TextField.tsx:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L26)

___

### clearable

• `Optional` **clearable**: `boolean`

Whether to show the clear button.

**`default`** false

#### Inherited from

Omit.clearable

#### Defined in

[packages/react/src/TextField/TextField.tsx:31](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L31)

___

### disabled

• `Optional` **disabled**: `boolean`

Whether the field is disabled.

**`default`** false

#### Inherited from

Omit.disabled

#### Defined in

[packages/react/src/TextField/TextField.tsx:36](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L36)

___

### error

• `Optional` **error**: `boolean`

Whether the field is error.

**`default`** false

#### Inherited from

Omit.error

#### Defined in

[packages/react/src/TextField/TextField.tsx:41](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L41)

___

### forceHideSuffixActionIcon

• `Optional` **forceHideSuffixActionIcon**: `boolean`

force hide suffixAction icons

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:49](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L49)

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

If `true`, set width: 100%.

**`default`** false

#### Inherited from

Omit.fullWidth

#### Defined in

[packages/react/src/TextField/TextField.tsx:46](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L46)

___

### inputProps

• `Optional` **inputProps**: `Pick`<`Pick`<`DetailedHTMLProps`<`InputHTMLAttributes`<`HTMLInputElement`\>, `HTMLInputElement`\>, ``"form"`` \| ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"pattern"`` \| ``"children"`` \| ``"color"`` \| ``"disabled"`` \| ``"prefix"`` \| ``"size"`` \| ``"autoFocus"`` \| ``"formAction"`` \| ``"formEncType"`` \| ``"formMethod"`` \| ``"formNoValidate"`` \| ``"formTarget"`` \| ``"name"`` \| ``"type"`` \| ``"value"`` \| ``"defaultChecked"`` \| ``"defaultValue"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"placeholder"`` \| ``"spellCheck"`` \| ``"tabIndex"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-autocomplete"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-disabled"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-haspopup"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiline"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-readonly"`` \| ``"aria-relevant"`` \| ``"aria-required"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"multiple"`` \| ``"accept"`` \| ``"alt"`` \| ``"autoComplete"`` \| ``"capture"`` \| ``"checked"`` \| ``"crossOrigin"`` \| ``"enterKeyHint"`` \| ``"height"`` \| ``"list"`` \| ``"max"`` \| ``"maxLength"`` \| ``"min"`` \| ``"minLength"`` \| ``"readOnly"`` \| ``"required"`` \| ``"src"`` \| ``"step"`` \| ``"width"``\>, ``"form"`` \| ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"pattern"`` \| ``"color"`` \| ``"prefix"`` \| ``"size"`` \| ``"autoFocus"`` \| ``"formAction"`` \| ``"formEncType"`` \| ``"formMethod"`` \| ``"formNoValidate"`` \| ``"formTarget"`` \| ``"name"`` \| ``"defaultChecked"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"placeholder"`` \| ``"spellCheck"`` \| ``"tabIndex"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-relevant"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"multiple"`` \| ``"accept"`` \| ``"alt"`` \| ``"capture"`` \| ``"checked"`` \| ``"crossOrigin"`` \| ``"enterKeyHint"`` \| ``"height"`` \| ``"list"`` \| ``"max"`` \| ``"maxLength"`` \| ``"min"`` \| ``"minLength"`` \| ``"src"`` \| ``"step"`` \| ``"width"``\>

Other props you may provide to input element.

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:53](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L53)

___

### inputRef

• `Optional` **inputRef**: ``null`` \| (`instance`: ``null`` \| `HTMLInputElement`) => `void` \| `RefObject`<`HTMLInputElement`\>

The ref object for input element.

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:57](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L57)

___

### mode

• `Optional` **mode**: ``"multiple"`` \| ``"single"``

Controls the layout of trigger.

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:61](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L61)

___

### onClear

• `Optional` **onClear**: (`event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

The callback will be fired after clear icon clicked.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

##### Returns

`void`

#### Inherited from

Omit.onClear

#### Defined in

[packages/react/src/TextField/TextField.tsx:50](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L50)

___

### onTagClose

• `Optional` **onTagClose**: (`target`: [`SelectValue`](selectvalue.md)) => `void`

#### Type declaration

▸ (`target`): `void`

The click handler for the cross icon on tags

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`SelectValue`](selectvalue.md) |

##### Returns

`void`

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:65](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L65)

___

### prefix

• `Optional` **prefix**: `ReactNode`

The prefix addon of the field.

#### Inherited from

Omit.prefix

#### Defined in

[packages/react/src/TextField/TextField.tsx:54](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L54)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Whether the input is readonly.

**`default`** false

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:70](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L70)

___

### renderValue

• `Optional` **renderValue**: (`value`: [`SelectValue`](selectvalue.md)[]) => `string`

#### Type declaration

▸ (`value`): `string`

Provide if you have a customize value rendering logic.
By default will have a comma between values.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SelectValue`](selectvalue.md)[] |

##### Returns

`string`

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:75](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L75)

___

### required

• `Optional` **required**: `boolean`

Whether the input is required.

**`default`** false

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:80](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L80)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

The size of field.

**`default`** 'medium'

#### Inherited from

Omit.size

#### Defined in

[packages/react/src/TextField/TextField.tsx:59](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L59)

___

### suffixActionIcon

• `Optional` **suffixActionIcon**: `ReactElement`<`any`, `string` \| (`props`: `any`) => ``null`` \| `ReactElement`<`any`, `any`\> \| (`props`: `any`) => `Component`<`any`, `any`, `any`\>\>

#### Inherited from

Omit.suffixActionIcon

#### Defined in

[packages/react/src/TextField/TextField.tsx:64](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/TextField/TextField.tsx#L64)

___

### value

• `Optional` **value**: [`SelectValue`](selectvalue.md)[]

The value of selection.

**`default`** undefined

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:85](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L85)
