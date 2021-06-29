[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TabsProps

# Interface: TabsProps

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"onChange"`` \| ``"children"``\>

  ↳ **`TabsProps`**

## Table of contents

### Properties

- [children](tabsprops.md#children)
- [actions](tabsprops.md#actions)
- [activeKey](tabsprops.md#activekey)
- [defaultActiveKey](tabsprops.md#defaultactivekey)
- [onChange](tabsprops.md#onchange)
- [onTabClick](tabsprops.md#ontabclick)
- [tabBarClassName](tabsprops.md#tabbarclassname)

## Properties

### children

• **children**: [`TabsChild`](../modules.md#tabschild) \| [`TabsChild`](../modules.md#tabschild)[]

The tab panes in tabs

#### Defined in

[packages/react/src/Tabs/Tabs.tsx:39](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tabs/Tabs.tsx#L39)

___

### actions

• `Optional` **actions**: `ReactNode`

Actions on the right side of tabBar

#### Defined in

[packages/react/src/Tabs/Tabs.tsx:35](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tabs/Tabs.tsx#L35)

___

### activeKey

• `Optional` **activeKey**: `string` \| `number`

Current TabPane's index

#### Defined in

[packages/react/src/Tabs/Tabs.tsx:31](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tabs/Tabs.tsx#L31)

___

### defaultActiveKey

• `Optional` **defaultActiveKey**: `string` \| `number`

Initial active TabPane's key, if activeKey is not set.

#### Defined in

[packages/react/src/Tabs/Tabs.tsx:43](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tabs/Tabs.tsx#L43)

___

### onChange

• `Optional` **onChange**: (`activeKey`: `ReactText`) => `void`

#### Type declaration

▸ (`activeKey`): `void`

The change event handler of Tabs

##### Parameters

| Name | Type |
| :------ | :------ |
| `activeKey` | `ReactText` |

##### Returns

`void`

#### Defined in

[packages/react/src/Tabs/Tabs.tsx:47](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tabs/Tabs.tsx#L47)

___

### onTabClick

• `Optional` **onTabClick**: (`key`: `ReactText`, `event`: `MouseEvent`<`Element`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`key`, `event`): `void`

Callback executed when tab is clicked

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `ReactText` |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

##### Returns

`void`

#### Defined in

[packages/react/src/Tabs/Tabs.tsx:51](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tabs/Tabs.tsx#L51)

___

### tabBarClassName

• `Optional` **tabBarClassName**: `string`

The className of tabBar

#### Defined in

[packages/react/src/Tabs/Tabs.tsx:55](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tabs/Tabs.tsx#L55)
