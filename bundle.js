/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/pages/callbacks.md":
/*!*************************************!*\
  !*** ./src/main/pages/callbacks.md ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<h1 id=\\\"callbacks\\\">Callbacks</h1>\\n<p>By default all the <code>MonoBehaviour</code>s and the <code>ScriptableObject</code>s editors handles by the <code>EasyEditor</code> plugin,\\nif they have custom editor that will overrides the <code>EasyEditor</code> and prevent it from working.</p>\\n<p>By that in mind you can call methods that written in your scripts without adding any custom editor to your project.</p>\\n<ol>\\n<li>For example you have script like this:</li>\\n</ol>\\n<pre><code class=\\\"language-c#\\\">public class Car : MonoBehaviour\\n{ \\n    ...\\n}\\n</code></pre>\\n<ol start=\\\"2\\\">\\n<li>Now add method called <code>InspectorGUI</code> to your script with attribute:</li>\\n</ol>\\n<pre><code class=\\\"language-c#\\\">using EasyExtender.EasyEditorGraph;\\n\\npublic class Car : MonoBehaviour\\n{\\n    ...\\n\\n    [EasyEditorCallback(EditorCallback.OnInspectorGUI)]\\n    public void InspectorGUI()\\n    {\\n        GUILayout.Label(&quot;Hello World from MonoBehaviour&quot;);\\n    }\\n}\\n</code></pre>\\n<br>\\n\\n<h3 id=\\\"available-callbacks\\\">Available Callbacks</h3>\\n<p>Here is the list of awailable callbacks:</p>\\n<p><code>OnEnable</code></p>\\n<p><code>OnDisable</code></p>\\n<p><code>OnHeaderGUI</code></p>\\n<p><code>OnInspectorGUI</code></p>\\n<p><code>OnSceneGUI</code></p>\\n<p><code>CreateInspectorGUI</code></p>\\n<p><code>EditorGraph_Awake</code></p>\\n<br>\\n\\n<h3 id=\\\"parameter\\\">Parameter</h3>\\n<p>Your callbacks can have one parameter of type:</p>\\n<ul>\\n<li><p>To access the actual editor of the script:</p>\\n<pre><code class=\\\"language-c#\\\">public void MethodName(Editor editor)\\n</code></pre>\\n</li>\\n<li><p>To access the target object of the editor: (it must be assinable from the current type)</p>\\n<pre><code class=\\\"language-c#\\\">public void MethodName(ClassName target)\\n</code></pre>\\n<pre><code class=\\\"language-c#\\\">public void MethodName(ParentClass target)\\n</code></pre>\\n</li>\\n<li><p>To access the targets of the editor: (it must be assinable from the current type)</p>\\n<pre><code class=\\\"language-c#\\\">public void MethodName(ClassName[] targets)\\n</code></pre>\\n</li>\\n<li><p>To accesss <code>SerializedObject</code> of the editor:</p>\\n<pre><code class=\\\"language-c#\\\">public void MethodName(SerializedObject serialziedObject)\\n</code></pre>\\n</li>\\n</ul>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/main/pages/callbacks.md?");

/***/ }),

/***/ "./src/main/pages/files.md":
/*!*********************************!*\
  !*** ./src/main/pages/files.md ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<h1 id=\\\"files\\\">Files</h1>\\n<p>For every script (<code>MonoScript</code>), plugin will create a asset file that contains the graph and editor data.</p>\\n<p>By default it will create the file next to the <code>MonoScript</code> asset.</p>\\n<p>You should not edit the file, but you can move the file anywhere you want.</p>\\n<p>If you wanna put all the newly created editors assets into a specific folder:</p>\\n<ul>\\n<li>open up the setting panel from the navigation bar of the left hand side of the window.</li>\\n<li>Turn off the <code>putAssetsNearScripts</code></li>\\n<li>Choose a location by clicking on the <code>Open</code> button</li>\\n</ul>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/main/pages/files.md?");

/***/ }),

/***/ "./src/main/pages/main.md":
/*!********************************!*\
  !*** ./src/main/pages/main.md ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/overview.mp4 */ \"./src/main/pages/videos/overview.mp4\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<h1 id=\\\"easy-editor-graph\\\">Easy Editor Graph</h1>\\n<p>Easy Editor Graph is a Unity Inspector plugin that allows you to create and connect nodes to build complex inspector without writing external editor scripts. You can still use C# as needed, but the Node Editor provides a real-time visual interface for constructing and managing your editor, making it easier to create and debug complex Editors.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"video/mp4\\\">\\n</video>\\n\\n<h2 id=\\\"features\\\">Features</h2>\\n<ul>\\n<li>Easily edit Default Editor</li>\\n<li>Supports both UI Base and GUI base Elements</li>\\n<li>Variety of nodes and drawers that helps you to create and modify your editor</li>\\n<li>Supports Injecting UXML templates and GUI contents</li>\\n<li>Supports adding custom StyleSheets</li>\\n<li>Has build-in Asset Manager that helps you to easily add, remove or disable custom editor</li>\\n</ul>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/main/pages/main.md?");

/***/ }),

