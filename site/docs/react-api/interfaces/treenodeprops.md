[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TreeNodeProps

# Interface: TreeNodeProps

## Hierarchy

- [`TreeNodeData`](../modules.md#treenodedata)

- [`TreeNodeElementProps`](../modules.md#treenodeelementprops)

  ↳ **`TreeNodeProps`**

## Table of contents

### Properties

- [label](treenodeprops.md#label)
- [value](treenodeprops.md#value)
- [children](treenodeprops.md#children)
- [disabled](treenodeprops.md#disabled)
- [expanded](treenodeprops.md#expanded)
- [indeterminate](treenodeprops.md#indeterminate)
- [multiple](treenodeprops.md#multiple)
- [nodes](treenodeprops.md#nodes)
- [onExpand](treenodeprops.md#onexpand)
- [onSelect](treenodeprops.md#onselect)
- [selectable](treenodeprops.md#selectable)
- [selected](treenodeprops.md#selected)
- [size](treenodeprops.md#size)

## Properties

### label

• **label**: `ReactNode`

#### Inherited from

TreeNodeData.label

#### Defined in

[packages/core/src/tree/tree.ts:28](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/tree/tree.ts#L28)

___

### value

• **value**: `ReactText`

#### Inherited from

TreeNodeData.value

#### Defined in

[packages/core/src/tree/tree.ts:21](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/tree/tree.ts#L21)

___

### children

• `Optional` **children**: `ReactElement`<`TransitionImplementationChildProps`, ``"symbol"`` \| ``"object"`` \| ``"small"`` \| ``"a"`` \| ``"abbr"`` \| ``"address"`` \| ``"area"`` \| ``"article"`` \| ``"aside"`` \| ``"audio"`` \| ``"b"`` \| ``"base"`` \| ``"bdi"`` \| ``"bdo"`` \| ``"big"`` \| ``"blockquote"`` \| ``"body"`` \| ``"br"`` \| ``"button"`` \| ``"canvas"`` \| ``"caption"`` \| ``"cite"`` \| ``"code"`` \| ``"col"`` \| ``"colgroup"`` \| ``"data"`` \| ``"datalist"`` \| ``"dd"`` \| ``"del"`` \| ``"details"`` \| ``"dfn"`` \| ``"dialog"`` \| ``"div"`` \| ``"dl"`` \| ``"dt"`` \| ``"em"`` \| ``"embed"`` \| ``"fieldset"`` \| ``"figcaption"`` \| ``"figure"`` \| ``"footer"`` \| ``"form"`` \| ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"head"`` \| ``"header"`` \| ``"hgroup"`` \| ``"hr"`` \| ``"html"`` \| ``"i"`` \| ``"iframe"`` \| ``"img"`` \| ``"input"`` \| ``"ins"`` \| ``"kbd"`` \| ``"keygen"`` \| ``"label"`` \| ``"legend"`` \| ``"li"`` \| ``"link"`` \| ``"main"`` \| ``"map"`` \| ``"mark"`` \| ``"menu"`` \| ``"menuitem"`` \| ``"meta"`` \| ``"meter"`` \| ``"nav"`` \| ``"noindex"`` \| ``"noscript"`` \| ``"ol"`` \| ``"optgroup"`` \| ``"option"`` \| ``"output"`` \| ``"p"`` \| ``"param"`` \| ``"picture"`` \| ``"pre"`` \| ``"progress"`` \| ``"q"`` \| ``"rp"`` \| ``"rt"`` \| ``"ruby"`` \| ``"s"`` \| ``"samp"`` \| ``"slot"`` \| ``"script"`` \| ``"section"`` \| ``"select"`` \| ``"source"`` \| ``"span"`` \| ``"strong"`` \| ``"style"`` \| ``"sub"`` \| ``"summary"`` \| ``"sup"`` \| ``"table"`` \| ``"template"`` \| ``"tbody"`` \| ``"td"`` \| ``"textarea"`` \| ``"tfoot"`` \| ``"th"`` \| ``"thead"`` \| ``"time"`` \| ``"title"`` \| ``"tr"`` \| ``"track"`` \| ``"u"`` \| ``"ul"`` \| ``"var"`` \| ``"video"`` \| ``"wbr"`` \| ``"webview"`` \| ``"svg"`` \| ``"animate"`` \| ``"animateMotion"`` \| ``"animateTransform"`` \| ``"circle"`` \| ``"clipPath"`` \| ``"defs"`` \| ``"desc"`` \| ``"ellipse"`` \| ``"feBlend"`` \| ``"feColorMatrix"`` \| ``"feComponentTransfer"`` \| ``"feComposite"`` \| ``"feConvolveMatrix"`` \| ``"feDiffuseLighting"`` \| ``"feDisplacementMap"`` \| ``"feDistantLight"`` \| ``"feDropShadow"`` \| ``"feFlood"`` \| ``"feFuncA"`` \| ``"feFuncB"`` \| ``"feFuncG"`` \| ``"feFuncR"`` \| ``"feGaussianBlur"`` \| ``"feImage"`` \| ``"feMerge"`` \| ``"feMergeNode"`` \| ``"feMorphology"`` \| ``"feOffset"`` \| ``"fePointLight"`` \| ``"feSpecularLighting"`` \| ``"feSpotLight"`` \| ``"feTile"`` \| ``"feTurbulence"`` \| ``"filter"`` \| ``"foreignObject"`` \| ``"g"`` \| ``"image"`` \| ``"line"`` \| ``"linearGradient"`` \| ``"marker"`` \| ``"mask"`` \| ``"metadata"`` \| ``"mpath"`` \| ``"path"`` \| ``"pattern"`` \| ``"polygon"`` \| ``"polyline"`` \| ``"radialGradient"`` \| ``"rect"`` \| ``"stop"`` \| ``"switch"`` \| ``"text"`` \| ``"textPath"`` \| ``"tspan"`` \| ``"use"`` \| ``"view"`` \| (`props`: `TransitionImplementationChildProps`) => ``null`` \| `ReactElement`<`any`, `any`\> \| (`props`: `TransitionImplementationChildProps`) => `Component`<`TransitionImplementationChildProps`, `any`, `any`\>\>

Provided children will be wrapped under `Collapse`.

#### Defined in

[packages/react/src/Tree/TreeNode.tsx:26](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tree/TreeNode.tsx#L26)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

TreeNodeData.disabled

#### Defined in

[packages/core/src/tree/tree.ts:12](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/tree/tree.ts#L12)

___

### expanded

• `Optional` **expanded**: `boolean`

#### Inherited from

TreeNodeData.expanded

#### Defined in

[packages/core/src/tree/tree.ts:13](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/tree/tree.ts#L13)

___

### indeterminate

• `Optional` **indeterminate**: `boolean`

#### Inherited from

TreeNodeData.indeterminate

#### Defined in

[packages/core/src/tree/tree.ts:14](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/tree/tree.ts#L14)

___

### multiple

• `Optional` **multiple**: `boolean`

The list item will be rendered as `Checkbox` if multiple set to true.

**`default`** false

#### Defined in

[packages/react/src/Tree/TreeNode.tsx:31](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tree/TreeNode.tsx#L31)

___

### nodes

• `Optional` **nodes**: `TreeNodeDataShape`<`ReactNode`\>[]

#### Inherited from

TreeNodeData.nodes

#### Defined in

[packages/core/src/tree/tree.ts:29](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/tree/tree.ts#L29)

___

### onExpand

• `Optional` **onExpand**: (`value`: `ReactText`) => `void`

#### Type declaration

▸ (`value`): `void`

Handler for caret icon click event. Receive current node value as its argument.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `ReactText` |

##### Returns

`void`

#### Defined in

[packages/react/src/Tree/TreeNode.tsx:35](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tree/TreeNode.tsx#L35)

___

### onSelect

• `Optional` **onSelect**: (`value`: `ReactText`) => `void`

#### Type declaration

▸ (`value`): `void`

Handler for label element click event. Receive current node value as its argument.
Must use with selectable setting to `true`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `ReactText` |

##### Returns

`void`

#### Defined in

[packages/react/src/Tree/TreeNode.tsx:40](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tree/TreeNode.tsx#L40)

___

### selectable

• `Optional` **selectable**: `boolean`

Controls whether to be selectable.

**`default`** false

#### Defined in

[packages/react/src/Tree/TreeNode.tsx:45](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tree/TreeNode.tsx#L45)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

TreeNodeData.selected

#### Defined in

[packages/core/src/tree/tree.ts:15](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/core/src/tree/tree.ts#L15)

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

Sizes for the layout.

**`default`** 'medium'

#### Defined in

[packages/react/src/Tree/TreeNode.tsx:50](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Tree/TreeNode.tsx#L50)
