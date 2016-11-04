/**
 * getDataAttr.js
 *
 * Gets a data attribute from a provided DOM element (like jQuery's $.data).
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 May 2016
 */
export default (element, name) => element.dataset[name] || null;
