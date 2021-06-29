[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / NotificationData

# Interface: NotificationData

## Hierarchy

- [`NotifierData`](notifierdata.md)

- `NotificationConfigProps`

  ↳ **`NotificationData`**

## Table of contents

### Properties

- [cancelText](notificationdata.md#canceltext)
- [children](notificationdata.md#children)
- [confirmText](notificationdata.md#confirmtext)
- [direction](notificationdata.md#direction)
- [duration](notificationdata.md#duration)
- [easing](notificationdata.md#easing)
- [onCancel](notificationdata.md#oncancel)
- [onClose](notificationdata.md#onclose)
- [onConfirm](notificationdata.md#onconfirm)
- [onEnter](notificationdata.md#onenter)
- [onEntered](notificationdata.md#onentered)
- [onEntering](notificationdata.md#onentering)
- [onExit](notificationdata.md#onexit)
- [onExited](notificationdata.md#onexited)
- [onExiting](notificationdata.md#onexiting)
- [reference](notificationdata.md#reference)
- [severity](notificationdata.md#severity)
- [title](notificationdata.md#title)

## Properties

### cancelText

• `Optional` **cancelText**: `ReactNode`

Cancel button text;

#### Defined in

[packages/react/src/Notification/Notification.tsx:44](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notification/Notification.tsx#L44)

___

### children

• `Optional` **children**: `ReactNode`

The notification content.

#### Inherited from

[NotifierData](notifierdata.md).[children](notifierdata.md#children)

#### Defined in

[packages/react/src/Notifier/typings.ts:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L15)

___

### confirmText

• `Optional` **confirmText**: `ReactNode`

Confirm button text;

#### Defined in

[packages/react/src/Notification/Notification.tsx:48](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notification/Notification.tsx#L48)

___

### direction

• `Optional` **direction**: ``"right"`` \| ``"left"`` \| ``"up"`` \| ``"down"``

The direction of child element will enter to.

**`default`** 'down'

#### Inherited from

NotificationConfigProps.direction

#### Defined in

[packages/react/src/Transition/SlideFade.tsx:55](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/SlideFade.tsx#L55)

___

### duration

• `Optional` **duration**: `number` \| ``false``

If passed as number, the notification will be closed after the amount of time.

#### Inherited from

[NotifierData](notifierdata.md).[duration](notifierdata.md#duration)

#### Defined in

[packages/react/src/Notifier/typings.ts:7](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L7)

___

### easing

• `Optional` **easing**: `string` \| { `enter`:  ; `exit`:   }

The timing function of the transition

#### Inherited from

NotificationConfigProps.easing

#### Defined in

[packages/react/src/Transition/Transition.tsx:51](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L51)

___

### onCancel

• `Optional` **onCancel**: `VoidFunction`

Cancel button click event handler. <br />
If not provided, the event handler will fallback to a close function using `Notification.remove`.

#### Defined in

[packages/react/src/Notification/Notification.tsx:53](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notification/Notification.tsx#L53)

___

### onClose

• `Optional` **onClose**: (`key`: `ReactText`) => `void`

Close Handler

#### Type declaration

▸ (`key`): `void`

Close Handler

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ReactText` |

##### Returns

`void`

#### Inherited from

[NotifierData](notifierdata.md).[onClose](notifierdata.md#onclose)

#### Defined in

[packages/react/src/Notifier/typings.ts:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L19)

___

### onConfirm

• `Optional` **onConfirm**: `VoidFunction`

Confirm button click event handler. <br />
If given, will render action button group.

#### Defined in

[packages/react/src/Notification/Notification.tsx:58](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notification/Notification.tsx#L58)

___

### onEnter

• `Optional` **onEnter**: `TransitionEnterHandler`

Callback fired before the `entering` state applied

#### Inherited from

NotificationConfigProps.onEnter

#### Defined in

[packages/react/src/Transition/Transition.tsx:94](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L94)

___

### onEntered

• `Optional` **onEntered**: `TransitionEnterHandler`

Callback fired after the `entered` state applied

#### Inherited from

NotificationConfigProps.onEntered

#### Defined in

[packages/react/src/Transition/Transition.tsx:102](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L102)

___

### onEntering

• `Optional` **onEntering**: `TransitionEnterHandler`

Callback fired after the `entering` state applied

#### Inherited from

NotificationConfigProps.onEntering

#### Defined in

[packages/react/src/Transition/Transition.tsx:98](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L98)

___

### onExit

• `Optional` **onExit**: `TransitionExitHandler`

Callback fired before the `exiting` state applied.

#### Inherited from

NotificationConfigProps.onExit

#### Defined in

[packages/react/src/Transition/Transition.tsx:106](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L106)

___

### onExited

• `Optional` **onExited**: `TransitionExitHandler`

Callback fired after the `exited` state applied.

#### Inherited from

NotificationConfigProps.onExited

#### Defined in

[packages/react/src/Transition/Transition.tsx:114](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L114)

___

### onExiting

• `Optional` **onExiting**: `TransitionExitHandler`

Callback fired after the `exiting` state applied.

#### Inherited from

NotificationConfigProps.onExiting

#### Defined in

[packages/react/src/Transition/Transition.tsx:110](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L110)

___

### reference

• `Optional` **reference**: `string` \| `number`

The identifier of the notification.

#### Defined in

[packages/react/src/Notification/Notification.tsx:67](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notification/Notification.tsx#L67)

___

### severity

• `Optional` **severity**: ``"error"`` \| ``"warning"`` \| ``"success"`` \| ``"info"``

The severity of the message.

**`default`** info

#### Defined in

[packages/react/src/Notification/Notification.tsx:72](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notification/Notification.tsx#L72)

___

### title

• `Optional` **title**: `ReactNode`

The title of notification.

#### Defined in

[packages/react/src/Notification/Notification.tsx:76](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notification/Notification.tsx#L76)
