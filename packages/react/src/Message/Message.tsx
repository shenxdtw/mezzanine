import {
  messageClasses as classes,
  messageIcons,
  MessageSeverity,
} from '@mezzanine-ui/core/message';
import {
  FC,
  Key,
  useEffect,
  useState,
} from 'react';
import { cx } from '../utils/cx';
import Icon from '../Icon';
import {
  createNotifier,
  Notifier,
  NotifierData,
} from '../Notifier';
import { SlideFade, SlideFadeProps } from '../Transition';
import { NotifierConfig } from '../Notifier/typings';

export interface MessageConfigProps extends NotifierConfig {
  transitionProps?: Omit<SlideFadeProps, 'children' | 'in' | 'appear'>
}

export interface MessageData extends NotifierData {
  /**
   * If given, the message will be closed after the amount of time.
   * You can use `Message.config` to overwrite.
   * @default 3000
   */
  duration?: NotifierData['duration'];
  /**
   * The key of message.
   */
  reference?: Key;
  /**
   * The severity of the message.
   * @default info
   */
  severity?: MessageSeverity;
  /**
   * Fade In transition props. Defaults equal with `Fade` component.
   */
  transitionProps?: Omit<SlideFadeProps, 'children' | 'in' | 'appear'>
}

export interface Message
  extends
  FC<MessageData>,
  Notifier<MessageData, MessageConfigProps>,
  Record<
  MessageSeverity,
  (
    message: MessageData['children'],
    props?: Omit<MessageData, 'children' | 'severity'>,
  ) => Key
  > {
}

/**
 * The react component for `mezzanine` message.
 *
 * Use the API from the Message instance such as `Message.success` and `Message.error`
 * to display a notification message globally.
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare
const Message: Message = ((props) => {
  const {
    children,
    duration,
    reference,
    severity = 'info',
    transitionProps,
  } = props;

  const {
    onExited: onExitedProp,
    ...restTransitionProps
  } = transitionProps || {};

  const icon = messageIcons[severity];

  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open && duration) {
      const timer = window.setTimeout(() => {
        setOpen(false);
      }, duration);

      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [open, duration]);

  return (
    <SlideFade
      in={open}
      appear
      onExited={(node) => {
        if (onExitedProp) {
          onExitedProp(node);
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        Message.remove(reference!);
      }}
      {...restTransitionProps}
    >
      <div
        className={cx(
          classes.host,
          classes.severity(severity),
        )}
      >
        <Icon
          className={classes.icon}
          icon={icon}
        />
        <span className={classes.content}>
          {children}
        </span>
      </div>
    </SlideFade>
  );
}) as Message;

const {
  add,
  config,
  destroy,
  remove,
} = createNotifier<MessageData, MessageConfigProps>({
  render: (message) => <Message {...message} />,
  setRoot: (root) => {
    root.setAttribute('class', classes.root);
  },
  config: {
    duration: 3000,
  },
});

Message.add = add;
Message.config = config;
Message.destroy = destroy;
Message.remove = remove;

(['success', 'warning', 'error', 'info'] as const).forEach((severity) => {
  Message[severity] = (message, props) => Message.add({
    ...props,
    children: message,
    severity,
  });
});

export default Message;
