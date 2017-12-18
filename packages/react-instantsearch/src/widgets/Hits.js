import PropTypes from 'prop-types';
import React from 'react';
import BaseWidget from './BaseWidget';
import connectHits from '../connectors/connectHits.js';
import HitsComponent from '../components/Hits.js';
import classNames from '../components/classNames';

const cx = classNames('Results');

/**
 * Displays a list of hits.
 *
 * To configure the number of hits being shown, use the [HitsPerPage widget](widgets/HitsPerPage.html),
 * [connectHitsPerPage connector](connectors/connectHitsPerPage.html) or the [Configure widget](widgets/Configure.html).
 *
 * @name Hits
 * @kind widget
 * @propType {Component} [hitComponent] - Component used for rendering each hit from
 *   the results. If it is not provided the rendering defaults to displaying the
 *   hit in its JSON form. The component will be called with a `hit` prop.
 * @themeKey ais-Results - the root div of the widget
 * @themeKey ais-Results-header - the header of the widget (optional)
 * @themeKey ais-Results-body - the body of the widget
 * @themeKey ais-Results-list - the list of results
 * @themeKey ais-Results-item - the hit list item
 * @themeKey ais-Results-footer - the footer of the widget (optional)
 * @example
 * import React from 'react';

 * import { Hits, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <Hits />
 *     </InstantSearch>
 *   );
 * }
 */

const Widget = props => (
  <BaseWidget cx={cx} header={props.header} footer={props.footer}>
    <HitsComponent cx={cx} {...props} />
  </BaseWidget>
);

Widget.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
};

export default connectHits(Widget);
