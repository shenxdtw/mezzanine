[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / Notifier

# Interface: Notifier<N, C\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends [`NotifierData`](notifierdata.md) |
| `C` | extends [`NotifierConfig`](notifierconfig.md)[`NotifierConfig`](notifierconfig.md) |

## Table of contents

### Properties

- [add](notifier.md#add)
- [config](notifier.md#config)
- [destroy](notifier.md#destroy)
- [getConfig](notifier.md#getconfig)
- [remove](notifier.md#remove)

## Properties

### add

• **add**: (`notifier`: `N` & { `key?`: `string` \| `number`  }) => `ReactText`

#### Type declaration

▸ (`notifier`): `ReactText`

##### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | `N` & { `key?`: `string` \| `number`  } |

##### Returns

`ReactText`

#### Defined in

[packages/react/src/Notifier/typings.ts:25](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L25)

___

### config

• **config**: (`configs`: `C`) => `void`

#### Type declaration

▸ (`configs`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | `C` |

##### Returns

`void`

#### Defined in

[packages/react/src/Notifier/typings.ts:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L26)

___

### destroy

• **destroy**: `VoidFunction`

#### Defined in

[packages/react/src/Notifier/typings.ts:27](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L27)

___

### getConfig

• **getConfig**: () => `C`

#### Type declaration

▸ (): `C`

##### Returns

`C`

#### Defined in

[packages/react/src/Notifier/typings.ts:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L29)

___

### remove

• **remove**: (`key`: `ReactText`) => `void`

#### Type declaration

▸ (`key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ReactText` |

##### Returns

`void`

#### Defined in

[packages/react/src/Notifier/typings.ts:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Notifier/typings.ts#L28)