/***/ "./src/main/pages/nodes.md":
/*!*********************************!*\
  !*** ./src/main/pages/nodes.md ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/editor-node.mp4 */ \"./src/main/pages/videos/editor-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/default-inspector-node.mp4 */ \"./src/main/pages/videos/default-inspector-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/fields-node.mp4 */ \"./src/main/pages/videos/fields-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/field-node.mp4 */ \"./src/main/pages/videos/field-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/split-node.mp4 */ \"./src/main/pages/videos/split-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/methods-node.mp4 */ \"./src/main/pages/videos/methods-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/method-node.mp4 */ \"./src/main/pages/videos/method-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/layout-node.mp4 */ \"./src/main/pages/videos/layout-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/tab-group-node.mp4 */ \"./src/main/pages/videos/tab-group-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/drawer-node.mp4 */ \"./src/main/pages/videos/drawer-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/slider-node.mp4 */ \"./src/main/pages/videos/slider-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/progress-bar-node.mp4 */ \"./src/main/pages/videos/progress-bar-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/label-node.mp4 */ \"./src/main/pages/videos/label-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/gui-drawer-node.mp4 */ \"./src/main/pages/videos/gui-drawer-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/visual-tree-node.mp4 */ \"./src/main/pages/videos/visual-tree-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/space-node.mp4 */ \"./src/main/pages/videos/space-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/header-node.mp4 */ \"./src/main/pages/videos/header-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/style-sheet-node.mp4 */ \"./src/main/pages/videos/style-sheet-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/scene-gui-node.mp4 */ \"./src/main/pages/videos/scene-gui-node.mp4\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar code = \"<h1 id=\\\"nodes\\\">Nodes</h1>\\n<p>Here&#39;s the list of nodes that you can use in your graph</p>\\n<br>\\n\\n\\n\\n<h2 id=\\\"editor-node\\\">Editor Node</h2>\\n<p>Editor node is the main node of your design, to add anything to your editor you have to connect its output port to input port of this Node.</p>\\n<ul>\\n<li>Editor node defines the structure of the editor</li>\\n<li>it&#39;s a required node in every graph and cannot be ommited.</li>\\n<li>You can turn off multi-object-editing</li>\\n<li>You can add custom <code>StyleSheet</code></li>\\n<li>Order of the inputs is matter</li>\\n</ul>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"default-inspector-node\\\">Default Inspector Node</h2>\\n<p>This node draws the default inspector of the <code>Object</code> inside the editor.</p>\\n<ul>\\n<li>It can excludes properties</li>\\n<li>It can draw default inspector by both UI and GUI systems</li>\\n<li>It can disable the entire content by constant value or dynamic value</li>\\n<li>It can show/hide its content by dynamic value</li>\\n<li>It can have its own callback when the content is changed</li>\\n</ul>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"fields-node\\\">Fields Node</h2>\\n<p>List of serialized fields of the target object.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"field-node\\\">Field Node</h2>\\n<p>Represents a single serialzied field of the target.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"split-node\\\">Split Node</h2>\\n<p>Gives access to child serialized fields of the connected field.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"methods-node\\\">Methods Node</h2>\\n<p>List of Non-Generic methods of the target object.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"method-node\\\">Method Node</h2>\\n<p>List of all non-generic overloads of a method with same name in the target object.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"layout-group-node\\\">Layout Group Node</h2>\\n<p>Groups the connected edges.</p>\\n<ul>\\n<li>There are three type of layout group<ul>\\n<li>Vertical</li>\\n<li>Horizontal</li>\\n<li>Foldout</li>\\n</ul>\\n</li>\\n</ul>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n\\n<h2 id=\\\"tab-group-node\\\">Tab Group Node</h2>\\n<p>Adds a tab group to the editor</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"drawer-node\\\">Drawer Node</h2>\\n<p>Let you customize the drawer of the connected field.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"slider-node\\\">Slider Node</h2>\\n<p>It connects to number fields and adds a slider in the editor.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"progress-bar-node\\\">Progress Bar Node</h2>\\n<p>It connects to number fields and adds a Progress Bar in the editor.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"label-node\\\">Label Node</h2>\\n<p>It connects to string fields and adds a readonly label in the editor.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"gui-drawer-node\\\">GUI Drawer Node</h2>\\n<p>It conntects to parameter less methods and can inject GUI into the editor.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"visual-tree-drawer-node\\\">Visual Tree Drawer Node</h2>\\n<p>It adds and binds a VisualTree to the editor.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"space-drawer-node\\\">Space Drawer Node</h2>\\n<p>Adds an empty space inside the editor.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"header-drawer-node\\\">Header Drawer Node</h2>\\n<p>Adds an bold label into the editor.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n<!-- \\n\\n## Inline Node\\n\\nIt add an object field and the inlined inspector of the object into the editor.\\n\\n<video autoplay loop muted controls>\\n  <source src=\\\"videos/inline-node.mp4\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n -->\\n\\n\\n<h2 id=\\\"style-sheet-node\\\">Style Sheet Node</h2>\\n<p>It adds custom <code>StyleSheet</code> to the editor.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<h2 id=\\\"scenegui-node\\\">SceneGUI Node</h2>\\n<p>It calls the connected methods inside the <code>OnSceneGUI</code> callback of the editor.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/main/pages/nodes.md?");

/***/ }),

