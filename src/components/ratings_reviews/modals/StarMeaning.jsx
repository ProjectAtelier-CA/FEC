import React from 'react';

export default function StarMeaning({ score }) {
  let meaningElement;

  if (score === 0) {
    meaningElement = <div />;
  } else if (score === 1) {
    meaningElement = <div>"Poor"</div>;
  } else if (score === 2) {
    meaningElement = <div>"Fair"</div>;
  } else if (score === 3) {
    meaningElement = <div>"Average"</div>;
  } else if (score === 4) {
    meaningElement = <div>"Good"</div>;
  } else if (score === 5) {
    meaningElement = <div>"Great"</div>;
  }

  return (
    <div className="star-meaning" data-testid="star-meaning-test">
      {meaningElement}
    </div>
  );
}
