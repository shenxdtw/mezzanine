[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / StepProps

# Interface: StepProps

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"title"``\>

  ↳ **`StepProps`**

## Table of contents

### Properties

- [active](stepprops.md#active)
- [completed](stepprops.md#completed)
- [completedIconProps](stepprops.md#completediconprops)
- [disabled](stepprops.md#disabled)
- [index](stepprops.md#index)
- [title](stepprops.md#title)
- [titleProps](stepprops.md#titleprops)

## Properties

### active

• `Optional` **active**: `boolean`

Mark the step as active. automatically set by `activeStep` of `Stepper`.

#### Defined in

[packages/react/src/Stepper/Step.tsx:14](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Stepper/Step.tsx#L14)

___

### completed

• `Optional` **completed**: `boolean`

Mark the step as completed. automatically set by `activeStep` of `Stepper`.

#### Defined in

[packages/react/src/Stepper/Step.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Stepper/Step.tsx#L18)

___

### completedIconProps

• `Optional` **completedIconProps**: [`IconProps`](iconprops.md)

Step icon props. effective only when the step is completed.

**`default`** 'icon: CheckIcon'

#### Defined in

[packages/react/src/Stepper/Step.tsx:23](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Stepper/Step.tsx#L23)

___

### disabled

• `Optional` **disabled**: `boolean`

Mark the step as disabled. automatically set by `activeStep` of `Stepper`.

#### Defined in

[packages/react/src/Stepper/Step.tsx:27](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Stepper/Step.tsx#L27)

___

### index

• `Optional` **index**: `number`

Step index. automatically set by the parent <Stepper />.

#### Defined in

[packages/react/src/Stepper/Step.tsx:31](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Stepper/Step.tsx#L31)

___

### title

• `Optional` **title**: `string`

The step label on the right side of the icon, visible if value is not empty.

#### Defined in

[packages/react/src/Stepper/Step.tsx:35](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Stepper/Step.tsx#L35)

___

### titleProps

• `Optional` **titleProps**: `Pick`<[`ComponentOverridableForwardRefComponentPropsFactory`](../modules.md#componentoverridableforwardrefcomponentpropsfactory)<[`TypographyComponent`](../modules.md#typographycomponent), ``"p"``, `TypographyPropsBase`\>, ``"component"`` \| ``"slot"`` \| ``"style"`` \| ``"title"`` \| ``"color"`` \| ``"prefix"`` \| ``"variant"`` \| ``"defaultChecked"`` \| ``"defaultValue"`` \| ``"suppressContentEditableWarning"`` \| ``"suppressHydrationWarning"`` \| ``"accessKey"`` \| ``"className"`` \| ``"contentEditable"`` \| ``"contextMenu"`` \| ``"dir"`` \| ``"draggable"`` \| ``"hidden"`` \| ``"id"`` \| ``"lang"`` \| ``"placeholder"`` \| ``"spellCheck"`` \| ``"tabIndex"`` \| ``"translate"`` \| ``"radioGroup"`` \| ``"role"`` \| ``"about"`` \| ``"datatype"`` \| ``"inlist"`` \| ``"property"`` \| ``"resource"`` \| ``"typeof"`` \| ``"vocab"`` \| ``"autoCapitalize"`` \| ``"autoCorrect"`` \| ``"autoSave"`` \| ``"itemProp"`` \| ``"itemScope"`` \| ``"itemType"`` \| ``"itemID"`` \| ``"itemRef"`` \| ``"results"`` \| ``"security"`` \| ``"unselectable"`` \| ``"inputMode"`` \| ``"is"`` \| ``"aria-activedescendant"`` \| ``"aria-atomic"`` \| ``"aria-autocomplete"`` \| ``"aria-busy"`` \| ``"aria-checked"`` \| ``"aria-colcount"`` \| ``"aria-colindex"`` \| ``"aria-colspan"`` \| ``"aria-controls"`` \| ``"aria-current"`` \| ``"aria-describedby"`` \| ``"aria-details"`` \| ``"aria-disabled"`` \| ``"aria-dropeffect"`` \| ``"aria-errormessage"`` \| ``"aria-expanded"`` \| ``"aria-flowto"`` \| ``"aria-grabbed"`` \| ``"aria-haspopup"`` \| ``"aria-hidden"`` \| ``"aria-invalid"`` \| ``"aria-keyshortcuts"`` \| ``"aria-label"`` \| ``"aria-labelledby"`` \| ``"aria-level"`` \| ``"aria-live"`` \| ``"aria-modal"`` \| ``"aria-multiline"`` \| ``"aria-multiselectable"`` \| ``"aria-orientation"`` \| ``"aria-owns"`` \| ``"aria-placeholder"`` \| ``"aria-posinset"`` \| ``"aria-pressed"`` \| ``"aria-readonly"`` \| ``"aria-relevant"`` \| ``"aria-required"`` \| ``"aria-roledescription"`` \| ``"aria-rowcount"`` \| ``"aria-rowindex"`` \| ``"aria-rowspan"`` \| ``"aria-selected"`` \| ``"aria-setsize"`` \| ``"aria-sort"`` \| ``"aria-valuemax"`` \| ``"aria-valuemin"`` \| ``"aria-valuenow"`` \| ``"aria-valuetext"`` \| ``"dangerouslySetInnerHTML"`` \| ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDrag"`` \| ``"onDragCapture"`` \| ``"onDragEnd"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStart"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScroll"`` \| ``"onScrollCapture"`` \| ``"onWheel"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"`` \| ``"css"`` \| ``"align"`` \| ``"display"`` \| ``"ellipsis"`` \| ``"noWrap"``\>

title typography props.

**`default`** 'variant: button2'

#### Defined in

[packages/react/src/Stepper/Step.tsx:40](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Stepper/Step.tsx#L40)
