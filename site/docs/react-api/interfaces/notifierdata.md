[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / NotifierData

# Interface: NotifierData

## Hierarchy

- `Pick`<[`NotifierConfig`](notifierconfig.md), ``"duration"``\>

  ↳ **`NotifierData`**

  ↳↳ [`NotificationData`](notificationdata.md)

## Table of contents

### Properties

- [children](notifierdata.md#children)
- [duration](notifierdata.md#duration)
- [onClose](notifierdata.md#onclose)

## Properties

### children

• `Optional` **children**: `ReactNode`

The notification content.

#### Defined in

[packages/react/src/Notifier/typings.ts:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L15)

___

### duration

• `Optional` **duration**: `number` \| ``false``

If passed as number, the notification will be closed after the amount of time.

#### Inherited from

Pick.duration

#### Defined in

[packages/react/src/Notifier/typings.ts:7](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L7)

___

### onClose

• `Optional` **onClose**: (`key`: `ReactText`) => `void`

#### Type declaration

▸ (`key`): `void`

Close Handler

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ReactText` |

##### Returns

`void`

#### Defined in

[packages/react/src/Notifier/typings.ts:19](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L19)
