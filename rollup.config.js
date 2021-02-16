Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var styledBootstrapGrid = require('styled-bootstrap-grid');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Title = styled__default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 1.8rem;\n    font-weight: 600;\n    width: 100%;\n\n    @media screen and (max-width: 600px) {\n        font-size: 1.4rem;\n    }\n"], ["\n    color: ", ";\n    font-size: 1.8rem;\n    font-weight: 600;\n    width: 100%;\n\n    @media screen and (max-width: 600px) {\n        font-size: 1.4rem;\n    }\n"])), function (props) { return props.theme.primary; });
var SubText = styled__default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 1.4rem;\n    margin-bottom: auto;\n    width: 100%;\n\n    @media screen and (max-width: 600px) {\n        font-size: 1.2rem;\n    }\n"], ["\n    color: ", ";\n    font-size: 1.4rem;\n    margin-bottom: auto;\n    width: 100%;\n\n    @media screen and (max-width: 600px) {\n        font-size: 1.2rem;\n    }\n"])), function (props) { return props.theme.secondary; });
var Button = styled__default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    padding: 10px;\n    margin: 1.2rem 0;\n    width: 10rem;\n    background: ", ";\n    border: none;\n    border-radius: 4px;\n    font-weight: 600;\n    color: #fff;\n\n    @media screen and (max-width: 600px) {\n        width: 7rem;\n    }\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    &:focus {\n        outline: none\n    }\n"], ["\n    padding: 10px;\n    margin: 1.2rem 0;\n    width: 10rem;\n    background: ", ";\n    border: none;\n    border-radius: 4px;\n    font-weight: 600;\n    color: #fff;\n\n    @media screen and (max-width: 600px) {\n        width: 7rem;\n    }\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    &:focus {\n        outline: none\n    }\n"])), function (props) { return props.theme.primary; });
var templateObject_1, templateObject_2, templateObject_3;