/***/ "./src/main/pages/quick-start.md":
/*!***************************************!*\
  !*** ./src/main/pages/quick-start.md ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/open-window.mp4 */ \"./src/main/pages/videos/open-window.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/open-object-manager.mp4 */ \"./src/main/pages/videos/open-object-manager.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/select-objects-and-create-editor-asset.mp4 */ \"./src/main/pages/videos/select-objects-and-create-editor-asset.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/add-editor-node.mp4 */ \"./src/main/pages/videos/add-editor-node.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/add-default-inspector-node.mp4 */ \"./src/main/pages/videos/add-default-inspector-node.mp4\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar code = \"<h1 id=\\\"quick-start\\\">Quick Start</h1>\\n<p>Welcome to the EasyEditorGraph Quick Start!</p>\\n<p>Get started with EasyEditorGraph in minutes! This help site is designed to provide you with a quick and easy introduction to using EasyEditorGraph in Unity.</p>\\n<p>What is EasyEditorGraph?</p>\\n<p>EasyEditorGraph is a node base editor for creating and managing your custom editors within your Unity project. It allows you to build editors without writing external editor scripts.</p>\\n<p>Getting Started</p>\\n<p>Download and install the EasyEditorGraph plugin from the Unity Asset Store.</p>\\n<p>Go to <code>Window &gt; Easy Extender &gt; Easy Editor Graph</code> to open the <code>Easy Editor Graph</code> window.</p>\\n<video autoplay loop muted>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"video/mp4\\\">\\n</video>\\n\\n<p>To editing a inspector of an <code>Object</code> you need to open the <code>Object Manager</code> from the right panel of the <code>window</code>.</p>\\n<video autoplay loop muted>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" type=\\\"video/mp4\\\">\\n</video>\\n\\n<p>By selecting any <code>Object</code> from <code>Hierachy</code> or <code>Project</code> window you will see list of them inside the <code>Object Manager</code> Panel.</p>\\n<p>Select the <code>Object</code> you want to create custom editor for it.</p>\\n<p>If the selected <code>Object</code> supports easy editor graph, a panel will appear in the right side of the window.\\nFrom the right side panel select <code>EditorGraph</code>.</p>\\n<p>This will create a new <code>EasyEditorAsset.asset</code> <code>Object</code> next to <code>MonoScript</code> inside the project window.\\nThe file contains data of the custom editor you creating.</p>\\n<p>You don&#39;t need to edit this file manually.</p>\\n<video autoplay loop muted>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" type=\\\"video/mp4\\\">\\n</video>\\n\\n<br>\\n\\n<p>Now open the  <code>Graph Editor</code> by clicking at it&#39;s icon from the navigation bar.</p>\\n<p>First node you need to add to your graph is the <code>Editor</code>.</p>\\n<p>To do that right click on the viewport and from the dropdown window select <code>Editor</code> node.</p>\\n<video autoplay loop muted>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" type=\\\"video/mp4\\\">\\n</video>\\n\\n<p>Editor is empty right now because We haven&#39;t added anything to it yet.</p>\\n<p>From the Node list add new node called <code>Default Inspector</code></p>\\n<p>Then connect the output port of the <code>Default Inspector</code> to input port of the <code>Editor</code> node.</p>\\n<video autoplay loop muted>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" type=\\\"video/mp4\\\">\\n</video>\\n\\n<p>As you can see the <code>Inspector Window</code> now shows the default editor of the object.</p>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/main/pages/quick-start.md?");

/***/ }),

/***/ "./src/main/pages/shortcuts.md":
/*!*************************************!*\
  !*** ./src/main/pages/shortcuts.md ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/shortcut-add-group.mp4 */ \"./src/main/pages/videos/shortcut-add-group.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/shortcut-frame-selection.mp4 */ \"./src/main/pages/videos/shortcut-frame-selection.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/shortcut-ctrl-w.mp4 */ \"./src/main/pages/videos/shortcut-ctrl-w.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/shortcut-delete.mp4 */ \"./src/main/pages/videos/shortcut-delete.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./videos/shortcut-action-click.mp4 */ \"./src/main/pages/videos/shortcut-action-click.mp4\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar code = \"<h1 id=\\\"shortcuts--tips\\\">Shortcuts &amp; Tips</h1>\\n<p>Here you can find the shortcuts of the editor window.</p>\\n<br>\\n\\n\\n<p><strong>[Action(ctrl)] + [D]</strong></p>\\n<p>To duplicate nodes and groups.</p>\\n<p><strong>[Action(ctrl)] + [Z] and [Action[ctrl]] + [shift] + [z]</strong></p>\\n<p>Undo/Redo operations.</p>\\n<p><strong>[Action(ctrl)] + [G]</strong></p>\\n<p>Creates group and add the selected nodes to the group.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<p><strong>[F]</strong></p>\\n<p>Frame selection.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<p><strong>[Action(ctrl)] + [W]</strong></p>\\n<p>Fold and expand the node.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<p><strong>[Backspace] or [Delete]</strong></p>\\n<p>Removes the selection.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\\n<p><strong>[Action(ctrl)] + [shift] + Click on Fields Ports and Methods Ports</strong></p>\\n<p>Creates a field or method node that contains the clicked field or method.</p>\\n<video autoplay loop muted controls>\\n  <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" type=\\\"video/mp4\\\">\\n</video><br><br><br>\\n\\n\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/main/pages/shortcuts.md?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/main/app.ts":
