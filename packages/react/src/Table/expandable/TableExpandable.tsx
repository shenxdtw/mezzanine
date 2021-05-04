import {
  forwardRef,
} from 'react';
import {
  tableClasses as classes,
} from '@mezzanine-ui/core/table';
import { ChevronDownIcon } from '@mezzanine-ui/icons';
import { NativeElementPropsWithoutKeyAndRef } from '../../utils/jsx-types';
import { cx } from '../../utils/cx';
import Icon from '../../Icon';

export interface TableExpandableProps extends NativeElementPropsWithoutKeyAndRef<'div'> {
  /**
   * whehter is expandable or not
   * @default true
   */
  expandable?: boolean;
  /**
   * whether is expanded or not
   */
  expanded?: boolean;
  /**
   * toggle expanded
   */
  setExpanded?(e: boolean): void;
  /**
   * show icon or not
   * @default true
   */
  showIcon?: boolean;
}

const TableExpandable = forwardRef<HTMLDivElement, TableExpandableProps>(
  function TableExpandable(props, ref) {
    const {
      className,
      expandable = true,
      expanded,
      setExpanded,
      showIcon = true,
      ...rest
    } = props;

    return (
      <div
        {...rest}
        ref={ref}
        className={cx(
          classes.collapseAction,
          className,
        )}
      >
        <div className={classes.icon}>
          {showIcon ? (
            <Icon
              className={cx(
                classes.icon,
                {
                  [classes.iconClickable]: expandable,
                },
              )}
              color={expandable ? 'primary' : 'disabled'}
              icon={ChevronDownIcon}
              onClick={() => expandable && setExpanded?.(!expanded)}
              style={{ transform: `rotate(${expanded ? '180deg' : '0'})` }}
            />
          ) : null}
        </div>
      </div>
    );
  },
);

export default TableExpandable;