var Container = styled__default(styledBootstrapGrid.Container)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    box-sizing: border-box;\n"], ["\n    box-sizing: border-box;\n"])));
var calcDays = function (d1, d2) {
    console.log(d1, d2);
    var timeDiff = d2.getTime() - d1.getTime();
    // To calculate the no. of days between two dates 
    return Math.round(timeDiff / (1000 * 3600 * 24));
};
var FlexRow = styled__default(styledBootstrapGrid.Row)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    flex-wrap: nowrap;\n    padding: 0 1em;\n"], ["\n    flex-wrap: nowrap;\n    padding: 0 1em;\n"])));
var Days = styled__default(SubText)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    text-align: right;\n"], ["\n    text-align: right;\n"])));
var Learn = styled__default.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding-left: 10px;\n"], ["\n    padding-left: 10px;\n"])));
var Job = styled__default(function (_a) {
    var job = _a.job, className = _a.className;
    var jobTitle = job.jobTitle, location = job.location, contract = job.contract, date = job.date, slug = job.slug;
    return (React__default.createElement(Container, { className: className },
        React__default.createElement(FlexRow, null,
            React__default.createElement(Title, null, jobTitle),
            React__default.createElement(Learn, { href: "/careers/" + slug },
                React__default.createElement(Button, null, "Learn more"))),
        React__default.createElement(FlexRow, null,
            React__default.createElement(SubText, null,
                location,
                " | ",
                contract),
            React__default.createElement(Days, null,
                calcDays(new Date(date), new Date()),
                " days ago"))));
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    border: 2px solid ", ";\n    border-radius: 4px;\n    margin: 10px 0px;\n    padding-top: 1em;\n    padding-bottom: 1em;\n"], ["\n    display: flex;\n    flex-direction: column;\n    border: 2px solid ", ";\n    border-radius: 4px;\n    margin: 10px 0px;\n    padding-top: 1em;\n    padding-bottom: 1em;\n"])), function (props) { return props.theme.bg; });
var Roles = styled__default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 20px;\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 20px;\n"])));
var Jobs = styled__default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n"], ["\n    display: flex;\n    flex-direction: column;\n"])));
var RoleType = styled__default(function (_a) {
    var className = _a.className, selected = _a.selected, handleClick = _a.handleClick, children = _a.children;
    return React__default.createElement("button", { onClick: function () { return handleClick(); }, datatype: selected ? 'SELECTED' : '', className: className }, children);
})(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    padding: 10px 2rem;\n    margin: 5px 1em 5px 0px;\n    background: ", ";\n    border: none;\n    border-radius: 4px;\n    font-white: 600;\n    color: ", ";\n    width: 48%;\n    margin: 5px 1% 5px 1%;\n\n    @media screen and (min-width: 600px) {\n        width: 24%;\n        margin: 5px 0.5% 5px 0.5%;\n    }\n\n    @media screen and (min-width: 800px) {\n        width: 19%;\n    }\n\n    &:hover {\n        cursor: pointer;\n    }\n    &:focus {\n        outline: none\n    }\n    &[datatype=\"SELECTED\"] {\n        color: white;\n        background: ", ";\n    }\n"], ["\n    padding: 10px 2rem;\n    margin: 5px 1em 5px 0px;\n    background: ", ";\n    border: none;\n    border-radius: 4px;\n    font-white: 600;\n    color: ", ";\n    width: 48%;\n    margin: 5px 1% 5px 1%;\n\n    @media screen and (min-width: 600px) {\n        width: 24%;\n        margin: 5px 0.5% 5px 0.5%;\n    }\n\n    @media screen and (min-width: 800px) {\n        width: 19%;\n    }\n\n    &:hover {\n        cursor: pointer;\n    }\n    &:focus {\n        outline: none\n    }\n    &[datatype=\"SELECTED\"] {\n        color: white;\n        background: ", ";\n    }\n"])), function (props) { return props.theme.bg; }, function (props) { return props.theme.primary; }, function (props) { return props.theme.primary; });
var JobsList = styled__default(function (_a) {
    var jobs = _a.jobs, roleTypes = _a.roleTypes, className = _a.className;
    var _b = React.useState('All Roles'), selectedRole = _b[0], setRoleType = _b[1];
    return (React__default.createElement(Container, { className: className },
        React__default.createElement("h1", null, "Open Roles"),
        React__default.createElement(Roles, null, roleTypes.map(function (roleType) {
            return React__default.createElement(RoleType, { handleClick: function () { return setRoleType(roleType); }, selected: selectedRole === roleType }, roleType);
        })),
        React__default.createElement(Jobs, null, jobs.filter(function (job) { return selectedRole === "All Roles" || selectedRole.toLowerCase() === job.category; }).map(function (job) {
            return React__default.createElement(Job, { job: job });
        }))));
})(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    flex-direction: column;\n    margin: 5rem auto;\n\n    &[data-name=container] {\n        box-sizing: border-box;\n    }\n\n    > [data-name=col-xs-12]{\n        box-sizing: border-box;\n    }\n\n    > h1 {\n        color: ", ";\n        font-weight: 600;\n    }\n\n    @media screen and (max-width: 600px) {\n        margin: 1rem auto;\n    }\n"], ["\n    flex-direction: column;\n    margin: 5rem auto;\n\n    &[data-name=container] {\n        box-sizing: border-box;\n    }\n\n    > [data-name=col-xs-12]{\n        box-sizing: border-box;\n    }\n\n    > h1 {\n        color: ", ";\n        font-weight: 600;\n    }\n\n    @media screen and (max-width: 600px) {\n        margin: 1rem auto;\n    }\n"])), function (props) { return props.theme.primary; });
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

var Container$1 = styled__default(styledBootstrapGrid.Container)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    box-sizing: border-box;\n"], ["\n    box-sizing: border-box;\n"])));
var BannerImg = styled__default.img(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    min-height: 20vh;\n    object-fit: cover;\n"], ["\n    width: 100%;\n    height: 100%;\n    min-height: 20vh;\n    object-fit: cover;\n"])));
var BannerText = styled__default(function (_a) {
    var className = _a.className, children = _a.children;
    return (React__default.createElement(Container$1, { className: className }, children));
})(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    position: absolute;\n    display: flex;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    color: ", ";\n    letter-spacing: 5px;\n    font-size: 4rem;\n    font-weight: 600;\n    margin: auto;\n    text-align: center;\n    height: fit-content;\n    padding-bottom: 20px;\n    @media screen and (max-width: 600px) {\n        font-size: 2.5rem;\n    }\n"], ["\n    position: absolute;\n    display: flex;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    color: ", ";\n    letter-spacing: 5px;\n    font-size: 4rem;\n    font-weight: 600;\n    margin: auto;\n    text-align: center;\n    height: fit-content;\n    padding-bottom: 20px;\n    @media screen and (max-width: 600px) {\n        font-size: 2.5rem;\n    }\n"])), function (props) { return props.theme.primary; });
var JobBanner = styled__default.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n    position: relative;\n    padding: 0;\n"], ["\n    position: relative;\n    padding: 0;\n"])));
var StyledContainer = styled__default(Container$1)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n    margin: auto;\n\n    > h1 {\n        font-weight: 600;\n        font-size: 1.9rem;\n        color: ", ";\n    }\n\n    > h2 {\n        font-weight: 400;\n        font-size: 1.3rem;\n    }\n\n    @media screen and (max-width: 600px) {\n        > h1 {\n            font-size: 1.7rem;\n        }\n\n        > h2 {\n            font-size: 1.1rem;\n        }\n    }\n"], ["\n    margin: auto;\n\n    > h1 {\n        font-weight: 600;\n        font-size: 1.9rem;\n        color: ", ";\n    }\n\n    > h2 {\n        font-weight: 400;\n        font-size: 1.3rem;\n    }\n\n    @media screen and (max-width: 600px) {\n        > h1 {\n            font-size: 1.7rem;\n        }\n\n        > h2 {\n            font-size: 1.1rem;\n        }\n    }\n"])), function (props) { return props.theme.primary; });
var SubBanner = styled__default(function (_a) {
    var className = _a.className, children = _a.children;
    return (React__default.createElement("div", { className: className },
        React__default.createElement(StyledContainer, null, children)));
})(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n    background: ", ";\n    padding: 4rem 0;\n    @media screen and (max-width: 600px) {\n        padding: 2rem 0;\n    }\n"], ["\n    background: ", ";\n    padding: 4rem 0;\n    @media screen and (max-width: 600px) {\n        padding: 2rem 0;\n    }\n"])), function (props) { return props.theme.bg; });
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$1, templateObject_5$1, templateObject_6$1;

var JobInfo = styled__default(function (_a) {
    var className = _a.className, children = _a.children, jobTitle = _a.jobTitle, location = _a.location, contract = _a.contract, date = _a.date, applicationLink = _a.applicationLink;
    return (React__default.createElement(styledBootstrapGrid.Container, { className: className },
        React__default.createElement(Title, null, jobTitle),
        React__default.createElement(SubText, null,
            location,
            " | ",
            contract,
            " - ",
            calcDays(new Date(date), new Date()),
            " days ago"),
        children,
        React__default.createElement("a", { href: applicationLink, target: "_blank", rel: "noreferrer noopener" },
            React__default.createElement(Button, null, "Apply Now"))));
})(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    box-sizing: border-box;\n    padding-top: 4rem;\n\n    @media screen and (max-width: 600px) {\n        padding-top: 2rem;\n    }\n"], ["\n    box-sizing: border-box;\n    padding-top: 4rem;\n\n    @media screen and (max-width: 600px) {\n        padding-top: 2rem;\n    }\n"])));
var templateObject_1$3;

Object.defineProperty(exports, 'ThemeProvider', {
    enumerable: true,
    get: function () {
        return styled.ThemeProvider;
    }
});
exports.BannerImg = BannerImg;
exports.BannerText = BannerText;
exports.Button = Button;
exports.Job = Job;
exports.JobBanner = JobBanner;
exports.JobInfo = JobInfo;
exports.JobsList = JobsList;
exports.SubBanner = SubBanner;
//# sourceMappingURL=rollup.config.js.map