/*!*************************!*\
  !*** ./src/main/app.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/style.ts\");\nconst pages_list_1 = __webpack_require__(/*! ./pages-list */ \"./src/main/pages-list/index.ts\");\nconst pages_1 = __webpack_require__(/*! ./pages */ \"./src/main/pages/index.ts\");\nclass App {\n    constructor() {\n        const element = html_1.html.div(style_1.style.App);\n        this.element = element;\n        const frame = html_1.html.div(style_1.style.Frame);\n        element.append(frame);\n        const header = html_1.html.div(style_1.style.Header);\n        header.append(this.headerContent());\n        frame.append(header);\n        this.header = header;\n        const main = html_1.html.div(style_1.style.Main);\n        frame.append(main);\n        this.main = main;\n        const footer = html_1.html.div(style_1.style.Footer);\n        footer.append(this.footerContent());\n        frame.append(footer);\n        this.footer = footer;\n        const sideBar = html_1.html.div(style_1.style.SideBar);\n        main.append(sideBar);\n        this.sideBar = sideBar;\n        const content = html_1.html.div(style_1.style.Content);\n        main.append(content);\n        this.content = content;\n        const pagesList = new pages_list_1.PagesList();\n        pagesList.callback = this.onClickMenuItem.bind(this);\n        sideBar.append(pagesList.element);\n        this.pagesList = pagesList;\n        this.map = new Map();\n        this.map.set(\"Main\", pages_1.pages.Main);\n        CreateList(\"Main\", pagesList.addList(), pages_1.pages.Main);\n        this.map.set(\"QuickStart\", pages_1.pages.QuickStart);\n        CreateList('QuickStart', pagesList.addList(), pages_1.pages.QuickStart);\n        this.map.set(\"Callbacks\", pages_1.pages.Callbacks);\n        CreateList('Callbacks', pagesList.addList(), pages_1.pages.Callbacks);\n        this.map.set(\"Nodes\", pages_1.pages.Nodes);\n        CreateList('Nodes', pagesList.addList(), pages_1.pages.Nodes);\n        this.map.set(\"Shortcut\", pages_1.pages.Shortcut);\n        CreateList('Shortcut', pagesList.addList(), pages_1.pages.Shortcut);\n        this.map.set(\"Files\", pages_1.pages.Files);\n        CreateList('Files', pagesList.addList(), pages_1.pages.Files);\n        content.innerHTML = this.map.get(localStorage.getItem('pageName') || 'Main');\n    }\n    onClickMenuItem(li) {\n        const pageName = li.dataset.pageName;\n        if (this.currentPage != pageName) {\n            this.currentPage = pageName;\n            this.content.innerHTML = this.map.get(pageName);\n            localStorage.setItem('pageName', pageName);\n        }\n        setTimeout(() => { location.hash = li.dataset.link; }, 20);\n    }\n    headerContent() {\n        const element = html_1.html.div(style_1.style.HeaderContent);\n        element.textContent = 'Easy Editor Graph';\n        return element;\n    }\n    footerContent() {\n        const element = html_1.html.div(style_1.style.FooterContent);\n        element.textContent = '© All Rights Reserved';\n        return element;\n    }\n}\nexports.App = App;\nconst temp = html_1.html.div('');\nfunction CreateList(pageName, list, content) {\n    temp.innerHTML = content;\n    const others = temp.querySelectorAll('h1, h2, h3, h4, h5, h6');\n    others.forEach(e => list.addItem(pageName, parseInt(e.tagName.substring(1)) - 1, e.textContent, e.id));\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFtQztBQUNuQyxtQ0FBK0I7QUFDL0IsNkNBQWdEO0FBQ2hELG1DQUErQjtBQUUvQixNQUFhLEdBQUc7SUFXWjtRQUNJLE1BQU0sT0FBTyxHQUFHLFdBQUksQ0FBQyxHQUFHLENBQUMsYUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBRXRCLE1BQU0sS0FBSyxHQUFHLFdBQUksQ0FBQyxHQUFHLENBQUMsYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFckIsTUFBTSxNQUFNLEdBQUcsV0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQTtRQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBRXBCLE1BQU0sSUFBSSxHQUFHLFdBQUksQ0FBQyxHQUFHLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFFaEIsTUFBTSxNQUFNLEdBQUcsV0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQTtRQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdB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\n\n//# sourceURL=webpack:///./src/main/app.ts?");

/***/ }),

/***/ "./src/main/entry.ts":
/*!***************************!*\
  !*** ./src/main/entry.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/main/app.ts\");\nconst app = new app_1.App();\ndocument.body.append(app.element);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUU1QixNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFBO0FBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQSJ9\n\n//# sourceURL=webpack:///./src/main/entry.ts?");

/***/ }),

/***/ "./src/main/pages-list/index.ts":
/*!**************************************!*\
  !*** ./src/main/pages-list/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ULList = exports.PagesList = void 0;\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/main/pages-list/style.ts\");\nclass PagesList {\n    constructor() {\n        const element = html_1.html.div(style_1.style.ListContainer);\n        this.element = element;\n    }\n    addList() {\n        const list = new ULList();\n        list.callback = this.callback;\n        this.element.append(list.ul);\n        return list;\n    }\n}\nexports.PagesList = PagesList;\nclass ULList {\n    constructor() {\n        const element = html_1.html.ul(style_1.style.List);\n        this.ul = element;\n    }\n    addItem(pageName, depth, text, link) {\n        const li = html_1.html.li(style_1.style.Item);\n        li.style.paddingLeft = (15 * depth) + 'px';\n        li.dataset.pageName = pageName;\n        li.dataset.link = link;\n        li.addEventListener('click', () => this.callback(li));\n        const a = html_1.html.a(style_1.style.Link);\n        a.textContent = text;\n        li.append(a);\n        this.ul.append(li);\n    }\n}\nexports.ULList = ULList;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBbUM7QUFDbkMsbUNBQStCO0FBRS9CLE1BQWEsU0FBUztJQUlsQjtRQUNJLE1BQU0sT0FBTyxHQUFHLFdBQUksQ0FBQyxHQUFHLENBQUMsYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQzFCLENBQUM7SUFFRCxPQUFPO1FBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztDQUNKO0FBZkQsOEJBZUM7QUFFRCxNQUFhLE1BQU07SUFJZjtRQUNJLE1BQU0sT0FBTyxHQUFHLFdBQUksQ0FBQyxFQUFFLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxPQUFPLENBQUMsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDL0QsTUFBTSxFQUFFLEdBQUcsV0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFBO1FBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUM5QixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFFdEIsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFckQsTUFBTSxDQUFDLEdBQUcsV0FBSSxDQUFDLENBQUMsQ0FBQyxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDcEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVaLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7Q0FDSjtBQXZCRCx3QkF1QkMifQ==\n\n//# sourceURL=webpack:///./src/main/pages-list/index.ts?");

/***/ }),

