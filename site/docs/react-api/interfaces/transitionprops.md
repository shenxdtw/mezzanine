[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TransitionProps

# Interface: TransitionProps

## Table of contents

### Properties

- [nodeRef](transitionprops.md#noderef)
- [addEndListener](transitionprops.md#addendlistener)
- [appear](transitionprops.md#appear)
- [children](transitionprops.md#children)
- [duration](transitionprops.md#duration)
- [in](transitionprops.md#in)
- [keepMount](transitionprops.md#keepmount)
- [lazyMount](transitionprops.md#lazymount)
- [onEnter](transitionprops.md#onenter)
- [onEntered](transitionprops.md#onentered)
- [onEntering](transitionprops.md#onentering)
- [onExit](transitionprops.md#onexit)
- [onExited](transitionprops.md#onexited)
- [onExiting](transitionprops.md#onexiting)

## Properties

### nodeRef

• **nodeRef**: `RefObject`<`HTMLElement`\>

A ref of DOM element need to transition

#### Defined in

[packages/react/src/Transition/Transition.tsx:90](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L90)

___

### addEndListener

• `Optional` **addEndListener**: (`node`: `HTMLElement`, `next`: `VoidFunction`) => `void`

#### Type declaration

▸ (`node`, `next`): `void`

A custom callback for adding custom transition end handler

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `HTMLElement` |
| `next` | `VoidFunction` |

##### Returns

`void`

#### Defined in

[packages/react/src/Transition/Transition.tsx:58](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L58)

___

### appear

• `Optional` **appear**: `boolean`

Whether to perform the enter transition if `in` is true while it first mount

**`true`**

#### Defined in

[packages/react/src/Transition/Transition.tsx:63](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L63)

___

### children

• `Optional` **children**: `TransitionChildren`

A react node or a render props called with transition state

#### Defined in

[packages/react/src/Transition/Transition.tsx:67](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L67)

___

### duration

• `Optional` **duration**: `number` \| ``"auto"`` \| { `enter`:  ; `exit`:   }

The duration of the transition, in milliseconds

#### Defined in

[packages/react/src/Transition/Transition.tsx:71](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L71)

___

### in

• `Optional` **in**: `boolean`

The flag to trigger toggling transition between `enter` and `exit` state

**`default`** false

#### Defined in

[packages/react/src/Transition/Transition.tsx:76](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L76)

___

### keepMount

• `Optional` **keepMount**: `boolean`

Whether to keeping mounting the child if exited.

**`default`** false

#### Defined in

[packages/react/src/Transition/Transition.tsx:81](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L81)

___

### lazyMount

• `Optional` **lazyMount**: `boolean`

Whether to mount the child at the first time entering.

**`default`** true

#### Defined in

[packages/react/src/Transition/Transition.tsx:86](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L86)

___

### onEnter

• `Optional` **onEnter**: `TransitionEnterHandler`

Callback fired before the `entering` state applied

#### Defined in

[packages/react/src/Transition/Transition.tsx:94](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L94)

___

### onEntered

• `Optional` **onEntered**: `TransitionEnterHandler`

Callback fired after the `entered` state applied

#### Defined in

[packages/react/src/Transition/Transition.tsx:102](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L102)

___

### onEntering

• `Optional` **onEntering**: `TransitionEnterHandler`

Callback fired after the `entering` state applied

#### Defined in

[packages/react/src/Transition/Transition.tsx:98](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L98)

___

### onExit

• `Optional` **onExit**: `TransitionExitHandler`

Callback fired before the `exiting` state applied.

#### Defined in

[packages/react/src/Transition/Transition.tsx:106](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L106)

___

### onExited

• `Optional` **onExited**: `TransitionExitHandler`

Callback fired after the `exited` state applied.

#### Defined in

[packages/react/src/Transition/Transition.tsx:114](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L114)

___

### onExiting

• `Optional` **onExiting**: `TransitionExitHandler`

Callback fired after the `exiting` state applied.

#### Defined in

[packages/react/src/Transition/Transition.tsx:110](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Transition/Transition.tsx#L110)
