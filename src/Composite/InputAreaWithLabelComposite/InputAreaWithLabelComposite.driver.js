import fieldLabelAttributesDriverFactory from '../../FieldLabelAttributes/FieldLabelAttributes.driver';

const inputAreaWithLabelCompositeDriverFactory = ({ element, wrapper }) => {
  const label = element.childNodes[0].childNodes[0];
  return {
    exists: () => !!element,
    getLabel: () => label.textContent,
    hasLabel: () => label.tagName.toLowerCase() === 'label',
    getAttr: attrName => element.getAttribute(attrName),
    getNumberOfChildren: () => element.childElementCount,
    getInfoTooltipTestKit: () =>
      fieldLabelAttributesDriverFactory({
        wrapper,
        element: element.querySelector('[data-hook="field-label-attributes"]'),
      }).getTooltipTestKit(),
    hasFieldLabelAttributes: () =>
      !!element.querySelectorAll('[data-hook="field-label-attributes"]').length,
  };
};

export default inputAreaWithLabelCompositeDriverFactory;