/***/ "./src/main/pages-list/style.ts":
/*!**************************************!*\
  !*** ./src/main/pages-list/style.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.style = void 0;\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\nexports.style = html_1.html.createStyle({\n    ListContainer: {},\n    List: {\n        margin: '0',\n        padding: '0 10px',\n        listStyle: 'none',\n    },\n    Item: {\n        display: 'block',\n        padding: '0px 4px',\n        borderRadius: '4px',\n        'text-wrap': 'nowrap',\n        ':hover': {\n            backgroundColor: '#0001'\n        }\n    },\n    Link: {\n        fontSize: '12px',\n        display: 'block',\n        padding: '2px',\n        textDecoration: 'none',\n        color: '#02F',\n    },\n});\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBb0M7QUFHdkIsUUFBQSxLQUFLLEdBQUcsV0FBSSxDQUFDLFdBQVcsQ0FBQztJQUVsQyxhQUFhLEVBQUUsRUFDZDtJQUVELElBQUksRUFBRTtRQUNGLE1BQU0sRUFBRSxHQUFHO1FBQ1gsT0FBTyxFQUFFLFFBQVE7UUFDakIsU0FBUyxFQUFFLE1BQU07S0FDcEI7SUFFRCxJQUFJLEVBQUU7UUFDRixPQUFPLEVBQUUsT0FBTztRQUNoQixPQUFPLEVBQUUsU0FBUztRQUNsQixZQUFZLEVBQUUsS0FBSztRQUNuQixXQUFXLEVBQUUsUUFBUTtRQUVyQixRQUFRLEVBQUU7WUFDTixlQUFlLEVBQUUsT0FBTztTQUMzQjtLQUNKO0lBRUQsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLE1BQU07UUFDaEIsT0FBTyxFQUFFLE9BQU87UUFDaEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxjQUFjLEVBQUUsTUFBTTtRQUN0QixLQUFLLEVBQUUsTUFBTTtLQUNoQjtDQUVKLENBQUMsQ0FBQSJ9\n\n//# sourceURL=webpack:///./src/main/pages-list/style.ts?");

/***/ }),

/***/ "./src/main/pages/index.ts":
/*!*********************************!*\
  !*** ./src/main/pages/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pages = void 0;\nconst main_md_1 = __webpack_require__(/*! ./main.md */ \"./src/main/pages/main.md\");\nconst quick_start_md_1 = __webpack_require__(/*! ./quick-start.md */ \"./src/main/pages/quick-start.md\");\nconst nodes_md_1 = __webpack_require__(/*! ./nodes.md */ \"./src/main/pages/nodes.md\");\nconst shortcuts_md_1 = __webpack_require__(/*! ./shortcuts.md */ \"./src/main/pages/shortcuts.md\");\nconst files_md_1 = __webpack_require__(/*! ./files.md */ \"./src/main/pages/files.md\");\nconst callbacks_md_1 = __webpack_require__(/*! ./callbacks.md */ \"./src/main/pages/callbacks.md\");\nexports.pages = {\n    Main: main_md_1.default,\n    QuickStart: quick_start_md_1.default,\n    Nodes: nodes_md_1.default,\n    Shortcut: shortcuts_md_1.default,\n    Files: files_md_1.default,\n    Callbacks: callbacks_md_1.default,\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBNEI7QUFDNUIscURBQXlDO0FBQ3pDLHlDQUE4QjtBQUM5QixpREFBcUM7QUFDckMseUNBQThCO0FBQzlCLGlEQUFzQztBQUV6QixRQUFBLEtBQUssR0FBRztJQUNqQixJQUFJLEVBQUosaUJBQUk7SUFDSixVQUFVLEVBQVYsd0JBQVU7SUFDVixLQUFLLEVBQUwsa0JBQUs7SUFDTCxRQUFRLEVBQVIsc0JBQVE7SUFDUixLQUFLLEVBQUwsa0JBQUs7SUFDTCxTQUFTLEVBQVQsc0JBQVM7Q0FDWixDQUFBIn0=\n\n//# sourceURL=webpack:///./src/main/pages/index.ts?");

/***/ }),

/***/ "./src/main/style.ts":
/*!***************************!*\
  !*** ./src/main/style.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.style = void 0;\nconst html_1 = __webpack_require__(/*! modules/html */ \"./src/modules/html/index.ts\");\nexports.style = html_1.html.createStyle({\n    App: {},\n    Frame: {\n        maxWidth: '1400px',\n        margin: 'auto',\n        padding: '10px 0'\n    },\n    Header: {\n        userSelect: 'none'\n    },\n    HeaderContent: {\n        padding: '30px 0',\n        fontSize: '22px',\n    },\n    Main: {\n        display: 'flex',\n        flexDirection: 'row',\n        boxShadow: '0px 10px 20px #c2cfd6',\n        borderRadius: '10px',\n        backgroundColor: 'white',\n        padding: '20px 0',\n    },\n    Footer: {\n        userSelect: 'none'\n    },\n    FooterContent: {\n        padding: '30px 0',\n        textAlign: 'center',\n        color: 'gray',\n        fontSize: '12px',\n    },\n    SideBar: {\n        border: 'solid #DDD',\n        borderWidth: '0 1px 0 0',\n        userSelect: 'none',\n        padding: '0px 10px 0 20px',\n    },\n    Content: {\n        flexGrow: '1',\n        padding: '0 30px',\n        '& p': {\n            textIndent: '20px',\n        },\n    },\n});\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBb0M7QUFFdkIsUUFBQSxLQUFLLEdBQUcsV0FBSSxDQUFDLFdBQVcsQ0FBQztJQUVsQyxHQUFHLEVBQUUsRUFBRTtJQUVQLEtBQUssRUFBRTtRQUNILFFBQVEsRUFBRSxRQUFRO1FBQ2xCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFLFFBQVE7S0FDcEI7SUFFRCxNQUFNLEVBQUU7UUFDSixVQUFVLEVBQUUsTUFBTTtLQUNyQjtJQUVELGFBQWEsRUFBRTtRQUNYLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0lBRUQsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsS0FBSztRQUNwQixTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLE9BQU8sRUFBRSxRQUFRO0tBQ3BCO0lBRUQsTUFBTSxFQUFFO1FBQ0osVUFBVSxFQUFFLE1BQU07S0FDckI7SUFFRCxhQUFhLEVBQUU7UUFDWCxPQUFPLEVBQUUsUUFBUTtRQUNqQixTQUFTLEVBQUUsUUFBUTtRQUNuQixLQUFLLEVBQUUsTUFBTTtRQUNiLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0lBRUQsT0FBTyxFQUFFO1FBQ0wsTUFBTSxFQUFFLFlBQVk7UUFDcEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsVUFBVSxFQUFFLE1BQU07UUFDbEIsT0FBTyxFQUFFLGlCQUFpQjtLQUM3QjtJQUVELE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxHQUFHO1FBQ2IsT0FBTyxFQUFFLFFBQVE7UUFFakIsS0FBSyxFQUFFO1lBQ0gsVUFBVSxFQUFFLE1BQU07U0FDckI7S0FDSjtDQUVKLENBQUMsQ0FBQSJ9\n\n//# sourceURL=webpack:///./src/main/style.ts?");

