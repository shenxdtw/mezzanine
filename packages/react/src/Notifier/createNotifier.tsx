import { createRef } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import {
  Notifier,
  NotifierConfig,
  NotifierData,
  RenderNotifier,
} from './typings';
import NotifierManager, { NotifierController } from './NotifierManager';

export interface CreateNotifierProps<N extends NotifierData> extends NotifierConfig {
  /**
   * The render props for notification carrier(UI component).
   */
  render: RenderNotifier<N>;
  /**
   * The method to set attributes or listeners to root.
   */
  setRoot?: (root: HTMLDivElement) => void;
}

/**
 * The utility factory for `mezzanine` to create a notifier.
 *
 * When APIs are called, Notifier will dynamically render a new react instance by `ReactDOM.render` method.
 */
export function createNotifier<N extends NotifierData>(props: CreateNotifierProps<N>): Notifier<N> {
  const {
    render: renderNotifier,
    setRoot,
    ...initialConfig
  } = props;
  const root = document.createElement('div');
  const controllerRef = createRef<NotifierController<N>>();
  let currentConfig: NotifierConfig = { ...initialConfig };

  if (setRoot) {
    setRoot(root);
  }

  return {
    add(notifier) {
      document.body.appendChild(root);

      const resolvedNotifier = {
        ...notifier,
        duration: notifier.duration ?? currentConfig.duration,
        key: notifier.key ?? Date.now(),
      };

      if (controllerRef.current) {
        controllerRef.current.add(resolvedNotifier);
      } else {
        render(
          (
            <NotifierManager<N>
              controllerRef={controllerRef}
              defaultNotifiers={[resolvedNotifier]}
              maxCount={currentConfig.maxCount}
              render={renderNotifier}
            />
          ),
          root,
        );
      }

      return resolvedNotifier.key;
    },
    remove(key) {
      if (controllerRef.current) {
        controllerRef.current.remove(key);
      }
    },
    destroy() {
      if (root) {
        unmountComponentAtNode(root);

        if (root.parentNode) {
          root.parentNode.removeChild(root);
        }
      }
    },
    config(config) {
      currentConfig = {
        ...currentConfig,
        ...config,
      };
    },
  };
}