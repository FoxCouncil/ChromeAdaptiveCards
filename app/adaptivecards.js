var AdaptiveCards =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Size;
(function (Size) {
    Size[Size["Auto"] = 0] = "Auto";
    Size[Size["Stretch"] = 1] = "Stretch";
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(Size = exports.Size || (exports.Size = {}));
var TextSize;
(function (TextSize) {
    TextSize[TextSize["Small"] = 0] = "Small";
    TextSize[TextSize["Default"] = 1] = "Default";
    TextSize[TextSize["Medium"] = 2] = "Medium";
    TextSize[TextSize["Large"] = 3] = "Large";
    TextSize[TextSize["ExtraLarge"] = 4] = "ExtraLarge";
})(TextSize = exports.TextSize || (exports.TextSize = {}));
var Spacing;
(function (Spacing) {
    Spacing[Spacing["None"] = 0] = "None";
    Spacing[Spacing["Small"] = 1] = "Small";
    Spacing[Spacing["Default"] = 2] = "Default";
    Spacing[Spacing["Medium"] = 3] = "Medium";
    Spacing[Spacing["Large"] = 4] = "Large";
    Spacing[Spacing["ExtraLarge"] = 5] = "ExtraLarge";
    Spacing[Spacing["Padding"] = 6] = "Padding";
})(Spacing = exports.Spacing || (exports.Spacing = {}));
var Padding;
(function (Padding) {
    Padding[Padding["None"] = 0] = "None";
    Padding[Padding["Default"] = 1] = "Default";
})(Padding = exports.Padding || (exports.Padding = {}));
var TextWeight;
(function (TextWeight) {
    TextWeight[TextWeight["Lighter"] = 0] = "Lighter";
    TextWeight[TextWeight["Default"] = 1] = "Default";
    TextWeight[TextWeight["Bolder"] = 2] = "Bolder";
})(TextWeight = exports.TextWeight || (exports.TextWeight = {}));
var TextColor;
(function (TextColor) {
    TextColor[TextColor["Default"] = 0] = "Default";
    TextColor[TextColor["Accent"] = 1] = "Accent";
    TextColor[TextColor["Good"] = 2] = "Good";
    TextColor[TextColor["Warning"] = 3] = "Warning";
    TextColor[TextColor["Attention"] = 4] = "Attention";
})(TextColor = exports.TextColor || (exports.TextColor = {}));
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
    HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
    HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
    VerticalAlignment[VerticalAlignment["Center"] = 1] = "Center";
    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
var ActionAlignment;
(function (ActionAlignment) {
    ActionAlignment[ActionAlignment["Left"] = 0] = "Left";
    ActionAlignment[ActionAlignment["Center"] = 1] = "Center";
    ActionAlignment[ActionAlignment["Right"] = 2] = "Right";
    ActionAlignment[ActionAlignment["Stretch"] = 3] = "Stretch";
})(ActionAlignment = exports.ActionAlignment || (exports.ActionAlignment = {}));
var ImageStyle;
(function (ImageStyle) {
    ImageStyle[ImageStyle["Default"] = 0] = "Default";
    ImageStyle[ImageStyle["Person"] = 1] = "Person";
})(ImageStyle = exports.ImageStyle || (exports.ImageStyle = {}));
var ShowCardActionMode;
(function (ShowCardActionMode) {
    ShowCardActionMode[ShowCardActionMode["Inline"] = 0] = "Inline";
    ShowCardActionMode[ShowCardActionMode["Popup"] = 1] = "Popup";
})(ShowCardActionMode = exports.ShowCardActionMode || (exports.ShowCardActionMode = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
    Orientation[Orientation["Vertical"] = 1] = "Vertical";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var BackgroundImageMode;
(function (BackgroundImageMode) {
    BackgroundImageMode[BackgroundImageMode["Stretch"] = 0] = "Stretch";
    BackgroundImageMode[BackgroundImageMode["RepeatHorizontally"] = 1] = "RepeatHorizontally";
    BackgroundImageMode[BackgroundImageMode["RepeatVertically"] = 2] = "RepeatVertically";
    BackgroundImageMode[BackgroundImageMode["Repeat"] = 3] = "Repeat";
})(BackgroundImageMode = exports.BackgroundImageMode || (exports.BackgroundImageMode = {}));
var ContainerStyle;
(function (ContainerStyle) {
    ContainerStyle[ContainerStyle["Default"] = 0] = "Default";
    ContainerStyle[ContainerStyle["Emphasis"] = 1] = "Emphasis";
})(ContainerStyle = exports.ContainerStyle || (exports.ContainerStyle = {}));
var ValidationError;
(function (ValidationError) {
    ValidationError[ValidationError["Hint"] = 0] = "Hint";
    ValidationError[ValidationError["ActionTypeNotAllowed"] = 1] = "ActionTypeNotAllowed";
    ValidationError[ValidationError["CollectionCantBeEmpty"] = 2] = "CollectionCantBeEmpty";
    ValidationError[ValidationError["Deprecated"] = 3] = "Deprecated";
    ValidationError[ValidationError["ElementTypeNotAllowed"] = 4] = "ElementTypeNotAllowed";
    ValidationError[ValidationError["InteractivityNotAllowed"] = 5] = "InteractivityNotAllowed";
    ValidationError[ValidationError["InvalidPropertyValue"] = 6] = "InvalidPropertyValue";
    ValidationError[ValidationError["MissingCardType"] = 7] = "MissingCardType";
    ValidationError[ValidationError["PropertyCantBeNull"] = 8] = "PropertyCantBeNull";
    ValidationError[ValidationError["TooManyActions"] = 9] = "TooManyActions";
    ValidationError[ValidationError["UnknownActionType"] = 10] = "UnknownActionType";
    ValidationError[ValidationError["UnknownElementType"] = 11] = "UnknownElementType";
    ValidationError[ValidationError["UnsupportedCardVersion"] = 12] = "UnsupportedCardVersion";
})(ValidationError = exports.ValidationError || (exports.ValidationError = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(5));
__export(__webpack_require__(0));
__export(__webpack_require__(3));
var rendercard_1 = __webpack_require__(7);
exports.renderCard = rendercard_1.renderCard;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums = __webpack_require__(0);
function getValueOrDefault(obj, defaultValue) {
    return obj ? obj : defaultValue;
}
exports.getValueOrDefault = getValueOrDefault;
function isNullOrEmpty(value) {
    return value === undefined || value === null || value === "";
}
exports.isNullOrEmpty = isNullOrEmpty;
function appendChild(node, child) {
    if (child != null && child != undefined) {
        node.appendChild(child);
    }
}
exports.appendChild = appendChild;
function getEnumValueOrDefault(targetEnum, name, defaultValue) {
    if (isNullOrEmpty(name)) {
        return defaultValue;
    }
    for (var key in targetEnum) {
        var isValueProperty = parseInt(key, 10) >= 0;
        if (isValueProperty) {
            var value = targetEnum[key];
            if (value && typeof value === "string") {
                if (value.toLowerCase() === name.toLowerCase()) {
                    return parseInt(key, 10);
                }
            }
        }
    }
    return defaultValue;
}
exports.getEnumValueOrDefault = getEnumValueOrDefault;
function parseHostConfigEnum(targetEnum, value, defaultValue) {
    if (typeof value === "string") {
        return getEnumValueOrDefault(targetEnum, value, defaultValue);
    }
    else if (typeof value === "number") {
        return getValueOrDefault(value, defaultValue);
    }
    else {
        return defaultValue;
    }
}
exports.parseHostConfigEnum = parseHostConfigEnum;
function renderSeparation(separationDefinition, orientation) {
    if (separationDefinition.spacing > 0 || separationDefinition.lineThickness > 0) {
        var separator = document.createElement("div");
        if (orientation == Enums.Orientation.Horizontal) {
            if (separationDefinition.lineThickness) {
                separator.style.marginTop = (separationDefinition.spacing / 2) + "px";
                separator.style.paddingTop = (separationDefinition.spacing / 2) + "px";
                separator.style.borderTop = separationDefinition.lineThickness + "px solid " + stringToCssColor(separationDefinition.lineColor);
            }
            else {
                separator.style.height = separationDefinition.spacing + "px";
            }
        }
        else {
            if (separationDefinition.lineThickness) {
                separator.style.marginLeft = (separationDefinition.spacing / 2) + "px";
                separator.style.paddingLeft = (separationDefinition.spacing / 2) + "px";
                separator.style.borderLeft = separationDefinition.lineThickness + "px solid " + stringToCssColor(separationDefinition.lineColor);
            }
            else {
                separator.style.width = separationDefinition.spacing + "px";
            }
        }
        separator.style.overflow = "hidden";
        return separator;
    }
    else {
        return null;
    }
}
exports.renderSeparation = renderSeparation;
function stringToCssColor(color) {
    var regEx = /#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi;
    var matches = regEx.exec(color);
    if (matches && matches[4]) {
        var a = parseInt(matches[1], 16) / 255;
        var r = parseInt(matches[2], 16);
        var g = parseInt(matches[3], 16);
        var b = parseInt(matches[4], 16);
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    }
    else {
        return color;
    }
}
exports.stringToCssColor = stringToCssColor;
var StringWithSubstitutions = /** @class */ (function () {
    function StringWithSubstitutions() {
        this._isProcessed = false;
        this._original = null;
        this._processed = null;
    }
    StringWithSubstitutions.prototype.substituteInputValues = function (inputs) {
        this._processed = this._original;
        var regEx = /\{{2}([a-z0-9_$@]+).value\}{2}/gi;
        var matches;
        while ((matches = regEx.exec(this._original)) != null) {
            var matchedInput = null;
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].id.toLowerCase() == matches[1].toLowerCase()) {
                    matchedInput = inputs[i];
                    break;
                }
            }
            if (matchedInput) {
                this._processed = this._processed.replace(matches[0], matchedInput.value ? matchedInput.value : "");
            }
        }
        ;
        this._isProcessed = true;
    };
    StringWithSubstitutions.prototype.get = function () {
        if (!this._isProcessed) {
            return this._original;
        }
        else {
            return this._processed;
        }
    };
    StringWithSubstitutions.prototype.set = function (value) {
        this._original = value;
        this._isProcessed = false;
    };
    return StringWithSubstitutions;
}());
exports.StringWithSubstitutions = StringWithSubstitutions;
function truncate(element, maxHeight, lineHeight) {
    var fits = function () {
        // Allow a one pixel overflow to account for rounding differences
        // between browsers
        return maxHeight - element.scrollHeight >= -1.0;
    };
    if (fits())
        return;
    var fullText = element.innerHTML;
    var truncateAt = function (idx) {
        element.innerHTML = fullText.substring(0, idx) + '...';
    };
    var breakableIndices = findBreakableIndices(fullText);
    var lo = 0;
    var hi = breakableIndices.length;
    var bestBreakIdx = 0;
    // Do a binary search for the longest string that fits
    while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        truncateAt(breakableIndices[mid]);
        if (fits()) {
            bestBreakIdx = breakableIndices[mid];
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }
    truncateAt(bestBreakIdx);
    // If we have extra room, try to expand the string letter by letter
    // (covers the case where we have to break in the middle of a long word)
    if (lineHeight && maxHeight - element.scrollHeight >= lineHeight - 1.0) {
        var idx = findNextCharacter(fullText, bestBreakIdx);
        while (idx < fullText.length) {
            truncateAt(idx);
            if (fits()) {
                bestBreakIdx = idx;
                idx = findNextCharacter(fullText, idx);
            }
            else {
                break;
            }
        }
        truncateAt(bestBreakIdx);
    }
}
exports.truncate = truncate;
function findBreakableIndices(html) {
    var results = [];
    var idx = findNextCharacter(html, -1);
    while (idx < html.length) {
        if (html[idx] == ' ') {
            results.push(idx);
        }
        idx = findNextCharacter(html, idx);
    }
    return results;
}
function findNextCharacter(html, currIdx) {
    currIdx += 1;
    // If we found the start of an HTML tag, keep advancing until we get
    // past it, so we don't end up truncating in the middle of the tag
    while (currIdx < html.length && html[currIdx] == '<') {
        while (currIdx < html.length && html[currIdx++] != '>')
            ;
    }
    return currIdx;
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Enums = __webpack_require__(0);
var Utils = __webpack_require__(2);
var SpacingDefinition = /** @class */ (function () {
    function SpacingDefinition(obj) {
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        if (obj) {
            this.top = obj["top"] || this.top;
            this.right = obj["right"] || this.right;
            this.bottom = obj["bottom"] || this.bottom;
            this.left = obj["left"] || this.left;
        }
    }
    return SpacingDefinition;
}());
exports.SpacingDefinition = SpacingDefinition;
var PaddingDefinition = /** @class */ (function () {
    function PaddingDefinition(obj) {
        this.top = Enums.Padding.None;
        this.right = Enums.Padding.None;
        this.bottom = Enums.Padding.None;
        this.left = Enums.Padding.None;
        if (obj) {
            this.top = Utils.parseHostConfigEnum(Enums.Padding, obj["top"], Enums.Padding.None);
            this.right = Utils.parseHostConfigEnum(Enums.Padding, obj["right"], Enums.Padding.None);
            this.bottom = Utils.parseHostConfigEnum(Enums.Padding, obj["bottom"], Enums.Padding.None);
            this.left = Utils.parseHostConfigEnum(Enums.Padding, obj["left"], Enums.Padding.None);
        }
    }
    PaddingDefinition.prototype.toJSON = function () {
        return {
            top: Enums.Padding[this.top],
            right: Enums.Padding[this.right],
            bottom: Enums.Padding[this.bottom],
            left: Enums.Padding[this.left],
        };
    };
    return PaddingDefinition;
}());
exports.PaddingDefinition = PaddingDefinition;
var TextColorDefinition = /** @class */ (function () {
    function TextColorDefinition(obj) {
        this.normal = "#000000";
        this.subtle = "#222222";
        if (obj) {
            this.normal = obj["normal"] || this.normal;
            this.subtle = obj["subtle"] || this.subtle;
        }
    }
    return TextColorDefinition;
}());
exports.TextColorDefinition = TextColorDefinition;
var ContainerStyleDefinition = /** @class */ (function () {
    function ContainerStyleDefinition(obj) {
        this.foregroundColors = {
            default: new TextColorDefinition(),
            accent: new TextColorDefinition(),
            good: new TextColorDefinition(),
            warning: new TextColorDefinition(),
            attention: new TextColorDefinition()
        };
        if (obj) {
            this.backgroundColor = obj["backgroundColor"];
            this.foregroundColors = {
                default: new TextColorDefinition(obj.foregroundColors && obj.foregroundColors["default"]),
                accent: new TextColorDefinition(obj.foregroundColors && obj.foregroundColors["accent"]),
                good: new TextColorDefinition(obj.foregroundColors && obj.foregroundColors["good"]),
                warning: new TextColorDefinition(obj.foregroundColors && obj.foregroundColors["warning"]),
                attention: new TextColorDefinition(obj.foregroundColors && obj.foregroundColors["attention"])
            };
        }
    }
    return ContainerStyleDefinition;
}());
exports.ContainerStyleDefinition = ContainerStyleDefinition;
var AdaptiveCardConfig = /** @class */ (function () {
    function AdaptiveCardConfig(obj) {
        this.allowCustomStyle = false;
        if (obj) {
            this.allowCustomStyle = obj["allowCustomStyle"] || this.allowCustomStyle;
        }
    }
    return AdaptiveCardConfig;
}());
exports.AdaptiveCardConfig = AdaptiveCardConfig;
var ImageSetConfig = /** @class */ (function () {
    function ImageSetConfig(obj) {
        this.imageSize = Enums.Size.Medium;
        this.maxImageHeight = 100;
        if (obj) {
            this.imageSize = obj["imageSize"] != null ? obj["imageSize"] : this.imageSize;
            this.maxImageHeight = Utils.getValueOrDefault("maxImageHeight", 100);
        }
    }
    ImageSetConfig.prototype.toJSON = function () {
        return {
            imageSize: Enums.Size[this.imageSize],
            maxImageHeight: this.maxImageHeight
        };
    };
    return ImageSetConfig;
}());
exports.ImageSetConfig = ImageSetConfig;
var FactTextDefinition = /** @class */ (function () {
    function FactTextDefinition(obj) {
        this.size = Enums.TextSize.Default;
        this.color = Enums.TextColor.Default;
        this.isSubtle = false;
        this.weight = Enums.TextWeight.Default;
        this.wrap = true;
        if (obj) {
            this.size = Utils.parseHostConfigEnum(Enums.TextSize, obj["size"], Enums.TextSize.Default);
            this.color = Utils.parseHostConfigEnum(Enums.TextColor, obj["color"], Enums.TextColor.Default);
            this.isSubtle = obj["isSubtle"] || this.isSubtle;
            this.weight = Utils.parseHostConfigEnum(Enums.TextWeight, obj["weight"], Enums.TextWeight.Default);
            this.wrap = obj["wrap"] != null ? obj["wrap"] : this.wrap;
        }
    }
    ;
    FactTextDefinition.prototype.toJSON = function () {
        return {
            size: Enums.TextSize[this.size],
            color: Enums.TextColor[this.color],
            isSubtle: this.isSubtle,
            weight: Enums.TextWeight[this.weight],
            warp: this.wrap
        };
    };
    return FactTextDefinition;
}());
exports.FactTextDefinition = FactTextDefinition;
var FactTitleDefinition = /** @class */ (function (_super) {
    __extends(FactTitleDefinition, _super);
    function FactTitleDefinition(obj) {
        var _this = _super.call(this, obj) || this;
        _this.maxWidth = 150;
        _this.weight = Enums.TextWeight.Bolder;
        if (obj) {
            _this.maxWidth = obj["maxWidth"] != null ? obj["maxWidth"] : _this.maxWidth;
        }
        return _this;
    }
    return FactTitleDefinition;
}(FactTextDefinition));
exports.FactTitleDefinition = FactTitleDefinition;
var FactSetConfig = /** @class */ (function () {
    function FactSetConfig(obj) {
        this.title = new FactTitleDefinition();
        this.value = new FactTextDefinition();
        this.spacing = 10;
        if (obj) {
            this.title = new FactTitleDefinition(obj["title"]);
            this.value = new FactTextDefinition(obj["value"]);
            this.spacing = obj.spacing && obj.spacing != null ? obj.spacing && obj.spacing : this.spacing;
        }
    }
    return FactSetConfig;
}());
exports.FactSetConfig = FactSetConfig;
var ShowCardActionConfig = /** @class */ (function () {
    function ShowCardActionConfig(obj) {
        this.actionMode = Enums.ShowCardActionMode.Inline;
        this.inlineTopMargin = 16;
        this.style = Enums.ContainerStyle.Emphasis;
        if (obj) {
            this.actionMode = Utils.parseHostConfigEnum(Enums.ShowCardActionMode, obj["actionMode"], Enums.ShowCardActionMode.Inline);
            this.inlineTopMargin = obj["inlineTopMargin"] != null ? obj["inlineTopMargin"] : this.inlineTopMargin;
            this.style = Utils.parseHostConfigEnum(Enums.ContainerStyle, obj["style"], Enums.ContainerStyle.Emphasis);
        }
    }
    ShowCardActionConfig.prototype.toJSON = function () {
        return {
            actionMode: Enums.ShowCardActionMode[this.actionMode],
            inlineTopMargin: this.inlineTopMargin,
            style: Enums.ContainerStyle[this.style]
        };
    };
    return ShowCardActionConfig;
}());
exports.ShowCardActionConfig = ShowCardActionConfig;
var ActionsConfig = /** @class */ (function () {
    function ActionsConfig(obj) {
        this.maxActions = 5;
        this.spacing = Enums.Spacing.Default;
        this.buttonSpacing = 20;
        this.showCard = new ShowCardActionConfig();
        this.preExpandSingleShowCardAction = false;
        this.actionsOrientation = Enums.Orientation.Horizontal;
        this.actionAlignment = Enums.ActionAlignment.Left;
        if (obj) {
            this.maxActions = obj["maxActions"] != null ? obj["maxActions"] : this.maxActions;
            this.spacing = Utils.parseHostConfigEnum(Enums.Spacing, obj.spacing && obj.spacing, Enums.Spacing.Default);
            this.buttonSpacing = obj["buttonSpacing"] != null ? obj["buttonSpacing"] : this.buttonSpacing;
            this.showCard = new ShowCardActionConfig(obj["showCard"]);
            this.preExpandSingleShowCardAction = Utils.getValueOrDefault(obj["preExpandSingleShowCardAction"], false);
            this.actionsOrientation = Utils.parseHostConfigEnum(Enums.Orientation, obj["actionsOrientation"], Enums.Orientation.Horizontal);
            this.actionAlignment = Utils.parseHostConfigEnum(Enums.ActionAlignment, obj["actionAlignment"], Enums.ActionAlignment.Left);
        }
    }
    ActionsConfig.prototype.toJSON = function () {
        return {
            maxActions: this.maxActions,
            spacing: Enums.Spacing[this.spacing],
            buttonSpacing: this.buttonSpacing,
            showCard: this.showCard,
            preExpandSingleShowCardAction: this.preExpandSingleShowCardAction,
            actionsOrientation: Enums.Orientation[this.actionsOrientation],
            actionAlignment: Enums.ActionAlignment[this.actionAlignment]
        };
    };
    return ActionsConfig;
}());
exports.ActionsConfig = ActionsConfig;
var ContainerStyleSet = /** @class */ (function () {
    function ContainerStyleSet(obj) {
        this.default = new ContainerStyleDefinition();
        this.emphasis = new ContainerStyleDefinition();
        this.emphasis.backgroundColor = "#EEEEEE";
        if (obj) {
            this.default = new ContainerStyleDefinition(obj["default"]);
            this.emphasis = new ContainerStyleDefinition(obj["emphasis"]);
        }
    }
    return ContainerStyleSet;
}());
exports.ContainerStyleSet = ContainerStyleSet;
var HostConfig = /** @class */ (function () {
    function HostConfig(obj) {
        this.supportsInteractivity = true;
        this.fontFamily = "Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif";
        this.spacing = {
            small: 3,
            default: 8,
            medium: 20,
            large: 30,
            extraLarge: 40,
            padding: 15
        };
        this.separator = {
            lineThickness: 1,
            lineColor: "#EEEEEE"
        };
        this.fontSizes = {
            small: 12,
            default: 14,
            medium: 17,
            large: 21,
            extraLarge: 26
        };
        this.fontWeights = {
            lighter: 200,
            default: 400,
            bolder: 600
        };
        this.imageSizes = {
            small: 40,
            medium: 80,
            large: 160
        };
        this.containerStyles = new ContainerStyleSet();
        this.actions = new ActionsConfig();
        this.adaptiveCard = new AdaptiveCardConfig();
        this.imageSet = new ImageSetConfig();
        this.factSet = new FactSetConfig();
        if (obj) {
            if (typeof obj === "string" || obj instanceof String) {
                obj = JSON.parse(obj);
            }
            this.supportsInteractivity = (obj && typeof obj["supportsInteractivity"] === "boolean") ? obj["supportsInteractivity"] : this.supportsInteractivity;
            this.fontFamily = obj["fontFamily"] || this.fontFamily;
            this.fontSizes = {
                small: obj.fontSizes && obj.fontSizes["small"] || this.fontSizes.small,
                default: obj.fontSizes && obj.fontSizes["default"] || this.fontSizes.default,
                medium: obj.fontSizes && obj.fontSizes["medium"] || this.fontSizes.medium,
                large: obj.fontSizes && obj.fontSizes["large"] || this.fontSizes.large,
                extraLarge: obj.fontSizes && obj.fontSizes["extraLarge"] || this.fontSizes.extraLarge
            };
            this.fontWeights = {
                lighter: obj.fontWeights && obj.fontWeights["lighter"] || this.fontWeights.lighter,
                default: obj.fontWeights && obj.fontWeights["default"] || this.fontWeights.default,
                bolder: obj.fontWeights && obj.fontWeights["bolder"] || this.fontWeights.bolder
            };
            this.imageSizes = {
                small: obj.imageSizes && obj.imageSizes["small"] || this.imageSizes.small,
                medium: obj.imageSizes && obj.imageSizes["medium"] || this.imageSizes.medium,
                large: obj.imageSizes && obj.imageSizes["large"] || this.imageSizes.large,
            };
            this.containerStyles = new ContainerStyleSet(obj["containerStyles"]);
            this.spacing = {
                small: obj.spacing && obj.spacing["small"] || this.spacing.small,
                default: obj.spacing && obj.spacing["default"] || this.spacing.default,
                medium: obj.spacing && obj.spacing["medium"] || this.spacing.medium,
                large: obj.spacing && obj.spacing["large"] || this.spacing.large,
                extraLarge: obj.spacing && obj.spacing["extraLarge"] || this.spacing.extraLarge,
                padding: obj.spacing && obj.spacing["padding"] || this.spacing.padding
            };
            this.separator = {
                lineThickness: obj.separator && obj.separator["lineThickness"] || this.separator.lineThickness,
                lineColor: obj.separator && obj.separator["lineColor"] || this.separator.lineColor
            };
            this.actions = new ActionsConfig(obj.actions || this.actions);
            this.adaptiveCard = new AdaptiveCardConfig(obj.adaptiveCard || this.adaptiveCard);
            this.imageSet = new ImageSetConfig(obj["imageSet"]);
            this.factSet = new FactSetConfig(obj["factSet"]);
        }
    }
    HostConfig.prototype.getEffectiveSpacing = function (spacing) {
        switch (spacing) {
            case Enums.Spacing.Small:
                return this.spacing.small;
            case Enums.Spacing.Default:
                return this.spacing.default;
            case Enums.Spacing.Medium:
                return this.spacing.medium;
            case Enums.Spacing.Large:
                return this.spacing.large;
            case Enums.Spacing.ExtraLarge:
                return this.spacing.extraLarge;
            case Enums.Spacing.Padding:
                return this.spacing.padding;
            default:
                return 0;
        }
    };
    HostConfig.prototype.getEffectivePadding = function (padding) {
        switch (padding) {
            case Enums.Padding.Default:
                return this.spacing.padding;
            default:
                return 0;
        }
    };
    HostConfig.prototype.paddingToSpacingDefinition = function (padding) {
        return new SpacingDefinition({
            top: this.getEffectivePadding(padding.top),
            right: this.getEffectivePadding(padding.right),
            bottom: this.getEffectivePadding(padding.bottom),
            left: this.getEffectivePadding(padding.left)
        });
    };
    HostConfig.prototype.getContainerStyleDefinition = function (containerStyle) {
        switch (containerStyle) {
            case Enums.ContainerStyle.Emphasis:
                return this.containerStyles.emphasis;
            default:
                return this.containerStyles.default;
        }
    };
    return HostConfig;
}());
exports.HostConfig = HostConfig;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Enums = __webpack_require__(0);
var Utils = __webpack_require__(2);
var HostConfig = __webpack_require__(3);
var TextFormatters = __webpack_require__(6);
function invokeSetParent(obj, parent) {
    if (obj) {
        // Closest emulation of "internal" in TypeScript.
        obj["setParent"](parent);
    }
}
function invokeSetCollection(action, collection) {
    if (action) {
        // Closest emulation of "internal" in TypeScript.
        action["setCollection"](collection);
    }
}
function isActionAllowed(action, forbiddenActionTypes) {
    if (forbiddenActionTypes) {
        for (var i = 0; i < forbiddenActionTypes.length; i++) {
            if (action.getJsonTypeName() === forbiddenActionTypes[i]) {
                return false;
            }
        }
    }
    return true;
}
function createActionInstance(json) {
    var actionType = json["type"];
    var result = AdaptiveCard.actionTypeRegistry.createInstance(actionType);
    if (result) {
        result.parse(json);
    }
    else {
        raiseParseError({
            error: Enums.ValidationError.UnknownActionType,
            message: "Unknown action type: " + actionType
        });
    }
    return result;
}
var CardElement = /** @class */ (function () {
    function CardElement() {
        this._hostConfig = null;
        this._internalPadding = null;
        this._parent = null;
        this._isVisibile = true;
        this._renderedElement = null;
        this._separatorElement = null;
        this.horizontalAlignment = null;
        this.spacing = Enums.Spacing.Default;
        this.separator = false;
        this.height = "auto";
    }
    CardElement.prototype.internalRenderSeparator = function () {
        return Utils.renderSeparation({
            spacing: this.hostConfig.getEffectiveSpacing(this.spacing),
            lineThickness: this.separator ? this.hostConfig.separator.lineThickness : null,
            lineColor: this.separator ? this.hostConfig.separator.lineColor : null
        }, this.separatorOrientation);
    };
    CardElement.prototype.updateRenderedElementVisibility = function () {
        if (this._renderedElement) {
            this._renderedElement.style.visibility = this._isVisibile ? null : "collapse";
        }
        if (this._separatorElement) {
            this._separatorElement.style.visibility = this._isVisibile ? null : "collapse";
        }
    };
    CardElement.prototype.internalGetNonZeroPadding = function (padding) {
        if (padding.top == Enums.Padding.None) {
            padding.top = this.internalPadding.top;
        }
        if (padding.right == Enums.Padding.None) {
            padding.right = this.internalPadding.right;
        }
        if (padding.bottom == Enums.Padding.None) {
            padding.bottom = this.internalPadding.bottom;
        }
        if (padding.left == Enums.Padding.None) {
            padding.left = this.internalPadding.left;
        }
        if (this.parent) {
            this.parent.internalGetNonZeroPadding(padding);
        }
    };
    CardElement.prototype.adjustRenderedElementSize = function (renderedElement) {
        if (this.height === "auto") {
            renderedElement.style.flex = "0 0 auto";
        }
        else {
            renderedElement.style.flex = "1 1 100%";
        }
    };
    CardElement.prototype.showBottomSpacer = function (requestingElement) {
        if (this.parent) {
            this.parent.showBottomSpacer(requestingElement);
        }
    };
    CardElement.prototype.hideBottomSpacer = function (requestingElement) {
        if (this.parent) {
            this.parent.hideBottomSpacer(requestingElement);
        }
    };
    CardElement.prototype.setParent = function (value) {
        this._parent = value;
    };
    Object.defineProperty(CardElement.prototype, "useDefaultSizing", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "allowCustomPadding", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "defaultPadding", {
        get: function () {
            return new HostConfig.PaddingDefinition({
                top: Enums.Padding.None,
                right: Enums.Padding.None,
                bottom: Enums.Padding.None,
                left: Enums.Padding.None
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "internalPadding", {
        get: function () {
            return (this._internalPadding && this.allowCustomPadding) ? this._internalPadding : this.defaultPadding;
        },
        set: function (value) {
            this._internalPadding = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Horizontal;
        },
        enumerable: true,
        configurable: true
    });
    CardElement.prototype.getNonZeroPadding = function () {
        var padding = new HostConfig.PaddingDefinition({
            top: Enums.Padding.None,
            right: Enums.Padding.None,
            bottom: Enums.Padding.None,
            left: Enums.Padding.None
        });
        this.internalGetNonZeroPadding(padding);
        return padding;
    };
    CardElement.prototype.getForbiddenElementTypes = function () {
        return null;
    };
    CardElement.prototype.getForbiddenActionTypes = function () {
        return null;
    };
    CardElement.prototype.parse = function (json) {
        raiseParseElementEvent(this, json);
        this.id = json["id"];
        this.speak = json["speak"];
        this.horizontalAlignment = Utils.getEnumValueOrDefault(Enums.HorizontalAlignment, json["horizontalAlignment"], null);
        this.spacing = Utils.getEnumValueOrDefault(Enums.Spacing, json["spacing"], Enums.Spacing.Default);
        this.separator = json["separator"];
        var jsonSeparation = json["separation"];
        if (jsonSeparation !== undefined) {
            if (jsonSeparation === "none") {
                this.spacing = Enums.Spacing.None;
                this.separator = false;
            }
            else if (jsonSeparation === "strong") {
                this.spacing = Enums.Spacing.Large;
                this.separator = true;
            }
            else if (jsonSeparation === "default") {
                this.spacing = Enums.Spacing.Default;
                this.separator = false;
            }
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The \"separation\" property is deprecated and will be removed. Use the \"spacing\" and \"separator\" properties instead."
            });
        }
        var jsonHeight = json["height"];
        if (jsonHeight === "auto" || jsonHeight === "stretch") {
            this.height = jsonHeight;
        }
    };
    CardElement.prototype.validate = function () {
        return [];
    };
    CardElement.prototype.render = function () {
        this._renderedElement = this.internalRender();
        this._separatorElement = this.internalRenderSeparator();
        if (this._renderedElement) {
            this._renderedElement.style.boxSizing = "border-box";
            this.adjustRenderedElementSize(this._renderedElement);
            this.updateLayout(false);
            this.updateRenderedElementVisibility();
        }
        return this._renderedElement;
    };
    CardElement.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        // Does nothing in base implementation
    };
    CardElement.prototype.isAtTheVeryTop = function () {
        return this.parent ? this.parent.isFirstElement(this) && this.parent.isAtTheVeryTop() : true;
    };
    CardElement.prototype.isFirstElement = function (element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryBottom = function () {
        return this.parent ? this.parent.isLastElement(this) && this.parent.isAtTheVeryBottom() : true;
    };
    CardElement.prototype.isLastElement = function (element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryLeft = function () {
        return this.parent ? this.parent.isLeftMostElement(this) && this.parent.isAtTheVeryLeft() : true;
    };
    CardElement.prototype.isLeftMostElement = function (element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryRight = function () {
        return this.parent ? this.parent.isRightMostElement(this) && this.parent.isAtTheVeryRight() : true;
    };
    CardElement.prototype.isRightMostElement = function (element) {
        return true;
    };
    CardElement.prototype.canContentBleed = function () {
        return this.parent ? this.parent.canContentBleed() : true;
    };
    CardElement.prototype.getRootElement = function () {
        var rootElement = this;
        while (rootElement.parent) {
            rootElement = rootElement.parent;
        }
        return rootElement;
    };
    CardElement.prototype.getParentContainer = function () {
        var currentElement = this.parent;
        while (currentElement) {
            if (currentElement instanceof Container) {
                return currentElement;
            }
            currentElement = currentElement.parent;
        }
        return null;
    };
    CardElement.prototype.getAllInputs = function () {
        return [];
    };
    CardElement.prototype.getElementById = function (id) {
        return this.id === id ? this : null;
    };
    CardElement.prototype.getActionById = function (id) {
        return null;
    };
    Object.defineProperty(CardElement.prototype, "hostConfig", {
        get: function () {
            if (this._hostConfig) {
                return this._hostConfig;
            }
            else {
                if (this.parent) {
                    return this.parent.hostConfig;
                }
                else {
                    return defaultHostConfig;
                }
            }
        },
        set: function (value) {
            this._hostConfig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInteractive", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isStandalone", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isVisible", {
        get: function () {
            return this._isVisibile;
        },
        set: function (value) {
            if (this._isVisibile != value) {
                this._isVisibile = value;
                this.updateRenderedElementVisibility();
                if (this._renderedElement) {
                    raiseElementVisibilityChangedEvent(this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "renderedElement", {
        get: function () {
            return this._renderedElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorElement", {
        get: function () {
            return this._separatorElement;
        },
        enumerable: true,
        configurable: true
    });
    return CardElement;
}());
exports.CardElement = CardElement;
var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = Enums.TextSize.Default;
        _this.weight = Enums.TextWeight.Default;
        _this.color = Enums.TextColor.Default;
        _this.isSubtle = false;
        _this.wrap = false;
        return _this;
    }
    TextBlock.prototype.internalRender = function () {
        var _this = this;
        if (!Utils.isNullOrEmpty(this.text)) {
            var element = document.createElement("div");
            element.style.overflow = "hidden";
            if (this.hostConfig.fontFamily) {
                element.style.fontFamily = this.hostConfig.fontFamily;
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.textAlign = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.textAlign = "right";
                    break;
                default:
                    element.style.textAlign = "left";
                    break;
            }
            var cssStyle = "text ";
            var fontSize;
            switch (this.size) {
                case Enums.TextSize.Small:
                    fontSize = this.hostConfig.fontSizes.small;
                    break;
                case Enums.TextSize.Medium:
                    fontSize = this.hostConfig.fontSizes.medium;
                    break;
                case Enums.TextSize.Large:
                    fontSize = this.hostConfig.fontSizes.large;
                    break;
                case Enums.TextSize.ExtraLarge:
                    fontSize = this.hostConfig.fontSizes.extraLarge;
                    break;
                default:
                    fontSize = this.hostConfig.fontSizes.default;
                    break;
            }
            // Looks like 1.33 is the magic number to compute line-height
            // from font size.
            this._computedLineHeight = fontSize * 1.33;
            element.style.fontSize = fontSize + "px";
            element.style.lineHeight = this._computedLineHeight + "px";
            var parentContainer = this.getParentContainer();
            var styleDefinition = this.hostConfig.getContainerStyleDefinition(parentContainer ? parentContainer.style : Enums.ContainerStyle.Default);
            var actualTextColor = this.color ? this.color : Enums.TextColor.Default;
            var colorDefinition;
            switch (actualTextColor) {
                case Enums.TextColor.Accent:
                    colorDefinition = styleDefinition.foregroundColors.accent;
                    break;
                case Enums.TextColor.Good:
                    colorDefinition = styleDefinition.foregroundColors.good;
                    break;
                case Enums.TextColor.Warning:
                    colorDefinition = styleDefinition.foregroundColors.warning;
                    break;
                case Enums.TextColor.Attention:
                    colorDefinition = styleDefinition.foregroundColors.attention;
                    break;
                default:
                    colorDefinition = styleDefinition.foregroundColors.default;
                    break;
            }
            element.style.color = Utils.stringToCssColor(this.isSubtle ? colorDefinition.subtle : colorDefinition.normal);
            var fontWeight;
            switch (this.weight) {
                case Enums.TextWeight.Lighter:
                    fontWeight = this.hostConfig.fontWeights.lighter;
                    break;
                case Enums.TextWeight.Bolder:
                    fontWeight = this.hostConfig.fontWeights.bolder;
                    break;
                default:
                    fontWeight = this.hostConfig.fontWeights.default;
                    break;
            }
            element.style.fontWeight = fontWeight.toString();
            var formattedText = TextFormatters.formatText(this.text);
            element.innerHTML = AdaptiveCard.processMarkdown(formattedText);
            if (element.firstElementChild instanceof HTMLElement) {
                var firstElementChild = element.firstElementChild;
                firstElementChild.style.marginTop = "0px";
                firstElementChild.style.width = "100%";
                if (!this.wrap) {
                    firstElementChild.style.overflow = "hidden";
                    firstElementChild.style.textOverflow = "ellipsis";
                }
            }
            if (element.lastElementChild instanceof HTMLElement) {
                element.lastElementChild.style.marginBottom = "0px";
            }
            var anchors = element.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                anchor.classList.add("ac-anchor");
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    if (raiseAnchorClickedEvent(_this, anchor)) {
                        e.preventDefault();
                    }
                };
            }
            if (this.wrap) {
                element.style.wordWrap = "break-word";
                if (this.maxLines > 0) {
                    element.style.maxHeight = (this._computedLineHeight * this.maxLines) + "px";
                    element.style.overflow = "hidden";
                }
            }
            else {
                element.style.whiteSpace = "nowrap";
            }
            if (AdaptiveCard.useAdvancedTextBlockTruncation) {
                this._originalInnerHtml = element.innerHTML;
            }
            return element;
        }
        else {
            return null;
        }
    };
    TextBlock.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.text = json["text"];
        var sizeString = json["size"];
        if (sizeString && typeof sizeString === "string" && sizeString.toLowerCase() === "normal") {
            this.size = Enums.TextSize.Default;
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The TextBlock.size value \"normal\" is deprecated and will be removed. Use \"default\" instead."
            });
        }
        else {
            this.size = Utils.getEnumValueOrDefault(Enums.TextSize, sizeString, this.size);
        }
        var weightString = json["weight"];
        if (weightString && typeof weightString === "string" && weightString.toLowerCase() === "normal") {
            this.weight = Enums.TextWeight.Default;
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The TextBlock.weight value \"normal\" is deprecated and will be removed. Use \"default\" instead."
            });
        }
        else {
            this.weight = Utils.getEnumValueOrDefault(Enums.TextWeight, weightString, this.weight);
        }
        this.color = Utils.getEnumValueOrDefault(Enums.TextColor, json["color"], this.color);
        this.isSubtle = json["isSubtle"];
        this.wrap = json["wrap"] === undefined ? false : json["wrap"];
        this.maxLines = json["maxLines"];
    };
    TextBlock.prototype.getJsonTypeName = function () {
        return "TextBlock";
    };
    TextBlock.prototype.renderSpeech = function () {
        if (this.speak != null)
            return this.speak + '\n';
        if (this.text)
            return '<s>' + this.text + '</s>\n';
        return null;
    };
    TextBlock.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = false; }
        if (AdaptiveCard.useAdvancedTextBlockTruncation) {
            // Reset the element's innerHTML in case the available room for
            // content has increased
            this.renderedElement.innerHTML = this._originalInnerHtml;
            this.truncateIfSupported();
        }
    };
    TextBlock.prototype.truncateIfSupported = function () {
        if (this.maxLines && this.renderedElement.scrollHeight) {
            // For now, only truncate TextBlocks that contain just a single
            // paragraph -- since the maxLines calculation doesn't take into
            // account Markdown lists
            var children = this.renderedElement.children;
            var truncationSupported = children.length == 1
                && children[0].tagName.toLowerCase() == 'p';
            if (truncationSupported) {
                var element = children[0];
                var maxHeight = this._computedLineHeight * this.maxLines;
                Utils.truncate(element, maxHeight, this._computedLineHeight);
            }
        }
    };
    return TextBlock;
}(CardElement));
exports.TextBlock = TextBlock;
var Fact = /** @class */ (function () {
    function Fact() {
    }
    Fact.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak + '\n';
        }
        return '<s>' + this.name + ' ' + this.value + '</s>\n';
    };
    return Fact;
}());
exports.Fact = Fact;
var FactSet = /** @class */ (function (_super) {
    __extends(FactSet, _super);
    function FactSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facts = [];
        return _this;
    }
    Object.defineProperty(FactSet.prototype, "useDefaultSizing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FactSet.prototype.internalRender = function () {
        var element = null;
        if (this.facts.length > 0) {
            element = document.createElement("table");
            element.style.borderWidth = "0px";
            element.style.borderSpacing = "0px";
            element.style.borderStyle = "none";
            element.style.borderCollapse = "collapse";
            element.style.display = "block";
            element.style.overflow = "hidden";
            for (var i = 0; i < this.facts.length; i++) {
                var trElement = document.createElement("tr");
                if (i > 0) {
                    trElement.style.marginTop = this.hostConfig.factSet.spacing + "px";
                }
                var tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                if (this.hostConfig.factSet.title.maxWidth) {
                    tdElement.style.maxWidth = this.hostConfig.factSet.title.maxWidth + "px";
                }
                tdElement.style.verticalAlign = "top";
                var textBlock = new TextBlock();
                textBlock.hostConfig = this.hostConfig;
                textBlock.text = this.facts[i].name;
                textBlock.size = this.hostConfig.factSet.title.size;
                textBlock.color = this.hostConfig.factSet.title.color;
                textBlock.isSubtle = this.hostConfig.factSet.title.isSubtle;
                textBlock.weight = this.hostConfig.factSet.title.weight;
                textBlock.wrap = this.hostConfig.factSet.title.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                tdElement = document.createElement("td");
                tdElement.style.padding = "0px 0px 0px 10px";
                tdElement.style.verticalAlign = "top";
                textBlock = new TextBlock();
                textBlock.hostConfig = this.hostConfig;
                textBlock.text = this.facts[i].value;
                textBlock.size = this.hostConfig.factSet.value.size;
                textBlock.color = this.hostConfig.factSet.value.color;
                textBlock.isSubtle = this.hostConfig.factSet.value.isSubtle;
                textBlock.weight = this.hostConfig.factSet.value.weight;
                textBlock.wrap = this.hostConfig.factSet.value.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                Utils.appendChild(element, trElement);
            }
        }
        return element;
    };
    FactSet.prototype.getJsonTypeName = function () {
        return "FactSet";
    };
    FactSet.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        if (json["facts"] != null) {
            var jsonFacts = json["facts"];
            this.facts = [];
            for (var i = 0; i < jsonFacts.length; i++) {
                var fact = new Fact();
                fact.name = jsonFacts[i]["title"];
                fact.value = jsonFacts[i]["value"];
                fact.speak = jsonFacts[i]["speak"];
                this.facts.push(fact);
            }
        }
    };
    FactSet.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak + '\n';
        }
        // render each fact
        var speak = null;
        if (this.facts.length > 0) {
            speak = '';
            for (var i = 0; i < this.facts.length; i++) {
                var speech = this.facts[i].renderSpeech();
                if (speech) {
                    speak += speech;
                }
            }
        }
        return '<p>' + speak + '\n</p>\n';
    };
    return FactSet;
}(CardElement));
exports.FactSet = FactSet;
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = Enums.ImageStyle.Default;
        _this.size = Enums.Size.Auto;
        _this.pixelWidth = null;
        _this.pixelHeight = null;
        _this.altText = "";
        return _this;
    }
    Object.defineProperty(Image.prototype, "useDefaultSizing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.internalRender = function () {
        var _this = this;
        var element = null;
        if (!Utils.isNullOrEmpty(this.url)) {
            element = document.createElement("div");
            element.classList.add("ac-image");
            element.style.display = "flex";
            element.style.alignItems = "flex-start";
            if (this.selectAction != null && this.hostConfig.supportsInteractivity) {
                element.tabIndex = 0;
                element.setAttribute("role", "button");
                element.setAttribute("aria-label", this.selectAction.title);
                element.classList.add("ac-selectable");
            }
            element.onkeypress = function (e) {
                if (_this.selectAction) {
                    if (e.keyCode == 13 || e.keyCode == 32) {
                        _this.selectAction.execute();
                    }
                }
            };
            element.onclick = function (e) {
                if (_this.selectAction) {
                    _this.selectAction.execute();
                    e.cancelBubble = true;
                }
            };
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            var imageElement = document.createElement("img");
            imageElement.style.maxHeight = "100%";
            imageElement.style.minWidth = "0";
            if (this.pixelWidth || this.pixelHeight) {
                if (this.pixelWidth) {
                    imageElement.style.width = this.pixelWidth + "px";
                }
                if (this.pixelHeight) {
                    imageElement.style.height = this.pixelHeight + "px";
                }
            }
            else {
                switch (this.size) {
                    case Enums.Size.Stretch:
                        imageElement.style.width = "100%";
                        break;
                    case Enums.Size.Auto:
                        imageElement.style.maxWidth = "100%";
                        break;
                    case Enums.Size.Small:
                        imageElement.style.width = this.hostConfig.imageSizes.small + "px";
                        break;
                    case Enums.Size.Large:
                        imageElement.style.width = this.hostConfig.imageSizes.large + "px";
                        break;
                    case Enums.Size.Medium:
                        imageElement.style.width = this.hostConfig.imageSizes.medium + "px";
                        break;
                }
            }
            if (this.style === Enums.ImageStyle.Person) {
                imageElement.style.borderRadius = "50%";
                imageElement.style.backgroundPosition = "50% 50%";
                imageElement.style.backgroundRepeat = "no-repeat";
            }
            if (!Utils.isNullOrEmpty(this.backgroundColor)) {
                imageElement.style.backgroundColor = Utils.stringToCssColor(this.backgroundColor);
            }
            imageElement.src = this.url;
            imageElement.alt = this.altText;
            element.appendChild(imageElement);
        }
        return element;
    };
    Image.prototype.getJsonTypeName = function () {
        return "Image";
    };
    Image.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.selectAction) {
            result = this.selectAction.getActionById(id);
        }
        return result;
    };
    Image.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.url = json["url"];
        var styleString = json["style"];
        if (styleString && typeof styleString === "string" && styleString.toLowerCase() === "normal") {
            this.style = Enums.ImageStyle.Default;
            raiseParseError({
                error: Enums.ValidationError.Deprecated,
                message: "The Image.style value \"normal\" is deprecated and will be removed. Use \"default\" instead."
            });
        }
        else {
            this.style = Utils.getEnumValueOrDefault(Enums.ImageStyle, styleString, this.style);
        }
        this.size = Utils.getEnumValueOrDefault(Enums.Size, json["size"], this.size);
        this.altText = json["altText"];
        var selectActionJson = json["selectAction"];
        if (selectActionJson != undefined) {
            this.selectAction = createActionInstance(selectActionJson);
        }
        if (json["pixelWidth"] && typeof json["pixelWidth"] === "number") {
            this.pixelWidth = json["pixelWidth"];
        }
        if (json["pixelHeight"] && typeof json["pixelHeight"] === "number") {
            this.pixelHeight = json["pixelHeight"];
        }
    };
    Image.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak + '\n';
        }
        return null;
    };
    Object.defineProperty(Image.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
            if (this._selectAction) {
                invokeSetParent(this._selectAction, this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Image;
}(CardElement));
exports.Image = Image;
var ImageSet = /** @class */ (function (_super) {
    __extends(ImageSet, _super);
    function ImageSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._images = [];
        _this.imageSize = Enums.Size.Medium;
        return _this;
    }
    ImageSet.prototype.internalRender = function () {
        var element = null;
        if (this._images.length > 0) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.flexWrap = "wrap";
            for (var i = 0; i < this._images.length; i++) {
                var renderedImage = this._images[i].render();
                renderedImage.style.display = "inline-flex";
                renderedImage.style.margin = "0px";
                renderedImage.style.marginRight = "10px";
                renderedImage.style.maxHeight = this.hostConfig.imageSet.maxImageHeight + "px";
                Utils.appendChild(element, renderedImage);
            }
        }
        return element;
    };
    ImageSet.prototype.getJsonTypeName = function () {
        return "ImageSet";
    };
    ImageSet.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        //this.imageSize = Utils.getValueOrDefault<Enums.Size>(json["imageSize"], Enums.Size.medium);
        this.imageSize = Utils.getEnumValueOrDefault(Enums.Size, json["imageSize"], Enums.Size.Medium);
        if (json["images"] != null) {
            var jsonImages = json["images"];
            this._images = [];
            for (var i = 0; i < jsonImages.length; i++) {
                var image = new Image();
                image.parse(jsonImages[i]);
                image.size = this.imageSize;
                this.addImage(image);
            }
        }
    };
    ImageSet.prototype.addImage = function (image) {
        if (!image.parent) {
            this._images.push(image);
            invokeSetParent(image, this);
        }
        else {
            throw new Error("This image already belongs to another ImageSet");
        }
    };
    ImageSet.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak;
        }
        var speak = null;
        if (this._images.length > 0) {
            speak = '';
            for (var i = 0; i < this._images.length; i++) {
                speak += this._images[i].renderSpeech();
            }
        }
        return speak;
    };
    return ImageSet;
}(CardElement));
exports.ImageSet = ImageSet;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.validate = function () {
        if (!this.id) {
            return [{ error: Enums.ValidationError.PropertyCantBeNull, message: "All inputs must have a unique Id" }];
        }
        else {
            return [];
        }
    };
    Input.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.id = json["id"];
        this.defaultValue = json["value"];
    };
    Input.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak;
        }
        if (this.title) {
            return '<s>' + this.title + '</s>\n';
        }
        return null;
    };
    Input.prototype.getAllInputs = function () {
        return [this];
    };
    Object.defineProperty(Input.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return Input;
}(CardElement));
exports.Input = Input;
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextInput.prototype.internalRender = function () {
        if (this.isMultiline) {
            this._textareaElement = document.createElement("textarea");
            this._textareaElement.className = "ac-input ac-textInput ac-multiline";
            this._textareaElement.style.width = "100%";
            this._textareaElement.tabIndex = 0;
            if (!Utils.isNullOrEmpty(this.placeholder)) {
                this._textareaElement.placeholder = this.placeholder;
                this._textareaElement.setAttribute("aria-label", this.placeholder);
            }
            if (!Utils.isNullOrEmpty(this.defaultValue)) {
                this._textareaElement.value = this.defaultValue;
            }
            if (this.maxLength > 0) {
                this._textareaElement.maxLength = this.maxLength;
            }
            return this._textareaElement;
        }
        else {
            this._inputElement = document.createElement("input");
            this._inputElement.type = "text";
            this._inputElement.className = "ac-input ac-textInput";
            this._inputElement.style.width = "100%";
            this._inputElement.tabIndex = 0;
            if (!Utils.isNullOrEmpty(this.placeholder)) {
                this._inputElement.placeholder = this.placeholder;
                this._inputElement.setAttribute("aria-label", this.placeholder);
            }
            if (!Utils.isNullOrEmpty(this.defaultValue)) {
                this._inputElement.value = this.defaultValue;
            }
            if (this.maxLength > 0) {
                this._inputElement.maxLength = this.maxLength;
            }
            return this._inputElement;
        }
    };
    TextInput.prototype.getJsonTypeName = function () {
        return "Input.Text";
    };
    TextInput.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.maxLength = json["maxLength"];
        this.isMultiline = json["isMultiline"];
        this.placeholder = json["placeholder"];
    };
    Object.defineProperty(TextInput.prototype, "value", {
        get: function () {
            if (this.isMultiline) {
                return this._textareaElement ? this._textareaElement.value : null;
            }
            else {
                return this._inputElement ? this._inputElement.value : null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return TextInput;
}(Input));
exports.TextInput = TextInput;
var ToggleInput = /** @class */ (function (_super) {
    __extends(ToggleInput, _super);
    function ToggleInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueOn = "true";
        _this.valueOff = "false";
        return _this;
    }
    ToggleInput.prototype.internalRender = function () {
        var element = document.createElement("div");
        element.className = "ac-input";
        element.style.width = "100%";
        element.style.display = "flex";
        this._checkboxInputElement = document.createElement("input");
        this._checkboxInputElement.type = "checkbox";
        this._checkboxInputElement.style.display = "inline-block";
        this._checkboxInputElement.style.verticalAlign = "middle";
        this._checkboxInputElement.style.margin = "0";
        this._checkboxInputElement.style.flex = "0 0 auto";
        this._checkboxInputElement.setAttribute("aria-label", this.title);
        this._checkboxInputElement.tabIndex = 0;
        if (this.defaultValue == this.valueOn) {
            this._checkboxInputElement.checked = true;
        }
        var label = new TextBlock();
        label.hostConfig = this.hostConfig;
        label.text = this.title;
        var labelElement = label.render();
        labelElement.style.display = "inline-block";
        labelElement.style.marginLeft = "6px";
        labelElement.style.verticalAlign = "middle";
        var compoundInput = document.createElement("div");
        Utils.appendChild(element, this._checkboxInputElement);
        Utils.appendChild(element, labelElement);
        return element;
    };
    ToggleInput.prototype.getJsonTypeName = function () {
        return "Input.Toggle";
    };
    ToggleInput.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.title = json["title"];
        this.valueOn = Utils.getValueOrDefault(json["valueOn"], this.valueOn);
        this.valueOff = Utils.getValueOrDefault(json["valueOff"], this.valueOff);
    };
    Object.defineProperty(ToggleInput.prototype, "value", {
        get: function () {
            if (this._checkboxInputElement) {
                return this._checkboxInputElement.checked ? this.valueOn : this.valueOff;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ToggleInput;
}(Input));
exports.ToggleInput = ToggleInput;
var Choice = /** @class */ (function () {
    function Choice() {
    }
    return Choice;
}());
exports.Choice = Choice;
var ChoiceSetInput = /** @class */ (function (_super) {
    __extends(ChoiceSetInput, _super);
    function ChoiceSetInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.choices = [];
        return _this;
    }
    ChoiceSetInput.prototype.internalRender = function () {
        if (!this.isMultiSelect) {
            if (this.isCompact) {
                // Render as a combo box
                this._selectElement = document.createElement("select");
                this._selectElement.className = "ac-input ac-multichoiceInput";
                this._selectElement.style.width = "100%";
                var option = document.createElement("option");
                option.selected = true;
                option.disabled = true;
                option.hidden = true;
                if (this.placeholder) {
                    option.text = this.placeholder;
                }
                Utils.appendChild(this._selectElement, option);
                for (var i = 0; i < this.choices.length; i++) {
                    var option = document.createElement("option");
                    option.value = this.choices[i].value;
                    option.text = this.choices[i].title;
                    option.setAttribute("aria-label", this.choices[i].title);
                    if (this.choices[i].value == this.defaultValue) {
                        option.selected = true;
                    }
                    Utils.appendChild(this._selectElement, option);
                }
                return this._selectElement;
            }
            else {
                // Render as a series of radio buttons
                var element = document.createElement("div");
                element.className = "ac-input";
                element.style.width = "100%";
                this._toggleInputs = [];
                for (var i = 0; i < this.choices.length; i++) {
                    var radioInput = document.createElement("input");
                    radioInput.type = "radio";
                    radioInput.style.margin = "0";
                    radioInput.style.display = "inline-block";
                    radioInput.style.verticalAlign = "middle";
                    radioInput.name = this.id;
                    radioInput.value = this.choices[i].value;
                    radioInput.style.flex = "0 0 auto";
                    radioInput.setAttribute("aria-label", this.choices[i].title);
                    if (this.choices[i].value == this.defaultValue) {
                        radioInput.checked = true;
                    }
                    this._toggleInputs.push(radioInput);
                    var label = new TextBlock();
                    label.hostConfig = this.hostConfig;
                    label.text = this.choices[i].title;
                    var labelElement = label.render();
                    labelElement.style.display = "inline-block";
                    labelElement.style.marginLeft = "6px";
                    labelElement.style.verticalAlign = "middle";
                    var compoundInput = document.createElement("div");
                    compoundInput.style.display = "flex";
                    Utils.appendChild(compoundInput, radioInput);
                    Utils.appendChild(compoundInput, labelElement);
                    Utils.appendChild(element, compoundInput);
                }
                return element;
            }
        }
        else {
            // Render as a list of toggle inputs
            var defaultValues = this.defaultValue ? this.defaultValue.split(",") : null;
            var element = document.createElement("div");
            element.className = "ac-input";
            element.style.width = "100%";
            this._toggleInputs = [];
            for (var i = 0; i < this.choices.length; i++) {
                var checkboxInput = document.createElement("input");
                checkboxInput.type = "checkbox";
                checkboxInput.style.margin = "0";
                checkboxInput.style.display = "inline-block";
                checkboxInput.style.verticalAlign = "middle";
                checkboxInput.value = this.choices[i].value;
                checkboxInput.style.flex = "0 0 auto";
                checkboxInput.setAttribute("aria-label", this.choices[i].title);
                if (defaultValues) {
                    if (defaultValues.indexOf(this.choices[i].value) >= 0) {
                        checkboxInput.checked = true;
                    }
                }
                this._toggleInputs.push(checkboxInput);
                var label = new TextBlock();
                label.hostConfig = this.hostConfig;
                label.text = this.choices[i].title;
                var labelElement = label.render();
                labelElement.style.display = "inline-block";
                labelElement.style.marginLeft = "6px";
                labelElement.style.verticalAlign = "middle";
                var compoundInput = document.createElement("div");
                compoundInput.style.display = "flex";
                Utils.appendChild(compoundInput, checkboxInput);
                Utils.appendChild(compoundInput, labelElement);
                Utils.appendChild(element, compoundInput);
            }
            return element;
        }
    };
    ChoiceSetInput.prototype.getJsonTypeName = function () {
        return "Input.ChoiceSet";
    };
    ChoiceSetInput.prototype.validate = function () {
        var result = [];
        if (this.choices.length == 0) {
            result = [{ error: Enums.ValidationError.CollectionCantBeEmpty, message: "An Input.ChoiceSet must have at least one choice defined." }];
        }
        for (var i = 0; i < this.choices.length; i++) {
            if (!this.choices[i].title || !this.choices[i].value) {
                result = result.concat([{ error: Enums.ValidationError.PropertyCantBeNull, message: "All choices in an Input.ChoiceSet must have their title and value properties set." }]);
                break;
            }
        }
        return result;
    };
    ChoiceSetInput.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.isCompact = !(json["style"] === "expanded");
        this.isMultiSelect = json["isMultiSelect"];
        this.placeholder = json["placeholder"];
        if (json["choices"] != undefined) {
            var choiceArray = json["choices"];
            this.choices = [];
            for (var i = 0; i < choiceArray.length; i++) {
                var choice = new Choice();
                choice.title = choiceArray[i]["title"];
                choice.value = choiceArray[i]["value"];
                this.choices.push(choice);
            }
        }
    };
    Object.defineProperty(ChoiceSetInput.prototype, "value", {
        get: function () {
            if (!this.isMultiSelect) {
                if (this.isCompact) {
                    return this._selectElement ? this._selectElement.value : null;
                }
                else {
                    if (!this._toggleInputs || this._toggleInputs.length == 0) {
                        return null;
                    }
                    for (var i = 0; i < this._toggleInputs.length; i++) {
                        if (this._toggleInputs[i].checked) {
                            return this._toggleInputs[i].value;
                        }
                    }
                    return null;
                }
            }
            else {
                if (!this._toggleInputs || this._toggleInputs.length == 0) {
                    return null;
                }
                var result = "";
                for (var i = 0; i < this._toggleInputs.length; i++) {
                    if (this._toggleInputs[i].checked) {
                        if (result != "") {
                            result += ";";
                        }
                        result += this._toggleInputs[i].value;
                    }
                }
                return result == "" ? null : result;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ChoiceSetInput;
}(Input));
exports.ChoiceSetInput = ChoiceSetInput;
var NumberInput = /** @class */ (function (_super) {
    __extends(NumberInput, _super);
    function NumberInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberInput.prototype.internalRender = function () {
        this._numberInputElement = document.createElement("input");
        this._numberInputElement.type = "number";
        this._numberInputElement.className = "ac-input ac-numberInput";
        this._numberInputElement.min = this.min;
        this._numberInputElement.max = this.max;
        this._numberInputElement.style.width = "100%";
        this._numberInputElement.tabIndex = 0;
        if (!Utils.isNullOrEmpty(this.defaultValue)) {
            this._numberInputElement.value = this.defaultValue;
        }
        if (!Utils.isNullOrEmpty(this.placeholder)) {
            this._numberInputElement.placeholder = this.placeholder;
            this._numberInputElement.setAttribute("aria-label", this.placeholder);
        }
        return this._numberInputElement;
    };
    NumberInput.prototype.getJsonTypeName = function () {
        return "Input.Number";
    };
    NumberInput.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.placeholder = json["placeholder"];
        this.min = json["min"];
        this.max = json["max"];
    };
    Object.defineProperty(NumberInput.prototype, "value", {
        get: function () {
            return this._numberInputElement ? this._numberInputElement.value : null;
        },
        enumerable: true,
        configurable: true
    });
    return NumberInput;
}(Input));
exports.NumberInput = NumberInput;
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateInput.prototype.internalRender = function () {
        this._dateInputElement = document.createElement("input");
        this._dateInputElement.type = "date";
        this._dateInputElement.className = "ac-input ac-dateInput";
        this._dateInputElement.style.width = "100%";
        if (!Utils.isNullOrEmpty(this.defaultValue)) {
            this._dateInputElement.value = this.defaultValue;
        }
        return this._dateInputElement;
    };
    DateInput.prototype.getJsonTypeName = function () {
        return "Input.Date";
    };
    Object.defineProperty(DateInput.prototype, "value", {
        get: function () {
            return this._dateInputElement ? this._dateInputElement.value : null;
        },
        enumerable: true,
        configurable: true
    });
    return DateInput;
}(Input));
exports.DateInput = DateInput;
var TimeInput = /** @class */ (function (_super) {
    __extends(TimeInput, _super);
    function TimeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeInput.prototype.internalRender = function () {
        this._timeInputElement = document.createElement("input");
        this._timeInputElement.type = "time";
        this._timeInputElement.className = "ac-input ac-timeInput";
        this._timeInputElement.style.width = "100%";
        if (!Utils.isNullOrEmpty(this.defaultValue)) {
            this._timeInputElement.value = this.defaultValue;
        }
        return this._timeInputElement;
    };
    TimeInput.prototype.getJsonTypeName = function () {
        return "Input.Time";
    };
    Object.defineProperty(TimeInput.prototype, "value", {
        get: function () {
            return this._timeInputElement ? this._timeInputElement.value : null;
        },
        enumerable: true,
        configurable: true
    });
    return TimeInput;
}(Input));
exports.TimeInput = TimeInput;
var ActionButtonState;
(function (ActionButtonState) {
    ActionButtonState[ActionButtonState["Normal"] = 0] = "Normal";
    ActionButtonState[ActionButtonState["Expanded"] = 1] = "Expanded";
    ActionButtonState[ActionButtonState["Subdued"] = 2] = "Subdued";
})(ActionButtonState || (ActionButtonState = {}));
var ActionButton = /** @class */ (function () {
    function ActionButton(action) {
        var _this = this;
        this._element = null;
        this._state = ActionButtonState.Normal;
        this.onClick = null;
        this._action = action;
        this._element = document.createElement("button");
        this._element.type = "button";
        this._element.style.overflow = "hidden";
        this._element.style.whiteSpace = "nowrap";
        this._element.style.textOverflow = "ellipsis";
        this._element.onclick = function (e) { _this.click(); };
        this.updateCssStyle();
    }
    ActionButton.prototype.click = function () {
        if (this.onClick != null) {
            this.onClick(this);
        }
    };
    ActionButton.prototype.updateCssStyle = function () {
        this._element.className = "ac-pushButton";
        if (this._action instanceof ShowCardAction) {
            this._element.classList.add("expandable");
        }
        switch (this._state) {
            case ActionButtonState.Expanded:
                this._element.classList.add("expanded");
                break;
            case ActionButtonState.Subdued:
                this._element.classList.add("subdued");
                break;
        }
    };
    Object.defineProperty(ActionButton.prototype, "action", {
        get: function () {
            return this._action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionButton.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
            this._element.innerText = this._text;
            this._element.setAttribute("aria-label", this._text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionButton.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionButton.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
            this.updateCssStyle();
        },
        enumerable: true,
        configurable: true
    });
    return ActionButton;
}());
var Action = /** @class */ (function () {
    function Action() {
        this._parent = null;
        this._actionCollection = null; // hold the reference to its action collection
    }
    Action.prototype.setParent = function (value) {
        this._parent = value;
    };
    Action.prototype.execute = function () {
        raiseExecuteActionEvent(this);
    };
    Action.prototype.setCollection = function (actionCollection) {
        this._actionCollection = actionCollection;
    };
    // Expand the action card pane with a inline status card
    // Null status will clear the status bar
    Action.prototype.setStatus = function (status) {
        if (this._actionCollection == null) {
            return;
        }
        if (status) {
            var statusCard = new InlineAdaptiveCard();
            statusCard.parse(status);
            this._actionCollection.showStatusCard(statusCard);
        }
        else {
            this._actionCollection.hideStatusCard();
        }
    };
    Action.prototype.validate = function () {
        return [];
    };
    Action.prototype.prepare = function (inputs) {
        // Do nothing in base implementation
    };
    ;
    Action.prototype.parse = function (json) {
        this.id = json["id"];
        this.title = json["title"];
    };
    Action.prototype.getAllInputs = function () {
        return [];
    };
    Action.prototype.getActionById = function (id) {
        if (this.id == id) {
            return this;
        }
    };
    Object.defineProperty(Action.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    return Action;
}());
exports.Action = Action;
var SubmitAction = /** @class */ (function (_super) {
    __extends(SubmitAction, _super);
    function SubmitAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPrepared = false;
        return _this;
    }
    SubmitAction.prototype.getJsonTypeName = function () {
        return "Action.Submit";
    };
    SubmitAction.prototype.prepare = function (inputs) {
        if (this._originalData) {
            this._processedData = JSON.parse(JSON.stringify(this._originalData));
        }
        else {
            this._processedData = {};
        }
        for (var i = 0; i < inputs.length; i++) {
            var inputValue = inputs[i].value;
            if (inputValue != null) {
                this._processedData[inputs[i].id] = inputs[i].value;
            }
        }
        this._isPrepared = true;
    };
    SubmitAction.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.data = json["data"];
    };
    Object.defineProperty(SubmitAction.prototype, "data", {
        get: function () {
            return this._isPrepared ? this._processedData : this._originalData;
        },
        set: function (value) {
            this._originalData = value;
            this._isPrepared = false;
        },
        enumerable: true,
        configurable: true
    });
    return SubmitAction;
}(Action));
exports.SubmitAction = SubmitAction;
var OpenUrlAction = /** @class */ (function (_super) {
    __extends(OpenUrlAction, _super);
    function OpenUrlAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenUrlAction.prototype.getJsonTypeName = function () {
        return "Action.OpenUrl";
    };
    OpenUrlAction.prototype.validate = function () {
        if (!this.url) {
            return [{ error: Enums.ValidationError.PropertyCantBeNull, message: "An Action.OpenUrl must have its url property set." }];
        }
        else {
            return [];
        }
    };
    OpenUrlAction.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.url = json["url"];
    };
    return OpenUrlAction;
}(Action));
exports.OpenUrlAction = OpenUrlAction;
var HttpHeader = /** @class */ (function () {
    function HttpHeader() {
        this._value = new Utils.StringWithSubstitutions();
    }
    HttpHeader.prototype.prepare = function (inputs) {
        this._value.substituteInputValues(inputs);
    };
    Object.defineProperty(HttpHeader.prototype, "value", {
        get: function () {
            return this._value.get();
        },
        set: function (newValue) {
            this._value.set(newValue);
        },
        enumerable: true,
        configurable: true
    });
    return HttpHeader;
}());
exports.HttpHeader = HttpHeader;
var HttpAction = /** @class */ (function (_super) {
    __extends(HttpAction, _super);
    function HttpAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._url = new Utils.StringWithSubstitutions();
        _this._body = new Utils.StringWithSubstitutions();
        _this._headers = [];
        return _this;
    }
    HttpAction.prototype.getJsonTypeName = function () {
        return "Action.Http";
    };
    HttpAction.prototype.validate = function () {
        var result = [];
        if (!this.url) {
            result = [{ error: Enums.ValidationError.PropertyCantBeNull, message: "An Action.Http must have its url property set." }];
        }
        if (this.headers.length > 0) {
            for (var i = 0; i < this.headers.length; i++) {
                if (!this.headers[i].name || !this.headers[i].value) {
                    result = result.concat([{ error: Enums.ValidationError.PropertyCantBeNull, message: "All headers of an Action.Http must have their name and value properties set." }]);
                    break;
                }
            }
        }
        return result;
    };
    HttpAction.prototype.prepare = function (inputs) {
        this._url.substituteInputValues(inputs);
        this._body.substituteInputValues(inputs);
        for (var i = 0; i < this._headers.length; i++) {
            this._headers[i].prepare(inputs);
        }
    };
    ;
    HttpAction.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.url = json["url"];
        this.method = json["method"];
        this.body = json["body"];
        if (json["headers"] != null) {
            var jsonHeaders = json["headers"];
            this._headers = [];
            for (var i = 0; i < jsonHeaders.length; i++) {
                var httpHeader = new HttpHeader();
                httpHeader.name = jsonHeaders[i]["name"];
                httpHeader.value = jsonHeaders[i]["value"];
                this.headers.push(httpHeader);
            }
        }
    };
    Object.defineProperty(HttpAction.prototype, "url", {
        get: function () {
            return this._url.get();
        },
        set: function (value) {
            this._url.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "body", {
        get: function () {
            return this._body.get();
        },
        set: function (value) {
            this._body.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: true,
        configurable: true
    });
    return HttpAction;
}(Action));
exports.HttpAction = HttpAction;
var ShowCardAction = /** @class */ (function (_super) {
    __extends(ShowCardAction, _super);
    function ShowCardAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card = new InlineAdaptiveCard();
        return _this;
    }
    ShowCardAction.prototype.setParent = function (value) {
        _super.prototype.setParent.call(this, value);
        invokeSetParent(this.card, value);
    };
    ShowCardAction.prototype.getJsonTypeName = function () {
        return "Action.ShowCard";
    };
    ShowCardAction.prototype.validate = function () {
        return this.card.validate();
    };
    ShowCardAction.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        this.card.parse(json["card"]);
    };
    ShowCardAction.prototype.getAllInputs = function () {
        return this.card.getAllInputs();
    };
    ShowCardAction.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            result = this.card.getActionById(id);
        }
        return result;
    };
    return ShowCardAction;
}(Action));
exports.ShowCardAction = ShowCardAction;
var ActionCollection = /** @class */ (function () {
    function ActionCollection(owner) {
        this._actionButtons = [];
        this._expandedAction = null;
        this._renderedActionCount = 0;
        this._statusCard = null;
        this._actionCard = null;
        this.items = [];
        this.onHideActionCardPane = null;
        this.onShowActionCardPane = null;
        this._owner = owner;
    }
    ActionCollection.prototype.showStatusCard = function (status) {
        invokeSetParent(status, this._owner);
        this._statusCard = status.render();
        this.refreshContainer();
    };
    ActionCollection.prototype.hideStatusCard = function () {
        this._statusCard = null;
        this.refreshContainer();
    };
    ActionCollection.prototype.refreshContainer = function () {
        this._actionCardContainer.innerHTML = "";
        if (this._actionCard === null && this._statusCard === null) {
            this._actionCardContainer.style.padding = "0px";
            this._actionCardContainer.style.marginTop = "0px";
            if (this.onHideActionCardPane) {
                this.onHideActionCardPane();
            }
            return;
        }
        if (this.onShowActionCardPane) {
            this.onShowActionCardPane(null);
        }
        this._actionCardContainer.style.marginTop = this._renderedActionCount > 0 ? this._owner.hostConfig.actions.showCard.inlineTopMargin + "px" : "0px";
        var padding = this._owner.hostConfig.paddingToSpacingDefinition(this._owner.getNonZeroPadding());
        if (this._actionCard !== null) {
            this._actionCard.style.paddingLeft = padding.left + "px";
            this._actionCard.style.paddingRight = padding.right + "px";
            this._actionCard.style.marginLeft = "-" + padding.left + "px";
            this._actionCard.style.marginRight = "-" + padding.right + "px";
            Utils.appendChild(this._actionCardContainer, this._actionCard);
        }
        if (this._statusCard !== null) {
            this._statusCard.style.paddingLeft = padding.left + "px";
            this._statusCard.style.paddingRight = padding.right + "px";
            this._statusCard.style.marginLeft = "-" + padding.left + "px";
            this._statusCard.style.marginRight = "-" + padding.right + "px";
            Utils.appendChild(this._actionCardContainer, this._statusCard);
        }
    };
    ActionCollection.prototype.hideActionCard = function () {
        if (this._expandedAction) {
            raiseInlineCardExpandedEvent(this._expandedAction, false);
        }
        this._expandedAction = null;
        this._actionCard = null;
        this.refreshContainer();
    };
    ActionCollection.prototype.showActionCard = function (action, suppressStyle) {
        if (suppressStyle === void 0) { suppressStyle = false; }
        if (action.card == null) {
            return;
        }
        action.card.suppressStyle = suppressStyle;
        var renderedCard = action.card.render();
        this._actionCard = renderedCard;
        this._expandedAction = action;
        this.refreshContainer();
        raiseInlineCardExpandedEvent(action, true);
    };
    ActionCollection.prototype.actionClicked = function (actionButton) {
        if (!(actionButton.action instanceof ShowCardAction)) {
            for (var i = 0; i < this._actionButtons.length; i++) {
                this._actionButtons[i].state = ActionButtonState.Normal;
            }
            this.hideStatusCard();
            this.hideActionCard();
            actionButton.action.execute();
        }
        else {
            this.hideStatusCard();
            if (this._owner.hostConfig.actions.showCard.actionMode === Enums.ShowCardActionMode.Popup) {
                actionButton.action.execute();
            }
            else if (actionButton.action === this._expandedAction) {
                for (var i = 0; i < this._actionButtons.length; i++) {
                    this._actionButtons[i].state = ActionButtonState.Normal;
                }
                this.hideActionCard();
            }
            else {
                for (var i = 0; i < this._actionButtons.length; i++) {
                    if (this._actionButtons[i] !== actionButton) {
                        this._actionButtons[i].state = ActionButtonState.Subdued;
                    }
                }
                actionButton.state = ActionButtonState.Expanded;
                this.showActionCard(actionButton.action);
            }
        }
    };
    ActionCollection.prototype.getActionById = function (id) {
        var result = null;
        for (var i = 0; i < this.items.length; i++) {
            result = this.items[i].getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    ActionCollection.prototype.validate = function () {
        var result = [];
        if (this._owner.hostConfig.actions.maxActions && this.items.length > this._owner.hostConfig.actions.maxActions) {
            result.push({
                error: Enums.ValidationError.TooManyActions,
                message: "A maximum of " + this._owner.hostConfig.actions.maxActions + " actions are allowed."
            });
        }
        if (this.items.length > 0 && !this._owner.hostConfig.supportsInteractivity) {
            result.push({
                error: Enums.ValidationError.InteractivityNotAllowed,
                message: "Interactivity is not allowed."
            });
        }
        for (var i = 0; i < this.items.length; i++) {
            if (!isActionAllowed(this.items[i], this._owner.getForbiddenActionTypes())) {
                result.push({
                    error: Enums.ValidationError.ActionTypeNotAllowed,
                    message: "Actions of type " + this.items[i].getJsonTypeName() + " are not allowe."
                });
            }
        }
        for (var i = 0; i < this.items.length; i++) {
            result = result.concat(this.items[i].validate());
        }
        return result;
    };
    ActionCollection.prototype.render = function (orientation) {
        var _this = this;
        if (!this._owner.hostConfig.supportsInteractivity) {
            return null;
        }
        var element = document.createElement("div");
        this._actionCardContainer = document.createElement("div");
        this._renderedActionCount = 0;
        var maxActions = this._owner.hostConfig.actions.maxActions ? Math.min(this._owner.hostConfig.actions.maxActions, this.items.length) : this.items.length;
        var forbiddenActionTypes = this._owner.getForbiddenActionTypes();
        if (AdaptiveCard.preExpandSingleShowCardAction && maxActions == 1 && this.items[0] instanceof ShowCardAction && isActionAllowed(this.items[i], forbiddenActionTypes)) {
            this.showActionCard(this.items[0], true);
            this._renderedActionCount = 1;
        }
        else {
            var buttonStrip = document.createElement("div");
            buttonStrip.style.display = "flex";
            if (orientation == Enums.Orientation.Horizontal) {
                buttonStrip.style.flexDirection = "row";
                if (this._owner.horizontalAlignment && this._owner.hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
                else {
                    switch (this._owner.hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
            }
            else {
                buttonStrip.style.flexDirection = "column";
                if (this._owner.horizontalAlignment && this._owner.hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
                else {
                    switch (this._owner.hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        case Enums.ActionAlignment.Stretch:
                            buttonStrip.style.alignItems = "stretch";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
            }
            for (var i = 0; i < this.items.length; i++) {
                if (isActionAllowed(this.items[i], forbiddenActionTypes)) {
                    var actionButton = new ActionButton(this.items[i]);
                    actionButton.element.style.overflow = "hidden";
                    actionButton.element.style.overflow = "table-cell";
                    actionButton.element.style.flex = this._owner.hostConfig.actions.actionAlignment === Enums.ActionAlignment.Stretch ? "0 1 100%" : "0 1 auto";
                    actionButton.text = this.items[i].title;
                    actionButton.onClick = function (ab) { _this.actionClicked(ab); };
                    this._actionButtons.push(actionButton);
                    buttonStrip.appendChild(actionButton.element);
                    this._renderedActionCount++;
                    if (this._renderedActionCount >= this._owner.hostConfig.actions.maxActions || i == this.items.length - 1) {
                        break;
                    }
                    else if (this._owner.hostConfig.actions.buttonSpacing > 0) {
                        var spacer = document.createElement("div");
                        if (orientation === Enums.Orientation.Horizontal) {
                            spacer.style.flex = "0 0 auto";
                            spacer.style.width = this._owner.hostConfig.actions.buttonSpacing + "px";
                        }
                        else {
                            spacer.style.height = this._owner.hostConfig.actions.buttonSpacing + "px";
                        }
                        Utils.appendChild(buttonStrip, spacer);
                    }
                }
            }
            var buttonStripContainer = document.createElement("div");
            buttonStripContainer.style.overflow = "hidden";
            buttonStripContainer.appendChild(buttonStrip);
            Utils.appendChild(element, buttonStripContainer);
        }
        Utils.appendChild(element, this._actionCardContainer);
        return this._renderedActionCount > 0 ? element : null;
    };
    ActionCollection.prototype.addAction = function (action) {
        if (!action.parent) {
            this.items.push(action);
            invokeSetParent(action, this._owner);
            invokeSetCollection(action, this);
        }
        else {
            throw new Error("The action already belongs to another element.");
        }
    };
    ActionCollection.prototype.clear = function () {
        this.items = [];
    };
    ActionCollection.prototype.getAllInputs = function () {
        var result = [];
        for (var i = 0; i < this.items.length; i++) {
            var action = this.items[i];
            result = result.concat(action.getAllInputs());
        }
        return result;
    };
    return ActionCollection;
}());
var ActionSet = /** @class */ (function (_super) {
    __extends(ActionSet, _super);
    function ActionSet() {
        var _this = _super.call(this) || this;
        _this.orientation = null;
        _this._actionCollection = new ActionCollection(_this);
        _this._actionCollection.onHideActionCardPane = function () { _this.showBottomSpacer(_this); };
        _this._actionCollection.onShowActionCardPane = function (action) { _this.hideBottomSpacer(_this); };
        return _this;
    }
    ActionSet.prototype.internalRender = function () {
        return this._actionCollection.render(this.orientation ? this.orientation : this.hostConfig.actions.actionsOrientation);
    };
    ActionSet.prototype.getJsonTypeName = function () {
        return "ActionSet";
    };
    ActionSet.prototype.validate = function () {
        return this._actionCollection.validate();
    };
    ActionSet.prototype.parse = function (json, itemsCollectionPropertyName) {
        if (itemsCollectionPropertyName === void 0) { itemsCollectionPropertyName = "items"; }
        _super.prototype.parse.call(this, json);
        var jsonOrientation = json["orientation"];
        if (jsonOrientation) {
            this.orientation = Utils.getEnumValueOrDefault(Enums.Orientation, jsonOrientation, Enums.Orientation.Horizontal);
        }
        if (json["actions"] != undefined) {
            var jsonActions = json["actions"];
            for (var i = 0; i < jsonActions.length; i++) {
                this.addAction(createActionInstance(jsonActions[i]));
            }
        }
    };
    ActionSet.prototype.addAction = function (action) {
        if (action != null) {
            this._actionCollection.addAction(action);
        }
    };
    ActionSet.prototype.getAllInputs = function () {
        return this._actionCollection.getAllInputs();
    };
    ActionSet.prototype.renderSpeech = function () {
        // TODO: What's the right thing to do here?
        return "";
    };
    Object.defineProperty(ActionSet.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return ActionSet;
}(CardElement));
exports.ActionSet = ActionSet;
var BackgroundImage = /** @class */ (function () {
    function BackgroundImage() {
        this.mode = Enums.BackgroundImageMode.Stretch;
        this.horizontalAlignment = Enums.HorizontalAlignment.Left;
        this.verticalAlignment = Enums.VerticalAlignment.Top;
    }
    BackgroundImage.prototype.parse = function (json) {
        this.url = json["url"];
        this.mode = Utils.getEnumValueOrDefault(Enums.BackgroundImageMode, json["mode"], this.mode);
        this.horizontalAlignment = Utils.getEnumValueOrDefault(Enums.HorizontalAlignment, json["horizontalAlignment"], this.horizontalAlignment);
        this.verticalAlignment = Utils.getEnumValueOrDefault(Enums.VerticalAlignment, json["verticalAlignment"], this.verticalAlignment);
    };
    BackgroundImage.prototype.apply = function (element) {
        if (this.url) {
            element.style.backgroundImage = "url('" + this.url + "')";
            switch (this.mode) {
                case Enums.BackgroundImageMode.Repeat:
                    element.style.backgroundRepeat = "repeat";
                    break;
                case Enums.BackgroundImageMode.RepeatHorizontally:
                    element.style.backgroundRepeat = "repeat-x";
                    break;
                case Enums.BackgroundImageMode.RepeatVertically:
                    element.style.backgroundRepeat = "repeat-y";
                    break;
                case Enums.BackgroundImageMode.Stretch:
                default:
                    element.style.backgroundRepeat = "no-repeat";
                    element.style.backgroundSize = "cover";
                    break;
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.backgroundPositionX = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.backgroundPositionX = "right";
                    break;
            }
            switch (this.verticalAlignment) {
                case Enums.VerticalAlignment.Center:
                    element.style.backgroundPositionY = "center";
                    break;
                case Enums.VerticalAlignment.Bottom:
                    element.style.backgroundPositionY = "bottom";
                    break;
            }
        }
    };
    return BackgroundImage;
}());
exports.BackgroundImage = BackgroundImage;
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = [];
        _this._style = null;
        _this.bleed = false;
        _this.verticalContentAlignment = Enums.VerticalAlignment.Top;
        return _this;
    }
    Container.prototype.isElementAllowed = function (element, forbiddenElementTypes) {
        if (!this.hostConfig.supportsInteractivity && element.isInteractive) {
            return false;
        }
        if (forbiddenElementTypes) {
            for (var i = 0; i < forbiddenElementTypes.length; i++) {
                if (element.getJsonTypeName() === forbiddenElementTypes[i]) {
                    return false;
                }
            }
        }
        return true;
    };
    Object.defineProperty(Container.prototype, "hasExplicitStyle", {
        get: function () {
            return this._style != null;
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.showBottomSpacer = function (requestingElement) {
        if ((!requestingElement || this.isLastElement(requestingElement))) {
            this.applyPadding();
            _super.prototype.showBottomSpacer.call(this, requestingElement);
        }
    };
    Container.prototype.hideBottomSpacer = function (requestingElement) {
        if ((!requestingElement || this.isLastElement(requestingElement))) {
            if (this.renderedElement) {
                this.renderedElement.style.paddingBottom = "0px";
            }
            _super.prototype.hideBottomSpacer.call(this, requestingElement);
        }
    };
    Container.prototype.applyPadding = function () {
        if (this.hasBackground) {
            var physicalMargin = new HostConfig.SpacingDefinition();
            var physicalPadding = new HostConfig.SpacingDefinition();
            var useAutoPadding = (this.parent ? this.parent.canContentBleed() : false) && this.bleed;
            if (useAutoPadding) {
                var effectivePadding = this.getNonZeroPadding();
                var effectiveMargin = new HostConfig.PaddingDefinition({
                    top: effectivePadding.top,
                    right: effectivePadding.right,
                    bottom: effectivePadding.bottom,
                    left: effectivePadding.left,
                });
                if (!this.isAtTheVeryTop()) {
                    effectivePadding.top = Enums.Padding.None;
                    effectiveMargin.top = Enums.Padding.None;
                }
                if (!this.isAtTheVeryBottom()) {
                    effectivePadding.bottom = Enums.Padding.None;
                    effectiveMargin.bottom = Enums.Padding.None;
                }
                if (!this.isAtTheVeryLeft()) {
                    effectivePadding.left = Enums.Padding.None;
                    effectiveMargin.left = Enums.Padding.None;
                }
                if (!this.isAtTheVeryRight()) {
                    effectivePadding.right = Enums.Padding.None;
                    effectiveMargin.right = Enums.Padding.None;
                }
                if (effectivePadding.left != Enums.Padding.None || effectivePadding.right != Enums.Padding.None) {
                    if (effectivePadding.left == Enums.Padding.None) {
                        effectivePadding.left = effectivePadding.right;
                    }
                    if (effectivePadding.right == Enums.Padding.None) {
                        effectivePadding.right = effectivePadding.left;
                    }
                }
                if (effectivePadding.top != Enums.Padding.None || effectivePadding.bottom != Enums.Padding.None) {
                    if (effectivePadding.top == Enums.Padding.None) {
                        effectivePadding.top = effectivePadding.bottom;
                    }
                    if (effectivePadding.bottom == Enums.Padding.None) {
                        effectivePadding.bottom = effectivePadding.top;
                    }
                }
                if (effectivePadding.top != Enums.Padding.None
                    || effectivePadding.right != Enums.Padding.None
                    || effectivePadding.bottom != Enums.Padding.None
                    || effectivePadding.left != Enums.Padding.None) {
                    if (effectivePadding.top == Enums.Padding.None) {
                        effectivePadding.top = Enums.Padding.Default;
                    }
                    if (effectivePadding.right == Enums.Padding.None) {
                        effectivePadding.right = Enums.Padding.Default;
                    }
                    if (effectivePadding.bottom == Enums.Padding.None) {
                        effectivePadding = Object.assign({}, effectivePadding, {
                            bottom: Enums.Padding.Default
                        });
                    }
                    if (effectivePadding.left == Enums.Padding.None) {
                        effectivePadding = Object.assign({}, effectivePadding, {
                            left: Enums.Padding.Default
                        });
                    }
                }
                if (effectivePadding.top == Enums.Padding.None &&
                    effectivePadding.right == Enums.Padding.None &&
                    effectivePadding.bottom == Enums.Padding.None &&
                    effectivePadding.left == Enums.Padding.None) {
                    effectivePadding = new HostConfig.PaddingDefinition({
                        top: Enums.Padding.Default,
                        right: Enums.Padding.Default,
                        bottom: Enums.Padding.Default,
                        left: Enums.Padding.Default,
                    });
                }
                physicalMargin = this.hostConfig.paddingToSpacingDefinition(effectiveMargin);
                physicalPadding = this.hostConfig.paddingToSpacingDefinition(effectivePadding);
            }
            else {
                physicalPadding = this.hostConfig.paddingToSpacingDefinition(new HostConfig.PaddingDefinition({
                    top: Enums.Padding.Default,
                    right: Enums.Padding.Default,
                    bottom: Enums.Padding.Default,
                    left: Enums.Padding.Default
                }));
            }
            if (this.renderedElement) {
                this.renderedElement.style.marginTop = "-" + physicalMargin.top + "px";
                this.renderedElement.style.marginRight = "-" + physicalMargin.right + "px";
                this.renderedElement.style.marginBottom = "-" + physicalMargin.bottom + "px";
                this.renderedElement.style.marginLeft = "-" + physicalMargin.left + "px";
                this.renderedElement.style.paddingTop = physicalPadding.top + "px";
                this.renderedElement.style.paddingRight = physicalPadding.right + "px";
                this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
                this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
            }
            if (this.separatorElement) {
                if (this.separatorOrientation == Enums.Orientation.Horizontal) {
                    this.separatorElement.style.marginLeft = "-" + physicalMargin.left + "px";
                    this.separatorElement.style.marginRight = "-" + physicalMargin.right + "px";
                }
                else {
                    this.separatorElement.style.marginTop = "-" + physicalMargin.top + "px";
                    this.separatorElement.style.marginBottom = "-" + physicalMargin.bottom + "px";
                }
            }
        }
    };
    Container.prototype.internalRender = function () {
        var _this = this;
        var element = document.createElement("div");
        element.className = "ac-container";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        switch (this.verticalContentAlignment) {
            case Enums.VerticalAlignment.Center:
                element.style.justifyContent = "center";
                break;
            case Enums.VerticalAlignment.Bottom:
                element.style.justifyContent = "flex-end";
                break;
            default:
                element.style.justifyContent = "flex-start";
                break;
        }
        if (this.hasBackground) {
            if (this.backgroundImage) {
                this.backgroundImage.apply(element);
            }
            var styleDefinition = this.hostConfig.getContainerStyleDefinition(this.style);
            if (!Utils.isNullOrEmpty(styleDefinition.backgroundColor)) {
                element.style.backgroundColor = Utils.stringToCssColor(styleDefinition.backgroundColor);
            }
        }
        if (this.selectAction && this.hostConfig.supportsInteractivity) {
            element.classList.add("ac-selectable");
            element.tabIndex = 0;
            element.setAttribute("role", "button");
            element.setAttribute("aria-label", this.selectAction.title);
            element.onclick = function (e) {
                if (_this.selectAction != null) {
                    _this.selectAction.execute();
                    e.cancelBubble = true;
                }
            };
            element.onkeypress = function (e) {
                if (_this.selectAction != null) {
                    // Enter or space pressed
                    if (e.keyCode == 13 || e.keyCode == 32) {
                        _this.selectAction.execute();
                    }
                }
            };
        }
        if (this._items.length > 0) {
            var renderedElementCount = 0;
            for (var i = 0; i < this._items.length; i++) {
                var renderedElement = this.isElementAllowed(this._items[i], this.getForbiddenElementTypes()) ? this._items[i].render() : null;
                if (renderedElement) {
                    if (renderedElementCount > 0 && this._items[i].separatorElement) {
                        this._items[i].separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, this._items[i].separatorElement);
                    }
                    Utils.appendChild(element, renderedElement);
                    renderedElementCount++;
                }
            }
        }
        return element;
    };
    Object.defineProperty(Container.prototype, "hasBackground", {
        get: function () {
            var parentContainer = this.getParentContainer();
            return this.backgroundImage != undefined || (this.hasExplicitStyle && (parentContainer ? parentContainer.style != this.style : false));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "defaultStyle", {
        get: function () {
            return Enums.ContainerStyle.Default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "allowCustomStyle", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "style", {
        get: function () {
            if (this.allowCustomStyle) {
                return this._style ? this._style : this.defaultStyle;
            }
            else {
                return this.defaultStyle;
            }
        },
        set: function (value) {
            this._style = value;
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.getJsonTypeName = function () {
        return "Container";
    };
    Container.prototype.isFirstElement = function (element) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].isVisible) {
                return this._items[i] == element;
            }
        }
        return false;
    };
    Container.prototype.isLastElement = function (element) {
        for (var i = this._items.length - 1; i >= 0; i--) {
            if (this._items[i].isVisible) {
                return this._items[i] == element;
            }
        }
        return false;
    };
    Container.prototype.validate = function () {
        var result = [];
        for (var i = 0; i < this._items.length; i++) {
            if (!this.hostConfig.supportsInteractivity && this._items[i].isInteractive) {
                result.push({
                    error: Enums.ValidationError.InteractivityNotAllowed,
                    message: "Interactivity is not allowed."
                });
            }
            if (!this.isElementAllowed(this._items[i], this.getForbiddenElementTypes())) {
                result.push({
                    error: Enums.ValidationError.InteractivityNotAllowed,
                    message: "Elements of type " + this._items[i].getJsonTypeName() + " are not allowed in this container."
                });
            }
            result = result.concat(this._items[i].validate());
        }
        return result;
    };
    Container.prototype.parse = function (json, itemsCollectionPropertyName) {
        if (itemsCollectionPropertyName === void 0) { itemsCollectionPropertyName = "items"; }
        _super.prototype.parse.call(this, json);
        var jsonBackgroundImage = json["backgroundImage"];
        if (jsonBackgroundImage) {
            this.backgroundImage = new BackgroundImage();
            if (typeof jsonBackgroundImage === "string") {
                this.backgroundImage.url = jsonBackgroundImage;
                this.backgroundImage.mode = Enums.BackgroundImageMode.Stretch;
            }
            else if (typeof jsonBackgroundImage === "object") {
                this.backgroundImage = new BackgroundImage();
                this.backgroundImage.parse(json["backgroundImage"]);
            }
        }
        this.verticalContentAlignment = Utils.getEnumValueOrDefault(Enums.VerticalAlignment, json["verticalContentAlignment"], this.verticalContentAlignment);
        this._style = Utils.getEnumValueOrDefault(Enums.ContainerStyle, json["style"], null);
        if (json[itemsCollectionPropertyName] != null) {
            var items = json[itemsCollectionPropertyName];
            this.clear();
            for (var i = 0; i < items.length; i++) {
                var elementType = items[i]["type"];
                var element = AdaptiveCard.elementTypeRegistry.createInstance(elementType);
                if (!element) {
                    raiseParseError({
                        error: Enums.ValidationError.UnknownElementType,
                        message: "Unknown element type: " + elementType
                    });
                }
                else {
                    this.addItem(element);
                    element.parse(items[i]);
                }
            }
        }
        var selectActionJson = json["selectAction"];
        if (selectActionJson != undefined) {
            this.selectAction = createActionInstance(selectActionJson);
        }
    };
    Container.prototype.addItem = function (item) {
        if (!item.parent) {
            if (item.isStandalone) {
                this._items.push(item);
                invokeSetParent(item, this);
            }
            else {
                throw new Error("Elements of type " + item.getJsonTypeName() + " cannot be used as standalone elements.");
            }
        }
        else {
            throw new Error("The element already belongs to another container.");
        }
    };
    Container.prototype.clear = function () {
        this._items = [];
    };
    Container.prototype.canContentBleed = function () {
        return this.hasBackground ? false : _super.prototype.canContentBleed.call(this);
    };
    Container.prototype.getAllInputs = function () {
        var result = [];
        for (var i = 0; i < this._items.length; i++) {
            var item = this._items[i];
            result = result.concat(item.getAllInputs());
        }
        return result;
    };
    Container.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            for (var i = 0; i < this._items.length; i++) {
                result = this._items[i].getElementById(id);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    Container.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            if (this.selectAction) {
                result = this.selectAction.getActionById(id);
            }
            if (!result) {
                for (var i = 0; i < this._items.length; i++) {
                    result = this._items[i].getActionById(id);
                    if (result) {
                        break;
                    }
                }
            }
        }
        return result;
    };
    Container.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak;
        }
        // render each item
        var speak = null;
        if (this._items.length > 0) {
            speak = '';
            for (var i = 0; i < this._items.length; i++) {
                var result = this._items[i].renderSpeech();
                if (result) {
                    speak += result;
                }
            }
        }
        return speak;
    };
    Container.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        this.applyPadding();
        if (processChildren) {
            for (var i = 0; i < this._items.length; i++) {
                this._items[i].updateLayout();
            }
        }
    };
    Object.defineProperty(Container.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
            if (this._selectAction) {
                invokeSetParent(this._selectAction, this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Container;
}(CardElement));
exports.Container = Container;
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._computedWeight = 0;
        _this.width = "auto";
        _this.pixelWidth = 0;
        return _this;
    }
    Column.prototype.adjustRenderedElementSize = function (renderedElement) {
        renderedElement.style.minWidth = "0";
        if (this.pixelWidth > 0) {
            renderedElement.style.flex = "0 0 " + this.pixelWidth + "px";
        }
        else {
            if (typeof this.width === "number") {
                renderedElement.style.flex = "1 1 " + (this._computedWeight > 0 ? this._computedWeight : this.width) + "%";
            }
            else if (this.width === "auto") {
                renderedElement.style.flex = "0 1 auto";
            }
            else {
                renderedElement.style.flex = "1 1 50px";
            }
        }
    };
    Object.defineProperty(Column.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Vertical;
        },
        enumerable: true,
        configurable: true
    });
    Column.prototype.getJsonTypeName = function () {
        return "Column";
    };
    Column.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        var jsonWidth = json["width"];
        if (jsonWidth === undefined) {
            jsonWidth = json["size"];
            if (jsonWidth !== undefined) {
                raiseParseError({
                    error: Enums.ValidationError.Deprecated,
                    message: "The \"Column.size\" property is deprecated and will be removed. Use the \"Column.width\" property instead."
                });
            }
        }
        var invalidWidth = false;
        if (typeof jsonWidth === "number") {
            if (jsonWidth <= 0) {
                invalidWidth = true;
            }
        }
        else if (typeof jsonWidth === "string") {
            if (jsonWidth != "auto" && jsonWidth != "stretch") {
                var sizeAsNumber = parseInt(jsonWidth);
                if (!isNaN(sizeAsNumber)) {
                    jsonWidth = sizeAsNumber;
                }
                else {
                    invalidWidth = true;
                }
            }
        }
        else if (jsonWidth) {
            invalidWidth = true;
        }
        if (invalidWidth) {
            raiseParseError({
                error: Enums.ValidationError.InvalidPropertyValue,
                message: "Invalid column width: " + jsonWidth
            });
        }
        else {
            this.width = jsonWidth;
        }
    };
    Object.defineProperty(Column.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return Column;
}(Container));
exports.Column = Column;
var ColumnSet = /** @class */ (function (_super) {
    __extends(ColumnSet, _super);
    function ColumnSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columns = [];
        return _this;
    }
    ColumnSet.prototype.internalRender = function () {
        var _this = this;
        if (this._columns.length > 0) {
            var element = document.createElement("div");
            element.className = "ac-columnSet";
            element.style.display = "flex";
            if (this.selectAction && this.hostConfig.supportsInteractivity) {
                element.classList.add("ac-selectable");
                element.onclick = function (e) {
                    _this.selectAction.execute();
                    e.cancelBubble = true;
                };
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            var totalWeight = 0;
            for (var i = 0; i < this._columns.length; i++) {
                if (typeof this._columns[i].width === "number") {
                    totalWeight += this._columns[i].width;
                }
            }
            var renderedColumnCount = 0;
            for (var i = 0; i < this._columns.length; i++) {
                if (typeof this._columns[i].width === "number" && totalWeight > 0) {
                    var computedWeight = 100 / totalWeight * this._columns[i].width;
                    // Best way to emulate "internal" access I know of
                    this._columns[i]["_computedWeight"] = computedWeight;
                }
                var renderedColumn = this._columns[i].render();
                if (renderedColumn) {
                    if (renderedColumnCount > 0 && this._columns[i].separatorElement) {
                        this._columns[i].separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, this._columns[i].separatorElement);
                    }
                    Utils.appendChild(element, renderedColumn);
                    renderedColumnCount++;
                }
            }
            return renderedColumnCount > 0 ? element : null;
        }
        else {
            return null;
        }
    };
    ColumnSet.prototype.getJsonTypeName = function () {
        return "ColumnSet";
    };
    ColumnSet.prototype.parse = function (json) {
        _super.prototype.parse.call(this, json);
        var selectActionJson = json["selectAction"];
        if (selectActionJson != undefined) {
            this.selectAction = createActionInstance(selectActionJson);
        }
        if (json["columns"] != null) {
            var jsonColumns = json["columns"];
            this._columns = [];
            for (var i = 0; i < jsonColumns.length; i++) {
                var column = new Column();
                column.parse(jsonColumns[i]);
                this.addColumn(column);
            }
        }
    };
    ColumnSet.prototype.validate = function () {
        var result = [];
        var weightedColumns = 0;
        var stretchedColumns = 0;
        for (var i = 0; i < this._columns.length; i++) {
            if (typeof this._columns[i].width === "number") {
                weightedColumns++;
            }
            else if (this._columns[i].width === "stretch") {
                stretchedColumns++;
            }
            result = result.concat(this._columns[i].validate());
        }
        if (weightedColumns > 0 && stretchedColumns > 0) {
            result.push({
                error: Enums.ValidationError.Hint,
                message: "It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space."
            });
        }
        return result;
    };
    ColumnSet.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        if (processChildren) {
            for (var i = 0; i < this._columns.length; i++) {
                this._columns[i].updateLayout();
            }
        }
    };
    ColumnSet.prototype.addColumn = function (column) {
        if (!column.parent) {
            this._columns.push(column);
            invokeSetParent(column, this);
        }
        else {
            throw new Error("This column already belongs to another ColumnSet.");
        }
    };
    ColumnSet.prototype.isLeftMostElement = function (element) {
        return this._columns.indexOf(element) == 0;
    };
    ColumnSet.prototype.isRightMostElement = function (element) {
        return this._columns.indexOf(element) == this._columns.length - 1;
    };
    ColumnSet.prototype.getAllInputs = function () {
        var result = [];
        for (var i = 0; i < this._columns.length; i++) {
            result = result.concat(this._columns[i].getAllInputs());
        }
        return result;
    };
    ColumnSet.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            for (var i = 0; i < this._columns.length; i++) {
                result = this._columns[i].getElementById(id);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    ColumnSet.prototype.getActionById = function (id) {
        var result = null;
        for (var i = 0; i < this._columns.length; i++) {
            result = this._columns[i].getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    ColumnSet.prototype.renderSpeech = function () {
        if (this.speak != null) {
            return this.speak;
        }
        // render each item
        var speak = '';
        if (this._columns.length > 0) {
            for (var i = 0; i < this._columns.length; i++) {
                speak += this._columns[i].renderSpeech();
            }
        }
        return speak;
    };
    Object.defineProperty(ColumnSet.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
            if (this._selectAction) {
                invokeSetParent(this._selectAction, this);
            }
        },
        enumerable: true,
        configurable: true
    });
    return ColumnSet;
}(CardElement));
exports.ColumnSet = ColumnSet;
var Version = /** @class */ (function () {
    function Version(major, minor) {
        if (major === void 0) { major = 1; }
        if (minor === void 0) { minor = 1; }
        this._isValid = true;
        this._major = major;
        this._minor = minor;
    }
    Version.parse = function (versionString) {
        if (!versionString) {
            return null;
        }
        var result = new Version();
        result._versionString = versionString;
        var regEx = /(\d+).(\d+)/gi;
        var matches = regEx.exec(versionString);
        if (matches != null && matches.length == 3) {
            result._major = parseInt(matches[1]);
            result._minor = parseInt(matches[2]);
        }
        else {
            result._isValid = false;
        }
        return result;
    };
    Version.prototype.toString = function () {
        return !this._isValid ? this._versionString : this._major + "." + this._minor;
    };
    Object.defineProperty(Version.prototype, "major", {
        get: function () {
            return this._major;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        get: function () {
            return this._minor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    return Version;
}());
exports.Version = Version;
function raiseAnchorClickedEvent(element, anchor) {
    var card = element.getRootElement();
    var onAnchorClickedHandler = (card && card.onAnchorClicked) ? card.onAnchorClicked : AdaptiveCard.onAnchorClicked;
    return onAnchorClickedHandler != null ? onAnchorClickedHandler(anchor) : false;
}
function raiseExecuteActionEvent(action) {
    var card = action.parent.getRootElement();
    var onExecuteActionHandler = (card && card.onExecuteAction) ? card.onExecuteAction : AdaptiveCard.onExecuteAction;
    if (onExecuteActionHandler) {
        action.prepare(action.parent.getRootElement().getAllInputs());
        onExecuteActionHandler(action);
    }
}
function raiseInlineCardExpandedEvent(action, isExpanded) {
    var card = action.parent.getRootElement();
    var onInlineCardExpandedHandler = (card && card.onInlineCardExpanded) ? card.onInlineCardExpanded : AdaptiveCard.onInlineCardExpanded;
    if (onInlineCardExpandedHandler) {
        onInlineCardExpandedHandler(action, isExpanded);
    }
}
function raiseElementVisibilityChangedEvent(element) {
    element.getRootElement().updateLayout();
    var card = element.getRootElement();
    var onElementVisibilityChangedHandler = (card && card.onElementVisibilityChanged) ? card.onElementVisibilityChanged : AdaptiveCard.onElementVisibilityChanged;
    if (onElementVisibilityChangedHandler != null) {
        onElementVisibilityChangedHandler(element);
    }
}
function raiseParseElementEvent(element, json) {
    var card = element.getRootElement();
    var onParseElementHandler = (card && card.onParseElement) ? card.onParseElement : AdaptiveCard.onParseElement;
    if (onParseElementHandler != null) {
        onParseElementHandler(element, json);
    }
}
function raiseParseError(error) {
    if (AdaptiveCard.onParseError != null) {
        AdaptiveCard.onParseError(error);
    }
}
var ContainerWithActions = /** @class */ (function (_super) {
    __extends(ContainerWithActions, _super);
    function ContainerWithActions() {
        var _this = _super.call(this) || this;
        _this._actionCollection = new ActionCollection(_this);
        _this._actionCollection.onHideActionCardPane = function () { _this.showBottomSpacer(null); };
        _this._actionCollection.onShowActionCardPane = function (action) { _this.hideBottomSpacer(null); };
        return _this;
    }
    ContainerWithActions.prototype.internalRender = function () {
        var element = _super.prototype.internalRender.call(this);
        var renderedActions = this._actionCollection.render(this.hostConfig.actions.actionsOrientation);
        if (renderedActions) {
            Utils.appendChild(element, Utils.renderSeparation({
                spacing: this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing),
                lineThickness: null,
                lineColor: null
            }, Enums.Orientation.Horizontal));
            Utils.appendChild(element, renderedActions);
        }
        return element.children.length > 0 ? element : null;
    };
    ContainerWithActions.prototype.getActionById = function (id) {
        var result = this._actionCollection.getActionById(id);
        return result ? result : _super.prototype.getActionById.call(this, id);
    };
    ContainerWithActions.prototype.parse = function (json, itemsCollectionPropertyName) {
        if (itemsCollectionPropertyName === void 0) { itemsCollectionPropertyName = "items"; }
        _super.prototype.parse.call(this, json, itemsCollectionPropertyName);
        if (json["actions"] != undefined) {
            var jsonActions = json["actions"];
            for (var i = 0; i < jsonActions.length; i++) {
                var action = createActionInstance(jsonActions[i]);
                if (action != null) {
                    this.addAction(action);
                }
            }
        }
    };
    ContainerWithActions.prototype.validate = function () {
        var result = _super.prototype.validate.call(this);
        if (this._actionCollection) {
            result = result.concat(this._actionCollection.validate());
        }
        return result;
    };
    ContainerWithActions.prototype.isLastElement = function (element) {
        return _super.prototype.isLastElement.call(this, element) && this._actionCollection.items.length == 0;
    };
    ContainerWithActions.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ContainerWithActions.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._actionCollection.clear();
    };
    ContainerWithActions.prototype.getAllInputs = function () {
        return _super.prototype.getAllInputs.call(this).concat(this._actionCollection.getAllInputs());
    };
    Object.defineProperty(ContainerWithActions.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ContainerWithActions;
}(Container));
exports.ContainerWithActions = ContainerWithActions;
var TypeRegistry = /** @class */ (function () {
    function TypeRegistry() {
        this._items = [];
        this.reset();
    }
    TypeRegistry.prototype.findTypeRegistration = function (typeName) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].typeName === typeName) {
                return this._items[i];
            }
        }
        return null;
    };
    TypeRegistry.prototype.clear = function () {
        this._items = [];
    };
    TypeRegistry.prototype.registerType = function (typeName, createInstance) {
        var registrationInfo = this.findTypeRegistration(typeName);
        if (registrationInfo != null) {
            registrationInfo.createInstance = createInstance;
        }
        else {
            registrationInfo = {
                typeName: typeName,
                createInstance: createInstance
            };
            this._items.push(registrationInfo);
        }
    };
    TypeRegistry.prototype.unregisterType = function (typeName) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].typeName === typeName) {
                this._items.splice(i, 1);
                return;
            }
        }
    };
    TypeRegistry.prototype.createInstance = function (typeName) {
        var registrationInfo = this.findTypeRegistration(typeName);
        return registrationInfo ? registrationInfo.createInstance() : null;
    };
    return TypeRegistry;
}());
exports.TypeRegistry = TypeRegistry;
var ElementTypeRegistry = /** @class */ (function (_super) {
    __extends(ElementTypeRegistry, _super);
    function ElementTypeRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementTypeRegistry.prototype.reset = function () {
        this.clear();
        this.registerType("Container", function () { return new Container(); });
        this.registerType("TextBlock", function () { return new TextBlock(); });
        this.registerType("Image", function () { return new Image(); });
        this.registerType("ImageSet", function () { return new ImageSet(); });
        this.registerType("FactSet", function () { return new FactSet(); });
        this.registerType("ColumnSet", function () { return new ColumnSet(); });
        this.registerType("Input.Text", function () { return new TextInput(); });
        this.registerType("Input.Date", function () { return new DateInput(); });
        this.registerType("Input.Time", function () { return new TimeInput(); });
        this.registerType("Input.Number", function () { return new NumberInput(); });
        this.registerType("Input.ChoiceSet", function () { return new ChoiceSetInput(); });
        this.registerType("Input.Toggle", function () { return new ToggleInput(); });
    };
    return ElementTypeRegistry;
}(TypeRegistry));
exports.ElementTypeRegistry = ElementTypeRegistry;
var ActionTypeRegistry = /** @class */ (function (_super) {
    __extends(ActionTypeRegistry, _super);
    function ActionTypeRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionTypeRegistry.prototype.reset = function () {
        this.clear();
        this.registerType("Action.OpenUrl", function () { return new OpenUrlAction(); });
        this.registerType("Action.Submit", function () { return new SubmitAction(); });
        this.registerType("Action.ShowCard", function () { return new ShowCardAction(); });
    };
    return ActionTypeRegistry;
}(TypeRegistry));
exports.ActionTypeRegistry = ActionTypeRegistry;
var AdaptiveCard = /** @class */ (function (_super) {
    __extends(AdaptiveCard, _super);
    function AdaptiveCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onAnchorClicked = null;
        _this.onExecuteAction = null;
        _this.onElementVisibilityChanged = null;
        _this.onInlineCardExpanded = null;
        _this.onParseElement = null;
        _this.version = new Version(1, 0);
        _this.type = "AdaptiveCard";
        return _this;
    }
    AdaptiveCard.prototype.isVersionSupported = function () {
        if (this.bypassVersionCheck) {
            return true;
        }
        else {
            var unsupportedVersion = !this.version ||
                (AdaptiveCard.currentVersion.major < this.version.major) ||
                (AdaptiveCard.currentVersion.major == this.version.major && AdaptiveCard.currentVersion.minor < this.version.minor);
            return !unsupportedVersion;
        }
    };
    AdaptiveCard.prototype.showBottomSpacer = function (requestingElement) {
        if ((!requestingElement || this.isLastElement(requestingElement))) {
            this.applyPadding();
            // Do not walk up the tree from an AdaptiveCard instance
        }
    };
    AdaptiveCard.prototype.hideBottomSpacer = function (requestingElement) {
        if ((!requestingElement || this.isLastElement(requestingElement))) {
            if (this.renderedElement) {
                this.renderedElement.style.paddingBottom = "0px";
            }
            // Do not walk up the tree from an AdaptiveCard instance
        }
    };
    AdaptiveCard.prototype.applyPadding = function () {
        var effectivePadding = this.hostConfig.paddingToSpacingDefinition(this.internalPadding);
        this.renderedElement.style.paddingTop = effectivePadding.top + "px";
        this.renderedElement.style.paddingRight = effectivePadding.right + "px";
        this.renderedElement.style.paddingBottom = effectivePadding.bottom + "px";
        this.renderedElement.style.paddingLeft = effectivePadding.left + "px";
    };
    Object.defineProperty(AdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "defaultPadding", {
        get: function () {
            return new HostConfig.PaddingDefinition({
                top: Enums.Padding.Default,
                right: Enums.Padding.Default,
                bottom: Enums.Padding.Default,
                left: Enums.Padding.Default
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "allowCustomPadding", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "allowCustomStyle", {
        get: function () {
            return this.hostConfig.adaptiveCard && this.hostConfig.adaptiveCard.allowCustomStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "hasBackground", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.prototype.getJsonTypeName = function () {
        return "AdaptiveCard";
    };
    AdaptiveCard.prototype.validate = function () {
        var result = [];
        if (this._cardTypeName != "AdaptiveCard") {
            result.push({
                error: Enums.ValidationError.MissingCardType,
                message: "Invalid or missing card type. Make sure the card's type property is set to \"AdaptiveCard\"."
            });
        }
        if (!this.bypassVersionCheck && (!this.version || !this.version.isValid)) {
            result.push({
                error: Enums.ValidationError.PropertyCantBeNull,
                message: !this.version ? "The version property must be specified." : "Invalid version: " + this.version
            });
        }
        else if (!this.isVersionSupported()) {
            result.push({
                error: Enums.ValidationError.UnsupportedCardVersion,
                message: "The specified card version (" + this.version + ") is not supported. The maximum supported card version is " + AdaptiveCard.currentVersion
            });
        }
        return result.concat(_super.prototype.validate.call(this));
    };
    AdaptiveCard.prototype.parse = function (json) {
        this._cardTypeName = json["type"];
        this.version = Version.parse(json["version"]);
        this.fallbackText = json["fallbackText"];
        _super.prototype.parse.call(this, json, "body");
    };
    AdaptiveCard.prototype.render = function (target) {
        var renderedCard;
        if (!this.isVersionSupported()) {
            renderedCard = document.createElement("div");
            renderedCard.innerHTML = this.fallbackText ? this.fallbackText : "The specified card version is not supported.";
        }
        else {
            renderedCard = _super.prototype.render.call(this);
            if (renderedCard) {
                renderedCard.tabIndex = 0;
                if (!Utils.isNullOrEmpty(this.speak)) {
                    renderedCard.setAttribute("aria-label", this.speak);
                }
            }
        }
        if (target) {
            target.appendChild(renderedCard);
            this.updateLayout();
        }
        return renderedCard;
    };
    AdaptiveCard.prototype.canContentBleed = function () {
        return true;
    };
    AdaptiveCard.currentVersion = new Version(1, 0);
    AdaptiveCard.preExpandSingleShowCardAction = false;
    AdaptiveCard.useAdvancedTextBlockTruncation = true;
    AdaptiveCard.elementTypeRegistry = new ElementTypeRegistry();
    AdaptiveCard.actionTypeRegistry = new ActionTypeRegistry();
    AdaptiveCard.onAnchorClicked = null;
    AdaptiveCard.onExecuteAction = null;
    AdaptiveCard.onElementVisibilityChanged = null;
    AdaptiveCard.onInlineCardExpanded = null;
    AdaptiveCard.onParseElement = null;
    AdaptiveCard.onParseError = null;
    AdaptiveCard.processMarkdown = function (text) {
        // Check for markdownit
        if (window["markdownit"]) {
            return window["markdownit"]().render(text);
        }
        return text;
    };
    return AdaptiveCard;
}(ContainerWithActions));
exports.AdaptiveCard = AdaptiveCard;
var InlineAdaptiveCard = /** @class */ (function (_super) {
    __extends(InlineAdaptiveCard, _super);
    function InlineAdaptiveCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suppressStyle = false;
        return _this;
    }
    Object.defineProperty(InlineAdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineAdaptiveCard.prototype, "defaultPadding", {
        get: function () {
            return new HostConfig.PaddingDefinition({
                top: this.suppressStyle ? Enums.Padding.None : Enums.Padding.Default,
                right: Enums.Padding.Default,
                bottom: this.suppressStyle ? Enums.Padding.None : Enums.Padding.Default,
                left: Enums.Padding.Default
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineAdaptiveCard.prototype, "defaultStyle", {
        get: function () {
            if (this.suppressStyle) {
                return Enums.ContainerStyle.Default;
            }
            else {
                return this.hostConfig.actions.showCard.style ? this.hostConfig.actions.showCard.style : Enums.ContainerStyle.Emphasis;
            }
        },
        enumerable: true,
        configurable: true
    });
    InlineAdaptiveCard.prototype.render = function () {
        var renderedCard = _super.prototype.render.call(this);
        renderedCard.setAttribute("aria-live", "polite");
        renderedCard.removeAttribute("tabindex");
        return renderedCard;
    };
    InlineAdaptiveCard.prototype.getForbiddenActionTypes = function () {
        return [ShowCardAction];
    };
    return InlineAdaptiveCard;
}(AdaptiveCard));
var defaultHostConfig = new HostConfig.HostConfig({
    supportsInteractivity: true,
    fontFamily: "Segoe UI",
    spacing: {
        small: 10,
        default: 20,
        medium: 30,
        large: 40,
        extraLarge: 50,
        padding: 20
    },
    separator: {
        lineThickness: 1,
        lineColor: "#EEEEEE"
    },
    fontSizes: {
        small: 12,
        default: 14,
        medium: 17,
        large: 21,
        extraLarge: 26
    },
    fontWeights: {
        lighter: 200,
        default: 400,
        bolder: 600
    },
    imageSizes: {
        small: 40,
        medium: 80,
        large: 160
    },
    containerStyles: {
        default: {
            backgroundColor: "#FFFFFF",
            foregroundColors: {
                default: {
                    normal: "#333333",
                    subtle: "#EE333333"
                },
                accent: {
                    normal: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    normal: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    normal: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    normal: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        emphasis: {
            backgroundColor: "#08000000",
            foregroundColors: {
                default: {
                    normal: "#333333",
                    subtle: "#EE333333"
                },
                accent: {
                    normal: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    normal: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    normal: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    normal: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        }
    },
    actions: {
        maxActions: 5,
        spacing: Enums.Spacing.Default,
        buttonSpacing: 10,
        showCard: {
            actionMode: Enums.ShowCardActionMode.Inline,
            inlineTopMargin: 16
        },
        actionsOrientation: Enums.Orientation.Horizontal,
        actionAlignment: Enums.ActionAlignment.Left
    },
    adaptiveCard: {
        allowCustomStyle: false
    },
    imageSet: {
        imageSize: Enums.Size.Medium,
        maxImageHeight: 100
    },
    factSet: {
        title: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Bolder,
            wrap: true,
            maxWidth: 150,
        },
        value: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Default,
            wrap: true,
        },
        spacing: 10
    }
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractTextFormatter = /** @class */ (function () {
    function AbstractTextFormatter(regularExpression) {
        this._regularExpression = regularExpression;
    }
    AbstractTextFormatter.prototype.format = function (input) {
        var matches;
        var result = input;
        while ((matches = this._regularExpression.exec(input)) != null) {
            result = result.replace(matches[0], this.internalFormat(matches));
        }
        ;
        return result;
    };
    return AbstractTextFormatter;
}());
var DateFormatter = /** @class */ (function (_super) {
    __extends(DateFormatter, _super);
    function DateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatter.prototype.internalFormat = function (matches) {
        var date = new Date(Date.parse(matches[1]));
        var format = matches[2] != undefined ? matches[2].toLowerCase() : "compact";
        if (format != "compact") {
            return date.toLocaleDateString(undefined, { day: "numeric", weekday: format, month: format, year: "numeric" });
        }
        else {
            return date.toLocaleDateString();
        }
    };
    return DateFormatter;
}(AbstractTextFormatter));
var TimeFormatter = /** @class */ (function (_super) {
    __extends(TimeFormatter, _super);
    function TimeFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeFormatter.prototype.internalFormat = function (matches) {
        var date = new Date(Date.parse(matches[1]));
        return date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
    };
    return TimeFormatter;
}(AbstractTextFormatter));
function formatText(text) {
    var formatters = [
        new DateFormatter(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g),
        new TimeFormatter(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)
    ];
    var result = text;
    for (var i = 0; i < formatters.length; i++) {
        result = formatters[i].format(result);
    }
    return result;
}
exports.formatText = formatText;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var adaptivecards_1 = __webpack_require__(1);
function renderCard(card, options, target) {
    if (typeof card === "string") {
        card = JSON.parse(card);
    }
    options = options || {};
    // Setup a card
    var adaptiveCard = new adaptivecards_1.AdaptiveCard();
    if (typeof options.hostConfig === "string") {
        adaptiveCard.hostConfig = new adaptivecards_1.HostConfig(JSON.parse(options.hostConfig));
    }
    else if (typeof options.hostConfig === "object" && !(options.hostConfig instanceof adaptivecards_1.HostConfig)) {
        adaptiveCard.hostConfig = new adaptivecards_1.HostConfig(options.hostConfig);
    }
    else {
        adaptiveCard.hostConfig = options.hostConfig;
    }
    adaptiveCard.onAnchorClicked = options.onAnchorClicked;
    adaptiveCard.onExecuteAction = options.onExecuteAction;
    adaptiveCard.onElementVisibilityChanged = options.onElementVisibilityChanged;
    adaptiveCard.onInlineCardExpanded = options.onInlineCardExpanded;
    adaptiveCard.onParseElement = options.onParseElement;
    if (options.processMarkdown) {
        adaptivecards_1.AdaptiveCard.processMarkdown = options.processMarkdown;
    }
    // Parse the card
    adaptiveCard.parse(card);
    // Render the card
    return adaptiveCard.render(target);
}
exports.renderCard = renderCard;


/***/ })
/******/ ]);
//# sourceMappingURL=adaptivecards.js.map