/***/ }),

/***/ "./src/modules/html/html.ts":
/*!**********************************!*\
  !*** ./src/modules/html/html.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.html = exports.createElement = void 0;\nconst style_1 = __webpack_require__(/*! ./style */ \"./src/modules/html/style.ts\");\nfunction createElement(tagName, className) {\n    const e = document.createElement(tagName);\n    e.className = className;\n    return e;\n}\nexports.createElement = createElement;\nconst tagNames = [\n    \"a\",\n    \"abbr\",\n    \"address\",\n    \"area\",\n    \"article\",\n    \"aside\",\n    \"audio\",\n    \"b\",\n    \"base\",\n    \"bdi\",\n    \"bdo\",\n    \"blockquote\",\n    \"body\",\n    \"br\",\n    \"button\",\n    \"canvas\",\n    \"caption\",\n    \"cite\",\n    \"code\",\n    \"col\",\n    \"colgroup\",\n    \"data\",\n    \"datalist\",\n    \"dd\",\n    \"del\",\n    \"details\",\n    \"dfn\",\n    \"dialog\",\n    \"div\",\n    \"dl\",\n    \"dt\",\n    \"em\",\n    \"embed\",\n    \"fieldset\",\n    \"figcaption\",\n    \"figure\",\n    \"footer\",\n    \"form\",\n    \"h1\",\n    \"h2\",\n    \"h3\",\n    \"h4\",\n    \"h5\",\n    \"h6\",\n    \"head\",\n    \"header\",\n    \"hgroup\",\n    \"hr\",\n    \"html\",\n    \"i\",\n    \"iframe\",\n    \"img\",\n    \"input\",\n    \"ins\",\n    \"kbd\",\n    \"label\",\n    \"legend\",\n    \"li\",\n    \"link\",\n    \"main\",\n    \"map\",\n    \"mark\",\n    \"menu\",\n    \"meta\",\n    \"meter\",\n    \"nav\",\n    \"noscript\",\n    \"object\",\n    \"ol\",\n    \"optgroup\",\n    \"option\",\n    \"output\",\n    \"p\",\n    \"picture\",\n    \"pre\",\n    \"progress\",\n    \"q\",\n    \"rp\",\n    \"rt\",\n    \"ruby\",\n    \"s\",\n    \"samp\",\n    \"script\",\n    \"search\",\n    \"section\",\n    \"select\",\n    \"slot\",\n    \"small\",\n    \"source\",\n    \"span\",\n    \"strong\",\n    \"style\",\n    \"sub\",\n    \"summary\",\n    \"sup\",\n    \"table\",\n    \"tbody\",\n    \"td\",\n    \"template\",\n    \"textarea\",\n    \"tfoot\",\n    \"th\",\n    \"thead\",\n    \"time\",\n    \"title\",\n    \"tr\",\n    \"track\",\n    \"u\",\n    \"ul\",\n    \"var\",\n    \"video\",\n    \"wbr\",\n];\nfunction __createTagFunctions() {\n    var result = {};\n    for (let tagName of tagNames) {\n        result[tagName] = ((className) => createElement(tagName, className));\n    }\n    return result;\n}\nexports.html = Object.assign({ createElement,\n    createStyle: style_1.createStyle }, __createTagFunctions());\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0bWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQXFDO0FBRXJDLFNBQWdCLGFBQWEsQ0FBd0MsT0FBVSxFQUFFLFNBQWlCO0lBQzlGLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDekMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7SUFDdkIsT0FBTyxDQUFDLENBQUE7QUFDWixDQUFDO0FBSkQsc0NBSUM7QUFFRCxNQUFNLFFBQVEsR0FBdUM7SUFDakQsR0FBRztJQUNILE1BQU07SUFDTixTQUFTO0lBQ1QsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsT0FBTztJQUNQLEdBQUc7SUFDSCxNQUFNO0lBQ04sS0FBSztJQUNMLEtBQUs7SUFDTCxZQUFZO0lBQ1osTUFBTTtJQUNOLElBQUk7SUFDSixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxNQUFNO0lBQ04sTUFBTTtJQUNOLEtBQUs7SUFDTCxVQUFVO0lBQ1YsTUFBTTtJQUNOLFVBQVU7SUFDVixJQUFJO0lBQ0osS0FBSztJQUNMLFNBQVM7SUFDVCxLQUFLO0lBQ0wsUUFBUTtJQUNSLEtBQUs7SUFDTCxJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsUUFBUTtJQUNSLE1BQU07SUFDTixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixJQUFJO0lBQ0osTUFBTTtJQUNOLEdBQUc7SUFDSCxRQUFRO0lBQ1IsS0FBSztJQUNMLE9BQU87SUFDUCxLQUFLO0lBQ0wsS0FBSztJQUNMLE9BQU87SUFDUCxRQUFRO0lBQ1IsSUFBSTtJQUNKLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxLQUFLO0lBQ0wsVUFBVTtJQUNWLFFBQVE7SUFDUixJQUFJO0lBQ0osVUFBVTtJQUNWLFFBQVE7SUFDUixRQUFRO0lBQ1IsR0FBRztJQUNILFNBQVM7SUFDVCxLQUFLO0lBQ0wsVUFBVTtJQUNWLEdBQUc7SUFDSCxJQUFJO0lBQ0osSUFBSTtJQUNKLE1BQU07SUFDTixHQUFHO0lBQ0gsTUFBTTtJQUNOLFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxLQUFLO0lBQ0wsU0FBUztJQUNULEtBQUs7SUFDTCxPQUFPO0lBQ1AsT0FBTztJQUNQLElBQUk7SUFDSixVQUFVO0lBQ1YsVUFBVTtJQUNWLE9BQU87SUFDUCxJQUFJO0lBQ0osT0FBTztJQUNQLE1BQU07SUFDTixPQUFPO0lBQ1AsSUFBSTtJQUNKLE9BQU87SUFDUCxHQUFHO0lBQ0gsSUFBSTtJQUNKLEtBQUs7SUFDTCxPQUFPO0lBQ1AsS0FBSztDQUNSLENBQUE7QUFNRCxTQUFTLG9CQUFvQjtJQUN6QixJQUFJLE1BQU0sR0FBb0IsRUFBUyxDQUFBO0lBRXZDLEtBQUssSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFRLENBQUE7SUFDdkYsQ0FBQztJQUVELE9BQU8sTUFBTSxDQUFBO0FBQ2pCLENBQUM7QUFFWSxRQUFBLElBQUksbUJBQ2IsYUFBYTtJQUNiLFdBQVcsRUFBWCxtQkFBVyxJQUNSLG9CQUFvQixFQUFFLEVBQzVCIn0=\n\n//# sourceURL=webpack:///./src/modules/html/html.ts?");

