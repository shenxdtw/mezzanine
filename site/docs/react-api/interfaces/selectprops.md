[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / SelectProps

# Interface: SelectProps

## Hierarchy

- `Omit`<[`SelectTriggerProps`](selecttriggerprops.md), ``"active"`` \| ``"inputProps"`` \| ``"onBlur"`` \| ``"onChange"`` \| ``"onClick"`` \| ``"onFocus"`` \| ``"onKeyDown"``\>

- `FormElementFocusHandlers`

- [`PickRenameMulti`](../modules.md#pickrenamemulti)<`Pick`<[`MenuProps`](menuprops.md), ``"itemsInView"`` \| ``"maxHeight"`` \| ``"role"`` \| ``"size"``\>, `Object`\>

- [`PickRenameMulti`](../modules.md#pickrenamemulti)<`Pick`<[`PopperProps`](popperprops.md), ``"options"``\>, `Object`\>

- `Pick`<[`MenuProps`](menuprops.md), ``"children"``\>

  ↳ **`SelectProps`**

## Table of contents

### Properties

- [className](selectprops.md#classname)
- [clearable](selectprops.md#clearable)
- [defaultValue](selectprops.md#defaultvalue)
- [disabled](selectprops.md#disabled)
- [error](selectprops.md#error)
- [forceHideSuffixActionIcon](selectprops.md#forcehidesuffixactionicon)
- [fullWidth](selectprops.md#fullwidth)
- [inputProps](selectprops.md#inputprops)
- [inputRef](selectprops.md#inputref)
- [itemsInView](selectprops.md#itemsinview)
- [menuMaxHeight](selectprops.md#menumaxheight)
- [menuRole](selectprops.md#menurole)
- [menuSize](selectprops.md#menusize)
- [mode](selectprops.md#mode)
- [onBlur](selectprops.md#onblur)
- [onClear](selectprops.md#onclear)
- [onFocus](selectprops.md#onfocus)
- [onTagClose](selectprops.md#ontagclose)
- [placeholder](selectprops.md#placeholder)
- [popperOptions](selectprops.md#popperoptions)
- [prefix](selectprops.md#prefix)
- [readOnly](selectprops.md#readonly)
- [required](selectprops.md#required)
- [size](selectprops.md#size)
- [suffixActionIcon](selectprops.md#suffixactionicon)
- [value](selectprops.md#value)

### Methods

- [onChange](selectprops.md#onchange)
- [onSearch](selectprops.md#onsearch)
- [renderValue](selectprops.md#rendervalue)

## Properties

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

### defaultValue

• `Optional` **defaultValue**: [`SelectValue`](selectvalue.md)[]

The default selection

#### Defined in

[packages/react/src/Select/Select.tsx:53](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Select.tsx#L53)

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

#### Inherited from

Omit.forceHideSuffixActionIcon

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

• `Optional` **inputProps**: `Pick`<`Pick`<`Pick`<`DetailedHTMLProps`<`InputHTMLAttributes`<`HTMLInputElement`\>, `HTMLInputElement`\>, ``"form"`` \| ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"pattern"`` \| ``"children"`` \| ``"color"`` \| ``"disabled"`` \| ``"prefix"`` \| ``"size"`` \| ``"autoFocus"`` \| ``"formAction"`` \| ``"formEncType"`` \| ``"formMethod"`` \| ``"formNoValidate"`` \| ``"formTarget"`` \| ``"name"`` \| ``"type"`` \| ``"value"`` \| ``"defaultChecked"`` \| ``"defaultValue"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"placeholder"`` \| ``"spellCheck"`` \| ``"tabIndex"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-autocomplete"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-disabled"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-haspopup"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiline"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-readonly"`` \| ``"aria-relevant"`` \| ``"aria-required"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"multiple"`` \| ``"accept"`` \| ``"alt"`` \| ``"autoComplete"`` \| ``"capture"`` \| ``"checked"`` \| ``"crossOrigin"`` \| ``"enterKeyHint"`` \| ``"height"`` \| ``"list"`` \| ``"max"`` \| ``"maxLength"`` \| ``"min"`` \| ``"minLength"`` \| ``"readOnly"`` \| ``"required"`` \| ``"src"`` \| ``"step"`` \| ``"width"``\>, ``"form"`` \| ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"pattern"`` \| ``"color"`` \| ``"prefix"`` \| ``"size"`` \| ``"autoFocus"`` \| ``"formAction"`` \| ``"formEncType"`` \| ``"formMethod"`` \| ``"formNoValidate"`` \| ``"formTarget"`` \| ``"name"`` \| ``"defaultChecked"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"placeholder"`` \| ``"spellCheck"`` \| ``"tabIndex"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-relevant"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"multiple"`` \| ``"accept"`` \| ``"alt"`` \| ``"capture"`` \| ``"checked"`` \| ``"crossOrigin"`` \| ``"enterKeyHint"`` \| ``"height"`` \| ``"list"`` \| ``"max"`` \| ``"maxLength"`` \| ``"min"`` \| ``"minLength"`` \| ``"src"`` \| ``"step"`` \| ``"width"``\>, ``"form"`` \| ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"pattern"`` \| ``"color"`` \| ``"prefix"`` \| ``"size"`` \| ``"autoFocus"`` \| ``"formAction"`` \| ``"formEncType"`` \| ``"formMethod"`` \| ``"formNoValidate"`` \| ``"formTarget"`` \| ``"name"`` \| ``"defaultChecked"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"spellCheck"`` \| ``"tabIndex"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-relevant"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocusCapture"`` \| ``"onBlurCapture"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"multiple"`` \| ``"accept"`` \| ``"alt"`` \| ``"capture"`` \| ``"checked"`` \| ``"crossOrigin"`` \| ``"enterKeyHint"`` \| ``"height"`` \| ``"list"`` \| ``"max"`` \| ``"maxLength"`` \| ``"min"`` \| ``"minLength"`` \| ``"src"`` \| ``"step"`` \| ``"width"``\>

The other native props for input element.

#### Defined in

[packages/react/src/Select/Select.tsx:57](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Select.tsx#L57)

___

### inputRef

• `Optional` **inputRef**: ``null`` \| (`instance`: ``null`` \| `HTMLInputElement`) => `void` \| `RefObject`<`HTMLInputElement`\>

The ref object for input element.

#### Inherited from

Omit.inputRef

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:57](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L57)

___

### itemsInView

• `Optional` **itemsInView**: `number`

The minimum items count in scroll container.

**`default`** 4;

#### Inherited from

PickRenameMulti.itemsInView

#### Defined in

[packages/react/src/Menu/Menu.tsx:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Menu/Menu.tsx#L15)

___

### menuMaxHeight

• `Optional` **menuMaxHeight**: `number`

The custom menu max height.

#### Inherited from

PickRenameMulti.menuMaxHeight

#### Defined in

[packages/react/src/Menu/Menu.tsx:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Menu/Menu.tsx#L19)

___

### menuRole

• `Optional` **menuRole**: `string`

The role of menu.

**`default`** 'menu'

#### Inherited from

PickRenameMulti.menuRole

#### Defined in

[packages/react/src/Menu/Menu.tsx:24](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Menu/Menu.tsx#L24)

___

### menuSize

• `Optional` **menuSize**: ``"small"`` \| ``"medium"`` \| ``"large"``

The size of menu.

**`default`** 'medium'

#### Inherited from

PickRenameMulti.menuSize

#### Defined in

[packages/react/src/Menu/Menu.tsx:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Menu/Menu.tsx#L29)

___

### mode

• `Optional` **mode**: ``"multiple"`` \| ``"single"``

Controls the layout of trigger.

#### Inherited from

Omit.mode

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:61](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L61)

___

### onBlur

• `Optional` **onBlur**: `VoidFunction`

#### Inherited from

FormElementFocusHandlers.onBlur

#### Defined in

[packages/react/src/Form/typings.ts:2](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/typings.ts#L2)

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

### onFocus

• `Optional` **onFocus**: `VoidFunction`

#### Inherited from

FormElementFocusHandlers.onFocus

#### Defined in

[packages/react/src/Form/typings.ts:3](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Form/typings.ts#L3)

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

#### Inherited from

Omit.onTagClose

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:65](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L65)

___

### placeholder

• `Optional` **placeholder**: `string`

select input placeholder

#### Overrides

Omit.placeholder

#### Defined in

[packages/react/src/Select/Select.tsx:82](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Select.tsx#L82)

___

### popperOptions

• `Optional` **popperOptions**: [`PopperOptions`](../modules.md#popperoptions)<`any`\>

The options of usePopper hook of react-popper.

#### Inherited from

PickRenameMulti.popperOptions

#### Defined in

[packages/react/src/Popper/Popper.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Popper/Popper.tsx#L42)

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

#### Inherited from

Omit.readOnly

#### Defined in

[packages/react/src/Select/SelectTrigger.tsx:70](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/SelectTrigger.tsx#L70)

___

### required

• `Optional` **required**: `boolean`

Whether the selection is required.

**`default`** false

#### Overrides

Omit.required

#### Defined in

[packages/react/src/Select/Select.tsx:91](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Select.tsx#L91)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

The size of input.

**`default`** 'medium'

#### Overrides

Omit.size

#### Defined in

[packages/react/src/Select/Select.tsx:96](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Select.tsx#L96)

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

#### Overrides

Omit.value

#### Defined in

[packages/react/src/Select/Select.tsx:101](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Select.tsx#L101)

## Methods

### onChange

▸ `Optional` **onChange**(`newOptions`): `any`

The change event handler of input element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOptions` | [`SelectValue`](selectvalue.md)[] |

#### Returns

`any`

#### Defined in

[packages/react/src/Select/Select.tsx:74](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Select.tsx#L74)

___

### onSearch

▸ `Optional` **onSearch**(`input`): `any`

The search event handler, this prop won't work when mode is `multiple`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`any`

#### Defined in

[packages/react/src/Select/Select.tsx:78](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Select.tsx#L78)

___

### renderValue

▸ `Optional` **renderValue**(`values`): `string`

To customize rendering select input value

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`SelectValue`](selectvalue.md)[] |

#### Returns

`string`

#### Overrides

Omit.renderValue

#### Defined in

[packages/react/src/Select/Select.tsx:86](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Select/Select.tsx#L86)
