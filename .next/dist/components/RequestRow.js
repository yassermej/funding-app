'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/donquixote/PROJECTS/BlockchainApps/ether-fund-react/components/RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    (0, _classCallCheck3.default)(this, RequestRow);

    return (0, _possibleConstructorReturn3.default)(this, (RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;
      var description = request.description,
          value = request.value,
          recipient = request.recipient,
          approvalCount = request.approvalCount;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _web2.default.utils.fromWei(value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwidXRpbHMiLCJmcm9tV2VpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7NkJBQ0s7VUFBQSxBQUNDLE1BREQsQUFDZSx1QkFEZixBQUNDO1VBREQsQUFDTSxPQUROLEFBQ2UsdUJBRGYsQUFDTTttQkFDMkIsS0FGakMsQUFFc0M7VUFGdEMsQUFFQyxZQUZELEFBRUM7VUFGRCxBQUVLLGlCQUZMLEFBRUs7VUFGTCxBQUVjLHdCQUZkLEFBRWM7VUFGZCxBQUdDLGNBSEQsQUFHa0QsUUFIbEQsQUFHQztVQUhELEFBR2MsUUFIZCxBQUdrRCxRQUhsRCxBQUdjO1VBSGQsQUFHcUIsWUFIckIsQUFHa0QsUUFIbEQsQUFHcUI7VUFIckIsQUFHZ0MsZ0JBSGhDLEFBR2tELFFBSGxELEFBR2dDLEFBQ3ZDOzs2QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLFNBREYsQUFDRSxBQUVBLHFCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLFNBSEYsQUFHRSxBQUNBLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsT0FKNUIsQUFJRSxBQUFPLEFBQTBCLEFBRWpDLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLFNBTkYsQUFNRSxBQUVBLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLFNBQUEsZUFDbUIsS0FUckIsQUFRRSxBQUlBLCtDQUFBLEFBQUM7O29CQUFEO3NCQVpGLEFBWUUsQUFDQTtBQURBO0FBQUEsd0NBQ0EsQUFBQzs7b0JBQUQ7c0JBZEosQUFDRSxBQWFFLEFBR0w7QUFISztBQUFBOzs7OztBQW5CaUIsQSxBQXlCekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9kb25xdWl4b3RlL1BST0pFQ1RTL0Jsb2NrY2hhaW5BcHBzL2V0aGVyLWZ1bmQtcmVhY3QifQ==