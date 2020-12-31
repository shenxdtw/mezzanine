import { PlusIcon, SpinnerIcon } from '@mezzanine-ui/icons';
import { ButtonSize, ButtonVariant } from '@mezzanine-ui/core/button';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cleanup, render } from '../../__test-utils__';
import {
  describeForwardRefToHTMLElement,
  describeHostElementClassNameAppendable,
} from '../../__test-utils__/common';
import Icon from '../Icon';
import Button, { ButtonColor, ButtonComponent } from '.';

describe('<Button />', () => {
  afterEach(cleanup);

  describeForwardRefToHTMLElement(
    HTMLButtonElement,
    (ref) => render(<Button ref={ref} />),
  );

  describeHostElementClassNameAppendable(
    'foo',
    (className) => render(<Button className={className} />),
  );

  it('should render the text and wrap it by button label rendered by span', () => {
    const { getHostHTMLElement, getByText } = render(<Button>Hello</Button>);
    const element = getHostHTMLElement();
    const labelElement = getByText('Hello');

    expect(element.textContent).toBe('Hello');
    expect(labelElement.textContent).toBe('Hello');
    expect(labelElement.tagName.toLowerCase()).toBe('span');
    expect(labelElement.classList.contains('mzn-button__label')).toBeTruthy();
  });

  it('should not render the button label if no children', () => {
    const { getHostHTMLElement } = render(<Button />);
    const element = getHostHTMLElement();

    expect(element.firstElementChild).toBe(null);
  });

  describe('prop: color', () => {
    it('should render color="primary" by default', () => {
      const { getHostHTMLElement } = render(<Button />);
      const element = getHostHTMLElement();

      expect(element.classList.contains('mzn-button--primary')).toBeTruthy();
    });

    const colors: ButtonColor[] = [
      'primary',
      'secondary',
      'error',
    ];

    colors.forEach((color) => {
      it(`should add class if color="${color}"`, () => {
        const { getHostHTMLElement } = render(<Button color={color} />);
        const element = getHostHTMLElement();

        expect(element.classList.contains(`mzn-button--${color}`)).toBeTruthy();
      });
    });
  });

  describe('prop: component', () => {
    it('should render by button tag as default', () => {
      const { getHostHTMLElement } = render(<Button />);
      const element = getHostHTMLElement();

      expect(element.tagName.toLowerCase()).toBe('button');
    });

    const components: ButtonComponent[] = [
      'button',
      'a',
      'label',
    ];

    components.forEach((component) => {
      it(`should render by overriding component="${component}"`, () => {
        const { getHostHTMLElement } = render(<Button component={component} />);
        const element = getHostHTMLElement();

        expect(element.tagName.toLowerCase()).toBe(component);
      });
    });
  });

  describe('prop: disabled', () => {
    it('should has disabled and aria-disabled attributes', () => {
      [false, true].forEach((disabled) => {
        const { getHostHTMLElement } = render(<Button disabled={disabled} />);
        const element = getHostHTMLElement();

        expect(element.hasAttribute('disabled')).toBe(disabled);
        expect(element.getAttribute('aria-disabled')).toBe(`${disabled}`);
      });
    });
  });

  describe('prop: iconEnd', () => {
    it('should render icon after button label', () => {
      const { getHostHTMLElement } = render(
        <Button iconEnd={<Icon icon={PlusIcon} />}>
          Hello
        </Button>,
      );
      const element = getHostHTMLElement();
      const {
        firstElementChild: labelElement,
        lastElementChild: iconEndElement,
        childElementCount,
      } = element;

      expect(childElementCount).toBe(2);
      expect(labelElement?.textContent).toBe('Hello');
      expect(labelElement?.tagName.toLowerCase()).toBe('span');
      expect(iconEndElement?.tagName.toLowerCase()).toBe('svg');
      expect(iconEndElement?.getAttribute('data-icon-name')).toBe(PlusIcon.name);
    });
  });

  describe('prop: iconStart', () => {
    it('should render icon before button label', () => {
      const { getHostHTMLElement } = render(
        <Button iconStart={<Icon icon={PlusIcon} />}>
          Hello
        </Button>,
      );
      const element = getHostHTMLElement();
      const {
        firstElementChild: iconStartElement,
        lastElementChild: labelElement,
        childElementCount,
      } = element;

      expect(childElementCount).toBe(2);
      expect(iconStartElement?.tagName.toLowerCase()).toBe('svg');
      expect(iconStartElement?.getAttribute('data-icon-name')).toBe(PlusIcon.name);
      expect(labelElement?.textContent).toBe('Hello');
      expect(labelElement?.tagName.toLowerCase()).toBe('span');
    });
  });

  describe('prop: loading', () => {
    [false, true].forEach((loading) => {
      const message = loading
        ? 'should add class if loading=true'
        : 'should not add class if loading=false';

      it(message, () => {
        const { getHostHTMLElement } = render(<Button loading={loading} />);
        const element = getHostHTMLElement();

        expect(element.classList.contains('mzn-button--loading')).toBe(loading);
      });
    });

    it('should replace iconStart w/ loading icon if no icon provided', () => {
      const { getHostHTMLElement } = render(<Button loading>Hello</Button>);
      const element = getHostHTMLElement();
      const { firstElementChild: loadingIconElement } = element;

      expect(loadingIconElement?.getAttribute('data-icon-name')).toBe(SpinnerIcon.name);
    });

    it('should replace iconStart w/ loading icon if only iconStart provided', () => {
      const { getHostHTMLElement } = render(
        <Button loading iconStart={<Icon icon={PlusIcon} />}>
          Hello
        </Button>,
      );
      const element = getHostHTMLElement();
      const { firstElementChild: loadingIconElement } = element;

      expect(loadingIconElement?.getAttribute('data-icon-name')).toBe(SpinnerIcon.name);
    });

    it('should replace iconEnd w/ loading icon if only iconEnd provided', () => {
      const { getHostHTMLElement } = render(
        <Button loading iconEnd={<Icon icon={PlusIcon} />}>
          Hello
        </Button>,
      );
      const element = getHostHTMLElement();
      const { lastElementChild: loadingIconElement } = element;

      expect(loadingIconElement?.getAttribute('data-icon-name')).toBe(SpinnerIcon.name);
    });

    it('should replace iconStart w/ loading icon if both iconStart and iconEnd provided', () => {
      const { getHostHTMLElement } = render(
        <Button
          loading
          iconEnd={<Icon icon={PlusIcon} />}
          iconStart={<Icon icon={PlusIcon} />}
        >
          Hello
        </Button>,
      );
      const element = getHostHTMLElement();
      const {
        firstElementChild: loadingIconElement,
        lastElementChild: iconEndElement,
      } = element;

      expect(loadingIconElement?.getAttribute('data-icon-name')).toBe(SpinnerIcon.name);
      expect(iconEndElement?.getAttribute('data-icon-name')).toBe(PlusIcon.name);
    });
  });

  describe('prop: size', () => {
    it('should render size="medium" by default', () => {
      const { getHostHTMLElement } = render(<Button />);
      const element = getHostHTMLElement();

      expect(element.classList.contains('mzn-button--medium')).toBeTruthy();
    });

    const sizes: ButtonSize[] = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`should add class if size="${size}"`, () => {
        const { getHostHTMLElement } = render(<Button size={size} />);
        const element = getHostHTMLElement();

        expect(element.classList.contains(`mzn-button--${size}`)).toBeTruthy();
      });
    });
  });

  describe('prop: type', () => {
    it('should set type="button" by default', () => {
      const { getHostHTMLElement } = render(<Button />);
      const element = getHostHTMLElement();

      expect(element.getAttribute('type')).toBe('button');
    });

    const types: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['type'][] = [
      'button',
      'reset',
      'submit',
    ];

    types.forEach((type) => {
      it(`should set type attribute to "${type}"`, () => {
        const { getHostHTMLElement } = render(<Button type={type} />);
        const element = getHostHTMLElement();

        expect(element.getAttribute('type')).toBe(type);
      });
    });
  });

  describe('prop: variant', () => {
    it('should render variant="text" by default. The text button doesn\'t have specific class', () => {
      const { getHostHTMLElement } = render(<Button />);
      const element = getHostHTMLElement();

      expect(element.classList.contains('mzn-button')).toBeTruthy();
    });

    const variants: ButtonVariant[] = [
      'text',
      'outlined',
      'contained',
    ];

    variants.forEach((variant) => {
      it(`should add class as need if variant="${variant}"`, () => {
        const { getHostHTMLElement } = render(<Button variant={variant} />);
        const element = getHostHTMLElement();

        expect(element.classList.contains(`mzn-button--${variant}`)).toBe(variant !== 'text');
      });
    });
  });
});