/***/ }),

/***/ "./src/modules/html/index.ts":
/*!***********************************!*\
  !*** ./src/modules/html/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./html */ \"./src/modules/html/html.ts\"), exports);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXVCIn0=\n\n//# sourceURL=webpack:///./src/modules/html/index.ts?");

/***/ }),

/***/ "./src/modules/html/style.ts":
/*!***********************************!*\
  !*** ./src/modules/html/style.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createStyle = void 0;\nlet styleElement = document.createElement('style');\ndocument.head.appendChild(styleElement);\nlet styleSheet = styleElement.sheet;\nlet index = 0;\nfunction createStyle(rules) {\n    let result = {};\n    for (let key in rules) {\n        var newKey = key + '-' + (index++);\n        result[key] = newKey;\n        CreateRule(`.${newKey}`, rules[key]);\n    }\n    return result;\n}\nexports.createStyle = createStyle;\nfunction CreateRule(path, properties) {\n    let rule = [path, ' { '];\n    for (let key in properties) {\n        if (key.startsWith(':')) {\n            CreateRule(path + key, properties[key]);\n        }\n        else if (key.startsWith('&')) {\n            CreateRule(path + key.substring(1), properties[key]);\n        }\n        else {\n            var value = properties[key];\n            if (typeof (value) == 'string') {\n                key = key.replace(/[A-Z]/g, s => '-' + s.toLowerCase());\n                rule.push(key, ':', value, ';');\n            }\n            else {\n                console.error('css property value must be string.', key);\n            }\n        }\n    }\n    rule.push(' }');\n    styleSheet.insertRule(rule.join(''));\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJLFlBQVksR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNwRSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUV2QyxJQUFJLFVBQVUsR0FBa0IsWUFBWSxDQUFDLEtBQUssQ0FBQTtBQUNsRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7QUFFYixTQUFnQixXQUFXLENBQXNCLEtBQTJCO0lBRXhFLElBQUksTUFBTSxHQUEyQixFQUFFLENBQUE7SUFFdkMsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQ3JCLENBQUM7UUFDRyxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUNsQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLFVBQVUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCxPQUFPLE1BQWEsQ0FBQTtBQUN4QixDQUFDO0FBWkQsa0NBWUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFZLEVBQUUsVUFBa0M7SUFFaEUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFFeEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQzFCLENBQUM7UUFDRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQ3ZCLENBQUM7WUFDRyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUEyQixDQUFDLENBQUE7UUFDckUsQ0FBQzthQUNJLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDNUIsQ0FBQztZQUNHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUEyQixDQUFDLENBQUE7UUFDbEYsQ0FBQzthQUVELENBQUM7WUFDRyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0IsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxFQUM5QixDQUFDO2dCQUNHLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtnQkFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNuQyxDQUFDO2lCQUVELENBQUM7Z0JBQ0csT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM1RCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2YsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDeEMsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/modules/html/style.ts?");

/***/ }),

