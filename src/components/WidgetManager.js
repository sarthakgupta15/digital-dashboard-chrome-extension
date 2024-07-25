import React from 'react';

const WidgetManager = ({ widgets }) => {
  return (
    <div className="widget-container">
      {widgets.map((Widget, index) => {
        const WidgetComponent = Widget.component;
        return <WidgetComponent key={index} {...Widget.props} />;
      })}
    </div>
  );
};

export default WidgetManager;
