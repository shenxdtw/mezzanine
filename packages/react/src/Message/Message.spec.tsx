import {
  CheckCircleFilledIcon,
  ExclamationCircleFilledIcon,
  MinusCircleFilledIcon,
  InfoCircleFilledIcon,
} from '@mezzanine-ui/icons';
import { ReactText } from 'react';
import {
  act,
  cleanup,
  render,
} from '../../__test-utils__';
import Message, { MessageStatus } from '.';

const messageStatus: MessageStatus[] = [
  'success',
  'warning',
  'error',
  'info',
];

describe('<Message />', () => {
  afterEach(cleanup);

  it('should bind host class', () => {
    const { getHostHTMLElement } = render(<Message>No Data</Message>);
    const element = getHostHTMLElement();

    expect(element.classList.contains('mzn-message')).toBeTruthy();
  });

  it('should render children', () => {
    const { getHostHTMLElement } = render(<Message>foo</Message>);
    const element = getHostHTMLElement();

    expect(element.textContent).toBe('foo');
  });

  describe('prop: status', () => {
    it('should render status="info" by default', () => {
      const { getHostHTMLElement } = render(<Message />);
      const element = getHostHTMLElement();

      expect(element.classList.contains('mzn-message--info')).toBeTruthy();
    });

    const icons = {
      success: {
        color: 'success',
        icon: CheckCircleFilledIcon,
      },
      warning: {
        color: 'warning',
        icon: ExclamationCircleFilledIcon,
      },
      error: {
        color: 'error',
        icon: MinusCircleFilledIcon,
      },
      info: {
        color: 'primary',
        icon: InfoCircleFilledIcon,
      },
    };

    messageStatus.forEach((status) => {
      it(`should add class if status="${status}"`, () => {
        const { getHostHTMLElement } = render(<Message status={status} />);
        const element = getHostHTMLElement();

        expect(element.classList.contains(`mzn-message--${status}`)).toBeTruthy();
      });

      const targetIcon = icons[status].icon;

      it(`should render "${targetIcon.name}" icon if status="${status}"`, () => {
        const { getHostHTMLElement } = render(<Message status={status} />);
        const element = getHostHTMLElement();
        const {
          firstElementChild: iconElement,
        } = element;

        expect(iconElement?.getAttribute('data-icon-name')).toBe(targetIcon.name);
      });
    });
  });
});

describe('Message API', () => {
  afterEach(cleanup);

  messageStatus.forEach((status) => {
    describe(`Message.${status}`, () => {
      afterEach(() => {
        act(() => {
          Message.destroy();
        });
      });

      const testMessage = 'foo';
      const handler = Message[status];

      expect(handler).toBeInstanceOf(Function);

      it('should find root at the end of body', () => {
        act(() => {
          handler(testMessage);
        });

        const {
          lastElementChild: rootElement,
        } = document.body;

        expect(rootElement?.classList.contains('mzn-message__root')).toBeTruthy();
      });

      it(`should find ${status} message and be able to remove it`, () => {
        let reference: ReactText;

        act(() => {
          reference = handler(testMessage);
        });

        const {
          lastElementChild: rootElement,
        } = document.body;

        const messageElement = rootElement?.firstElementChild;

        expect(messageElement?.classList.contains(`mzn-message--${status}`)).toBeTruthy();
        expect(messageElement?.textContent).toBe(testMessage);

        act(() => {
          Message.remove(reference);
        });

        expect(rootElement?.childElementCount).toBe(0);
      });

      it('should remove message after 3 second by default', () => {
        jest.useFakeTimers();

        act(() => {
          handler(testMessage);
        });

        const {
          lastElementChild: rootElement,
        } = document.body;

        expect(rootElement?.childElementCount).toBe(1);

        act(() => {
          jest.runAllTimers();
        });

        expect(rootElement?.childElementCount).toBe(0);
      });
    });
  });
});