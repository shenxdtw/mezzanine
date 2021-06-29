[@mezzanine-ui/react - v0.5.2](../README.md) / [Exports](../modules.md) / TableProps

# Interface: TableProps<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Omit`<[`NativeElementPropsWithoutKeyAndRef`](../modules.md#nativeelementpropswithoutkeyandref)<``"div"``\>, ``"role"``\>

  ↳ **`TableProps`**

## Table of contents

### Properties

- [columns](tableprops.md#columns)
- [dataSource](tableprops.md#datasource)
- [bodyClassName](tableprops.md#bodyclassname)
- [components](tableprops.md#components)
- [expandable](tableprops.md#expandable)
- [fetchMore](tableprops.md#fetchmore)
- [headerClassName](tableprops.md#headerclassname)
- [loading](tableprops.md#loading)
- [pagination](tableprops.md#pagination)
- [refresh](tableprops.md#refresh)
- [rowSelection](tableprops.md#rowselection)

## Properties

### columns

• **columns**: `TableColumn`<`T`\>[]

Columns of table <br />
`column.render` allowed customizing the column body cell rendering. <br />
`column.renderTitle` allowed customizing the column header cell rendering. <br />
`column.sorter` is the sorting method that you want to apply to your column. <br />
`column.onSorted` is the callback triggered whenever sort icon clicked.

#### Defined in

[packages/react/src/Table/Table.tsx:44](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L44)

___

### dataSource

• **dataSource**: `TableDataSource`[]

Data record array to be displayed. <br />
Notice that each source should contain `key` or `id` prop as data primary key.

#### Defined in

[packages/react/src/Table/Table.tsx:53](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L53)

___

### bodyClassName

• `Optional` **bodyClassName**: `string`

customized body className

#### Defined in

[packages/react/src/Table/Table.tsx:36](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L36)

___

### components

• `Optional` **components**: `TableComponents`

Custom table components <br />

#### Defined in

[packages/react/src/Table/Table.tsx:48](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L48)

___

### expandable

• `Optional` **expandable**: `TableExpandable`<`T`\>

When `expandable.rowExpandable` is given, it will control whether row data is expandable or not
`expandable.expandedRowRender` is a callback to helps you decides what data should be rendered.

#### Defined in

[packages/react/src/Table/Table.tsx:58](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L58)

___

### fetchMore

• `Optional` **fetchMore**: `TableFetchMore`

If `fetchMore.callback` is given, table will automatically trigger it when scrolling position reach end. <br />
If `fetchMore.isReachEnd` is true, table will stop triggering callback. <br />
If `fetchMore.isFetching` is true, a loading spinner will display at the end of table and stop triggering callback.
<br />
Notice that when `fetchMore.isFetching` is `undefined`, table will take control of it when source length changed.

#### Defined in

[packages/react/src/Table/Table.tsx:66](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L66)

___

### headerClassName

• `Optional` **headerClassName**: `string`

customized header className

#### Defined in

[packages/react/src/Table/Table.tsx:70](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L70)

___

### loading

• `Optional` **loading**: `boolean`

Whether table is loading or not

#### Defined in

[packages/react/src/Table/Table.tsx:74](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L74)

___

### pagination

• `Optional` **pagination**: `TablePagination`

`pagination.show` controls pagination display. <br />
`pagination.current` is the current page number. <br />
`pagination.onChange` is the callback when page number changed. <br />
`pagination.total` is the total amount of your data. <br />
`pagination.options` is the <Pagination /> component props. <br />
Notice that if `pagination` object is given, table will disable fetchMore and use pagination instead.

#### Defined in

[packages/react/src/Table/Table.tsx:83](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L83)

___

### refresh

• `Optional` **refresh**: `TableRefresh`

`refresh.show` is true, refresh button will display at the top-start of table. <br />
`refresh.onClick` is the callback of the refresh button.

#### Defined in

[packages/react/src/Table/Table.tsx:88](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L88)

___

### rowSelection

• `Optional` **rowSelection**: `TableRowSelection`

Enable row selection feature <br />
`rowSelection.selectedRowKey` is the dataSource keys that are currently selected. <br />
`rowSelection.onChange` is the callback when selection changed. <br />
`rowSelection.actions` are the actions that you want to do for selected data.

#### Defined in

[packages/react/src/Table/Table.tsx:95](https://github.com/Mezzanine-UI/mezzanine/blob/83e0173/packages/react/src/Table/Table.tsx#L95)
