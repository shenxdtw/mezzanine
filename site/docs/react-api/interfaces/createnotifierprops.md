[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / CreateNotifierProps

# Interface: CreateNotifierProps<N, C\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends [`NotifierData`](notifierdata.md) |
| `C` | extends [`NotifierConfig`](notifierconfig.md) |

## Hierarchy

- [`NotifierConfig`](notifierconfig.md)

  ↳ **`CreateNotifierProps`**

## Table of contents

### Properties

- [render](createnotifierprops.md#render)
- [config](createnotifierprops.md#config)
- [duration](createnotifierprops.md#duration)
- [maxCount](createnotifierprops.md#maxcount)
- [setRoot](createnotifierprops.md#setroot)

## Properties

### render

• **render**: [`RenderNotifier`](../modules.md#rendernotifier)<`N`\>

The render props for notification carrier(UI component).

#### Defined in

[packages/react/src/Notifier/createNotifier.tsx:22](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/createNotifier.tsx#L22)

___

### config

• `Optional` **config**: `C`

Customizable config for notifier. The given values should be retrivable from your notification carrier.

#### Defined in

[packages/react/src/Notifier/createNotifier.tsx:18](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/createNotifier.tsx#L18)

___

### duration

• `Optional` **duration**: `number` \| ``false``

If passed as number, the notification will be closed after the amount of time.

#### Inherited from

[NotifierConfig](notifierconfig.md).[duration](notifierconfig.md#duration)

#### Defined in

[packages/react/src/Notifier/typings.ts:7](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L7)

___

### maxCount

• `Optional` **maxCount**: `number`

#### Inherited from

[NotifierConfig](notifierconfig.md).[maxCount](notifierconfig.md#maxcount)

#### Defined in

[packages/react/src/Notifier/typings.ts:8](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L8)

___

### setRoot

• `Optional` **setRoot**: (`root`: `HTMLDivElement`) => `void`

#### Type declaration

▸ (`root`): `void`

The method to set attributes or listeners to root.

##### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `HTMLDivElement` |

##### Returns

`void`

#### Defined in

[packages/react/src/Notifier/createNotifier.tsx:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/createNotifier.tsx#L26)