/***/ "./src/main/pages/videos/add-default-inspector-node.mp4":
/*!**************************************************************!*\
  !*** ./src/main/pages/videos/add-default-inspector-node.mp4 ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e685054201c2e066dd7.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/add-default-inspector-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/add-editor-node.mp4":
/*!***************************************************!*\
  !*** ./src/main/pages/videos/add-editor-node.mp4 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d037e85af860a13a1f0.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/add-editor-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/default-inspector-node.mp4":
/*!**********************************************************!*\
  !*** ./src/main/pages/videos/default-inspector-node.mp4 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a2dc7b92cf94a77e9e8.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/default-inspector-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/drawer-node.mp4":
/*!***********************************************!*\
  !*** ./src/main/pages/videos/drawer-node.mp4 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c641fd0e6218219f358.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/drawer-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/editor-node.mp4":
/*!***********************************************!*\
  !*** ./src/main/pages/videos/editor-node.mp4 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b3bbf9d435b4a8134e5e.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/editor-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/field-node.mp4":
/*!**********************************************!*\
  !*** ./src/main/pages/videos/field-node.mp4 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bf98af2b0aa7a59b990.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/field-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/fields-node.mp4":
/*!***********************************************!*\
  !*** ./src/main/pages/videos/fields-node.mp4 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc472844ce06dd8444f3.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/fields-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/gui-drawer-node.mp4":
/*!***************************************************!*\
  !*** ./src/main/pages/videos/gui-drawer-node.mp4 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eac6120ca4ee7fa23098.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/gui-drawer-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/header-node.mp4":
/*!***********************************************!*\
  !*** ./src/main/pages/videos/header-node.mp4 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"549edebe3444013350c2.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/header-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/label-node.mp4":
/*!**********************************************!*\
  !*** ./src/main/pages/videos/label-node.mp4 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"461c48f9cdefe19c77ed.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/label-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/layout-node.mp4":
/*!***********************************************!*\
  !*** ./src/main/pages/videos/layout-node.mp4 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ab6f5bb07ae54c709cb.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/layout-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/method-node.mp4":
/*!***********************************************!*\
  !*** ./src/main/pages/videos/method-node.mp4 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"08c893826b3b93425211.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/method-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/methods-node.mp4":
/*!************************************************!*\
  !*** ./src/main/pages/videos/methods-node.mp4 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d0779761ebc5270cb3d.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/methods-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/open-object-manager.mp4":
/*!*******************************************************!*\
  !*** ./src/main/pages/videos/open-object-manager.mp4 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"88118f962663c5f66e88.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/open-object-manager.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/open-window.mp4":
/*!***********************************************!*\
  !*** ./src/main/pages/videos/open-window.mp4 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"acaf3f3f0cacbf887192.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/open-window.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/overview.mp4":
/*!********************************************!*\
  !*** ./src/main/pages/videos/overview.mp4 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"96f15b754764a865015f.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/overview.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/progress-bar-node.mp4":
/*!*****************************************************!*\
  !*** ./src/main/pages/videos/progress-bar-node.mp4 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a13e0e3c438333fe60d.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/progress-bar-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/scene-gui-node.mp4":
/*!**************************************************!*\
  !*** ./src/main/pages/videos/scene-gui-node.mp4 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"14bb6017fcf942c5e843.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/scene-gui-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/select-objects-and-create-editor-asset.mp4":
/*!**************************************************************************!*\
  !*** ./src/main/pages/videos/select-objects-and-create-editor-asset.mp4 ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b490426af8937a0be055.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/select-objects-and-create-editor-asset.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/shortcut-action-click.mp4":
/*!*********************************************************!*\
  !*** ./src/main/pages/videos/shortcut-action-click.mp4 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"93b803442cdc635169ad.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/shortcut-action-click.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/shortcut-add-group.mp4":
/*!******************************************************!*\
  !*** ./src/main/pages/videos/shortcut-add-group.mp4 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d37609e0779f0033aef7.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/shortcut-add-group.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/shortcut-ctrl-w.mp4":
/*!***************************************************!*\
  !*** ./src/main/pages/videos/shortcut-ctrl-w.mp4 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03ff01157e3700472680.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/shortcut-ctrl-w.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/shortcut-delete.mp4":
/*!***************************************************!*\
  !*** ./src/main/pages/videos/shortcut-delete.mp4 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"541f8654ce134d2b077a.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/shortcut-delete.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/shortcut-frame-selection.mp4":
/*!************************************************************!*\
  !*** ./src/main/pages/videos/shortcut-frame-selection.mp4 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11697fb1c5e0a935b5e9.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/shortcut-frame-selection.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/slider-node.mp4":
/*!***********************************************!*\
  !*** ./src/main/pages/videos/slider-node.mp4 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5fd69ec0d07a2a457769.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/slider-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/space-node.mp4":
/*!**********************************************!*\
  !*** ./src/main/pages/videos/space-node.mp4 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c56ad3c5c7f5e846fcca.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/space-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/split-node.mp4":
/*!**********************************************!*\
  !*** ./src/main/pages/videos/split-node.mp4 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b005464432e3749ce30.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/split-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/style-sheet-node.mp4":
/*!****************************************************!*\
  !*** ./src/main/pages/videos/style-sheet-node.mp4 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b17cd6052fecbc75688.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/style-sheet-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/tab-group-node.mp4":
/*!**************************************************!*\
  !*** ./src/main/pages/videos/tab-group-node.mp4 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ebee40b9f272e3d78794.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/tab-group-node.mp4?");

/***/ }),

/***/ "./src/main/pages/videos/visual-tree-node.mp4":
/*!****************************************************!*\
  !*** ./src/main/pages/videos/visual-tree-node.mp4 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9cfe0c6ac4027dc7bea2.mp4\";\n\n//# sourceURL=webpack:///./src/main/pages/videos/visual-tree-node.mp4?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/entry.ts");
/******/ 	
/******/ })()
;