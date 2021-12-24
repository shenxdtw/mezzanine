export const tablePrefix = 'mzn-table';
export const tableHeaderPrefix = `${tablePrefix}__header`;
export const tableBodyPrefix = `${tablePrefix}__body`;
export const tableCellPrefix = `${tablePrefix}__cell`;

export const tableClasses = {
  host: tablePrefix,
  header: tableHeaderPrefix,
  headerCellWrapper: `${tableHeaderPrefix}__cellWrapper`,
  body: tableBodyPrefix,
  bodyEmpty: `${tableBodyPrefix}__empty`,
  bodyFetchMore: `${tableBodyPrefix}__fetchMore`,
  bodyRow: `${tableBodyPrefix}__row`,
  bodyRowHighlight: `${tableBodyPrefix}__row--highlight`,
  bodyRowCellWrapper: `${tableBodyPrefix}__row__cellWrapper`,
  cell: tableCellPrefix,
  cellEllipsis: `${tableCellPrefix}__ellipsis`,
  selections: `${tablePrefix}__selections`,
  icon: `${tablePrefix}__icon`,
  iconClickable: `${tablePrefix}__icon--clickable`,
  collapseAction: `${tablePrefix}__collapseAction`,
  pagination: `${tablePrefix}__pagination`,
  paginationIndicator: `${tablePrefix}__pagination__indicator`,
  paginationActions: `${tablePrefix}__pagination__actions`,
  refresh: `${tablePrefix}__refresh`,
} as const;

export type TableRecord<T> = Record<string, T>;

export interface TableDataSourceWithKey extends TableRecord<unknown> {
  key: string | number;
}

export interface TableDataSourceWithID extends TableRecord<unknown> {
  id: string | number;
}

export type TableDataSource = TableDataSourceWithKey | TableDataSourceWithID;

type TableColumnBase<SourceType> = {
  key: string;
  renderTooltipTitle?(source: SourceType): string;
  // == Custom column style ==
  align?: 'start' | 'center' | 'end';
  bodyClassName?: string;
  headerClassName?: string;
  width?: number;
  // == Feature sorting ==
  sorter?(a: any, b: any): number;
  onSorted?(sortedDataSource: SourceType[]): void;
  // == Feature editing ==
  editable?: boolean;
  setCellProps?(record: SourceType): TableRecord<unknown>;
  // == Feature ellipsis ==
  /** @default true */
  ellipsis?: boolean;
  /** force display tooltip whenever content is hovered */
  forceShownTooltipWhenHovered?: boolean;
};

type TableColumnTitle<SourceType> = TableColumnBase<SourceType> & {
  title: string;
  renderTitle?: undefined;
};
type TableColumnRenderTitle<SourceType> = TableColumnBase<SourceType> & {
  title?: undefined;
  renderTitle(classes: typeof tableClasses): any;
};
type TableColumnDataIndex<SourceType> = TableColumnBase<SourceType> & {
  dataIndex: string;
  render?: undefined;
};
type TableColumnRender<SourceType> = TableColumnBase<SourceType> & {
  dataIndex?: undefined;
  render(source: SourceType, column: TableColumn<SourceType>, index: number): any;
};

type TableColumnType1<SourceType> = TableColumnTitle<SourceType> & TableColumnDataIndex<SourceType>;
type TableColumnType2<SourceType> = TableColumnTitle<SourceType> & TableColumnRender<SourceType>;
type TableColumnType3<SourceType> = TableColumnRenderTitle<SourceType> & TableColumnDataIndex<SourceType>;
type TableColumnType4<SourceType> = TableColumnRenderTitle<SourceType> & TableColumnRender<SourceType>;

export type TableColumn<SourceType> = (
  TableColumnType1<SourceType>
  | TableColumnType2<SourceType>
  | TableColumnType3<SourceType>
  | TableColumnType4<SourceType>
);

export type TableFetchMore = {
  callback?(): any;
  isReachEnd?: boolean;
  isFetching?: boolean;
};

/** === Feature MultiSelection */
export interface TableRowAction {
  key: string;
  text: string;
  onClick?(keys: string[]): void;
  className?: string;
}

export interface TableRowSelection {
  selectedRowKey?: string[];
  onChange?(keys: string[]): void;
  actions?: TableRowAction[];
}

/** === Feature Expandable */
export interface TableExpandable<SourceType> {
  className?: string;
  expandedRowRender(record: SourceType): any;
  rowExpandable?(record: SourceType): boolean;
}

/** === Feature Pagination */
export interface TablePagination {
  current: number;
  /** @NOTE set this to true, should control pageSize properly to make layout correct */
  disableAutoSlicing?: boolean;
  onChange(page: number): void;
  total?: number;
  options?: {
    boundaryCount?: number;
    className?: string;
    disabled?: boolean;
    hideNextButton?: boolean;
    hidePreviousButton?: boolean;
    pageSize?: number;
    siblingCount?: number;
  };
}

/** === Feature Refresh */
export interface TableRefresh {
  show?: boolean;
  onClick?(): void;
}

/** === Feature edit */
export interface TableComponents {
  body?: {
    cell?: any;
  }
}
