[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / MessageData

# Interface: MessageData

## Hierarchy

- `Omit`<[`NotifierData`](notifierdata.md), ``"onClose"``\>

- `MessageConfigProps`

  ↳ **`MessageData`**

## Table of contents

### Properties

- [children](messagedata.md#children)
- [direction](messagedata.md#direction)
- [duration](messagedata.md#duration)
- [easing](messagedata.md#easing)
- [onEnter](messagedata.md#onenter)
- [onEntered](messagedata.md#onentered)
- [onEntering](messagedata.md#onentering)
- [onExit](messagedata.md#onexit)
- [onExited](messagedata.md#onexited)
- [onExiting](messagedata.md#onexiting)
- [reference](messagedata.md#reference)
- [severity](messagedata.md#severity)

## Properties

### children

• `Optional` **children**: `ReactNode`

The notification content.

#### Inherited from

Omit.children

#### Defined in

[packages/react/src/Notifier/typings.ts:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L15)

___

### direction

• `Optional` **direction**: ``"right"`` \| ``"left"`` \| ``"up"`` \| ``"down"``

The direction of child element will enter to.

**`default`** 'down'

#### Inherited from

MessageConfigProps.direction

#### Defined in

[packages/react/src/Transition/SlideFade.tsx:55](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/SlideFade.tsx#L55)

___

### duration

• `Optional` **duration**: `number` \| ``false``

If given, the message will be closed after the amount of time.
You can use `Message.config` to overwrite.

**`default`** 3000

#### Overrides

Omit.duration

#### Defined in

[packages/react/src/Message/Message.tsx:42](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Message/Message.tsx#L42)

___

### easing

• `Optional` **easing**: `string` \| { `enter`:  ; `exit`:   }

The timing function of the transition

#### Inherited from

MessageConfigProps.easing

#### Defined in

[packages/react/src/Transition/Transition.tsx:51](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L51)

___

### onEnter

• `Optional` **onEnter**: `TransitionEnterHandler`

Callback fired before the `entering` state applied

#### Inherited from

MessageConfigProps.onEnter

#### Defined in

[packages/react/src/Transition/Transition.tsx:94](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L94)

___

### onEntered

• `Optional` **onEntered**: `TransitionEnterHandler`

Callback fired after the `entered` state applied

#### Inherited from

MessageConfigProps.onEntered

#### Defined in

[packages/react/src/Transition/Transition.tsx:102](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L102)

___

### onEntering

• `Optional` **onEntering**: `TransitionEnterHandler`

Callback fired after the `entering` state applied

#### Inherited from

MessageConfigProps.onEntering

#### Defined in

[packages/react/src/Transition/Transition.tsx:98](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L98)

___

### onExit

• `Optional` **onExit**: `TransitionExitHandler`

Callback fired before the `exiting` state applied.

#### Inherited from

MessageConfigProps.onExit

#### Defined in

[packages/react/src/Transition/Transition.tsx:106](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L106)

___

### onExited

• `Optional` **onExited**: `TransitionExitHandler`

Callback fired after the `exited` state applied.

#### Inherited from

MessageConfigProps.onExited

#### Defined in

[packages/react/src/Transition/Transition.tsx:114](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L114)

___

### onExiting

• `Optional` **onExiting**: `TransitionExitHandler`

Callback fired after the `exiting` state applied.

#### Inherited from

MessageConfigProps.onExiting

#### Defined in

[packages/react/src/Transition/Transition.tsx:110](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L110)

___

### reference

• `Optional` **reference**: `string` \| `number`

The key of message.

#### Defined in

[packages/react/src/Message/Message.tsx:46](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Message/Message.tsx#L46)

___

### severity

• `Optional` **severity**: ``"error"`` \| ``"warning"`` \| ``"success"`` \| ``"info"``

The severity of the message.

**`default`** info

#### Defined in

[packages/react/src/Message/Message.tsx:51](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Message/Message.tsx#L51)
